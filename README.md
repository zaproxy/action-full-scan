# ZAP Action Full Scan

A GitHub Action for running the OWASP ZAP [Full Scan](https://www.zaproxy.org/docs/docker/full-scan/) to perform
Dynamic Application Security Testing (DAST). 

The ZAP full scan action runs the ZAP spider against the specified target (by default with no time limit) followed by an 
optional ajax spider scan and then a full active scan before reporting the results. The alerts will be maintained as a 
GitHub issue in the corresponding repository.

**WARNING** this action will perform attacks on the target website.
You should only scan targets that you have permission to test.
You should also check with your hosting company and any other services such as CDNs that may be affected before running this action.
ZAP will also submit forms which could result in a [large number of messages](https://www.zaproxy.org/faq/how-can-i-prevent-zap-from-sending-me-1000s-of-emails-via-a-contact-us-form/) via, for example, 'Contact us' or 'comment' forms.

## Inputs

### `target`

**Required** The URL of the web application to be scanned. This can be either a publicly available web application or a locally
accessible URL.

### `docker_name`

**Optional** The name of the docker file to be executed. By default the action runs the stable version of ZAP. But you can 
configure the parameter to use the weekly builds.

### `rules_file_name`

**Optional** You can also specify a relative path to the rules file to ignore any alerts from the ZAP scan. Make sure to create
the rules file inside the relevant repository. The following shows a sample rules file configuration.
Make sure to checkout the repository (actions/checkout@v2) to provide the ZAP rules to the scan action.

```tsv
10011	IGNORE	(Cookie Without Secure Flag)
10015	IGNORE	(Incomplete or No Cache-control and Pragma HTTP Header Set)
``` 

### `cmd_options`

**Optional** Additional command lines options for the full scan script

### `issue_title`

**Optional** The title for the GitHub issue to be created.

### `token`

**Optional** ZAP action uses the default action token provided by GitHub to create and update the issue for the full scan.
You do not have to create a dedicated token. Make sure to use the GitHub's default action token when running the action(`secrets.GIT_TOKEN`).

## Example usage

** Basic **
```
steps:
  - name: ZAP Scan
    uses: zaproxy/action-full-scan@v0.1.0
    with:
      target: 'https://www.zaproxy.org/'
```

** Advanced **

```
on: [push]

jobs:
  zap_scan:
    runs-on: ubuntu-latest
    name: Scan the webapplication
    steps:
      - name: Checkout
        uses: actions/checkout@v2
        with:
          ref: master
      - name: ZAP Scan
        uses: zaproxy/action-full-scan@v0.1.0
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
          docker_name: 'owasp/zap2docker-stable'
          target: 'https://www.zaproxy.org/'
          rules_file_name: '.zap/rules.tsv'
          cmd_options: '-a'
```

## Localised Alert Details

ZAP is internationalised and alert information is available in many languages.

You can change the language used by this action by changing the locale via the `cmd_options` e.g.: `-z "-config view.locale=fr_FR"`

This is currently only available with the `owasp/zap2docker-weekly` or `owasp/zap2docker-live` Docker images.

See [https://github.com/zaproxy/zaproxy/tree/develop/zap/src/main/dist/lang](https://github.com/zaproxy/zaproxy/tree/develop/zap/src/main/dist/lang) for the full set of locales currently supported.

You can help improve ZAP translations via [https://crowdin.com/project/owasp-zap](https://crowdin.com/project/owasp-zap). 
