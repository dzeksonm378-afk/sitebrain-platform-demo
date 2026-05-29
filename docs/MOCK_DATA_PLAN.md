# Mock Data Plan

## Purpose

Mock data should support a convincing stage demo without external services. It should make the core SiteBrain story visible:

```text
Camera -> AI Worker -> Event -> Dashboard
```

## Core Types

Planned shared types:

```ts
type AgentType = "SAFETY" | "LOGISTICS" | "PROGRESS";
type CameraStatus = "ONLINE" | "WARNING" | "OFFLINE";
type EventStatus = "NEW" | "CONFIRMED" | "FALSE_POSITIVE" | "RESOLVED";
type Severity = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
```

## Event Types

Safety events:

- `NO_HELMET`
- `NO_VEST`
- `DANGER_ZONE_ENTRY`

Logistics events:

- `PALLET_ARRIVED`
- `PALLET_REMOVED`
- `ZONE_OCCUPIED`
- `LONG_STAY`

Progress events:

- `PROGRESS_SNAPSHOT_CREATED`

## Mock Objects

Initial demo objects:

- `Склад алкогольного магазина`
- `Строительный объект №1`
- `Зона разгрузки`
- `Кровля / монтажная зона`

## Mock Cameras

Initial demo cameras:

- `Safety Camera 01`
- `Logistics Camera 01`
- `Progress Camera 01`

Each camera should include:

- id;
- name;
- agent type;
- object/site name;
- location/zone;
- status;
- last seen time;
- short description;
- optional preview image placeholder.

## Mock Logistics Zones

Logistics demo should include zones such as:

- unloading zone;
- storage zone;
- alcohol warehouse aisle;
- occupied/free state;
- product category: `water`, `juice`, `beer`;
- pallet count;
- long-stay timer or duration.

## Mock Progress Reports

Progress demo should include:

- report id;
- object/site;
- camera;
- snapshot time;
- progress percentage;
- active zones;
- daily summary;
- timelapse placeholder;
- detected activity level.

## Mock Event Shape

Events should include:

- id;
- agent type;
- event type;
- title;
- description;
- severity;
- status;
- camera id;
- object/site;
- zone;
- timestamp;
- confidence;
- recommended action;
- optional related product or progress report id.

Mock data should be realistic enough for the stage demo, but not overloaded.
