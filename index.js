const core = require('@actions/core');
const exec = require('@actions/exec');
const common = require('actions-common-scans');
const _ = require('lodash');

// Default file names
let jsonReportName = 'report_json.json';
let mdReportName = 'report_md.md';
let htmlReportName = 'report_html.html';

async function run() {

    try {
        let workspace = process.env.GITHUB_WORKSPACE;
        let currentRunnerID = process.env.GITHUB_RUN_ID;
        let repoName = process.env.GITHUB_REPOSITORY;
        let token = core.getInput('token');
        let docker_name = core.getInput('docker_name');
        let target = core.getInput('target');
        let rulesFileLocation = core.getInput('rules_file_name');
        let cmdOptions = core.getInput('cmd_options');
        let issueTitle = core.getInput('issue_title');

        console.log('starting the program');
        console.log('github run id :' + currentRunnerID);

        let plugins = [];
        if (rulesFileLocation) {
            plugins = await common.helper.processLineByLine(`${workspace}/${rulesFileLocation}`);
        }

        let command = (`docker run --user root -v ${workspace}:/zap/wrk/:rw --network="host" ` +
            `-t ${docker_name} zap-full-scan.py -t ${target} -J ${jsonReportName} -w ${mdReportName}  -r ${htmlReportName} ${cmdOptions}`);

        if (plugins.length !== 0) {
            command = command + ` -c ${rulesFileLocation}`
        }

        try {
            await exec.exec(command);
        } catch (err) {
            core.setFailed('The ZAP Baseline scan has failed, starting to analyze the alerts. err: ' + err.toString());
        }
        await common.main.processReport(token, workspace, plugins, currentRunnerID, issueTitle, repoName);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
