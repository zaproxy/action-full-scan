# Changelog
All notable changes to this GitHub action will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]
### Changed
- Update dependencies.

## [0.10.0] - 2024-04-02
### Changed
- Update dependencies.

## [0.9.0] - 2024-01-25
### Changed
- Run with node20. [#80](https://github.com/zaproxy/action-full-scan/pull/80)

## [0.8.0] - 2023-10-31
### Added
- Support for authentication environment variables.

## [0.7.0] - 2023-08-24
### Fixed
- Update Crowdin link.

### Added
 - An input (`artifact_name`) used to name the artifact that contains the ZAP reports. [#73](https://github.com/zaproxy/action-full-scan/pull/73)

## [0.6.0] - 2023-08-02
### Changed
- The default Docker image was changed to `ghcr.io/zaproxy/zaproxy:stable`.

## [0.5.1] - 2023-07-05
### Fixed
- Check issues with authenticated user. [#66](https://github.com/zaproxy/action-full-scan/issues/66)

## [0.5.0] - 2023-06-29

### Changed
- Addresses GitHub Actions Node 12 deprecation.
- Update dependencies.

### Fixed
- Correct the name of the `GITHUB_TOKEN` secret mentioned in the `README`.

## [0.4.0] - 2022-05-23
### Changed
- Update dependencies.

### Fixed
- Use default zap user rather than root to allow the Ajax Spider to run.

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

[Unreleased]: https://github.com/zaproxy/action-full-scan/compare/v0.10.0...HEAD
[0.10.0]: https://github.com/zaproxy/action-full-scan/compare/v0.9.0...v0.10.0
[0.9.0]: https://github.com/zaproxy/action-full-scan/compare/v0.8.0...v0.9.0
[0.8.0]: https://github.com/zaproxy/action-full-scan/compare/v0.7.0...v0.8.0
[0.7.0]: https://github.com/zaproxy/action-full-scan/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/zaproxy/action-full-scan/compare/v0.5.1...v0.6.0
[0.5.1]: https://github.com/zaproxy/action-full-scan/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/zaproxy/action-full-scan/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/zaproxy/action-full-scan/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/zaproxy/action-full-scan/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/zaproxy/action-full-scan/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/zaproxy/action-full-scan/compare/5842e3f84ec616724efb0230a6f6ab85146230c8...v0.1.0
