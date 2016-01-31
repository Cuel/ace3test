
/*eslint-disable*/
window.mock = {
  "version": 12,
  "Mission": {
    "addOns": [
      "A3_Modules_F_Multiplayer",
      "A3_Characters_F_BLUFOR",
      "a3_characters_f",
      "3DEN",
      "a3_modules_f_curator_curator",
      "A3_Structures_F_Mil_Flags",
      "A3_Armor_F_Panther",
      "A3_Armor_F_AMV",
      "A3_Soft_F_MRAP_01",
      "A3_Air_F_Beta_Heli_Transport_01",
      "A3_Soft_F_Offroad_01",
      "A3_Signs_F",
      "A3_Structures_F_EPA_Mil_Scrapyard",
      "A3_Structures_F_Mil_Shelters",
      "A3_Structures_F_Items_Vessels",
      "A3_Structures_F_Civ_InfoBoards",
      "A3_Structures_F_EPA_Civ_Camping",
      "A3_Structures_F_Furniture",
      "JS_JC_FA18",
      "cup_misc_e_config",
      "map_vr"
    ],
    "addOnsAuto": [
      "A3_Modules_F_Multiplayer",
      "A3_Characters_F_BLUFOR",
      "a3_characters_f",
      "3DEN",
      "a3_modules_f_curator_curator",
      "A3_Structures_F_Mil_Flags",
      "A3_Armor_F_Panther",
      "A3_Armor_F_AMV",
      "A3_Soft_F_MRAP_01",
      "A3_Air_F_Beta_Heli_Transport_01",
      "A3_Soft_F_Offroad_01",
      "A3_Signs_F",
      "A3_Structures_F_EPA_Mil_Scrapyard",
      "A3_Structures_F_Mil_Shelters",
      "A3_Structures_F_Items_Vessels",
      "A3_Structures_F_Civ_InfoBoards",
      "A3_Structures_F_EPA_Civ_Camping",
      "A3_Structures_F_Furniture",
      "JS_JC_FA18",
      "cup_misc_e_config",
      "map_vr"
    ],
    "randomSeed": 11895797,
    "Intel": {
      "briefingName": "FP Template v3.2.0",
      "overviewText": "Edit this please.",
      "startWeather": 0,
      "startWind": 0,
      "forecastWeather": 0,
      "forecastWind": 0,
      "forecastWaves": 0,
      "year": 2035,
      "month": 7,
      "day": 6,
      "hour": 13,
      "minute": 25,
      "startFogDecay": 0,
      "forecastFogDecay": 0
    },
    "Groups": {
      "items": 12,
      "Item0": {
        "side": "LOGIC",
        "Vehicles": {
          "items": 1,
          "Item0": {
            "presenceCondition": "TRUE",
            "position": [
              949.28632,
              5,
              982.27588
            ],
            "args": {
              "items": 9,
              "Item0": {
                "value": "300",
                "parentCls": "ModuleRespawnVehicle_F",
                "typeName": "Delay"
              },
              "Item1": {
                "value": "",
                "parentCls": "ModuleRespawnVehicle_F",
                "typeName": "DesertedDistance"
              },
              "Item2": {
                "value": "5",
                "parentCls": "ModuleRespawnVehicle_F",
                "typeName": "RespawnCount"
              },
              "Item3": {
                "value": "0 = _this call FP_fnc_setVehicleName",
                "parentCls": "ModuleRespawnVehicle_F",
                "typeName": "Init"
              },
              "Item4": {
                "value": "0",
                "parentCls": "ModuleRespawnVehicle_F",
                "typeName": "Position"
              },
              "Item5": {
                "value": "0",
                "parentCls": "ModuleRespawnVehicle_F",
                "typeName": "PositionType"
              },
              "Item6": {
                "value": "0",
                "parentCls": "ModuleRespawnVehicle_F",
                "typeName": "Wreck"
              },
              "Item7": {
                "value": "0",
                "parentCls": "ModuleRespawnVehicle_F",
                "typeName": "ShowNotification"
              },
              "Item8": {
                "value": "0",
                "parentCls": "ModuleRespawnVehicle_F",
                "typeName": "ForcedRespawn"
              }
            },
            "id": 0,
            "side": "LOGIC",
            "vehicle": "ModuleRespawnVehicle_F",
            "leader": 1,
            "lock": "UNLOCKED",
            "skill": 0,
            "syncId": 0,
            "synchronizations": [
              4,
              5,
              6,
              14,
              15,
              9,
              8,
              7
            ]
          }
        }
      },
      "Item1": {
        "side": "LOGIC",
        "Vehicles": {
          "items": 1,
          "Item0": {
            "position": [
              1010.0735,
              5,
              995.49414
            ],
            "args": {
              "items": 9,
              "Item0": {
                "value": "5",
                "parentCls": "ModuleRespawnVehicle_F",
                "typeName": "Delay"
              },
              "Item1": {
                "value": "15",
                "parentCls": "ModuleRespawnVehicle_F",
                "typeName": "DesertedDistance"
              },
              "Item2": {
                "value": "5",
                "parentCls": "ModuleRespawnVehicle_F",
                "typeName": "RespawnCount"
              },
              "Item3": {
                "value": "0 = _this call FP_fnc_setVehicleName",
                "parentCls": "ModuleRespawnVehicle_F",
                "typeName": "Init"
              },
              "Item4": {
                "value": "0",
                "parentCls": "ModuleRespawnVehicle_F",
                "typeName": "Position"
              },
              "Item5": {
                "value": "0",
                "parentCls": "ModuleRespawnVehicle_F",
                "typeName": "PositionType"
              },
              "Item6": {
                "value": "1",
                "parentCls": "ModuleRespawnVehicle_F",
                "typeName": "Wreck"
              },
              "Item7": {
                "value": "0",
                "parentCls": "ModuleRespawnVehicle_F",
                "typeName": "ShowNotification"
              },
              "Item8": {
                "value": "0",
                "parentCls": "ModuleRespawnVehicle_F",
                "typeName": "ForcedRespawn"
              }
            },
            "id": 1,
            "side": "LOGIC",
            "vehicle": "ModuleRespawnVehicle_F",
            "leader": 1,
            "lock": "UNLOCKED",
            "skill": 0,
            "syncId": 1,
            "synchronizations": [
              13,
              12,
              11,
              10
            ]
          }
        }
      },
      "Item2": {
        "side": "WEST",
        "Vehicles": {
          "items": 1,
          "Item0": {
            "position": [
              899.97565,
              5,
              1000.0186
            ],
            "special": "NONE",
            "id": 2,
            "side": "WEST",
            "vehicle": "B_officer_F",
            "player": "PLAYER COMMANDER",
            "leader": 1,
            "rank": "COLONEL",
            "skill": 0.2,
            "text": "gm",
            "init": "this setGroupID [\"COMMANDER\"]; [this,\"PLT\"] call FP_fnc_getKit",
            "description": "Commander (Game master)",
            "syncId": 2,
            "synchronizations": [
              3
            ]
          }
        }
      },
      "Item3": {
        "side": "WEST",
        "Vehicles": {
          "items": 2,
          "Item0": {
            "position": [
              904.526,
              5,
              999.9776
            ],
            "special": "NONE",
            "id": 3,
            "side": "WEST",
            "vehicle": "B_officer_F",
            "player": "PLAY CDG",
            "leader": 1,
            "rank": "MAJOR",
            "skill": 0,
            "text": "actual",
            "init": "this setGroupID [\"ACTUAL\"]; [this,\"PLT\"] call FP_fnc_getKit",
            "description": "Actual "
          },
          "Item1": {
            "position": [
              905.3667,
              5,
              999.40332
            ],
            "special": "NONE",
            "id": 4,
            "side": "WEST",
            "vehicle": "B_medic_F",
            "player": "PLAY CDG",
            "skill": 0,
            "text": "amed",
            "init": "this setGroupID [\"ACTUAL\"]; [this,\"MEDIC\"] call FP_fnc_getKit;",
            "description": " Actual Medic"
          }
        }
      },
      "Item4": {
        "side": "WEST",
        "Vehicles": {
          "items": 8,
          "Item0": {
            "position": [
              910.06384,
              5,
              1000.0181
            ],
            "special": "NONE",
            "id": 5,
            "side": "WEST",
            "vehicle": "B_Soldier_SL_F",
            "player": "PLAY CDG",
            "leader": 1,
            "rank": "CAPTAIN",
            "skill": 0.2,
            "text": "a0",
            "init": "this setGroupID [\"ALPHA\"]; [this,\"SQL\"] call FP_fnc_getKit;",
            "description": " Alpha SQL"
          },
          "Item1": {
            "position": [
              910.68726,
              5,
              999.2998
            ],
            "special": "NONE",
            "id": 6,
            "side": "WEST",
            "vehicle": "B_medic_F",
            "player": "PLAY CDG",
            "skill": 0.2,
            "text": "a1",
            "init": "this setGroupID [\"ALPHA\"]; [this,\"MEDIC\"] call FP_fnc_getKit;",
            "description": " Alpha Medic"
          },
          "Item2": {
            "position": [
              911.7182,
              5,
              999.3457
            ],
            "special": "NONE",
            "id": 7,
            "side": "WEST",
            "vehicle": "B_soldier_AR_F",
            "player": "PLAY CDG",
            "skill": 0,
            "text": "a2",
            "init": "this setGroupID [\"ALPHA\"];  [this,\"AR\"] call FP_fnc_getKit;",
            "description": " Alpha AR"
          },
          "Item3": {
            "position": [
              912.53387,
              5,
              999.36865
            ],
            "special": "NONE",
            "id": 8,
            "side": "WEST",
            "vehicle": "B_Soldier_A_F",
            "player": "PLAY CDG",
            "skill": 0,
            "text": "a3",
            "init": "this setGroupID [\"ALPHA\"];  [this,\"ARASS\"] call FP_fnc_getKit ;",
            "description": " Alpha Asst. AR"
          },
          "Item4": {
            "position": [
              913.45319,
              5,
              999.99951
            ],
            "special": "NONE",
            "id": 9,
            "side": "WEST",
            "vehicle": "B_Soldier_TL_F",
            "player": "PLAY CDG",
            "skill": 0.2,
            "text": "a6",
            "init": "this setGroupID [\"ALPHA\"]; [this,\"RAT\"] call FP_fnc_getKit;",
            "description": " Alpha FTL / RAT"
          },
          "Item5": {
            "position": [
              914.19312,
              5,
              999.39795
            ],
            "special": "NONE",
            "id": 10,
            "side": "WEST",
            "vehicle": "B_soldier_LAT_F",
            "player": "PLAY CDG",
            "skill": 0.2,
            "text": "a4",
            "init": "this setGroupID [\"ALPHA\"];  [this,\"AT\"] call FP_fnc_getKit;",
            "description": " Alpha AT"
          },
          "Item6": {
            "position": [
              915.02338,
              5,
              999.38818
            ],
            "special": "NONE",
            "id": 11,
            "side": "WEST",
            "vehicle": "B_Soldier_A_F",
            "player": "PLAY CDG",
            "lock": "UNLOCKED",
            "skill": 0,
            "text": "a5",
            "init": "this setGroupID [\"ALPHA\"]; [this,\"ATASS\"] call FP_fnc_getKit;",
            "description": " Alpha Asst. AT"
          },
          "Item7": {
            "position": [
              915.9436,
              5,
              999.40186
            ],
            "special": "NONE",
            "id": 12,
            "side": "WEST",
            "vehicle": "B_engineer_F",
            "player": "PLAY CDG",
            "skill": 0,
            "text": "a7",
            "init": "this setGroupID [\"ALPHA\"]; [this,\"ENGINEER\"] call FP_fnc_getKit;",
            "description": " Alpha Engineer"
          }
        }
      },
      "Item5": {
        "side": "WEST",
        "Vehicles": {
          "items": 8,
          "Item0": {
            "position": [
              920.21173,
              5,
              999.99951
            ],
            "special": "NONE",
            "id": 13,
            "side": "WEST",
            "vehicle": "B_Soldier_SL_F",
            "player": "PLAY CDG",
            "leader": 1,
            "rank": "CAPTAIN",
            "skill": 0.2,
            "text": "b0",
            "init": "this setGroupID [\"BRAVO\"]; [this,\"SQL\"] call FP_fnc_getKit ;",
            "description": "Bravo SQL"
          },
          "Item1": {
            "position": [
              921.09686,
              5,
              999.40479
            ],
            "special": "NONE",
            "id": 14,
            "side": "WEST",
            "vehicle": "B_medic_F",
            "player": "PLAY CDG",
            "skill": 0,
            "text": "b1",
            "init": "this setGroupID [\"BRAVO\"]; [this,\"MEDIC\"] call FP_fnc_getKit ;",
            "description": " Bravo Medic"
          },
          "Item2": {
            "position": [
              921.99908,
              5,
              999.40771
            ],
            "special": "NONE",
            "id": 15,
            "side": "WEST",
            "vehicle": "B_soldier_AR_F",
            "player": "PLAY CDG",
            "skill": 0,
            "text": "b2",
            "init": "this setGroupID [\"BRAVO\"];  [this,\"AR\"] call FP_fnc_getKit ;",
            "description": " Bravo AR"
          },
          "Item3": {
            "position": [
              922.84564,
              5,
              999.40771
            ],
            "special": "NONE",
            "id": 16,
            "side": "WEST",
            "vehicle": "B_Soldier_A_F",
            "player": "PLAY CDG",
            "skill": 0,
            "text": "b3",
            "init": "this setGroupID [\"BRAVO\"];  [this,\"ARASS\"] call FP_fnc_getKit ;",
            "description": " Bravo Asst. AR"
          },
          "Item4": {
            "position": [
              923.45953,
              5,
              999.97559
            ],
            "special": "NONE",
            "id": 17,
            "side": "WEST",
            "vehicle": "B_Soldier_TL_F",
            "player": "PLAY CDG",
            "skill": 0,
            "text": "b6",
            "init": "this setGroupID [\"BRAVO\"]; [this,\"RAT\"] call FP_fnc_getKit;",
            "description": " Bravo FTL / RAT"
          },
          "Item5": {
            "position": [
              924.06866,
              5,
              999.40186
            ],
            "special": "NONE",
            "id": 18,
            "side": "WEST",
            "vehicle": "B_soldier_LAT_F",
            "player": "PLAY CDG",
            "skill": 0,
            "text": "b4",
            "init": "this setGroupID [\"BRAVO\"];  [this,\"AT\"] call FP_fnc_getKit;",
            "description": " Bravo AT"
          },
          "Item6": {
            "position": [
              925.12439,
              5,
              999.40967
            ],
            "special": "NONE",
            "id": 19,
            "side": "WEST",
            "vehicle": "B_Soldier_A_F",
            "player": "PLAY CDG",
            "lock": "UNLOCKED",
            "skill": 0,
            "text": "b5",
            "init": "this setGroupID [\"BRAVO\"]; [this,\"ATASS\"] call FP_fnc_getKit;",
            "description": " Bravo Asst. AT"
          },
          "Item7": {
            "position": [
              926.24329,
              5,
              999.41797
            ],
            "special": "NONE",
            "id": 20,
            "side": "WEST",
            "vehicle": "B_engineer_F",
            "player": "PLAY CDG",
            "skill": 0.2,
            "text": "b7",
            "init": "this setGroupID [\"BRAVO\"]; [this,\"ENGINEER\"] call FP_fnc_getKit;",
            "description": " Bravo Engineer"
          }
        }
      },
      "Item6": {
        "side": "WEST",
        "Vehicles": {
          "items": 8,
          "Item0": {
            "position": [
              910.09882,
              5,
              995.75537
            ],
            "special": "NONE",
            "id": 21,
            "side": "WEST",
            "vehicle": "B_Soldier_SL_F",
            "player": "PLAY CDG",
            "leader": 1,
            "rank": "CAPTAIN",
            "skill": 0,
            "text": "c0",
            "init": "this setGroupID [\"CHARLIE\"]; [this,\"SQL\"] call FP_fnc_getKit ;",
            "description": "Charlie SQL"
          },
          "Item1": {
            "position": [
              910.6535,
              5,
              995.27002
            ],
            "special": "NONE",
            "id": 22,
            "side": "WEST",
            "vehicle": "B_medic_F",
            "player": "PLAY CDG",
            "skill": 0,
            "text": "c1",
            "init": "this setGroupID [\"CHARLIE\"]; [this,\"MEDIC\"] call FP_fnc_getKit ;",
            "description": " Charlie Medic"
          },
          "Item2": {
            "position": [
              911.41711,
              5,
              995.27393
            ],
            "special": "NONE",
            "id": 23,
            "side": "WEST",
            "vehicle": "B_soldier_AR_F",
            "player": "PLAY CDG",
            "skill": 0,
            "text": "c2",
            "init": "this setGroupID [\"CHARLIE\"];  [this,\"AR\"] call FP_fnc_getKit ;",
            "description": " Charlie AR"
          },
          "Item3": {
            "position": [
              912.39575,
              5,
              995.27783
            ],
            "special": "NONE",
            "id": 24,
            "side": "WEST",
            "vehicle": "B_Soldier_A_F",
            "player": "PLAY CDG",
            "skill": 0,
            "text": "c3",
            "init": "this setGroupID [\"CHARLIE\"];  [this,\"ARASS\"] call FP_fnc_getKit ;",
            "description": " Charlie Asst. AR"
          },
          "Item4": {
            "position": [
              913.43427,
              5,
              995.73584
            ],
            "special": "NONE",
            "id": 25,
            "side": "WEST",
            "vehicle": "B_Soldier_TL_F",
            "player": "PLAY CDG",
            "skill": 0,
            "text": "c4",
            "init": "this setGroupID [\"CHARLIE\"]; [this,\"RAT\"] call FP_fnc_getKit;",
            "description": " Charlie FTL / RAT"
          },
          "Item5": {
            "position": [
              914.69189,
              5,
              995.27051
            ],
            "special": "NONE",
            "id": 26,
            "side": "WEST",
            "vehicle": "B_soldier_LAT_F",
            "player": "PLAY CDG",
            "skill": 0,
            "text": "c5",
            "init": "this setGroupID [\"CHARLIE\"];  [this,\"AT\"] call FP_fnc_getKit;",
            "description": " Charlie AT"
          },
          "Item6": {
            "position": [
              915.54034,
              5,
              995.28516
            ],
            "special": "NONE",
            "id": 27,
            "side": "WEST",
            "vehicle": "B_Soldier_A_F",
            "player": "PLAY CDG",
            "lock": "UNLOCKED",
            "skill": 0,
            "text": "c6",
            "init": "this setGroupID [\"CHARLIE\"]; [this,\"ATASS\"] call FP_fnc_getKit;",
            "description": " Charlie Asst. AT"
          },
          "Item7": {
            "position": [
              916.53992,
              5,
              995.26318
            ],
            "special": "NONE",
            "id": 28,
            "side": "WEST",
            "vehicle": "B_engineer_F",
            "player": "PLAY CDG",
            "skill": 0,
            "text": "c7",
            "init": "this setGroupID [\"CHARLIE\"]; [this,\"ENGINEER\"] call FP_fnc_getKit;",
            "description": " Charlie Engineer"
          }
        }
      },
      "Item7": {
        "side": "WEST",
        "Vehicles": {
          "items": 8,
          "Item0": {
            "position": [
              919.52502,
              5,
              995.70361
            ],
            "special": "NONE",
            "id": 29,
            "side": "WEST",
            "vehicle": "B_Soldier_SL_F",
            "player": "PLAY CDG",
            "leader": 1,
            "rank": "CAPTAIN",
            "skill": 0,
            "text": "d0",
            "init": "this setGroupID [\"DELTA\"]; [this,\"SQL\"] call FP_fnc_getKit;",
            "description": "Delta SQL"
          },
          "Item1": {
            "position": [
              920.13605,
              5,
              995.31494
            ],
            "special": "NONE",
            "id": 30,
            "side": "WEST",
            "vehicle": "B_medic_F",
            "player": "PLAY CDG",
            "skill": 0,
            "text": "d1",
            "init": "this setGroupID [\"DELTA\"]; [this,\"MEDIC\"] call FP_fnc_getKit;",
            "description": " Delta Medic"
          },
          "Item2": {
            "position": [
              920.77521,
              5,
              995.27393
            ],
            "special": "NONE",
            "id": 31,
            "side": "WEST",
            "vehicle": "B_soldier_AR_F",
            "player": "PLAY CDG",
            "skill": 0,
            "text": "d2",
            "init": "this setGroupID [\"DELTA\"]; [this,\"AR\"] call FP_fnc_getKit;",
            "description": "Delta AR"
          },
          "Item3": {
            "position": [
              921.43408,
              5,
              995.26025
            ],
            "special": "NONE",
            "id": 32,
            "side": "WEST",
            "vehicle": "B_Soldier_A_F",
            "player": "PLAY CDG",
            "skill": 0,
            "text": "d3",
            "init": "this setGroupID [\"DELTA\"]; [this,\"ARASS\"] call FP_fnc_getKit;",
            "description": " Delta Asst. AR"
          },
          "Item4": {
            "position": [
              922.28455,
              5,
              995.70752
            ],
            "special": "NONE",
            "id": 33,
            "side": "WEST",
            "vehicle": "B_Soldier_TL_F",
            "player": "PLAY CDG",
            "skill": 0,
            "text": "d4",
            "init": "this setGroupID [\"DELTA\"]; [this,\"RAT\"] call FP_fnc_getKit;",
            "description": " Delta FTL / RAT"
          },
          "Item5": {
            "position": [
              923.1438,
              5,
              995.25879
            ],
            "special": "NONE",
            "id": 34,
            "side": "WEST",
            "vehicle": "B_soldier_LAT_F",
            "player": "PLAY CDG",
            "skill": 0,
            "text": "d5",
            "init": "this setGroupID [\"DELTA\"]; [this,\"AT\"] call FP_fnc_getKit;",
            "description": " Delta AT"
          },
          "Item6": {
            "position": [
              923.92072,
              5,
              995.2832
            ],
            "special": "NONE",
            "id": 35,
            "side": "WEST",
            "vehicle": "B_Soldier_A_F",
            "player": "PLAY CDG",
            "lock": "UNLOCKED",
            "skill": 0,
            "text": "d6",
            "init": "this setGroupID [\"DELTA\"];[this,\"ATASS\"] call FP_fnc_getKit ;",
            "description": " Delta Asst. AT"
          },
          "Item7": {
            "position": [
              924.75232,
              5,
              994.93262
            ],
            "special": "NONE",
            "id": 36,
            "side": "WEST",
            "vehicle": "B_engineer_F",
            "player": "PLAY CDG",
            "skill": 0.2,
            "text": "d7",
            "init": "this setGroupID [\"DELTA\"]; [this,\"ENGINEER\"] call FP_fnc_getKit;",
            "description": " Delta Engineer"
          }
        }
      },
      "Item8": {
        "side": "WEST",
        "Vehicles": {
          "items": 3,
          "Item0": {
            "position": [
              931.86823,
              5,
              999.95605
            ],
            "special": "NONE",
            "id": 37,
            "side": "WEST",
            "vehicle": "B_crew_F",
            "player": "PLAY CDG",
            "leader": 1,
            "rank": "SERGEANT",
            "skill": 0,
            "text": "crew0",
            "init": "this setGroupID [\"CREW\"];  [this,\"CREWMAN\"] call FP_fnc_getKit",
            "description": "Armorered Vehicle Crew Commander"
          },
          "Item1": {
            "position": [
              933.16278,
              5,
              999.28271
            ],
            "special": "NONE",
            "id": 38,
            "side": "WEST",
            "vehicle": "B_crew_F",
            "player": "PLAY CDG",
            "skill": 0,
            "text": "crew1",
            "init": "this setGroupID [\"CREW\"];  [this,\"CREWMAN\"] call FP_fnc_getKit",
            "description": "Armorered Vehicle Crew Driver"
          },
          "Item2": {
            "position": [
              932.40674,
              5,
              999.29492
            ],
            "special": "NONE",
            "id": 39,
            "side": "WEST",
            "vehicle": "B_crew_F",
            "player": "PLAY CDG",
            "skill": 0,
            "text": "crew2",
            "init": "this setGroupID [\"CREW\"];  [this,\"CREWMAN\"] call FP_fnc_getKit",
            "description": "Armorered Vehicle Crew Gunner"
          }
        }
      },
      "Item9": {
        "side": "WEST",
        "Vehicles": {
          "items": 2,
          "Item0": {
            "position": [
              935.64484,
              5,
              999.94727
            ],
            "special": "NONE",
            "id": 40,
            "side": "WEST",
            "vehicle": "B_Helipilot_F",
            "player": "PLAY CDG",
            "leader": 1,
            "rank": "CORPORAL",
            "skill": 0.2,
            "text": "p0",
            "init": "this setGroupID [\"PILOT\"];  [this,\"PILOT\"] call FP_fnc_getKit",
            "description": "Pilot"
          },
          "Item1": {
            "position": [
              936.53046,
              5,
              999.16357
            ],
            "special": "NONE",
            "id": 41,
            "side": "WEST",
            "vehicle": "B_Helipilot_F",
            "player": "PLAY CDG",
            "skill": 0,
            "text": "p1",
            "init": "this setGroupID [\"PILOT\"];  [this,\"PILOT\"] call FP_fnc_getKit",
            "description": "Co-Pilot"
          }
        }
      },
      "Item10": {
        "side": "LOGIC",
        "Vehicles": {
          "items": 1,
          "Item0": {
            "position": [
              899.97363,
              5,
              999.05621
            ],
            "args": {
              "items": 4,
              "Item0": {
                "value": "gm",
                "parentCls": "ModuleCurator_F",
                "typeName": "Owner"
              },
              "Item1": {
                "value": "",
                "parentCls": "ModuleCurator_F",
                "typeName": "Name"
              },
              "Item2": {
                "value": "2",
                "parentCls": "ModuleCurator_F",
                "typeName": "Addons"
              },
              "Item3": {
                "value": "0",
                "parentCls": "ModuleCurator_F",
                "typeName": "Forced"
              }
            },
            "id": 42,
            "side": "LOGIC",
            "vehicle": "ModuleCurator_F",
            "leader": 1,
            "lock": "UNLOCKED",
            "skill": 0.60000002,
            "syncId": 3,
            "synchronizations": [
              2
            ]
          }
        }
      },
      "Item11": {
        "side": "LOGIC",
        "Vehicles": {
          "items": 1,
          "Item0": {
            "position": [
              895.50049,
              5,
              999.98193
            ],
            "id": 43,
            "side": "LOGIC",
            "vehicle": "HeadlessClient_F",
            "leader": 1,
            "skill": 0.60000002,
            "text": "HC",
            "description": "headless client"
          }
        }
      }
    },
    "Vehicles": {
      "items": 31,
      "Item0": {
        "position": [
          855.51782,
          5,
          1004.4575
        ],
        "id": 44,
        "side": "EMPTY",
        "vehicle": "Flag_Blue_F",
        "leader": 1,
        "skill": 0,
        "text": "fp_flag"
      },
      "Item1": {
        "position": [
          982.70026,
          5,
          980.34912
        ],
        "id": 45,
        "side": "EMPTY",
        "vehicle": "B_APC_Tracked_01_rcws_F",
        "leader": 1,
        "lock": "UNLOCKED",
        "skill": 0.2,
        "init": "[this, \"Fatty Magoo\"] call FP_fnc_setVehicleName; if (local this) then {[this] call FP_fnc_clearVehicle;}; this setObjectTexture [0, \"fp_misc\\img\\fattymagoo.paa\"];"
      },
      "Item2": {
        "position": [
          968.04187,
          5,
          980.56348
        ],
        "id": 46,
        "side": "EMPTY",
        "vehicle": "B_APC_Wheeled_01_cannon_F",
        "leader": 1,
        "lock": "UNLOCKED",
        "skill": 0.2,
        "init": "[this,\"Aluminum Monster\"] call FP_fnc_setVehicleName; if (local this) then {[this] call FP_fnc_clearVehicle;}; this setObjectTexture [0, \"fp_misc\\img\\aluminummonster.paa\"]"
      },
      "Item3": {
        "position": [
          945.91156,
          5,
          997.25635
        ],
        "id": 47,
        "side": "EMPTY",
        "vehicle": "B_MRAP_01_hmg_F",
        "leader": 1,
        "lock": "UNLOCKED",
        "skill": 0.2,
        "text": "acar1",
        "init": "[this,\"Alpha 1\"] call FP_fnc_setVehicleName; if (local this) then {[this] call FP_fnc_clearVehicle;};",
        "syncId": 4,
        "synchronizations": [
          0
        ]
      },
      "Item4": {
        "position": [
          945.6944,
          5,
          987.96875
        ],
        "id": 48,
        "side": "EMPTY",
        "vehicle": "B_MRAP_01_hmg_F",
        "leader": 1,
        "skill": 0.2,
        "text": "bcar1",
        "init": "[this,\"Bravo 1\"] call FP_fnc_setVehicleName; if (local this) then {[this] call FP_fnc_clearVehicle;};",
        "description": "man",
        "syncId": 5,
        "synchronizations": [
          0
        ]
      },
      "Item5": {
        "position": [
          945.27722,
          5,
          978.59082
        ],
        "id": 49,
        "side": "EMPTY",
        "vehicle": "B_MRAP_01_hmg_F",
        "leader": 1,
        "skill": 0.2,
        "text": "ccar1",
        "init": "[this,\"Charlie 1\"] call FP_fnc_setVehicleName; if (local this) then {[this] call FP_fnc_clearVehicle;};",
        "description": "man",
        "syncId": 6,
        "synchronizations": [
          0
        ]
      },
      "Item6": {
        "position": [
          952.56458,
          5,
          997.5611
        ],
        "id": 50,
        "side": "EMPTY",
        "vehicle": "B_MRAP_01_F",
        "leader": 1,
        "lock": "UNLOCKED",
        "skill": 0.2,
        "text": "acar1_1",
        "init": "[this,\"Alpha 2\"] call FP_fnc_setVehicleName; if (local this) then {[this] call FP_fnc_clearVehicle;};",
        "syncId": 7,
        "synchronizations": [
          0
        ]
      },
      "Item7": {
        "position": [
          952.51367,
          5,
          987.95117
        ],
        "id": 51,
        "side": "EMPTY",
        "vehicle": "B_MRAP_01_F",
        "leader": 1,
        "skill": 0.2,
        "text": "bcar1_1",
        "init": "[this,\"Bravo 2\"] call FP_fnc_setVehicleName; if (local this) then {[this] call FP_fnc_clearVehicle;};",
        "description": "man",
        "syncId": 8,
        "synchronizations": [
          0
        ]
      },
      "Item8": {
        "position": [
          952.77692,
          5,
          977.93457
        ],
        "id": 52,
        "side": "EMPTY",
        "vehicle": "B_MRAP_01_F",
        "leader": 1,
        "skill": 0.2,
        "text": "ccar1_1",
        "init": "[this,\"Charlie 2\"] call FP_fnc_setVehicleName; if (local this) then {[this] call FP_fnc_clearVehicle;};",
        "description": "man",
        "syncId": 9,
        "synchronizations": [
          0
        ]
      },
      "Item9": {
        "position": [
          967.21313,
          5,
          999.3916
        ],
        "id": 53,
        "side": "EMPTY",
        "vehicle": "B_Heli_Transport_01_F",
        "leader": 1,
        "lock": "UNLOCKED",
        "skill": 0.2,
        "init": "[this,\"Raven\"] call FP_fnc_setVehicleName; clearWeaponCargo this; clearMagazineCargo this; clearItemCargo this;"
      },
      "Item10": {
        "position": [
          1006.9444,
          5,
          1000.854
        ],
        "id": 54,
        "side": "EMPTY",
        "vehicle": "C_Offroad_01_F",
        "skill": 0.2,
        "init": "[this,\"RESPAWN VEHICLE\"] call FP_fnc_setVehicleName; if (local this) then {[this] call FP_fnc_clearVehicle;};",
        "syncId": 10,
        "synchronizations": [
          1
        ]
      },
      "Item11": {
        "position": [
          1012.6618,
          5,
          1000.3906
        ],
        "id": 55,
        "side": "EMPTY",
        "vehicle": "C_Offroad_01_F",
        "skill": 0.2,
        "init": " [this,\"RESPAWN VEHICLE\"] call FP_fnc_setVehicleName; if (local this) then {[this] call FP_fnc_clearVehicle;};",
        "syncId": 11,
        "synchronizations": [
          1
        ]
      },
      "Item12": {
        "position": [
          1012.5847,
          5,
          991.3291
        ],
        "id": 56,
        "side": "EMPTY",
        "vehicle": "C_Offroad_01_F",
        "skill": 0.2,
        "init": "[this,\"RESPAWN VEHICLE\"] call FP_fnc_setVehicleName; if (local this) then {[this] call FP_fnc_clearVehicle;};",
        "syncId": 12,
        "synchronizations": [
          1
        ]
      },
      "Item13": {
        "position": [
          1007.3053,
          5,
          991.13428
        ],
        "id": 57,
        "side": "EMPTY",
        "vehicle": "C_Offroad_01_F",
        "skill": 0.2,
        "init": "[this,\"RESPAWN VEHICLE\"] call FP_fnc_setVehicleName; if (local this) then {[this] call FP_fnc_clearVehicle;};",
        "syncId": 13,
        "synchronizations": [
          1
        ]
      },
      "Item14": {
        "position": [
          880.11694,
          5,
          1001.2905
        ],
        "azimut": -168.40761,
        "id": 58,
        "side": "EMPTY",
        "vehicle": "Land_Sign_WarningMilitaryVehicles_F",
        "leader": 1,
        "skill": 0,
        "description": "man"
      },
      "Item15": {
        "position": [
          886.52643,
          5,
          998.90869
        ],
        "id": 59,
        "side": "EMPTY",
        "vehicle": "Land_PaperBox_closed_F",
        "leader": 1,
        "skill": 0,
        "description": "man"
      },
      "Item16": {
        "position": [
          879.02502,
          5,
          1000.2197
        ],
        "id": 60,
        "side": "EMPTY",
        "vehicle": "Land_Pallet_MilBoxes_F",
        "leader": 1,
        "skill": 0,
        "description": "man"
      },
      "Item17": {
        "position": [
          882.87549,
          5,
          999.78271
        ],
        "azimut": 68.451752,
        "id": 61,
        "side": "EMPTY",
        "vehicle": "Land_ScrapHeap_1_F",
        "leader": 1,
        "skill": 0,
        "description": "man"
      },
      "Item18": {
        "position": [
          883.17737,
          5,
          1000.0068
        ],
        "azimut": 180,
        "id": 62,
        "side": "EMPTY",
        "vehicle": "CamoNet_BLUFOR_F",
        "leader": 1,
        "skill": 0.2,
        "description": "man"
      },
      "Item19": {
        "position": [
          886.7276,
          5,
          1001.2036
        ],
        "azimut": 26.951923,
        "id": 63,
        "side": "EMPTY",
        "vehicle": "Land_WaterTank_F",
        "leader": 1,
        "skill": 0,
        "description": "man"
      },
      "Item20": {
        "position": [
          945.29376,
          5,
          966.95117
        ],
        "id": 64,
        "side": "EMPTY",
        "vehicle": "B_MRAP_01_hmg_F",
        "leader": 1,
        "skill": 0.2,
        "text": "ccar1_2",
        "init": "[this,\"Delta 1\"] call FP_fnc_setVehicleName; if (local this) then {[this] call FP_fnc_clearVehicle;};",
        "description": "man",
        "syncId": 14,
        "synchronizations": [
          0
        ]
      },
      "Item21": {
        "position": [
          953.20026,
          5,
          966.78613
        ],
        "id": 65,
        "side": "EMPTY",
        "vehicle": "B_MRAP_01_F",
        "leader": 1,
        "skill": 0.2,
        "text": "ccar1_1_1",
        "init": "[this,\"Delta 2\"] call FP_fnc_setVehicleName; if (local this) then {[this] call FP_fnc_clearVehicle;};",
        "description": "man",
        "syncId": 15,
        "synchronizations": [
          0
        ]
      },
      "Item22": {
        "position": [
          851.61444,
          5,
          999.88818
        ],
        "azimut": 180,
        "id": 66,
        "side": "EMPTY",
        "vehicle": "CamoNet_BLUFOR_F",
        "skill": 0.2,
        "init": "this allowDamage false; this enableSimulation false;"
      },
      "Item23": {
        "position": [
          853.83563,
          5,
          999.36133
        ],
        "azimut": 144.60843,
        "id": 67,
        "side": "EMPTY",
        "vehicle": "MapBoard_altis_F",
        "skill": 0,
        "init": "this allowDamage false; this enableSimulation false;"
      },
      "Item24": {
        "position": [
          850.78687,
          5,
          1000.5488
        ],
        "id": 68,
        "side": "EMPTY",
        "vehicle": "Land_WoodenTable_large_F",
        "skill": 0,
        "init": "this allowDamage false; this enableSimulation false;"
      },
      "Item25": {
        "position": [
          852.51929,
          5,
          1000.5801
        ],
        "azimut": -173.87888,
        "id": 69,
        "side": "EMPTY",
        "vehicle": "Land_ChairPlastic_F",
        "skill": 0,
        "init": "this allowDamage false; this enableSimulation false;"
      },
      "Item26": {
        "position": [
          848.84534,
          5,
          999.63232
        ],
        "azimut": -26.996363,
        "id": 70,
        "side": "EMPTY",
        "vehicle": "Land_ChairPlastic_F",
        "skill": 0,
        "init": "this allowDamage false; this enableSimulation false;"
      },
      "Item27": {
        "position": [
          848.86664,
          5,
          1001.5205
        ],
        "azimut": 22.05645,
        "id": 71,
        "side": "EMPTY",
        "vehicle": "Land_ChairPlastic_F",
        "skill": 0,
        "init": "this allowDamage false; this enableSimulation false;"
      },
      "Item28": {
        "position": [
          983.15997,
          5,
          1000.4111
        ],
        "special": "NONE",
        "id": 72,
        "side": "EMPTY",
        "vehicle": "JS_JC_FA18F",
        "skill": 0.2,
        "init": "[this,\"Eagle\"] call FP_fnc_setVehicleName;",
        "description": "Armorered Vehicle Crew Gunner"
      },
      "Item29": {
        "position": [
          867.09705,
          5,
          999.90186
        ],
        "id": 73,
        "side": "EMPTY",
        "vehicle": "MASH_EP1",
        "leader": 1,
        "skill": 0.2,
        "init": "this allowDamage false",
        "description": "Commander (Game master)"
      },
      "Item30": {
        "position": [
          864.51453,
          5,
          1003.1899
        ],
        "id": 74,
        "side": "EMPTY",
        "vehicle": "FlagCarrierRedCross_EP1",
        "leader": 1,
        "skill": 0.2
      }
    },
    "Markers": {
      "items": 4,
      "Item0": {
        "position": [
          865.75934,
          5,
          1000.2123
        ],
        "name": "respawn_west",
        "type": "b_hq",
        "colorName": "ColorWEST"
      },
      "Item1": {
        "position": [
          866.53485,
          5,
          1000.2041
        ],
        "name": "respawn_east",
        "type": "b_hq",
        "colorName": "ColorEAST"
      },
      "Item2": {
        "position": [
          866.53998,
          5,
          999.63867
        ],
        "name": "respawn_guerrila",
        "type": "b_hq",
        "colorName": "ColorGUER"
      },
      "Item3": {
        "position": [
          865.74042,
          5,
          999.56494
        ],
        "name": "respawn_civilian",
        "type": "b_hq",
        "colorName": "ColorCIV"
      }
    }
  },
  "Intro": {
    "addOns": [
      "a3_map_stratis",
      "a3_map_altis",
      "map_vr"
    ],
    "addOnsAuto": [
      "map_vr"
    ],
    "randomSeed": 8961784,
    "Intel": {
      "startWeather": 0,
      "startWind": 0,
      "forecastWeather": 0,
      "forecastWind": 0,
      "forecastWaves": 0,
      "year": 2035,
      "month": 7,
      "day": 6,
      "hour": 12,
      "minute": 0,
      "startFogDecay": 0,
      "forecastFogDecay": 0
    }
  },
  "OutroWin": {
    "addOns": [
      "a3_map_stratis",
      "a3_map_altis",
      "map_vr"
    ],
    "addOnsAuto": [
      "map_vr"
    ],
    "randomSeed": 11319044,
    "Intel": {
      "startWeather": 0,
      "startWind": 0,
      "forecastWeather": 0,
      "forecastWind": 0,
      "forecastWaves": 0,
      "year": 2035,
      "month": 7,
      "day": 6,
      "hour": 12,
      "minute": 0,
      "startFogDecay": 0,
      "forecastFogDecay": 0
    }
  },
  "OutroLoose": {
    "addOns": [
      "a3_map_stratis",
      "a3_map_altis",
      "map_vr"
    ],
    "addOnsAuto": [
      "map_vr"
    ],
    "randomSeed": 13537339,
    "Intel": {
      "startWeather": 0,
      "startWind": 0,
      "forecastWeather": 0,
      "forecastWind": 0,
      "forecastWaves": 0,
      "year": 2035,
      "month": 7,
      "day": 6,
      "hour": 12,
      "minute": 0,
      "startFogDecay": 0,
      "forecastFogDecay": 0
    }
  }
}
/*eslint-enable*/
!(function ($) {
  var utils = {
    isObject: function (obj) { return Object.prototype.toString.call(obj) === '[object Object]' },
    isString: function (str) { return typeof str === 'string' },
    isNumber: function (nr) { return typeof nr === 'number' },
    isArray: Array.isArray
  }

  $('#menu .item').tab()
  $('#output').accordion()
})(window.jQuery)