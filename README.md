# Lehlogonolo Ramphisa — Data Engineering Portfolio

An accessible, responsive static portfolio focused on Data Engineering. The site uses plain HTML, CSS and JavaScript, with no build step or third-party runtime dependencies.

## Preview

From this directory, run:

```powershell
python -m http.server 5173
```

Then open `http://localhost:5173/`. `index.html` is the static-host entry point. `Developer Portfolio.html` is kept as a synchronized copy for direct opening from the IDE; update both files when changing page content.

## Site structure

- `index.html` — page content, metadata, Person structured data and project case studies.
- `Developer Portfolio.html` — direct-open copy of the homepage for the IDE.
- `styles.css` — responsive layout, cobalt and cream visual system, focus states and architecture diagrams.
- `script.js` — mobile navigation, active-section state, architecture stage selection and footer year.
- `favicon.svg` — initials mark used by the browser tab.
- `profile pictures/PP_1-optimized.jpg` — display-sized profile image; the original image is preserved alongside it.
- `Resume/` and `Certifications/` — downloadable career documents.

## Project scope and recorded results

The notebooks, SQL models, pipeline definitions and source documentation remain in the public project repositories linked from the site; this portfolio directory contains no local Python, SQL or notebook source to edit. The site links directly to those artifacts and accurately describes documented controls. The project claims below reflect their READMEs and saved notebook outputs; they are not production SLAs or independently rerun results.

### On-Premises SQL-Server to Azure Data Engineering Pipeline

- Historical Azure implementation using local SQL Server 2022, metadata-driven Azure Data Factory, a Self-hosted Integration Runtime, ADLS Gen2, Azure Databricks, PySpark and Delta Lake.
- The initial load covers four AdventureWorks tables with 173,106 rows; the documented Silver baseline also contains 173,106 rows.
- The Gold model documents three dimensions and two fact tables, plus Spark SQL query-plan investigation.
- The repository preserves implementation files and historical test evidence. Fabric migration is planned and has not started; the project backlog says historical results are not current environment validation.
- The README records known watermark limitations and a discrepancy between one Copy activity count and its audit count.

### SureLink Insurance Data Engineering Project

- Simulated South African insurance pipeline using Azure SQL Database, Python and pyodbc, Fabric Dataflow Gen2, PySpark, Delta Lake and Power BI.
- The README records 78,296 rows across Customer, Vehicle, Policy and Claim, including 19,931 claim rows.
- The portfolio documents six data quality checks, four of which flagged issues, and zero unmatched claim-to-dimension links in the Gold model.
- Values without a confirmed business rule are preserved for review rather than silently changed.

### Banking Transaction Fraud Analytics

- Microsoft Fabric project using the Berka Czech banking dataset and synthetic PaySim mobile-money data.
- The README records 1,079,680 Berka rows and 6,362,620 PaySim rows, or 7,442,300 total records. This total includes multiple Berka entities, not only transactions.
- The documented output has nine Silver tables and seven Gold analytical tables, with 8,213 fraud-labeled PaySim records (about 0.129%).
- Documented checks include duplicate, required-field and referential-integrity checks; sensitive client birth-number data is removed before analytics.

### Microsoft Fabric E-commerce Data Engineering Project

- Microsoft Fabric project with two metadata-driven pipelines for CSV and JSON source files, PySpark transformations and Delta tables.
- Saved notebook outputs retain 2,939 of 3,000 orders and route 61 invalid-reference orders to `orders_rejected`.
- The Gold `fact_orders` total reconciles to the Silver order total at R769,420.82 in the saved run.
- The exported pipelines delete destination files before copying. The current ingestion pattern is therefore a full refresh, not an incremental load; workspace-specific connections also need configuration.

## Architecture terminology

The banking and e-commerce projects use Microsoft Fabric Data Factory and Fabric Lakehouse. OneLake is the Fabric data lake; the Bronze, Silver and Gold labels describe their medallion pattern. The AdventureWorks project documents a separate historical Azure Data Factory, ADLS Gen2 and Databricks implementation; its migration to Fabric has not started. See Microsoft's [Fabric medallion architecture guidance](https://learn.microsoft.com/en-us/fabric/onelake/onelake-medallion-lakehouse-architecture).

The e-commerce project is a portfolio demonstration. Before treating its current pipeline pattern as production-ready, a deployment would need workload-specific incremental or change-data capture design, retry-safe writes, environment parameterization, credential handling, run monitoring and operational tests.

## Maintainability

Keep `index.html` and `Developer Portfolio.html` synchronized when editing the page. Keep relative asset paths URL-encoded when they contain spaces. The architecture controls use native buttons and update a polite live region; all stages remain available without horizontal scrolling. No test runner or build pipeline is configured in this static site.

