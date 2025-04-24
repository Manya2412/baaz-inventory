
"use client";
import React, { useEffect, useState } from "react";
import DataTable, { Column } from '@/components/DataTable';


  const flattenData = (data: any[]) => {
    return data.flatMap((component) => {
      return component.subcomponents.map((subcomponent: any) => ({
        component_id: component.component_id,
        component_name: component.component_name,
        parent_component_id: component.parent_component_id,
        subcomponent_id: subcomponent.component_id,
        subcomponent_name: subcomponent.component_name,
        sku_code: subcomponent.sku_code,
        hsn_code: subcomponent.hsn_code,
        total_quantity: subcomponent.total_quantity,
        usable_quantity: subcomponent.usable_quantity,
        damaged_quantity: subcomponent.damaged_quantity,
        discarded_quantity: subcomponent.discarded_quantity,
        last_updated: subcomponent.last_updated,
      }));
    });
  };

  const data = [{
    "component_id": "BAT01",
    "component_name": "Battery Pack",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2024-02-12T10:00:00",
    "created_at": "2023-12-01T09:00:00",
    "has_subcomponent": true,
    "hsn_code": "85076000",
    "sku_code": "BAT-204",
    "subcomponents": [
      {
        "component_id": "BATCELL01",
        "component_name": "Battery Cell",
        "is_subcomponent": true,
        "parent_component_id": "BAT01",
        "updated_at": "2024-03-10T11:00:00",
        "created_at": "2023-12-10T08:00:00",
        "has_subcomponent": false,
        "hsn_code": "85076000",
        "sku_code": "CELL-01",
        "usable_quantity": 120,
        "damaged_quantity": 2,
        "discarded_quantity": 1,
        "last_updated": "2024-04-01T12:30:00",
        "total_quantity": 123
      },
      {
        "component_id": "BMS01",
        "component_name": "Battery Management System",
        "is_subcomponent": true,
        "parent_component_id": "BAT01",
        "updated_at": "2024-03-01T12:00:00",
        "created_at": "2023-12-15T10:00:00",
        "has_subcomponent": false,
        "hsn_code": "85371000",
        "sku_code": "BMS-01",
        "usable_quantity": 50,
        "damaged_quantity": 1,
        "discarded_quantity": 0,
        "last_updated": "2024-04-01T12:30:00",
        "total_quantity": 51
      }
    ]
  },
  {
    "component_id": "MOT01",
    "component_name": "Hub Motor",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2024-01-05T14:00:00",
    "created_at": "2023-11-25T11:00:00",
    "has_subcomponent": true,
    "hsn_code": "85013100",
    "sku_code": "MOT-320",
    "subcomponents": [
      {
        "component_id": "ROTOR01",
        "component_name": "Rotor",
        "is_subcomponent": true,
        "parent_component_id": "MOT01",
        "updated_at": "2024-02-15T10:00:00",
        "created_at": "2023-12-01T08:30:00",
        "has_subcomponent": false,
        "hsn_code": "85013100",
        "sku_code": "ROT-01",
        "usable_quantity": 30,
        "damaged_quantity": 1,
        "discarded_quantity": 0,
        "last_updated": "2024-03-05T14:30:00",
        "total_quantity": 31
      },
      {
        "component_id": "STATOR01",
        "component_name": "Stator",
        "is_subcomponent": true,
        "parent_component_id": "MOT01",
        "updated_at": "2024-02-10T09:00:00",
        "created_at": "2023-12-01T08:30:00",
        "has_subcomponent": false,
        "hsn_code": "85013100",
        "sku_code": "STA-01",
        "usable_quantity": 28,
        "damaged_quantity": 2,
        "discarded_quantity": 1,
        "last_updated": "2024-03-01T13:00:00",
        "total_quantity": 31
      }
    ]
  },
  {
    "component_id": "CTRL01",
    "component_name": "Motor Controller",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2024-02-20T15:00:00",
    "created_at": "2023-12-05T10:00:00",
    "has_subcomponent": false,
    "hsn_code": "85371000",
    "sku_code": "CTRL-01",
    "subcomponents": [
      {
        "component_id": "CTRL01",
        "component_name": "Motor Controller",
        "is_subcomponent": true,
        "parent_component_id": "CTRL01",
        "updated_at": "2024-02-20T15:00:00",
        "created_at": "2023-12-05T10:00:00",
        "has_subcomponent": false,
        "hsn_code": "85371000",
        "sku_code": "CTRL-01",
        "usable_quantity": 60,
        "damaged_quantity": 2,
        "discarded_quantity": 1,
        "last_updated": "2024-03-15T11:00:00",
        "total_quantity": 63
      }
    ]
  },
  {
    "component_id": "FRM01",
    "component_name": "Chassis Frame",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2024-01-30T14:00:00",
    "created_at": "2023-10-15T09:00:00",
    "has_subcomponent": false,
    "hsn_code": "87149990",
    "sku_code": "CHS-01",
    "subcomponents": [
      {
        "component_id": "FRM01",
        "component_name": "Chassis Frame",
        "is_subcomponent": true,
        "parent_component_id": "FRM01",
        "updated_at": "2024-01-30T14:00:00",
        "created_at": "2023-10-15T09:00:00",
        "has_subcomponent": false,
        "hsn_code": "87149990",
        "sku_code": "CHS-01",
        "usable_quantity": 20,
        "damaged_quantity": 0,
        "discarded_quantity": 0,
        "last_updated": "2024-02-20T10:30:00",
        "total_quantity": 20
      }
    ]
  },
  {
    "component_id": "WHEEL01",
    "component_name": "Rear Wheel Assembly",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2024-01-18T13:00:00",
    "created_at": "2023-10-28T10:00:00",
    "has_subcomponent": true,
    "hsn_code": "87141090",
    "sku_code": "RWH-01",
    "subcomponents": [
      {
        "component_id": "TYRE01",
        "component_name": "Tyre",
        "is_subcomponent": true,
        "parent_component_id": "WHEEL01",
        "updated_at": "2024-03-01T11:00:00",
        "created_at": "2023-11-01T09:00:00",
        "has_subcomponent": false,
        "hsn_code": "40114010",
        "sku_code": "TYRE-01",
        "usable_quantity": 40,
        "damaged_quantity": 1,
        "discarded_quantity": 0,
        "last_updated": "2024-03-15T12:00:00",
        "total_quantity": 41
      },
      {
        "component_id": "RIM01",
        "component_name": "Rim",
        "is_subcomponent": true,
        "parent_component_id": "WHEEL01",
        "updated_at": "2024-03-02T10:00:00",
        "created_at": "2023-11-01T09:00:00",
        "has_subcomponent": false,
        "hsn_code": "87149990",
        "sku_code": "RIM-01",
        "usable_quantity": 40,
        "damaged_quantity": 0,
        "discarded_quantity": 0,
        "last_updated": "2024-03-15T12:00:00",
        "total_quantity": 40
      }
    ]
  },
  {
    "component_id": "BAT01",
    "component_name": "Battery Pack",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2024-02-12T10:00:00",
    "created_at": "2023-12-01T09:00:00",
    "has_subcomponent": true,
    "hsn_code": "85076000",
    "sku_code": "BAT-204",
    "subcomponents": [
      {
        "component_id": "BATCELL01",
        "component_name": "Battery Cell",
        "is_subcomponent": true,
        "parent_component_id": "BAT01",
        "updated_at": "2024-03-10T11:00:00",
        "created_at": "2023-12-10T08:00:00",
        "has_subcomponent": false,
        "hsn_code": "85076000",
        "sku_code": "CELL-01",
        "usable_quantity": 120,
        "damaged_quantity": 2,
        "discarded_quantity": 1,
        "last_updated": "2024-04-01T12:30:00",
        "total_quantity": 123
      },
      {
        "component_id": "BMS01",
        "component_name": "Battery Management System",
        "is_subcomponent": true,
        "parent_component_id": "BAT01",
        "updated_at": "2024-03-01T12:00:00",
        "created_at": "2023-12-15T10:00:00",
        "has_subcomponent": false,
        "hsn_code": "85371000",
        "sku_code": "BMS-01",
        "usable_quantity": 50,
        "damaged_quantity": 1,
        "discarded_quantity": 0,
        "last_updated": "2024-04-01T12:30:00",
        "total_quantity": 51
      }
    ]
  },
  {
    "component_id": "MOT01",
    "component_name": "Hub Motor",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2024-01-05T14:00:00",
    "created_at": "2023-11-25T11:00:00",
    "has_subcomponent": true,
    "hsn_code": "85013100",
    "sku_code": "MOT-320",
    "subcomponents": [
      {
        "component_id": "ROTOR01",
        "component_name": "Rotor",
        "is_subcomponent": true,
        "parent_component_id": "MOT01",
        "updated_at": "2024-02-15T10:00:00",
        "created_at": "2023-12-01T08:30:00",
        "has_subcomponent": false,
        "hsn_code": "85013100",
        "sku_code": "ROT-01",
        "usable_quantity": 30,
        "damaged_quantity": 1,
        "discarded_quantity": 0,
        "last_updated": "2024-03-05T14:30:00",
        "total_quantity": 31
      },
      {
        "component_id": "STATOR01",
        "component_name": "Stator",
        "is_subcomponent": true,
        "parent_component_id": "MOT01",
        "updated_at": "2024-02-10T09:00:00",
        "created_at": "2023-12-01T08:30:00",
        "has_subcomponent": false,
        "hsn_code": "85013100",
        "sku_code": "STA-01",
        "usable_quantity": 28,
        "damaged_quantity": 2,
        "discarded_quantity": 1,
        "last_updated": "2024-03-01T13:00:00",
        "total_quantity": 31
      }
    ]
  },
  {
    "component_id": "CTRL01",
    "component_name": "Motor Controller",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2024-02-20T15:00:00",
    "created_at": "2023-12-05T10:00:00",
    "has_subcomponent": false,
    "hsn_code": "85371000",
    "sku_code": "CTRL-01",
    "subcomponents": [
      {
        "component_id": "CTRL01",
        "component_name": "Motor Controller",
        "is_subcomponent": true,
        "parent_component_id": "CTRL01",
        "updated_at": "2024-02-20T15:00:00",
        "created_at": "2023-12-05T10:00:00",
        "has_subcomponent": false,
        "hsn_code": "85371000",
        "sku_code": "CTRL-01",
        "usable_quantity": 60,
        "damaged_quantity": 2,
        "discarded_quantity": 1,
        "last_updated": "2024-03-15T11:00:00",
        "total_quantity": 63
      }
    ]
  },
  {
    "component_id": "FRM01",
    "component_name": "Chassis Frame",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2024-01-30T14:00:00",
    "created_at": "2023-10-15T09:00:00",
    "has_subcomponent": false,
    "hsn_code": "87149990",
    "sku_code": "CHS-01",
    "subcomponents": [
      {
        "component_id": "FRM01",
        "component_name": "Chassis Frame",
        "is_subcomponent": true,
        "parent_component_id": "FRM01",
        "updated_at": "2024-01-30T14:00:00",
        "created_at": "2023-10-15T09:00:00",
        "has_subcomponent": false,
        "hsn_code": "87149990",
        "sku_code": "CHS-01",
        "usable_quantity": 20,
        "damaged_quantity": 0,
        "discarded_quantity": 0,
        "last_updated": "2024-02-20T10:30:00",
        "total_quantity": 20
      }
    ]
  },
  {
    "component_id": "WHEEL01",
    "component_name": "Rear Wheel Assembly",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2024-01-18T13:00:00",
    "created_at": "2023-10-28T10:00:00",
    "has_subcomponent": true,
    "hsn_code": "87141090",
    "sku_code": "RWH-01",
    "subcomponents": [
      {
        "component_id": "TYRE01",
        "component_name": "Tyre",
        "is_subcomponent": true,
        "parent_component_id": "WHEEL01",
        "updated_at": "2024-03-01T11:00:00",
        "created_at": "2023-11-01T09:00:00",
        "has_subcomponent": false,
        "hsn_code": "40114010",
        "sku_code": "TYRE-01",
        "usable_quantity": 40,
        "damaged_quantity": 1,
        "discarded_quantity": 0,
        "last_updated": "2024-03-15T12:00:00",
        "total_quantity": 41
      },
      {
        "component_id": "RIM01",
        "component_name": "Rim",
        "is_subcomponent": true,
        "parent_component_id": "WHEEL01",
        "updated_at": "2024-03-02T10:00:00",
        "created_at": "2023-11-01T09:00:00",
        "has_subcomponent": false,
        "hsn_code": "87149990",
        "sku_code": "RIM-01",
        "usable_quantity": 40,
        "damaged_quantity": 0,
        "discarded_quantity": 0,
        "last_updated": "2024-03-15T12:00:00",
        "total_quantity": 40
      }
    ]
  },
  {
    "component_id": "BRA692",
    "component_name": "Brake System",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2024-08-22T18:42:00",
    "created_at": "2023-05-07T10:15:00",
    "has_subcomponent": true,
    "hsn_code": "87150000",
    "sku_code": "BRA692-SKU",
    "subcomponents": [
      {
        "component_id": "BRA456",
        "component_name": "Brake Pad",
        "is_subcomponent": true,
        "parent_component_id": "BRA692",
        "updated_at": "2024-10-18T14:25:00",
        "created_at": "2023-06-11T08:00:00",
        "has_subcomponent": false,
        "hsn_code": "85010000",
        "sku_code": "BRA456-SKU",
        "usable_quantity": 35,
        "damaged_quantity": 2,
        "discarded_quantity": 1,
        "last_updated": "2024-12-01T09:45:00",
        "total_quantity": 38
      }
    ]
  },
  {
    "component_id": "THR274",
    "component_name": "Throttle Assembly",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2025-02-12T11:21:00",
    "created_at": "2024-03-04T09:10:00",
    "has_subcomponent": false,
    "hsn_code": "86010000",
    "sku_code": "THR274-SKU",
    "subcomponents": [
      {
        "component_id": "THR274",
        "component_name": "Throttle Assembly",
        "is_subcomponent": true,
        "parent_component_id": "THR274",
        "updated_at": "2024-09-14T12:30:00",
        "created_at": "2024-02-28T14:00:00",
        "has_subcomponent": false,
        "hsn_code": "86010000",
        "sku_code": "THR274-SKU",
        "usable_quantity": 30,
        "damaged_quantity": 0,
        "discarded_quantity": 0,
        "last_updated": "2024-10-01T09:00:00",
        "total_quantity": 30
      }
    ]
  },
  {
    "component_id": "HAN318",
    "component_name": "Handlebar",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2024-07-20T15:35:00",
    "created_at": "2023-08-15T08:25:00",
    "has_subcomponent": true,
    "hsn_code": "87130000",
    "sku_code": "HAN318-SKU",
    "subcomponents": [
      {
        "component_id": "LEB889",
        "component_name": "Brake Lever",
        "is_subcomponent": true,
        "parent_component_id": "HAN318",
        "updated_at": "2024-06-28T10:00:00",
        "created_at": "2023-09-01T13:10:00",
        "has_subcomponent": false,
        "hsn_code": "87140000",
        "sku_code": "LEB889-SKU",
        "usable_quantity": 27,
        "damaged_quantity": 1,
        "discarded_quantity": 0,
        "last_updated": "2024-08-05T12:00:00",
        "total_quantity": 28
      },
      {
        "component_id": "THO512",
        "component_name": "Throttle",
        "is_subcomponent": true,
        "parent_component_id": "HAN318",
        "updated_at": "2024-05-15T11:15:00",
        "created_at": "2023-07-22T15:50:00",
        "has_subcomponent": false,
        "hsn_code": "86020000",
        "sku_code": "THO512-SKU",
        "usable_quantity": 40,
        "damaged_quantity": 2,
        "discarded_quantity": 1,
        "last_updated": "2024-06-11T09:30:00",
        "total_quantity": 43
      }
    ]
  },
  {
    "component_id": "DAS947",
    "component_name": "Dashboard",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2025-01-05T09:45:00",
    "created_at": "2023-11-22T11:11:00",
    "has_subcomponent": true,
    "hsn_code": "87010000",
    "sku_code": "DAS947-SKU",
    "subcomponents": [
      {
        "component_id": "DIS789",
        "component_name": "Display Unit",
        "is_subcomponent": true,
        "parent_component_id": "DAS947",
        "updated_at": "2024-09-29T13:00:00",
        "created_at": "2024-01-17T10:45:00",
        "has_subcomponent": false,
        "hsn_code": "87020000",
        "sku_code": "DIS789-SKU",
        "usable_quantity": 32,
        "damaged_quantity": 0,
        "discarded_quantity": 2,
        "last_updated": "2024-10-20T12:00:00",
        "total_quantity": 34
      }
    ]
  },
  {
    "component_id": "WIR620",
    "component_name": "Wiring Harness",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2024-06-01T14:00:00",
    "created_at": "2023-07-10T09:00:00",
    "has_subcomponent": false,
    "hsn_code": "87030000",
    "sku_code": "WIR620-SKU",
    "subcomponents": [
      {
        "component_id": "WIR620",
        "component_name": "Wiring Harness",
        "is_subcomponent": true,
        "parent_component_id": "WIR620",
        "updated_at": "2024-09-15T13:30:00",
        "created_at": "2023-07-10T09:00:00",
        "has_subcomponent": false,
        "hsn_code": "87030000",
        "sku_code": "WIR620-SKU",
        "usable_quantity": 48,
        "damaged_quantity": 1,
        "discarded_quantity": 1,
        "last_updated": "2024-10-01T16:00:00",
        "total_quantity": 50
      }
    ]
  },
  {
    "component_id": "BAT123",
    "component_name": "Battery Pack",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2023-10-10T12:34:56",
    "created_at": "2022-05-15T08:00:00",
    "has_subcomponent": true,
    "hsn_code": "85010000",
    "sku_code": "BAT123-SKU-A",
    "subcomponents": [
      {
        "component_id": "BAT124",
        "component_name": "Battery Cell",
        "is_subcomponent": true,
        "parent_component_id": "BAT123",
        "updated_at": "2023-10-12T14:00:00",
        "created_at": "2022-06-01T09:15:00",
        "has_subcomponent": false,
        "hsn_code": "85010000",
        "sku_code": "BAT124-SKU-A",
        "usable_quantity": 90,
        "damaged_quantity": 2,
        "discarded_quantity": 1,
        "last_updated": "2023-10-12T14:00:00",
        "total_quantity": 93
      }
    ]
  },
  {
    "component_id": "MOT123",
    "component_name": "Motor Controller",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2023-09-10T11:45:34",
    "created_at": "2023-01-22T10:10:00",
    "has_subcomponent": true,
    "hsn_code": "86010000",
    "sku_code": "MOT123-SKU-B",
    "subcomponents": [
      {
        "component_id": "MOT124",
        "component_name": "Motor",
        "is_subcomponent": true,
        "parent_component_id": "MOT123",
        "updated_at": "2023-09-15T09:30:10",
        "created_at": "2023-02-11T14:00:00",
        "has_subcomponent": false,
        "hsn_code": "86010000",
        "sku_code": "MOT124-SKU-B",
        "usable_quantity": 60,
        "damaged_quantity": 3,
        "discarded_quantity": 2,
        "last_updated": "2023-09-15T09:30:10",
        "total_quantity": 65
      }
    ]
  },
  {
    "component_id": "HND123",
    "component_name": "Handlebar",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2023-08-23T16:23:12",
    "created_at": "2023-04-17T14:40:00",
    "has_subcomponent": false,
    "hsn_code": "87130000",
    "sku_code": "HND123-SKU-C",
    "subcomponents": [
      {
        "component_id": "HND123",
        "component_name": "Handlebar",
        "is_subcomponent": true,
        "parent_component_id": "HND123",
        "updated_at": "2023-08-23T16:23:12",
        "created_at": "2023-04-17T14:40:00",
        "has_subcomponent": false,
        "hsn_code": "87130000",
        "sku_code": "HND123-SKU-C",
        "usable_quantity": 120,
        "damaged_quantity": 4,
        "discarded_quantity": 0,
        "last_updated": "2023-08-23T16:23:12",
        "total_quantity": 124
      }
    ]
  },
  {
    "component_id": "CHG123",
    "component_name": "Charger Port",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2023-07-19T17:50:33",
    "created_at": "2023-02-25T11:00:00",
    "has_subcomponent": true,
    "hsn_code": "87140000",
    "sku_code": "CHG123-SKU-D",
    "subcomponents": [
      {
        "component_id": "CHG124",
        "component_name": "Charger Cable",
        "is_subcomponent": true,
        "parent_component_id": "CHG123",
        "updated_at": "2023-07-22T18:25:00",
        "created_at": "2023-03-05T16:00:00",
        "has_subcomponent": false,
        "hsn_code": "87140000",
        "sku_code": "CHG124-SKU-D",
        "usable_quantity": 75,
        "damaged_quantity": 3,
        "discarded_quantity": 1,
        "last_updated": "2023-07-22T18:25:00",
        "total_quantity": 79
      }
    ]
  },
  {
    "component_id": "SPD123",
    "component_name": "Speed Sensor",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2023-05-13T09:30:21",
    "created_at": "2022-11-10T12:00:00",
    "has_subcomponent": false,
    "hsn_code": "87010000",
    "sku_code": "SPD123-SKU-E",
    "subcomponents": [
      {
        "component_id": "SPD123",
        "component_name": "Speed Sensor",
        "is_subcomponent": true,
        "parent_component_id": "SPD123",
        "updated_at": "2023-05-13T09:30:21",
        "created_at": "2022-11-10T12:00:00",
        "has_subcomponent": false,
        "hsn_code": "87010000",
        "sku_code": "SPD123-SKU-E",
        "usable_quantity": 50,
        "damaged_quantity": 1,
        "discarded_quantity": 0,
        "last_updated": "2023-05-13T09:30:21",
        "total_quantity": 51
      }
    ]
  },
  {
    "component_id": "BAT01",
    "component_name": "Battery Pack",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2024-02-12T10:00:00",
    "created_at": "2023-12-01T09:00:00",
    "has_subcomponent": true,
    "hsn_code": "85076000",
    "sku_code": "BAT-204",
    "subcomponents": [
      {
        "component_id": "BATCELL01",
        "component_name": "Battery Cell",
        "is_subcomponent": true,
        "parent_component_id": "BAT01",
        "updated_at": "2024-03-10T11:00:00",
        "created_at": "2023-12-10T08:00:00",
        "has_subcomponent": false,
        "hsn_code": "85076000",
        "sku_code": "CELL-01",
        "usable_quantity": 120,
        "damaged_quantity": 2,
        "discarded_quantity": 1,
        "last_updated": "2024-04-01T12:30:00",
        "total_quantity": 123
      },
      {
        "component_id": "BMS01",
        "component_name": "Battery Management System",
        "is_subcomponent": true,
        "parent_component_id": "BAT01",
        "updated_at": "2024-03-01T12:00:00",
        "created_at": "2023-12-15T10:00:00",
        "has_subcomponent": false,
        "hsn_code": "85371000",
        "sku_code": "BMS-01",
        "usable_quantity": 50,
        "damaged_quantity": 1,
        "discarded_quantity": 0,
        "last_updated": "2024-04-01T12:30:00",
        "total_quantity": 51
      }
    ]
  },
  {
    "component_id": "MOT01",
    "component_name": "Electric Motor",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2024-01-15T14:30:00",
    "created_at": "2023-11-20T08:15:00",
    "has_subcomponent": true,
    "hsn_code": "85013100",
    "sku_code": "MOT-300",
    "subcomponents": [
      {
        "component_id": "MOTCOIL01",
        "component_name": "Motor Coil",
        "is_subcomponent": true,
        "parent_component_id": "MOT01",
        "updated_at": "2024-02-05T09:45:00",
        "created_at": "2023-11-25T10:30:00",
        "has_subcomponent": false,
        "hsn_code": "85013100",
        "sku_code": "COIL-55",
        "usable_quantity": 85,
        "damaged_quantity": 3,
        "discarded_quantity": 2,
        "last_updated": "2024-03-28T15:20:00",
        "total_quantity": 90
      },
      {
        "component_id": "MOTBEAR01",
        "component_name": "Motor Bearing",
        "is_subcomponent": true,
        "parent_component_id": "MOT01",
        "updated_at": "2024-02-10T11:20:00",
        "created_at": "2023-12-01T09:10:00",
        "has_subcomponent": false,
        "hsn_code": "84821000",
        "sku_code": "BEAR-20",
        "usable_quantity": 110,
        "damaged_quantity": 5,
        "discarded_quantity": 0,
        "last_updated": "2024-03-28T15:20:00",
        "total_quantity": 115
      }
    ]
  },
  {
    "component_id": "DIS01",
    "component_name": "Display Unit",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2024-03-05T16:45:00",
    "created_at": "2024-01-10T13:20:00",
    "has_subcomponent": true,
    "hsn_code": "85285100",
    "sku_code": "DISP-150",
    "subcomponents": [
      {
        "component_id": "DISSCR01",
        "component_name": "Touch Screen",
        "is_subcomponent": true,
        "parent_component_id": "DIS01",
        "updated_at": "2024-03-15T10:30:00",
        "created_at": "2024-01-15T14:00:00",
        "has_subcomponent": false,
        "hsn_code": "84716000",
        "sku_code": "SCR-7IN",
        "usable_quantity": 75,
        "damaged_quantity": 1,
        "discarded_quantity": 4,
        "last_updated": "2024-04-10T11:45:00",
        "total_quantity": 80
      },
      {
        "component_id": "DISPCB01",
        "component_name": "Display PCB",
        "is_subcomponent": true,
        "parent_component_id": "DIS01",
        "updated_at": "2024-03-18T14:15:00",
        "created_at": "2024-01-18T10:45:00",
        "has_subcomponent": false,
        "hsn_code": "85340000",
        "sku_code": "PCB-D05",
        "usable_quantity": 65,
        "damaged_quantity": 0,
        "discarded_quantity": 5,
        "last_updated": "2024-04-10T11:45:00",
        "total_quantity": 70
      }
    ]
  },
  {
    "component_id": "CHG01",
    "component_name": "Charger Unit",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2024-02-20T11:30:00",
    "created_at": "2023-12-05T09:45:00",
    "has_subcomponent": true,
    "hsn_code": "85044000",
    "sku_code": "CHG-45W",
    "subcomponents": [
      {
        "component_id": "CHGPCB01",
        "component_name": "Charger PCB",
        "is_subcomponent": true,
        "parent_component_id": "CHG01",
        "updated_at": "2024-03-01T13:20:00",
        "created_at": "2023-12-10T11:30:00",
        "has_subcomponent": false,
        "hsn_code": "85340000",
        "sku_code": "PCB-C10",
        "usable_quantity": 90,
        "damaged_quantity": 2,
        "discarded_quantity": 3,
        "last_updated": "2024-04-05T14:30:00",
        "total_quantity": 95
      },
      {
        "component_id": "CHGCON01",
        "component_name": "Charger Connector",
        "is_subcomponent": true,
        "parent_component_id": "CHG01",
        "updated_at": "2024-03-05T15:40:00",
        "created_at": "2023-12-12T10:15:00",
        "has_subcomponent": false,
        "hsn_code": "85366900",
        "sku_code": "CON-TYPEC",
        "usable_quantity": 120,
        "damaged_quantity": 5,
        "discarded_quantity": 0,
        "last_updated": "2024-04-05T14:30:00",
        "total_quantity": 125
      }
    ]
  },
  {
    "component_id": "SEN01",
    "component_name": "Sensor Module",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2024-03-10T09:15:00",
    "created_at": "2024-01-05T08:30:00",
    "has_subcomponent": true,
    "hsn_code": "90318000",
    "sku_code": "SEN-MULTI",
    "subcomponents": [
      {
        "component_id": "SENPROX01",
        "component_name": "Proximity Sensor",
        "is_subcomponent": true,
        "parent_component_id": "SEN01",
        "updated_at": "2024-03-20T11:45:00",
        "created_at": "2024-01-10T10:20:00",
        "has_subcomponent": false,
        "hsn_code": "90318000",
        "sku_code": "PROX-05",
        "usable_quantity": 150,
        "damaged_quantity": 3,
        "discarded_quantity": 2,
        "last_updated": "2024-04-12T16:20:00",
        "total_quantity": 155
      },
      {
        "component_id": "SENACC01",
        "component_name": "Accelerometer",
        "is_subcomponent": true,
        "parent_component_id": "SEN01",
        "updated_at": "2024-03-22T14:30:00",
        "created_at": "2024-01-12T09:15:00",
        "has_subcomponent": false,
        "hsn_code": "85423100",
        "sku_code": "ACC-3AX",
        "usable_quantity": 100,
        "damaged_quantity": 0,
        "discarded_quantity": 5,
        "last_updated": "2024-04-12T16:20:00",
        "total_quantity": 105
      }
    ]
  },
  {
    "component_id": "LED01",
    "component_name": "LED Light Assembly",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2024-02-15T13:45:00",
    "created_at": "2023-12-20T11:10:00",
    "has_subcomponent": true,
    "hsn_code": "85393100",
    "sku_code": "LED-WHITE",
    "subcomponents": [
      {
        "component_id": "LEDBULB01",
        "component_name": "LED Bulb",
        "is_subcomponent": true,
        "parent_component_id": "LED01",
        "updated_at": "2024-03-05T10:20:00",
        "created_at": "2023-12-25T14:30:00",
        "has_subcomponent": false,
        "hsn_code": "85393100",
        "sku_code": "BULB-5W",
        "usable_quantity": 200,
        "damaged_quantity": 10,
        "discarded_quantity": 5,
        "last_updated": "2024-04-08T09:30:00",
        "total_quantity": 215
      },
      {
        "component_id": "LEDDRV01",
        "component_name": "LED Driver",
        "is_subcomponent": true,
        "parent_component_id": "LED01",
        "updated_at": "2024-03-08T15:10:00",
        "created_at": "2023-12-28T10:45:00",
        "has_subcomponent": false,
        "hsn_code": "85044000",
        "sku_code": "DRV-LED",
        "usable_quantity": 180,
        "damaged_quantity": 5,
        "discarded_quantity": 0,
        "last_updated": "2024-04-08T09:30:00",
        "total_quantity": 185
      }
    ]
  },
  {
    "component_id": "FAN01",
    "component_name": "Cooling Fan",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2024-01-25T10:30:00",
    "created_at": "2023-11-15T08:20:00",
    "has_subcomponent": true,
    "hsn_code": "84145900",
    "sku_code": "FAN-80MM",
    "subcomponents": [
      {
        "component_id": "FANBLD01",
        "component_name": "Fan Blade",
        "is_subcomponent": true,
        "parent_component_id": "FAN01",
        "updated_at": "2024-02-10T14:45:00",
        "created_at": "2023-11-20T11:30:00",
        "has_subcomponent": false,
        "hsn_code": "84149000",
        "sku_code": "BLD-80",
        "usable_quantity": 95,
        "damaged_quantity": 3,
        "discarded_quantity": 2,
        "last_updated": "2024-03-30T13:15:00",
        "total_quantity": 100
      },
      {
        "component_id": "FANMOT01",
        "component_name": "Fan Motor",
        "is_subcomponent": true,
        "parent_component_id": "FAN01",
        "updated_at": "2024-02-15T16:20:00",
        "created_at": "2023-11-22T09:45:00",
        "has_subcomponent": false,
        "hsn_code": "85011000",
        "sku_code": "MOT-FAN",
        "usable_quantity": 85,
        "damaged_quantity": 0,
        "discarded_quantity": 5,
        "last_updated": "2024-03-30T13:15:00",
        "total_quantity": 90
      }
    ]
  },
  {
    "component_id": "SW01",
    "component_name": "Switch Assembly",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2024-03-01T14:20:00",
    "created_at": "2024-01-08T10:15:00",
    "has_subcomponent": true,
    "hsn_code": "85365000",
    "sku_code": "SW-PUSH",
    "subcomponents": [
      {
        "component_id": "SWBTN01",
        "component_name": "Push Button",
        "is_subcomponent": true,
        "parent_component_id": "SW01",
        "updated_at": "2024-03-12T11:30:00",
        "created_at": "2024-01-12T13:45:00",
        "has_subcomponent": false,
        "hsn_code": "85365000",
        "sku_code": "BTN-12MM",
        "usable_quantity": 150,
        "damaged_quantity": 5,
        "discarded_quantity": 0,
        "last_updated": "2024-04-15T10:45:00",
        "total_quantity": 155
      },
      {
        "component_id": "SWCON01",
        "component_name": "Switch Connector",
        "is_subcomponent": true,
        "parent_component_id": "SW01",
        "updated_at": "2024-03-15T15:45:00",
        "created_at": "2024-01-15T14:30:00",
        "has_subcomponent": false,
        "hsn_code": "85369000",
        "sku_code": "CON-SW",
        "usable_quantity": 130,
        "damaged_quantity": 2,
        "discarded_quantity": 3,
        "last_updated": "2024-04-15T10:45:00",
        "total_quantity": 135
      }
    ]
  },
  {
    "component_id": "ANT01",
    "component_name": "Antenna Module",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2024-02-28T16:30:00",
    "created_at": "2024-01-03T09:20:00",
    "has_subcomponent": true,
    "hsn_code": "85291000",
    "sku_code": "ANT-WIFI",
    "subcomponents": [
      {
        "component_id": "ANTRAD01",
        "component_name": "Antenna Radiator",
        "is_subcomponent": true,
        "parent_component_id": "ANT01",
        "updated_at": "2024-03-10T10:15:00",
        "created_at": "2024-01-08T11:45:00",
        "has_subcomponent": false,
        "hsn_code": "85299000",
        "sku_code": "RAD-2.4G",
        "usable_quantity": 110,
        "damaged_quantity": 0,
        "discarded_quantity": 5,
        "last_updated": "2024-04-18T14:00:00",
        "total_quantity": 115
      },
      {
        "component_id": "ANTCON01",
        "component_name": "Antenna Connector",
        "is_subcomponent": true,
        "parent_component_id": "ANT01",
        "updated_at": "2024-03-12T14:50:00",
        "created_at": "2024-01-10T13:30:00",
        "has_subcomponent": false,
        "hsn_code": "85369000",
        "sku_code": "CON-UFL",
        "usable_quantity": 95,
        "damaged_quantity": 3,
        "discarded_quantity": 2,
        "last_updated": "2024-04-18T14:00:00",
        "total_quantity": 100
      }
    ]
  },
  {
    "component_id": "HOU01",
    "component_name": "Device Housing",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2024-01-30T11:45:00",
    "created_at": "2023-12-10T08:30:00",
    "has_subcomponent": true,
    "hsn_code": "39269000",
    "sku_code": "HOU-ABS",
    "subcomponents": [
      {
        "component_id": "HOUTOP01",
        "component_name": "Top Cover",
        "is_subcomponent": true,
        "parent_component_id": "HOU01",
        "updated_at": "2024-02-20T13:15:00",
        "created_at": "2023-12-15T10:45:00",
        "has_subcomponent": false,
        "hsn_code": "39269000",
        "sku_code": "COV-TOP",
        "usable_quantity": 75,
        "damaged_quantity": 2,
        "discarded_quantity": 3,
        "last_updated": "2024-04-05T16:30:00",
        "total_quantity": 80
      },
      {
        "component_id": "HOUBOT01",
        "component_name": "Bottom Cover",
        "is_subcomponent": true,
        "parent_component_id": "HOU01",
        "updated_at": "2024-02-22T15:30:00",
        "created_at": "2023-12-18T14:20:00",
        "has_subcomponent": false,
        "hsn_code": "39269000",
        "sku_code": "COV-BOT",
        "usable_quantity": 80,
        "damaged_quantity": 0,
        "discarded_quantity": 5,
        "last_updated": "2024-04-05T16:30:00",
        "total_quantity": 85
      }
    ]
  },
  {
    "component_id": "CAM01",
    "component_name": "Camera Module",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2024-03-05T10:15:00",
    "created_at": "2024-01-12T09:30:00",
    "has_subcomponent": true,
    "hsn_code": "85258000",
    "sku_code": "CAM-12MP",
    "subcomponents": [
      {
        "component_id": "CAMLEN01",
        "component_name": "Camera Lens",
        "is_subcomponent": true,
        "parent_component_id": "CAM01",
        "updated_at": "2024-03-18T14:45:00",
        "created_at": "2024-01-18T11:15:00",
        "has_subcomponent": false,
        "hsn_code": "90019000",
        "sku_code": "LEN-6MM",
        "usable_quantity": 60,
        "damaged_quantity": 1,
        "discarded_quantity": 4,
        "last_updated": "2024-04-12T11:30:00",
        "total_quantity": 65
      },
      {
        "component_id": "CAMSEN01",
        "component_name": "Image Sensor",
        "is_subcomponent": true,
        "parent_component_id": "CAM01",
        "updated_at": "2024-03-20T16:30:00",
        "created_at": "2024-01-20T13:45:00",
        "has_subcomponent": false,
        "hsn_code": "85414000",
        "sku_code": "SEN-CMOS",
        "usable_quantity": 55,
        "damaged_quantity": 0,
        "discarded_quantity": 5,
        "last_updated": "2024-04-12T11:30:00",
        "total_quantity": 60
      }
    ]
  },
  {
    "component_id": "MIC01",
    "component_name": "Microphone Array",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2024-02-10T14:20:00",
    "created_at": "2023-12-15T10:30:00",
    "has_subcomponent": true,
    "hsn_code": "85181000",
    "sku_code": "MIC-ARAY",
    "subcomponents": [
      {
        "component_id": "MICELM01",
        "component_name": "Mic Element",
        "is_subcomponent": true,
        "parent_component_id": "MIC01",
        "updated_at": "2024-03-01T11:45:00",
        "created_at": "2023-12-20T14:15:00",
        "has_subcomponent": false,
        "hsn_code": "85181000",
        "sku_code": "ELM-MIC",
        "usable_quantity": 100,
        "damaged_quantity": 5,
        "discarded_quantity": 0,
        "last_updated": "2024-04-08T15:45:00",
        "total_quantity": 105
      },
      {
        "component_id": "MICPCB01",
        "component_name": "Mic PCB",
        "is_subcomponent": true,
        "parent_component_id": "MIC01",
        "updated_at": "2024-03-05T15:30:00",
        "created_at": "2023-12-22T09:20:00",
        "has_subcomponent": false,
        "hsn_code": "85340000",
        "sku_code": "PCB-MIC",
        "usable_quantity": 90,
        "damaged_quantity": 2,
        "discarded_quantity": 3,
        "last_updated": "2024-04-08T15:45:00",
        "total_quantity": 95
      }
    ]
  },
  {
    "component_id": "SPK01",
    "component_name": "Speaker Unit",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2024-01-20T09:45:00",
    "created_at": "2023-11-25T08:15:00",
    "has_subcomponent": true,
    "hsn_code": "85182100",
    "sku_code": "SPK-5W",
    "subcomponents": [
      {
        "component_id": "SPKDRV01",
        "component_name": "Speaker Driver",
        "is_subcomponent": true,
        "parent_component_id": "SPK01",
        "updated_at": "2024-02-05T13:30:00",
        "created_at": "2023-11-30T11:45:00",
        "has_subcomponent": false,
        "hsn_code": "85182100",
        "sku_code": "DRV-SPK",
        "usable_quantity": 70,
        "damaged_quantity": 3,
        "discarded_quantity": 2,
        "last_updated": "2024-03-25T14:15:00",
        "total_quantity": 75
      },
      {
        "component_id": "SPKMAG01",
        "component_name": "Speaker Magnet",
        "is_subcomponent": true,
        "parent_component_id": "SPK01",
        "updated_at": "2024-02-08T16:45:00",
        "created_at": "2023-12-03T14:30:00",
        "has_subcomponent": false,
        "hsn_code": "85051100",
        "sku_code": "MAG-SPK",
        "usable_quantity": 65,
        "damaged_quantity": 0,
        "discarded_quantity": 5,
        "last_updated": "2024-03-25T14:15:00",
        "total_quantity": 70
      }
    ]
  },
  {
    "component_id": "PWR01",
    "component_name": "Power Supply Unit",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2024-02-25T15:30:00",
    "created_at": "2024-01-05T11:20:00",
    "has_subcomponent": true,
    "hsn_code": "85044000",
    "sku_code": "PSU-24V",
    "subcomponents": [
      {
        "component_id": "PWRTRN01",
        "component_name": "Power Transformer",
        "is_subcomponent": true,
        "parent_component_id": "PWR01",
        "updated_at": "2024-03-08T10:45:00",
        "created_at": "2024-01-10T14:15:00",
        "has_subcomponent": false,
        "hsn_code": "85043100",
        "sku_code": "TRN-PWR",
        "usable_quantity": 50,
        "damaged_quantity": 1,
        "discarded_quantity": 4,
        "last_updated": "2024-04-10T13:30:00",
        "total_quantity": 55
      },
      {
        "component_id": "PWRCAP01",
        "component_name": "Power Capacitor",
        "is_subcomponent": true,
        "parent_component_id": "PWR01",
        "updated_at": "2024-03-10T14:20:00",
        "created_at": "2024-01-12T16:45:00",
        "has_subcomponent": false,
        "hsn_code": "85321000",
        "sku_code": "CAP-100UF",
        "usable_quantity": 120,
        "damaged_quantity": 5,
        "discarded_quantity": 0,
        "last_updated": "2024-04-10T13:30:00",
        "total_quantity": 125
      }
    ]
  },
  {
    "component_id": "CON01",
    "component_name": "Connector Panel",
    "is_subcomponent": false,
    "parent_component_id": null,
    "updated_at": "2024-03-08T11:15:00",
    "created_at": "2024-01-15T10:45:00",
    "has_subcomponent": true,
    "hsn_code": "85369000",
    "sku_code": "CON-PANEL",
    "subcomponents": [
      {
        "component_id": "CONUSB01",
        "component_name": "USB Port",
        "is_subcomponent": true,
        "parent_component_id": "CON01",
        "updated_at": "2024-03-18T13:30:00",
        "created_at": "2024-01-20T14:20:00",
        "has_subcomponent": false,
        "hsn_code": "85366900",
        "sku_code": "USB-TYPEC",
        "usable_quantity": 90,
        "damaged_quantity": 2,
        "discarded_quantity": 3,
        "last_updated": "2024-04-15T16:45:00",
        "total_quantity": 95
      },
      {
        "component_id": "CONHDMI01",
        "component_name": "HDMI Port",
        "is_subcomponent": true,
        "parent_component_id": "CON01",
        "updated_at": "2024-03-20T15:45:00",
        "created_at": "2024-01-22T11:30:00",
        "has_subcomponent": false,
        "hsn_code": "85366900",
        "sku_code": "HDMI-19",
        "usable_quantity": 80,
        "damaged_quantity": 0,
        "discarded_quantity": 5,
        "last_updated": "2024-04-15T16:45:00",
        "total_quantity": 85
      }
    ]
  }]; 
  const flatData = flattenData(data);

  const MyTable = () => {
    const [data, setData] = useState<any[]>([]);
  
    useEffect(() => {
      // Fetch data from API
      const fetchData = async () => {
        const response = await fetch("https://dev.electorq.com/dummy/inventory");
        const apiData = await response.json();
  
        // Flatten the API data
        const flatData = flattenData(apiData);
        setData(flatData);
      };
  
      fetchData();
    }, []);

  const columns: Column<any>[] = [
    { accessor: "component_id", header: "Component ID" },
    { accessor: "component_name", header: "Component Name" },
    { accessor: "subcomponent_name", header: "Subcomponent Name" },
    { accessor: "sku_code", header: "SKU Code" },
    { accessor: "hsn_code", header: "HSN Code" },
    { accessor: "total_quantity", header: "Total Quantity" },
    { accessor: "usable_quantity", header: "Usable Quantity" },
    { accessor: "damaged_quantity", header: "Damaged Quantity" },
    { accessor: "discarded_quantity", header: "Discarded Quantity" },
    { accessor: "last_updated", header: "Last Updated" },
  ];

  return <DataTable data={data} columns={columns} />;
};

export default MyTable;

