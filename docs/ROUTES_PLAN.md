# Routes Plan

## `/` - Dashboard

Purpose:

- show the SiteBrain control center;
- summarize cameras, agents, recent events, and critical signals;
- make the Camera -> AI Worker -> Event -> Dashboard flow obvious.

Expected content:

- top-level metrics;
- camera status summary;
- latest AI events;
- safety/logistics/progress cards;
- demo mode entry point.

## `/cameras` - Cameras

Purpose:

- show all demo cameras and their status.

Expected content:

- camera list/grid;
- status: online, warning, offline;
- linked agent type;
- object/site;
- last event;
- last seen time.

## `/safety` - SiteBrain Safety Camera

Purpose:

- demonstrate safety monitoring.

Expected content:

- helmet and vest violations;
- dangerous zone entry;
- severity indicators;
- camera/object context;
- event action controls.

## `/logistics` - SiteBrain Logistics Camera

Purpose:

- demonstrate warehouse and logistics monitoring.

Expected content:

- warehouse zones;
- pallets;
- products: water, juice, beer;
- occupied/free zone state;
- movement and long-stay events.

## `/progress` - SiteBrain Progress Camera

Purpose:

- demonstrate scheduled construction progress monitoring.

Expected content:

- snapshot timeline;
- progress percentage;
- activity by zones;
- timelapse placeholder;
- daily report cards.

## `/events` - Event Log

Purpose:

- show all AI-generated events across agents.

Expected content:

- filter by agent type;
- filter by status;
- severity labels;
- event lifecycle actions;
- event detail preview.

## `/architecture` - System Architecture

Purpose:

- explain how SiteBrain works.

Expected content:

- Camera / Video;
- Python AI Worker;
- YOLO / Computer Vision;
- Event;
- SiteBrain Platform;
- Notification / Report.

This page should help non-technical experts understand the product without reading code.

## `/settings` - Demo Settings

Purpose:

- provide simple demo controls.

Expected content:

- demo mode toggle;
- simulated event controls;
- display-friendly settings;
- reset mock state action if needed.

Keep settings simple. This is not an admin panel.
