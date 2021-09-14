# Changelog
All notable changes to this GitHub action will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [0.3.0] - 2021-09-14
### Added
- An input (`allow_issue_writing`) to choose if a GitHub issue should be raised or not.

### Changed
- Update dependencies.

## [0.2.0] - 2020-10-08
### Added
- Option to fail the status of the GitHub action if any alerts are found during the scan process.

### Changed
- Modified the action status to pass by default (previously fail by default)
- Reduced docker logs

## [0.1.0] - 2020-05-15

First release to Marketplace.

[0.3.0]: https://github.com/zaproxy/action-full-scan/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/zaproxy/action-full-scan/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/zaproxy/action-full-scan/compare/5842e3f84ec616724efb0230a6f6ab85146230c8...v0.1.0
