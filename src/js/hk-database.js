// ---------------- Hollow Knight Data Constant Objects ----------------- //
/*
    This is the whole database for the tool, based on the .json save file data
*/

const HK = {

  saveAnalyzed: false,

  sections: {

    /* ################ Intro ################### */

    intro: {
      h2: "Game Status",
      id: "hk-intro",

      percent: 0,
      maxPercent: 100,
      maxPercentDefault: 100,
      maxPercentBaseGame: 100,

      /*percent: 0,
      maxPercent: 112,
      maxPercentDefault: 112,
      maxPercentBaseGame: 100,
      maxPercentGrimmTroupe: 106,
      maxPercentLifeblood: 107,*/

      extendedCompletionDone: 0,
      extendedCompletionTotal: 0,

      entries: {
        timePlayed: {
          id: "timePlayed",
          icon: "clock",
          name: "Time Played:",
          spoiler: "0 h 00 min 00 sec",
          timeH: 0,
          timeM: 0,
          timeS: 0,
        },
        gameCompletion: {
          id: "gameCompletion",
          icon: "red",
          name: "Game Completion:",
          spoiler: 0,
          spoilerAfter: "(out of 100 %)",
          spoilerAfterDefault: "(out of 100 %)",
          spoilerAfterBaseGame: "(out of 100 %)",
          /*spoilerAfter: "(out of 112 %)",
          spoilerAfterDefault: "(out of 112 %)",
          spoilerAfterBaseGame: "(out of 100 %)",
          spoilerAfterGrimmTroupe: "(out of 106 %)",
          spoilerAfterLifeblood: "(out of 107 %)",*/
        },
        gameCompletionExtended: {
          id: "gameCompletionExtended",
          icon: "red",
          name: "<strong>True Completion:</strong>",
          spoiler: 0,
          spoilerAfter: " / 0 = <b>0.00 %</b>",
          spoilerAfterDefault: " / 0 = <b>0.00 %</b>",
        },
        saveVersion: {
          id: "saveVersion",
          icon: "none",
          name: "Save Version:",
          spoiler: "0.0.0.0"
        },
        health: {
          id: "health",
          icon: "none",
          name: "Health:",
          spoiler: "",
          amountTotal: 5,
          permadeathMode: false,
        },
        silk: {
          id: "silk",
          icon: "none",
          name: "Silk:",
          spoiler: "",
          amountTotal: 5
        },
        crests: {
          id: "crests",
          icon: "none",
          name: "Crests:",
          spoiler: "",
          amountTotal: 1,
          hunter:true,
          reaper:false,
          wanderer:false,
          beast:false,
          witch:false,
          toolmaster:false,
          shaman:false,

          /*amountFilled: 0,
          amountUnused: 3,
          amountOvercharmed: 0*/
        },
        rosaries: {
          id: "rosaries",
          icon: "none",
          name: "Rosaries:",
          spoiler: "",
          amount: 0,
          amountShade: 0,
          amountTotal: 0
        },
        shellShards: {
          id: "shellShards",
          icon: "none",
          name: "Shell Shards:",
          spoiler: "",
          amount: 0
        }
      },
    },

    /* ################ Hints ################### */

    hints: {
      h2: "Elderbug once told me...",
      id: "hk-hints",
      current: "fireballLevel",
      entries: {
        fireballLevel: {
          spoiler: "A mysterious shaman is living in a dwelling, somewhere below the town of Dirtmouth."
        },
        hornet1Defeated: {
          spoiler: "A skilled protector is guarding old ruins in a lush green forest."
        },
        hasDash: {
          spoiler: "An old cloak is lying on a green path near a broken shell."
        },
        hasWalljump: {
          spoiler: "A sharp claw is lying forgotten, somewhere amidst the insect village."
        },
        Crossroads_04: {
          spoiler: "A mother is sleeping peacefully, somewhere below the town of Dirtmouth."
        },
        slyRescued: {
          spoiler: "Our fellow town bug seems to be lost, somewhere in the crossroads."
        },
        hasLantern: {
          spoiler: "Did you know? A bright little crystal companion is able to light a way through the thickest dark places."
        },
        hasSuperDash: {
          spoiler: "There is some powerful crystal beating somewhere deep inside the mines."
        },
        hasDreamNail: {
          spoiler: "A weapon from a dream world can only be found, where the souls can peacefully rest."
        },
        /* 
        Either:
        - used the elevator in Resting Grounds to City of Tears
        - opened the Fungal Wastes city gate
        */
        killedInfectedKnight: {
          spoiler: "A shattered corpse forgotten in a windy cave is lying somewhere in the ancient depths below the rainy city."
        },
        hasDoubleJump: {
          spoiler: "Something incredibly light was dropped by a monarchfly in the ancient depths below the rainy city."
        },
        dungDefenderOrHornet2: {
          spoiler: "There are two skilled combatants. One is living at the heart of the sewers. One is watching over a shell amidst ash falling from the sky."
        },
        ismaTearOrShadeCloak: {
          spoiler: "There are two precious items. One in a grove accessed from the waterways. One guarded by a massive royal door behind the darkness."
        },
        defeatedMegaJelly: {
          spoiler: "An intelligent being is floating inside hidden archives, behind the fog."
        },
        monomonDefeated: {
          spoiler: "A dreamer is sleeping somewhere, hidden in a foggy area."
        },
        hegemolDefeated: {
          spoiler: "A dreamer is sleeping near a spider nest area."
        },
        killedBlackKnight: {
          spoiler: "Discarded shells of black guards can be seen lying on the floor of a high spire."
        },
        lurienDefeated: {
          spoiler: "A dreamer is sleeping somewhere, at the top of a high spire."
        },
        killedHollowKnight: {
          spoiler: "He heard a disturbance from inside a black temple. Maybe it's worth investigating."
        },
        endOfHints: {
          spoiler: `The Knight still explores the world of Hallownest patiently, in constant search of its remaining secrets. [this is the end of the hint system (for the moment). The rest is up to you]`
        },
      },
    },

    /* ################ Crests ################### */

    crests: {
      h2: "Crests",
      id: "hk-crests",
      description: "special implements help you to progress in the game. Each new Crest learned provides 1% Game Completion.",
      percent: 0,
      maxPercent: 6,
      entries: {
        completedMemory_reaper: {
          name: "Reaper",
          spoiler: "Greymoor, west",
          wiki: "Reaper"
        },
        completedMemory_wanderer: {
          name: "Wanderer",
          spoiler: "Moss Grotto, Bonegrave",
          wiki: "Wanderer"
        },
        completedMemory_beast: {
          name: "Beast",
          spoiler: "Hunter's March, defeat Savage Beastfly boss",
          wiki: "Beast"
        },
        completedMemory_witch: {
          name: "Witch",
          spoiler: "Greymoor, complete Twisted Bud and Infestation Operation Wishs",
          wiki: "Witch"
        },
        completedMemory_toolmaster: {
          name: "Architect",
          spoiler: "Underworks, (must have 30 tools to buy architect key from Twelfth architect) ",
          wiki: "Architect"
        },
        completedMemory_shaman: {
          name: "Shaman",
          spoiler: "Moss Grotto, Ruined Chapel, Act 3",
          wiki: "Shaman"
        }
      },
    },

    /* ################ Needle Upgrades ################### */

    NeedleUpgrades: {
      h2: "Needle Upgrades",
      id: "hk-Needleupgrades",
      description: "Upgrades to the Hornet's main weapon damage. Each upgrade provides 1% Game Completion.",
      percent: 0,
      maxPercent: 4,
      entries: {
        startingNeedle: {
          name: "#0 Starting Needle",
          spoiler: "Starting Weapon",
          wiki: "Needle"
        },
        sharpenedNeedle: {
          name: "#1 Sharpened Needle",
          spoiler: "Pinmaster Plinney on Bellhart for free",
          wiki: "Pinmaster+Plinney"
        },
        shiningNeedle: {
          name: "#2 Shining Needle",
          spoiler: "find missing pale oil",
          wiki: "Pale+Oil"
        },
        hivesteelNeedle: {
          name: "#3 Hivesteel Needle",
          spoiler: "find missing pale oil",
          wiki: "Pale+Oil"
        },
        paleSteelNeedle: {
          name: "#4 Pale Steel Needle",
          spoiler: "find missing pale oil",
          wiki: "Pale+Oil"
        },
      },
    },

    /* ################ Silk Heart ################### */

    silkHeart: {
      h2: "Silk Heart",
      id: "hk-silkHeart",
      description: `Item that grant Hornet automatic Silk regeneration..<br>
      Each new Silk Heart learned provides 1% Game Completion.`,
      percent: 0,
      maxPercent: 3,
      entries: {
        Memory_Silk_Heart_BellBeast: {
          name: "#1 Silk Heart",
          spoiler: "The Marrow, Defeating the Bell Beast",
          wiki: "Silk+Heart"
        },
        Memory_Silk_Heart_WardBoss: {
          name: "#2 Silk Heart",
          spoiler: "Whiteward, Defeating The Unravelled, requires Surgeon's Key",
          wiki: "Silk+Heart"
        },
        Memory_Silk_Heart_LaceTower: {
          name: "#3 Silk Heart",
          spoiler: "The Cradle, Defeating Lace for the second time",
          wiki: "Silk+Heart"
        },
    },
  },

    /* #################### Red Tools ################### */

    redTools: {
      h2: "Red Tools",
      id: "hk-redTools",
      description: `Active tools that are almost always limited-use consumables.<br>
      Each Tool found in the game provides 1% Game Completion.`,
      /*description: `Each Charm found in the game provides 1% Game Completion.<br>
      Note: 4 new Charms were added to the game in <a href="https://steamcommunity.com/app/367520/discussions/0/1480982338946444782/" target="_blank" title="See the official Patch Notes.">patch version 1.2.1.0</a>. They are part of the Grimm Troupe Content Pack section below.`,*/
      percent: 0,
      maxPercent: 18,
      // reference: https://radiance.host/apidocs/Charms.html
      entries: {
        straightPin: {
          id: "Straight Pin",
          name: "#1 Straight Pin",
          spoiler: "The Marrow, inside of Grindle's cell",
          wiki: "Straight+Pin"
        },
        triPin: {
          id: "Tri Pin",          
          name: "#2 Threefold Pin",
          spoiler: "Greymoor, above Craw Lake, hidden cave",
          wiki: "Threefold+Pin"
        },
        stingShard: {
          id: "Sting Shard",
          name: "#3 Sting Shard",
          spoiler: "Forge Daughter: 140 Rosaries and 1 Craftmetal",
          wiki: "Sting+Shard"
        },
        Tack: {
          id:"Tack",
          name: "#4 Tacks",
          spoiler: "complete the Roach Guts Wish",
          wiki: "Tacks"
        },
        harpoon: {
          id: "Harpoon",
          name: "#5 Longpin",
          spoiler: "Shellwood, main Bellhart entrance, behind Wood Wasp",
          wiki: "Longpin"
        },
        curveClaws: {
          id: "Curve Claws",
          name: "#6 Curveclaw",
          spoiler: "Skarr: 140 Rosaries, or above skarr main location",
          wiki: "Curveclaw"
        },
        shakraRing: {
          id: "Shakra Ring",
          name: "#7 Throwing Ring",
          spoiler: "complete Trail's End wish",
          wiki: "Throwing+Ring"
        },
        pimpilo: {
          id: "Pimpilo",
          name: "#8 Pimpillo",
          spoiler: "Greymoor, northwest, above Yarnaby's home",
          wiki: "Pimpillo"
        },
        conchDrill: {
          id: "Conch Drill",
          name: "#9 Conchcutter",
          spoiler: "Sands of Karak, Coral Tower",
          wiki: "Conchcutter"
        },
        webShot: {
          id: "WebShot",
          name: "#10 Silkshot",
          spoiler: "Royal Waterways, defeat Dung Defender",
          wiki: "Silkshot"
        },
        screwAttack: {
          id: "Screw Attack",
          name: "#11 Delver's Drill",
          spoiler: "Underworks, bottom left",
          wiki: "Delver's+Drill"
        },
        cogworkSaw: {
          id: "Cogwork Saw",
          name: "#12 Cogwork Wheel",
          spoiler: "Twelfth Architect: 360 Rosaries and 1 Craftmetal.",
          wiki: "Cogwork+Wheel"
        },
        cogworkFlier: {
          id: "Cogwork Flier",
          name: "#13 Cogfly",
          spoiler: "High Halls, crafting bench, Requires 1 Craftmetal",
          wiki: "Cogfly"
        },
        rosaryCannon: {
          id: "Rosary Cannon",
          name: "#14 Rosary Cannon",
          spoiler: " High Halls, est of The Forum, behind locked door",
          wiki: "Rosary+Cannon"
        },
        lightningRod: {
          id: "Lightning Rod",
          name: "#15 Voltvessels",
          spoiler: "Memorium, top-right, behind a hidden wall",
          wiki: "Voltvessels"
        }, 
        flintstone: {
          id: "Flintstone",
          name: "#16 Flintslate",
          spoiler: "Deep Docks, behind the Simple Key door",
          wiki: "Flintslate"
        },
        fleaBrew: {
          id: "Flea Brew",
          name: "#17 Flea Brew",
          spoiler: "Helping out the Flea Caravan",
          wiki: "Flea+Brew"
        },
        lifebloodSyringe: {
          id: "Lifeblood Syringe",
          name: "#18 Plasmium Phial",
          spoiler: "Complete Alchemist's Assistant Wish",
          wiki: "Plasmium+Phial"
        },
      },
    },

    /* #################### Blue Tools ################### */

    blueTools: {
      h2: "Blue Tools",
      id: "hk-blueTools",
      description: `Combat-focused passive tools. Each Tool found in the game provides 1% Game Completion.`,
      /*description: `Each Charm found in the game provides 1% Game Completion.<br>
      Note: 4 new Charms were added to the game in <a href="https://steamcommunity.com/app/367520/discussions/0/1480982338946444782/" target="_blank" title="See the official Patch Notes.">patch version 1.2.1.0</a>. They are part of the Grimm Troupe Content Pack section below.`,*/
      percent: 0,
      maxPercent: 21,
      // reference: https://radiance.host/apidocs/Charms.html
      entries: {
        mosscreepTool: {
          id: "Mosscreep Tool",
          name: "#1 Druid's Eye",
          spoiler: "Salubra: 220 Geo",
          wiki: "Druid's+Eye"
        },
        lavaCharm: {
          id: "Lava Charm",
          name: "#2 Magma Bell",
          spoiler: "Complete Rite of the Pollip Wish",
          wiki: "Magma+Bell"
        },
        bellBind: {
          id: "Bell Bind",
          name: "#3 Warding Bell",
          spoiler: "lower Far Fields",
          wiki: "Warding+Bell"
        },
        poisonPouch: {
          id: "Poison Pouch",
          name: "#4 Pollip Pouch",
          spoiler: "Forgotten Crossroads, requires Crystal Heart",
          wiki: "Pollip+Pouch"
        },
        fracturedMask: {
          id: "Fractured Mask",
          name: "#5 Fractured Mask",
          spoiler: "Skarr: 260 Rosaries, or above skarr main location",
          wiki: "Fractured+Mask"
        },
        multibind: {
          id: "Multibind",
          name: "#6 Multibinder",
          spoiler: "Frey: 800 after comleting My Missing Courier Wish",
          wiki: "Multibinder"
        },
        whiteRing: {
          id: "White Ring",
          name: "#7 Weavelight",
          spoiler: "Weavenest Atla, defeating the 2nd Moss Mother",
          wiki: "Weavelight"
        },
        brollySpike: {
          id: "Brolly Spike",
          name: "#8 Sawtooth Circlet",
          spoiler: "Twelfth Architect: 230 Rosaries and 1 Craftmetal",
          wiki: "Sawtooth+Circlet"
        },
        quickbind: {
          id: "Quickbind",
          name: "#9 Injector Band",
          spoiler: "Whiteward",
          wiki: "Injector+Band"
        },
        spoolExtender: {
          id: "Spool Extender",
          name: "#10 Spool Extender",
          spoiler: "Jubilana: 720 Rosaries",
          wiki: "Spool+Extender"
        },
        reserveBind: {
          id: "Reserve Bind",
          name: "#11 Reserve Bind",
          spoiler: "complete Final Audience Wish",
          wiki: "Reserve+Bind"
        },
        DazzleBind: {
          id: "Dazzle Bind",
          name: "#12 Claw Mirror",
          spoiler: "Defeat Trobbio",
          wiki: "Claw+Mirror"
        },
        revengeCrystal: {
          id: "Revenge Crystal",
          name: "#13 Memory Crystal",
          spoiler: "Mount Fay, southwest, breakable wall next to bench",
          wiki: "Memory+Crystal"
        },
        thiefClaw: {
          id: "Thief Claw",
          name: "#14 Snitch Pick",
          spoiler: "Grindle : 740 Rosaries",
          wiki: "Snitch Pick"
        },
        zapImbuement: {
          id: "Zap Imbuement",
          name: "#15 Volt Filament",
          spoiler: "Defeat Voltvyrm",
          wiki: "Volt+Filament"
        },
        quickSling: {
          id: "Quick Sling",
          name: "#16 Quick Sling",
          spoiler: "2nd room above Bilewater word, breakable ceiling",
          wiki: "Quick+Sling"
        },
        maggotCharm: {
          id: "Maggot Charm",
          name: "#17 Wreath of Purity",
          spoiler: "Putrified Ducts, secret passage",
          wiki: "Wreath+of+Purity"
        },
        longneedle: {
          id: "Longneedle",
          name: "#18 Longclaw",
          spoiler: "complete Broodfeast or Runtfeast Wish",
          wiki: "Longclaw"
        },
        wispLantern: {
          id: "Wisp Lantern",
          name: "#19 Wispfire Lantern",
          spoiler: "Defeat Father of the Flame in Wisp Thicket",
          wiki: "Wispfire+Lantern"
        },
        fleaCharm: {
          id: "Flea Charm",
          name: "#20 Egg of Flealia",
          spoiler: "Fleamaster Mooshka: Find all the 30 fleas",
          wiki: "Egg+of+Flealia"
        },
        pinstressTool: {
          id: "Pinstress Tool",
          name: "#21 Pin Badge",
          spoiler: "Defeat Pinstress",
          wiki: "Pin+Badge"
        },
      },
    },

        /* #################### Red tools ################### */

    yellowTools: {
      h2: "Yellow Tools",
      id: "hk-yellowTools",
      description: `miscellaneous passive tools. Each Tool found in the game provides 1% Game Completion.`,
      /*description: `Each Charm found in the game provides 1% Game Completion.<br>
      Note: 4 new Charms were added to the game in <a href="https://steamcommunity.com/app/367520/discussions/0/1480982338946444782/" target="_blank" title="See the official Patch Notes.">patch version 1.2.1.0</a>. They are part of the Grimm Troupe Content Pack section below.`,*/
      percent: 0,
      maxPercent: 12,
      // reference: https://radiance.host/apidocs/Charms.html
      entries: {
        compass: {
          id: "Compass",
          name: "#1 Compass",
          spoiler: "Shakra: 70 Rosaries",
          wiki: "Compass"
        },
        boneNecklace: {
          id: "Bone Necklace",
          name: "#2 Shard Pendant",
          spoiler: "The Marrow, left side of the collapsing platforms",
          wiki: "Magnetite+Brooch"
        },
        rosaryMagnet: {
          id: "Rosary Magnet",
          name: "#3 Magnetite Brooch",
          spoiler: "Pebb: 120 Rosaries",
          wiki: "Grubberfly's+Elegy"
        },
        weightedAnklet: {
          id: "Weighted Anklet",
          name: "#4 Weighted Belt",
          spoiler: "Mort: 160",
          wiki: "Weighted+Belt"
        },
        barbedWire: {
          id: "Barbed Wire",
          name: "#5 Barbed Bracelet",
          spoiler: "Sinner's Road, souteast",
          wiki: "Barbed+Bracelet"
        },
        deadMansPurse: {
          id: "Dead Mans Purse",
          name: "#6 Dead Bug's Purse",
          spoiler: "Wormways",
          wiki: "Dead+Bug's+Purse"
        },
        magnetiteDice: {
          id: "Magnetite Dice",
          name: "#7 Magnetite Dice",
          spoiler: "Given by Lumble the Lucky, or Grindle: 300 on Act 3",
          wiki: "Magnetite+Dice"
        },
        scuttlebrace: {
          id: "Scuttlebrace",
          name: "#8 Scuttlebrace",
          spoiler: "Twelfth Architect: 140 Rosaries and 1 Craftmetal",
          wiki: "Scuttlebrace"
        },
        Wallcling: {
          id: "Wallcling",
          name: "#9 Ascendant's Grip",
          spoiler: "Jubilana: 350 Rosaries",
          wiki: "Ascendant's+Grip"
        },
        musicianCharm: {
          id: "Musician Charm",
          name: "#10 Silkspeed Anklets",
          spoiler: "Jubilana: 350 Rosaries after Lost Merchant Wish",
          wiki: "Silkspeed+Anklets"
        },
        sprintmaster: {
          id: "Sprintmaster",
          name: "#11 Silkspeed Anklets",
          spoiler: "Far Fields, inside Weavenest Cindril",
          wiki: "Silkspeed+Anklets"
        },
        thiefCharm: {
          id: "Thief Charm",
          name: "#12 Thief's Mark",
          spoiler: "Grindle: 350 Rosaries",
          wiki: "Thief's+Mark"
        },
      },
    },

    /* ################ Equipment ################### */

    equipment: {
      h2: "Equipment",
      id: "hk-equipment",
      description: "Also known as Abilities. Each piece of equipment collected provides 1% Game Completion.",
      percent: 0,
      maxPercent: 6,
      entries: {
        silkSpear: {
          id: "Silk Spear",
          name: "Silkspear",
          spoiler: "Mosshome",
          wiki: "Silkspear"
        },
        threadSphere: {
          id: "Thread Sphere",
          name: "Thread Storm",
          spoiler: "Greymoor",
          wiki: "Thread+Storm"
        },
        Parry: {
          id: "Parry",
          name: "Cross Stitch",
          spoiler: "Bilewater, Exhaust Organ, Defeat Phantom",
          wiki: "Cross+Stitch"
        },
        silkCharge: {
          id: "Silk Charge",
          name: "Sharpdart",
          spoiler: "Wormways",
          wiki: "Sharpdart"
        },
        silkBomb: {
          id: "Silk Bomb",
          name: "Rune Rage",
          spoiler: "The Slab, Kill the First Sinner",
          wiki: "Rune Rage"
        },
        silkBossNeedle: {
          id: "Silk Boss Needle",
          name: "Pale Nails",
          spoiler: "Kingdom's Edge, defeat Hornet Sentinel",
          wiki: "Pale+Nails"
        },
      },

      /*
      entries: {
        hasDash: {
          name: "Mothwing Cloak",
          spoiler: "Greenpath: Dash ability",
          wiki: "Mothwing_Cloak"
        },
        hasWalljump: {
          name: "Mantis Claw",
          spoiler: "Mantis Village: Wall Jump ability",
          wiki: "Mantis_Claw"
        },
        hasSuperDash: {
          name: "Crystal Heart",
          spoiler: "Crystal Peak: Super Dash ability",
          wiki: "Crystal_Heart"
        },
        hasDoubleJump: {
          name: "Monarch Wings",
          spoiler: "Ancient Basin: Double Jump ability",
          wiki: "Monarch_Wings"
        },
        hasAcidArmour: {
          name: "Isma's Tear",
          spoiler: "Royal Waterways: Acid Armour ability",
          wiki: "Isma's_Tear"
        },
        hasKingsBrand: {
          name: "King's Brand",
          spoiler: "Kingdom's Edge, defeat Hornet Sentinel",
          wiki: "King's_Brand"
        },
        hasShadowDash: {
          name: "Shade Cloak",
          spoiler: "The Abyss: Shadow Dash ability",
          wiki: "Shade_Cloak"
        }
      },
      */
    },

    /* ################ Skills ################### */

    skills: {
      h2: "Skills",
      id: "hk-skills",
      description: "Skills help you to progress in the game. Each new Skill learned provides 1% Game Completion.",
      percent: 0,
      maxPercent: 6,
      entries: {
        hasDash: {
          name: "Swift Step",
          spoiler: "Deep Docks",
          wiki: "Swift+Step"
        },
        hasWalljump: {
          name: "Cling Grip",
          spoiler: "Shellwood",
          wiki: "Cling+Grip"
        },
        hasHarpoonDash: {
          name: "Clawline",
          spoiler: "Underworks",
          wiki: "Clawline"
        },
        hasNeedolin: {
          name: "Needolin",
          spoiler: "Bellhart, defeat Widow",
          wiki: "Needolin"
        },
        hasChargeSlash: {
          name: "Needle Strike",
          spoiler: "Blasted Steps: from the Pinstress",
          wiki: "Needle+Strike"
        },
        hasSuperJump: {
          name: "Silk Soar",
          spoiler: "The Abyss, Weavenest Absolom, Act 3",
          wiki: "Silk+Soar"
        }
      },
    },

    /* ################ Miscellaneous ################### */

    miscellaneous : {
      h2: "Miscellaneous",
      id: "hk-miscellaneous",
      description: "Extra miscellaneous. Each miscellaneous provides 1% Game Completion.",
      percent: 0,
      maxPercent: 2,
      entries: {
        HasSeenEvaHeal: {
          name: "Sylphsong Step",
          spoiler: "Eva: Require 6 crests and 18 memory lockets.",
          wiki: "Sylphsong"
        },
        CompletedRedMemory: {
          name: "Everbloom",
          spoiler: "Complete The Old Hearts Wish, Act 3",
          wiki: "Everbloom"
        },
      },
    },

    /* ################ Mask Shards ################### */

    maskShards: {
      h2: "Mask Shards",
      id: "hk-maskshards",
      description: "Shards for increasing max health. Each 4 Mask Fragments collected (a full Mask) provide 1% Game Completion.",
      percent: 0,
      maxPercent: 5,
      entries: {
        PurchasedBonebottomHeartPiece: {
          name: "#1 Mask Shards",
          spoiler: "Pebb: 300 Rosariy, or  Grindle: 320 Rosairy if Pebb left",
          wiki: "All+Mask+Shard+Locations#BoneBottom",
          id: "",
          sceneName: ""
        },
        wormwayMask: {
          name: "#2 Mask Shards",
          spoiler: "Wormways, Behind a breakable wall",
          wiki: "All+Mask+Shard+Locations#Wormways",
          id: "Heart Piece",
          sceneName: "Crawl_02"
        },
        deepDocksMask: {
          name: "#3 Mask Shards ",
          spoiler: "Between the Marrow and Deep Docks, Cling Grip recommended",
          wiki: "All+Mask+Shard+Locations#DeepDocks",
          id: "Heart Piece",
          sceneName: "Dock_08"
        },
        farFieldsMask1: {
          name: "#4 Mask Shards",
          spoiler: "Area above Seamstress's home in Far Fields, requires Drifter's Cloak",
          wiki: "All+Mask+Shard+Locations#FarFields",
          id: "Heart Piece",
          sceneName: "Bone_East_20"
        },
        shellwoodMask: {
          name: "#5 Mask Shard",
          spoiler: "Centre of Shellwood, behind a breakable wall",
          wiki: "All+Mask+Shard+Locations#Shellwood",
          id: "Heart Piece",
          sceneName: "Shellwood_14"
        },
        weavenestAtlaMask: {
          name: "#6 Mask Shard",
          spoiler: "East Weavenest Atla, behind breakable wall, requires Cling Grip",
          wiki: "All+Mask+Shard+Locations#WeavenestAtla",
          id: "Heart Piece",
          sceneName: "Weave_05b"
        },
        MerchantEnclaveShellFragment: {
          name: "#7 Mask Shard",
          spoiler: "Jubilana: 750 Rosaries, after complete The Wandering Merchant Wish",
          wiki: "All+Mask+Shard+Locations#ChoralChambers",
          id: "",
          sceneName: ""
        },
        cogworkCoreMask: {
          name: "#8 Mask Shard",
          spoiler: "West Cogwork Core past enemy gauntlet, defeat Cogwork Dancers",
          wiki: "All+Mask+Shard+Locations#CogworkCore",
          id: "Heart Piece",
          sceneName: "Song_09"
        },
        libraryMask: {
          name: "#9 Mask Shard",
          spoiler: "Behind moving box puzzle in central Whispering Vaults",
          wiki: "All+Mask+Shard+Locations#WhisperingVaults",
          id: "Heart Piece",
          sceneName: "Library_05"
        },
        beastflyHuntWish: {
          name: "#10 Mask Shard",
          spoiler: "Reward for completing the Savage Beastfly Wish",
          wiki: "All+Mask+Shard+Locations#Bellhart",
          id: "",
          sceneName: "Beastfly Hunt"
        },
        boneBuildingMask: {
          name: "#11 Mask Shard",
          spoiler: "East Far Fields, inside bone building, requires Clawline and Drifter's Cloak ",
          wiki: "All+Mask+Shard+Locations#FarFields",
          id: "Heart Piece (1)",
          sceneName: "Bone_East_LavaChallenge"
        },
         mountFayMask: {
          name: "#12 Mask Shard",
          spoiler: "Mount Fay, soutwest, west of the bench, requires Faydown Cloak",
          wiki: "All+Mask+Shard+Locations#MountFay",
          id: "Heart Piece",
          sceneName: "Peak_04c"
        },
        slabMask: {
          name: "#13 Mask Shard",
          spoiler: "the Slab, Northeast, require key of Apostate and Faydown Cloak",
          wiki: "All+Mask+Shard+Locations#TheSlab",
          id: "Heart Piece",
          sceneName: "Slab_17"
        },
        bilewaterMask: {
          name: "#14 Mask Shard",
          spoiler: "Bilewater, east, end of a hallway filled with Slubberlugs",
          wiki: "All+Mask+Shard+Locations#Bilewater",
          id: "Heart Piece",
          sceneName: "Shadow_13"
        },
        wispThicketMask: {
          name: "#15 Mask Shard",
          spoiler: "Wisp Thicket, east, requires Faydown Cloak",
          wiki: "All+Mask+Shard+Locations#WispThicket",
          id: "Heart Piece",
          sceneName: "Wisp_07"
        },
        blastedStepsMask: {
          name: "#16 Mask Shard",
          spoiler: "Blasted Steps, west, requires Clawline and Faydown Cloak.",
          wiki: "All+Mask+Shard+Locations#BlastedSteps",
          id: "Heart Piece",
          sceneName: "Coral_19b"
        },
        brightveinMask: {
          name: "#17 Mask Shard",
          spoiler: "Brightvein, requires Silk Soar",
          wiki: "All+Mask+Shard+Locations#MountFay",
          id: "Heart Piece",
          sceneName: "Peak_06"
        },
        sprintmasterRaceWish: {
          name: "#18 Mask Shard",
          spoiler: "Far Fields, east, complete Fastest in Pharloom wish",
          wiki: "All+Mask+Shard+Locations#FarFields",
          id: "",
          sceneName: "Sprintmaster Race"
        },
        destroyThreadCoresWish: {
          name: "#19 Mask Shard",
          spoiler: "Bellhart Wishwall, complete Dark Hearts wish",
          wiki: "All+Mask+Shard+Locations#Bellhart",
          id: "",
          sceneName: "Destroy Thread Cores"
        },
        antTrapperWish: {
          name: "#20 Mask Shard",
          spoiler: "Bellhart Wishwall, complete Hidden Hunter wish",
          wiki: "All+Mask+Shard+Locations#Bellhart",
          id: "",
          sceneName: "Ant Trapper"
        },
      },
    },

    /* ################ Spool Fragments ################### */

    spoolFragments: {
      h2: "Spool Fragments",
      id: "hk-spoolFragments",
      description: "Fragments for increasing max silk capacity.. Each 2 Spool Fragments collected (a full spool) provide 1% Game Completion.",
      percent: 0,
      maxPercent: 9,
      entries: {
        boneBottomSpool: {
          name: "#1 Fragments",
          spoiler: "Bone Bottom, Mosshome, behind a breakable wall",
          wiki: "Spool+Fragment",
          id: "Silk Spool",
          sceneName: "Bone_11b"
        },
        deepDocksSpool1: {
          name: "#2 Fragments",
          spoiler: "Deep Docks, lower left (too lazy to explane the location..)",
          wiki: "Spool+Fragment",
          id: "Silk Spool",
          sceneName: "Bone_East_13"
        },
        greymoorSpool: {
          name: "#3 Fragments",
          spoiler: "Greymoor, above Shakra's bench",
          wiki: "Spool+Fragment",
          id: "Silk Spool",
          sceneName: "Greymoor_02"
        },
        PurchasedBelltownSpoolSegment: {
          name: "#4 Fragments",
          spoiler: "Frey: 270 Rosaries, Complete My Missing Courier Wish",
          wiki: "Spool+Fragment",
          id: "",
          sceneName: ""
        },
        weavenestAtlaSpool: {
          name: "#5 Fragments",
          spoiler: "Weavenest Atla, require Needolin",
          wiki: "Spool+Fragment",
          id: "Silk Spool",
          sceneName: "Weave_11"
        },
        slabSpool: {
          name: "#6 Fragments",
          spoiler: "The Slab, west, require Cling Grip",
          wiki: "Spool+Fragment",
          id: "Silk Spool",
          sceneName: "Peak_01"
        },
        grandGateSpool: {
          name: "#7 Fragments",
          spoiler: "Grand Gate, top",
          wiki: "Spool+Fragment",
          id: "Silk Spool",
          sceneName: "Song_19_entrance"
        },
        UnderworksSpool1: {
          name: "#8 Fragments",
          spoiler: "Underworks, pass a challenging battle area",
          wiki: "Spool+Fragment",
          id: "Silk Spool",
          sceneName: "Under_10"
        },
        MetCaravanTroupeLeaderJudge: {
          name: "#9 Fragments",
          spoiler: "Grand Gate, Flea Caravan, requires 12 fleas and Last Judge defeated",
          wiki: "Spool+Fragment",
          id: "",
          sceneName: ""
        },
        whitewardSpool: {
          name: "#10 Fragments",
          spoiler: "Whiteward, under the lift, require White Key",
          wiki: "Spool+Fragment",
          id: "Silk Spool",
          sceneName: "Ward_01"
        },
        cogworkCoreSpool: {
          name: "#11 Fragments",
          spoiler: "Cogwork Core, Southeast",
          wiki: "Spool+Fragment",
          id: "Silk Spool",
          sceneName: "Cog_07"
        },
        UnderworksSpool2: {
          name: "#12 Fragments",
          spoiler: "Underworks, east of the Cauldron",
          wiki: "Spool+Fragment",
          id: "Silk Spool",
          sceneName: "Library_11b"
        },
        saveShermaWish: {
          name: "#13 Fragments",
          spoiler: "complete Balm For The Wounded Wish",
          wiki: "Quests",
          id: "",
          sceneName: "Save Sherma"
        },
        MerchantEnclaveSpoolPiece: {
          name: "#14 Fragments",
          spoiler: "Jubilana: 500 rosaries, after complete Lost Merchant Wish",
          wiki: "Quests",
          id: "",
          sceneName: ""
        },
        deepDocksSpool2: {
          name: "#15 Fragments",
          spoiler: "Deep Docks, Southeast, require Clawline and Cling Grip",
          wiki: "Spool+Fragment",
          id: "Silk Spool",
          sceneName: "Dock_03c"
        },
         highHallsSpool: {
          name: "#16 Fragments",
          spoiler: "High Halls, top of left vertical room, require Faydown Cloak and Clawline",
          wiki: "Spool+Fragment",
          id: "Silk Spool",
          sceneName: "Hang_03_top"
        },
        MemoriumSpool: {
          name: "#17 Fragments",
          spoiler: "Memorium, western section, requires Faydown Cloak and Clawline",
          wiki: "Spool+Fragment",
          id: "Silk Spool",
          sceneName: "Arborium_09"
        },
        purchasedGrindleSpoolPiece: {
          name: "#18 Fragments",
          spoiler: "Grindle: 680 rosaries, requires Faydown Cloak and Cling Grip",
          wiki: "Spool+Fragment",
          id: "",
          sceneName: ""
        },
      },
    },


    /* ################ Crafting Kit Upgrades ################### */

    craftingKitUpgrades: {
      h2: "Crafting Kit Upgrades",
      id: "hk-craftingKitUpgrades",
      description: "Upgrade that increase Red Tool damage by +60%.. Each upgrade provide 1% Game Completion.",
      percent: 0,
      maxPercent: 4,
      entries: {
        PurchasedForgeToolKit: {
          name: "#1 Upgrades",
          spoiler: "Forge Daughter: 180 rosaries",
          wiki: "Crafting+Kit",
          id: "",
          sceneName: ""
        },
        crowFeathersWish: {
          name: "#2 Upgrades",
          spoiler: "complete Crawbug Clearing Wish",
          wiki: "Crafting+Kit",
          id: "",
          sceneName: "Crow Feathers"
        },
        PurchasedArchitectToolKit: {
          name: "#3 Upgrades",
          spoiler: "Twelfth Architect: 450 rosaries, requires Clawline",
          wiki: "Crafting+Kit",
          id: "",
          sceneName: ""
        },
        purchasedGrindleToolKit: {
          name: "#4 Upgrades",
          spoiler: "Grindle: 700 rosaries, requires Faydown Cloak",
          wiki: "Crafting+Kit",
          id: "",
          sceneName: ""
        },
        
      }
    },

    /* ################ Tool Pouch Upgrades ################### */

    toolPouchUpgrades: {
      h2: "Tool Pouch Upgrades",
      id: "hk-toolPouchUpgrades",
      description: "Upgrade that increase Red Tool damage by +60%.. Each upgrade provide 1% Game Completion.",
      percent: 0,
      maxPercent: 4,
      entries: {
        PurchasedPilgrimsRestToolPouch: {
          name: "#1 Upgrades",
          spoiler: "Mort: 220 rosaries, or Grindle: 220 (Act 3)",
          wiki: "Tool+Pouch",
          id: "",
          sceneName: ""
        },
        ladybugCraftPickupToolPouch: {
          name: "#2 Upgrades",
          spoiler: "The Marrow, Lodie Callange (Act 1 & 2), on table (Act 3)",
          wiki: "Tool+Pouch",
          id: "Ladybug Craft Pickup",
          sceneName: "Bone_12"
        },
        journalWish: {
          name: "#3 Upgrades",
          spoiler: "complete Nuu's Wish: Bugs of Pharloom",
          wiki: "Tool+Pouch",
          id: "",
          sceneName: "Journal"
        },
        CaravanTroupeLocation: {
          name: "#4 Upgrades",
          spoiler: "Mooshka after helping the Flea Caravan move to Putrified Ducts",
          wiki: "Tool+Pouch",
          id: 3,
          sceneName: "CaravanTroupeLocation"
        },
        
      }
    },

    /* ################ Hunter's Journal ################### */

    huntersJournal: {
      h2: "Hunter's Journal",
      id: "hk-journal",
      description: `All the 146 base-game Hunter's Journal entries that are counted for Hunter's Mark and Keen Hunter/True Hunter achievements. The 17 most commonly missed Journal entries are right at the top of this list.<br>
      Numbers above: <b>Completed/Encountered</b> of <b>146</b> Base Total<br>
      <i class="icon-ok-squared"></i>= note completed.<br>
      <i class="icon-ok-squared partial"></i>= entry discovered, but note not completed.<br>
      <i class="icon-cancel"></i>= entry not yet discovered.<br>
      <b>(no.)</b> = amount left to complete note.`,
      percent: 0,
      midPercent: 0,
      maxPercent: 237,
      entries: {
        mossBoneCrawler: {
          gameName: "Mossgrub",
          databaseName: "MossBone Crawler",
          name: "Mossgrub (25)",
          spoiler: "Moss Grotto and Memorium",
          killRequire: "25",
          wiki: "Mossgrub"
        },
        mossBoneCrawlerFat: {
          gameName: "Massive Mossgrub",
          databaseName: "MossBone Crawler Fat",
          name: "Massive Mossgrub (3)",
          spoiler: "Memorium",
          killRequire: "3",
          wiki: "Massive+Mossgrub"
        },
        mossBoneFly: {
          gameName: "Mossmir",
          databaseName: "MossBone Fly",
          name: "Mossmir (20)",
          spoiler: "Moss Grotto",
          killRequire: "20",
          wiki: "Mossmir"
        },
        mossboneMother: {
          gameName: "Moss Mother",
          databaseName: "Mossbone Mother",
          name: "Moss Mother (3)",
          spoiler: "Ruined Chapel, Weavenest Atla (act 1/2), and Moss Grotto (Act3)",
          killRequire: "3",
          wiki: "Moss+Mother"
        },
        aspidCollector: {
          gameName: "Aknid",
          databaseName: "Aspid Collector",
          name: "Aknid (15)",
          spoiler: "Mosshome and Bone Bottom",
          killRequire: "15",
          wiki: "Aknid"
        },
        boneGoomba: {
          gameName: "Skull Scuttler",
          databaseName: "Bone Goomba",
          name: "Skull Scuttler (35)",
          spoiler: "The Marrows",
          killRequire: "35",
          wiki: "Skull+Scuttler"
        },
        boneGoombaBounceFly: {
          gameName: "Skullwing",
          databaseName: "Bone Goomba Bounce Fly",
          name: "Skullwing (15)",
          spoiler: "Weavenest Atla",
          killRequire: "15",
          wiki: "Skullwing"
        },
        boneGoombaLarge: {
          gameName: "Skull Brute",
          databaseName: "Bone Goomba Large",
          name: "Skull Brute (15)",
          spoiler: "The Marrow",
          killRequire: "15",
          wiki: "Skull+Brute"
        },
        skullKing: {
          gameName: "Skull Tyrant",
          databaseName: "Skull King",
          name: "Skull Tyrant (1)",
          spoiler: "The Marrow",
          killRequire: "1",
          wiki: "Skull+Tyrant"
        },
        boneCrawler: {
          gameName: "Kilik",
          databaseName: "Bone Crawler",
          name: "Kilik (25)",
          spoiler: "The Marrow",
          killRequire: "25",
          wiki: "Kilik"
        },
        boneFlyer: {
          gameName: "Beastfly",
          databaseName: "Bone Flyer",
          name: "Beastfly (30)",
          spoiler: "The Marrow",
          killRequire: "30",
          wiki: "Beastfly"
        },
        boneFlyerGiant: {
          gameName: "Savage Beastfly",
          databaseName: "Bone Flyer Giant",
          name: "Savage Beastfly (2)",
          spoiler: "Chapel of the Beast, and Savage Beastfly Wish",
          killRequire: "2",
          wiki: "Savage+Beastfly"
        },
        boneCircler: {
          gameName: "Caranid",
          databaseName: "Bone Circler",
          name: "Caranid (25)",
          spoiler: "Deep Docks, The Marrow, and Far Fields",
          killRequire: "25",
          wiki: "Caranid"
        },
        boneCirclerVicious: {
          gameName: "Vicious Caranid",
          databaseName: "Bone Circler Vicious",
          name: "Vicious Caranid (15)",
          spoiler: "Far Fields",
          killRequire: "15",
          wiki: "Vicious+Caranid"
        },
        boneHopper: {
          gameName: "Hardbone Hopper",
          databaseName: "Bone Hopper",
          name: "Hardbone Hopper (20)",
          spoiler: "northeast Deep Docks",
          killRequire: "20",
          wiki: "Hardbone+Hopper"
        },
        boneHopperGiant: {
          gameName: "Hardbone Elder",
          databaseName: "Bone Hopper Giant",
          name: "Hardbone Elder (10)",
          spoiler: "northeast Far Fields (Act 3)",
          killRequire: "10",
          wiki: "Hardbone+Elder"
        },
        boneSpitter: {
          gameName: "Tarmite",
          databaseName: "Bone Spitter",
          name: "Tarmite (10)",
          spoiler: "southeast Far Fields",
          killRequire: "10",
          wiki: "Tarmite"
        },
        boneRoller: {
          gameName: "Mawling",
          databaseName: "Bone Roller",
          name: "Mawling (30)",
          spoiler: "Moss Grotto, Weavenest Atla, and Memorium",
          killRequire: "30",
          wiki: "Mawling"
        },
        boneThumper: {
          gameName: "Marrowmaw",
          databaseName: "Bone Thumper",
          name: "Marrowmaw (8)",
          spoiler: "west Weavenest Atla and east of the bench in the Memorium",
          killRequire: "8",
          wiki: "Marrowmaw"
        },
        spineFloater: {
          gameName: "Hoker",
          databaseName: "Spine Floater",
          name: "Hoker (15)",
          spoiler: "Far Fields",
          killRequire: "15",
          wiki: "Hoker"
        },
        rockRoller: {
          gameName: "Flintbeetle",
          databaseName: "Rock Roller",
          name: "Flintbeetle (3)",
          spoiler: "Volatile Flintbeetles Wish",
          killRequire: "3",
          wiki: "Flintbeetle"
        },
        rhino: {
          gameName: "Rhinogrund",
          databaseName: "Rhino",
          name: "Rhinogrund (2)",
          spoiler: "The Memorium (Act 1/2), Far Fields (Act 3)",
          killRequire: "2",
          wiki: "Rhinogrund"
        },
        cryptWorm: {
          gameName: "Gromling",
          databaseName: "Crypt Worm",
          name: "Gromling (25)",
          spoiler: "north-east Wormways",
          killRequire: "25",
          wiki: "Gromling"
        },
        boneWorm: {
          gameName: "Grom",
          databaseName: "Bone Worm",
          name: "Grom (10)",
          spoiler: "Wormways",
          killRequire: "10",
          wiki: "Grom"
        },
        boneBeast: {
          gameName: "Bell Beast",
          databaseName: "Bone Beast",
          name: "Bell Beast (1)",
          spoiler: "The Marrow's Bellway Station",
          killRequire: "1",
          wiki: "Bell+Beast"
        },
        pilgrim03: {
          gameName: "Pilgrim Groveller",
          databaseName: "Pilgrim 03",
          name: "Pilgrim Groveller (35)",
          spoiler: "Mosshome",
          killRequire: "35",
          wiki: "Pilgrim+Groveller"
        },
        pilgrim01: {
          gameName: "Pilgrim Pouncer",
          databaseName: "Pilgrim 01",
          name: "Pilgrim Pouncer (35)",
          spoiler: "Mosshome",
          killRequire: "35",
          wiki: "Pilgrim+Pouncer"
        },
        pilgrim04: {
          gameName: "Pilgrim Hornfly",
          databaseName: "Pilgrim 04",
          name: "Pilgrim Hornfly (15)",
          spoiler: "East Far Fields and west Bone Bottom",
          killRequire: "15",
          wiki: "Pilgrim+Hornfly"
        },
        pilgrim02: {
          gameName: "Pilgrim Hulk",
          databaseName: "Pilgrim 02",
          name: "Pilgrim Hulk (10)",
          spoiler: "East of the balloon in Far Fields",
          killRequire: "10",
          wiki: "Pilgrim+Hulk"
        },
        pilgrimBellThrower: {
          gameName: "Pilgrim Bellbearer",
          databaseName: "Pilgrim Bell Thrower",
          name: "Pilgrim Bellbearer (10)",
          spoiler: "Wormways",
          killRequire: "10",
          wiki: "Pilgrim+Bellbearer"
        },
        pilgrimFly: {
          gameName: "Winged Pilgrim",
          databaseName: "Pilgrim Fly",
          name: "Winged Pilgrim (25)",
          spoiler: "The Marrow and east of the balloon in Far Fields",
          killRequire: "25",
          wiki: "Winged+Pilgrim"
        },
        pilgrim05: {
          gameName: "Elder Pilgrim",
          databaseName: "Pilgrim 05",
          name: "Elder Pilgrim (5)",
          spoiler: "Bonegrave",
          killRequire: "5",
          wiki: "Elder+Pilgrim"
        },
        pilgrimBellthrowerFly: {
          gameName: "Winged Pilgrim Bellbearer",
          databaseName: "Pilgrim Bellthrower Fly",
          name: "Winged Pilgrim Bellbearer (10)",
          spoiler: "Greymoor and west Shellwood",
          killRequire: "10",
          wiki: "Winged+Pilgrim+Bellbearer"
        },
        pilgrimHiker: {
          gameName: "Pilgrim Hiker",
          databaseName: "Pilgrim Hiker",
          name: "Pilgrim Hiker (10)",
          spoiler: "Blasted Steps",
          killRequire: "10",
          wiki: "Pilgrim+Hiker"
        },
        pilgrimStaffWielder: {
          gameName: "Pilgrim Guide",
          databaseName: "Pilgrim StaffWielder",
          name: "Pilgrim Guide (15)",
          spoiler: "Greymoor in east of Halfway Home",
          killRequire: "15",
          wiki: "Pilgrim+Guide"
        },
        pilgrimMossSpitter: {
          gameName: "Overgrown Pilgrim",
          databaseName: "Pilgrim Moss Spitter",
          name: "Overgrown Pilgrim (20)",
          spoiler: "Mosshome",
          killRequire: "20",
          wiki: "Overgrown+Pilgrim"
        },
        rosaryPilgrim: {
          gameName: "Covetous Pilgrim",
          databaseName: "Rosary Pilgrim",
          name: "Covetous Pilgrim (2)",
          spoiler: "Shellwood and Bilewater",
          killRequire: "2",
          wiki: "Covetous+Pilgrim"
        },
        rosaryThief: {
          gameName: "Snitchfly",
          databaseName: "Rosary Thief",
          name: "Snitchfly (4)",
          spoiler: "Bone Bottom (Act 3) and Pilgrim's Rest (Act 3)",
          killRequire: "4",
          wiki: "Snitchfly"
        },
        tarSlug: {
          gameName: "Lavalug",
          databaseName: "Tar Slug",
          name: "Lavalug (12)",
          spoiler: "Deep Docks",
          killRequire: "12",
          wiki: "Lavalug"
        },
        tarSlugHuge: {
          gameName: "Lavalarga",
          databaseName: "Tar Slug Huge",
          name: "Lavalarga (8)",
          spoiler: "Deep Docks in a room with magma-walls & platforms",
          killRequire: "8",
          wiki: "Lavalarga"
        },
        dockWorker: {
          gameName: "Smelt Shoveller",
          databaseName: "Dock Worker",
          name: "Smelt Shoveller (25)",
          spoiler: "Deep Docks and the eastern edge of The Marrow",
          killRequire: "25",
          wiki: "Smelt+Shoveller"
        },
        dockFlyer: {
          gameName: "Flintstone Flyer",
          databaseName: "Dock Flyer",
          name: "Flintstone Flyer (25)",
          spoiler: "Deep Docks",
          killRequire: "25",
          wiki: "Flintstone+Flyer"
        },
        dockBomber: {
          gameName: "Flintflame Flyer",
          databaseName: "Dock Bomber",
          name: "Flintflame Flyer (10)",
          spoiler: "Deep Docks, require Simple Key",
          killRequire: "10",
          wiki: "Flintflame+Flyer"
        },
        shieldDockWorker: {
          gameName: "Smokerock Sifter",
          databaseName: "Shield Dock Worker",
          name: "Smokerock Sifter (10)",
          spoiler: "Deep Docks",
          killRequire: "10",
          wiki: "Smokerock+Sifter"
        },
        dockCharger: {
          gameName: "Deep Diver",
          databaseName: "Dock Charger",
          name: "Deep Diver (5)",
          spoiler: "Deep Docks, require Simple Key",
          killRequire: "5",
          wiki: "Deep+Diver"
        },
        dockGuardThrower: {
          gameName: "Forebrothers Signis & Gron",
          databaseName: "Dock Guard Thrower",
          name: "Forebrothers Signis & Gron (1)",
          spoiler: "south Deep Docks, require Simple Key",
          killRequire: "1",
          wiki: "Forebrothers+Signis+&+Gron"
        },
        smallCrab: {
          gameName: "Cragglite",
          databaseName: "Small Crab",
          name: "Cragglite (3)",
          spoiler: "Wormways, must defeat Craggler",
          killRequire: "3",
          wiki: "Cragglite"
        },
        roofCrab: {
          gameName: "Craggler",
          databaseName: "Roof Crab",
          name: "Craggler (1)",
          spoiler: "Wormways",
          killRequire: "1",
          wiki: "Craggler"
        },
        fieldsFlockFlyers: {
          gameName: "Brushflit",
          databaseName: "Fields Flock Flyers",
          name: "Brushflit (15)",
          spoiler: "Far Fields",
          killRequire: "15",
          wiki: "Brushflit"
        },
        fieldsGoomba: {
          gameName: "Fertid",
          databaseName: "Fields Goomba",
          name: "Fertid (25)",
          spoiler: "Far Fields",
          killRequire: "25",
          wiki: "Fertid"
        },
        fieldsFlyer: {
          gameName: "Flapping Fertid",
          databaseName: "Fields Flyer",
          name: "Flapping Fertid (20)",
          spoiler: "Far Fields",
          killRequire: "20",
          wiki: "Flapping+Fertid"
        },
        songGolem: {
          gameName: "Fourth Chorus",
          databaseName: "Song Golem",
          name: "Fourth Chorus (1)",
          spoiler: "Far Fields",
          killRequire: "1",
          wiki: "Fourth+Chorus"
        },
        boneHunterTiny: {
          gameName: "Skarrlid",
          databaseName: "Bone Hunter Tiny",
          name: "Skarrlid (25)",
          spoiler: "Hunter's March",
          killRequire: "25",
          wiki: "Skarrlid"
        },
        boneHunterBuzzer: {
          gameName: "Skarrwing",
          databaseName: "Bone Hunter Buzzer",
          name: "Skarrwing (30)",
          spoiler: "Hunter's March",
          killRequire: "30",
          wiki: "Skarrwing"
        },
        boneHunterChild: {
          gameName: "Skarr Scout",
          databaseName: "Bone Hunter Child",
          name: "Skarr Scout (20)",
          spoiler: "Hunter's March",
          killRequire: "20",
          wiki: "Skarr+Scout"
        },
        boneHunter: {
          gameName: "Skarr Stalker",
          databaseName: "Bone Hunter",
          name: "Skarr Stalker (15)",
          spoiler: "Hunter's March",
          killRequire: "15",
          wiki: "Skarr+Stalker"
        },
        boneHunterFly: {
          gameName: "Spear Skarr",
          databaseName: "Bone Hunter Fly",
          name: "Spear Skarr (10)",
          spoiler: "Hunter's March",
          killRequire: "10",
          wiki: "Spear+Skarr"
        },
        boneHunterThrow: {
          gameName: "Skarrgard",
          databaseName: "Bone Hunter Throw",
          name: "Skarrgard (2)",
          spoiler: "Hunter's March",
          killRequire: "2",
          wiki: "Skarrgard"
        },
        boneHunterTrapper: {
          gameName: "Gurr the Outcast",
          databaseName: "Bone Hunter Trapper",
          name: "Gurr the Outcast (1)",
          spoiler: "Guarding between The Marrow and Hunter's March, and storeroom at the top of Hunter's March",
          killRequire: "1",
          wiki: "Gurr+the+Outcast"
        },
        boneHunterChief: {
          gameName: "Last Claw",
          databaseName: "Bone Hunter Chief",
          name: "Last Claw (6)",
          spoiler: "Skarrsinger Karmelita's arena",
          killRequire: "6",
          wiki: "Last+Claw"
        },
        hunterQueen: {
          gameName: "Skarrsinger Karmelita",
          databaseName: "Hunter Queen",
          name: "Skarrsinger Karmelita (1)",
          spoiler: "Start from her statue in Hunter's Marchm Silk Soar required.",
          killRequire: "1",
          wiki: "Skarrsinger+Karmelita"
        },
        mite: {
          gameName: "Mite",
          databaseName: "Mite",
          name: "Mite (30)",
          spoiler: "Greymoor",
          killRequire: "30",
          wiki: "Mite"
        },
        mitefly: {
          gameName: "Fluttermite",
          databaseName: "Mitefly",
          name: "Fluttermite (25)",
          spoiler: "Greymoor",
          killRequire: "25",
          wiki: "Fluttermite"
        },
        gnatGiant: {
          gameName: "Mitemother",
          databaseName: "Gnat Giant",
          name: "Mitemother (10)",
          spoiler: "Greymoor",
          killRequire: "10",
          wiki: "Mitemother"
        },
        farmerCatcher: {
          gameName: "Dreg Catcher",
          databaseName: "Farmer Catcher",
          name: "Dreg Catcher (20)",
          spoiler: "Greymoor",
          killRequire: "20",
          wiki: "Dreg+Catcher"
        },
        farmerScissors: {
          gameName: "Silk Snipper",
          databaseName: "Farmer Scissors",
          name: "Silk Snipper (25)",
          spoiler: "Western towers of Greymoor",
          killRequire: "25",
          wiki: "Silk+Snipper"
        },
        farmerCentipede: {
          gameName: "Thread Raker",
          databaseName: "Farmer Centipede",
          name: "Thread Raker (15)",
          spoiler: "Outside Greymoor Bellway station",
          killRequire: "15",
          wiki: "Thread+Raker"
        },
        vampireGnat: {
          gameName: "Moorwing",
          databaseName: "Vampire Gnat",
          name: "Moorwing (1)",
          spoiler: "Greymoor",
          killRequire: "1",
          wiki: "Moorwing"
        },
        wisp: {
          gameName: "Wisp",
          databaseName: "Wisp",
          name: "Wisp (15)",
          spoiler: "Wisp Thicket",
          killRequire: "15",
          wiki: "Wisp"
        },
        farmerWisp: {
          gameName: "Burning Bug",
          databaseName: "Farmer Wisp",
          name: "Burning Bug (8)",
          spoiler: "Wisp Thicket",
          killRequire: "8",
          wiki: "Burning+Bug"
        },
        wispPyreEffigy: {
          gameName: "Father of the Flame",
          databaseName: "Wisp Pyre Effigy",
          name: "Father of the Flame (1)",
          spoiler: "Wisp Thicket",
          killRequire: "1",
          wiki: "Father+of+the+Flame"
        },
        crow: {
          gameName: "Craw",
          databaseName: "Crow",
          name: "Craw (25)",
          spoiler: "Greymoor, near Craw Lake",
          killRequire: "25",
          wiki: "Craw"
        },
        crowman: {
          gameName: "Tallcraw",
          databaseName: "Crowman",
          name: "Tallcraw (20)",
          spoiler: "Greymoor",
          killRequire: "20",
          wiki: "Tallcraw"
        },
        crowmanDagger: {
          gameName: "Squatcraw",
          databaseName: "Crowman Dagger",
          name: "Squatcraw (15)",
          spoiler: "Greymoor",
          killRequire: "15",
          wiki: "Squatcraw"
        },
        crowmanJurorTiny: {
          gameName: "Craw Juror",
          databaseName: "Crowman Juror Tiny",
          name: "Craw Juror (15)",
          spoiler: "Greymoor, near Craw Lake, require Craw Summon",
          killRequire: "15",
          wiki: "Craw+Juror"
        },
        crowmanJuror: {
          gameName: "Tallcraw Juror",
          databaseName: "Crowman Juror",
          name: "Tallcraw Juror (10)",
          spoiler: "Greymoor, near Craw Lake, require Craw Summon",
          killRequire: "10",
          wiki: "Tallcraw+Juror"
        },
        crowmanDaggerJuror: {
          gameName: "Squatcraw Juror",
          databaseName: "Crowman Dagger Juror",
          name: "Squatcraw Juror (8)",
          spoiler: "Greymoor, near Craw Lake, require Craw Summon",
          killRequire: "8",
          wiki: "Squatcraw+Juror"
        },
        crawfather: {
          gameName: "Crawfather",
          databaseName: "Crawfather",
          name: "Crawfather (1)",
          spoiler: "Greymoor, near Craw Lake, require Craw Summon",
          killRequire: "1",
          wiki: "Crawfather"
        },
        maggots: {
          gameName: "Muckmaggot",
          databaseName: "Maggots",
          name: "Muckmaggot (80)",
          spoiler: "the waters of Sinner's Road, Bilewater, and Putrified Ducts",
          killRequire: "80",
          wiki: "Muckmaggot"
        },
        dustroachPollywog: {
          gameName: "Slubberlug",
          databaseName: "Dustroach Pollywog",
          name: "Slubberlug (12)",
          spoiler: "Bilewater",
          killRequire: "12",
          wiki: "Slubberlug"
        },
        dustroach: {
          gameName: "Muckroach",
          databaseName: "Dustroach",
          name: "Muckroach (20)",
          spoiler: "Sinner's Road",
          killRequire: "20",
          wiki: "Muckroach"
        },
        bloatRoach: {
          gameName: "Bloatroach",
          databaseName: "Bloat Roach",
          name: "Bloatroach (12)",
          spoiler: "Bilewater",
          killRequire: "12",
          wiki: "Bloatroach"
        },
        roachfeederShort: {
          gameName: "Roachcatcher",
          databaseName: "Roachfeeder Short",
          name: "Roachcatcher (20)",
          spoiler: "Sinner's Road",
          killRequire: "20",
          wiki: "Roachcatcher"
        },
        roachfeederTall: {
          gameName: "Roachfeeder",
          databaseName: "Roachfeeder Tall",
          name: "Roachfeeder (20)",
          spoiler: "Sinner's Road",
          killRequire: "20",
          wiki: "Roachfeeder"
        },
        roachkeeper: {
          gameName: "Roachkeeper",
          databaseName: "Roachkeeper",
          name: "Roachkeeper (10)",
          spoiler: "Sinner's Road",
          killRequire: "10",
          wiki: "Roachkeeper"
        },
        roachkeeperChefTiny: {
          gameName: "Roachserver",
          databaseName: "Roachkeeper Chef Tiny",
          name: "Roachserver (10)",
          spoiler: "Disgraced Chef Lugoli's arena",
          killRequire: "10",
          wiki: "Roachserver"
        },
        roachkeeperChef: {
          gameName: "Disgraced Chef Lugoli",
          databaseName: "Roachkeeper Chef",
          name: "Disgraced Chef Lugoli (1)",
          spoiler: "Eastern end of Sinner's Road, requires Faydown Cloak",
          killRequire: "1",
          wiki: "Disgraced+Chef+Lugoli"
        },
        wraith: {
          gameName: "Wraith",
          databaseName: "Wraith",
          name: "Wraith (10)",
          spoiler: "The Mist",
          killRequire: "10",
          wiki: "Wraith"
        },
        swampDrifter: {
          gameName: "Mothleaf Lagnia",
          databaseName: "Swamp Drifter",
          name: "Mothleaf Lagnia (25)",
          spoiler: "Bilewater",
          killRequire: "25",
          wiki: "Mothleaf+Lagnia"
        },
        swampGoomba: {
          gameName: "Miremite",
          databaseName: "Swamp Goomba",
          name: "Miremite (20)",
          spoiler: "Bilewater",
          killRequire: "20",
          wiki: "Miremite"
        },
        swampMosquito: {
          gameName: "Swamp Squit",
          databaseName: "Swamp Mosquito",
          name: "Swamp Squit (30)",
          spoiler: "Bilewater",
          killRequire: "30",
          wiki: "Swamp+Squit"
        },
        swampMosquitoSkinny: {
          gameName: "Spit Squit",
          databaseName: "Swamp Mosquito Skinny",
          name: "Spit Squit (20)",
          spoiler: "Putrified Ducts",
          killRequire: "20",
          wiki: "Spit+Squit"
        },
        swampMuckman: {
          gameName: "Stilkin",
          databaseName: "Swamp Muckman",
          name: "Stilkin (15)",
          spoiler: "Bilewater",
          killRequire: "15",
          wiki: "Stilkin"
        },
        swampMuckmanTall: {
          gameName: "Stilkin Trapper",
          databaseName: "Swamp Muckman Tall",
          name: "Stilkin Trapper (12)",
          spoiler: "Groal the Great's boss arena, and Bilewater after defeating him",
          killRequire: "12",
          wiki: "Stilkin+Trapper"
        },
        swampShaman: {
          gameName: "Groal the Great",
          databaseName: "Swamp Shaman",
          name: "Groal the Great (1)",
          spoiler: "Bilewater",
          killRequire: "1",
          wiki: "Groal+the+Great"
        },
        swampBarnacle: {
          gameName: "Barnak",
          databaseName: "Swamp Barnacle",
          name: "Barnak (8)",
          spoiler: "Putrified Ducts",
          killRequire: "8",
          wiki: "Barnak"
        },
        swampDuctsucker: {
          gameName: "Ductsucker",
          databaseName: "Swamp Ductsucker",
          name: "Ductsucker (6)",
          spoiler: "Putrified Ducts",
          killRequire: "6",
          wiki: "Ductsucker"
        },
        pondSkater: {
          gameName: "Pond Skipper",
          databaseName: "Pond Skater",
          name: "Pond Skipper (15)",
          spoiler: "Shellwood",
          killRequire: "15",
          wiki: "Pond+Skipper"
        },
        pilgrimFisher: {
          gameName: "Pondcatcher",
          databaseName: "Pilgrim Fisher",
          name: "Pondcatcher (20)",
          spoiler: "Shellwood",
          killRequire: "20",
          wiki: "Pondcatcher"
        },
        shellwoodGnat: {
          gameName: "Shellwood Gnat",
          databaseName: "Shellwood Gnat",
          name: "Shellwood Gnat (15)",
          spoiler: "Shellwood",
          killRequire: "15",
          wiki: "Shellwood+Gnat"
        },
        shellwoodWasp: {
          gameName: "Wood Wasp",
          databaseName: "Shellwood Wasp",
          name: "Wood Wasp (12)",
          spoiler: "Shellwood",
          killRequire: "12",
          wiki: "Wood+Wasp"
        },
        stickInsect: {
          gameName: "Splinter",
          databaseName: "Stick Insect",
          name: "Splinter (12)",
          spoiler: "Shellwood",
          killRequire: "12",
          wiki: "Splinter"
        },
        stickInsectCharger: {
          gameName: "Splinterhorn",
          databaseName: "Stick Insect Charger",
          name: "Splinterhorn (10)",
          spoiler: "Shellwood",
          killRequire: "10",
          wiki: "Splinterhorn"
        },
        stickInsectFlyer: {
          gameName: "Splinterbark",
          databaseName: "Stick Insect Flyer",
          name: "Splinterbark (10)",
          spoiler: "Shellwood, or Sister Splinter arena",
          killRequire: "10",
          wiki: "Splinterbark"
        },
        splinterQueen: {
          gameName: "Sister Splinter",
          databaseName: "Splinter Queen",
          name: "Sister Splinter (1)",
          spoiler: "top of Shellwood",
          killRequire: "1",
          wiki: "Sister+Splinter"
        },
        flowerDrifter: {
          gameName: "Phacia",
          databaseName: "Flower Drifter",
          name: "Phacia (25)",
          spoiler: "Shellwood",
          killRequire: "25",
          wiki: "Phacia"
        },
        bloomShooter: {
          gameName: "Pollenica",
          databaseName: "Bloom Shooter",
          name: "Pollenica (10)",
          spoiler: "Shellwood",
          killRequire: "10",
          wiki: "Pollenica"
        },
        bloomPuncher: {
          gameName: "Gahlia",
          databaseName: "Bloom Puncher",
          name: "Gahlia (20)",
          spoiler: "Shellwood",
          killRequire: "20",
          wiki: "Gahlia"
        },
        seth: {
          gameName: "Shrine Guardian Seth",
          databaseName: "Seth",
          name: "Shrine Guardian Seth (1)",
          spoiler: "hidden area in Shellwood",
          killRequire: "1",
          wiki: "Shrine+Guardian+Seth"
        },
        flowerQueen: {
          gameName: "Nyleth",
          databaseName: "Flower Queen",
          name: "Nyleth (1)",
          spoiler: "hidden area in Shellwood",
          killRequire: "1",
          wiki: "Nyleth"
        },
        bellGoomba: {
          gameName: "Furm",
          databaseName: "Bell Goomba",
          name: "Furm (25)",
          spoiler: "bell tunnels around Bellhart",
          killRequire: "25",
          wiki: "Furm"
        },
        bellFly: {
          gameName: "Winged Furm",
          databaseName: "Bell Fly",
          name: "Winged Furm (12)",
          spoiler: "bell tunnels around Bellhart",
          killRequire: "12",
          wiki: "Winged+Furm"
        },
        bladeSpider: {
          gameName: "Pharlid",
          databaseName: "Blade Spider",
          name: "Pharlid (20)",
          spoiler: "Blasted Steps",
          killRequire: "20",
          wiki: "Pharlid"
        },
        bladeSpiderHang: {
          gameName: "Pharlid Diver",
          databaseName: "Blade Spider Hang",
          name: "Pharlid Diver (10)",
          spoiler: "Weavenest Atla",
          killRequire: "10",
          wiki: "Pharlid+Diver"
        },
        shellFossilMimic: {
          gameName: "Shardillard",
          databaseName: "Shell Fossil Mimic",
          name: "Shardillard (3)",
          spoiler: "Deep Docks, Greymoor, Sands of Karak, The Marrow",
          killRequire: "3",
          wiki: "Shardillard"
        },
        sandCentipede: {
          gameName: "Sandcarver",
          databaseName: "Sand Centipede",
          name: "Sandcarver (40)",
          spoiler: "Blasted Steps and the Sands of Karak",
          killRequire: "40",
          wiki: "Sandcarver"
        },
        coralJudgeChild: {
          gameName: "Squirrm",
          databaseName: "Coral Judge Child",
          name: "Squirrm (4)",
          spoiler: "secret room in Blasted Steps",
          killRequire: "4",
          wiki: "Squirrm"
        },
        coralJudge: {
          gameName: "Judge",
          databaseName: "Coral Judge",
          name: "Judge (15)",
          spoiler: "Blasted Steps",
          killRequire: "15",
          wiki: "Judge"
        },
        lastJudge: {
          gameName: "Last Judge",
          databaseName: "Last Judge",
          name: "Last Judge (1)",
          spoiler: "Blasted Steps",
          killRequire: "1",
          wiki: "Last+Judge"
        },
        coralSpikeGoomba: {
          gameName: "Coral Furm",
          databaseName: "Coral Spike Goomba",
          name: "Coral Furm (15)",
          spoiler: "Sands of Karak",
          killRequire: "15",
          wiki: "Coral+Furm"
        },
        coralConchShooter: {
          gameName: "Driznit",
          databaseName: "Coral Conch Shooter",
          name: "Driznit (25)",
          spoiler: "Blasted Steps",
          killRequire: "25",
          wiki: "Driznit"
        },
        coralConchShooterHeavy: {
          gameName: "Driznarga",
          databaseName: "Coral Conch Shooter Heavy",
          name: "Driznarga (14)",
          spoiler: "Sands of Karak and Memorium",
          killRequire: "14",
          wiki: "Driznarga"
        },
        coralConchStabber: {
          gameName: "Pokenabbin",
          databaseName: "Coral Conch Stabber",
          name: "Pokenabbin (16)",
          spoiler: "Sands of Karak",
          killRequire: "16",
          wiki: "Pokenabbin"
        },
        coralConchDriller: {
          gameName: "Conchfly",
          databaseName: "Coral Conch Driller",
          name: "Conchfly (8)",
          spoiler: "Sands of Karak",
          killRequire: "8",
          wiki: "Conchfly"
        },
        coralConchDrillerGiant: {
          gameName: "Great Conchfly",
          databaseName: "Coral Conch Driller Giant",
          name: "Great Conchfly (2)",
          spoiler: "Blasted Steps",
          killRequire: "2",
          wiki: "Great+Conchfly"
        },
        coralGoombas: {
          gameName: "Crustcrawler",
          databaseName: "Coral Goombas",
          name: "Crustcrawler (10)",
          spoiler: "Coral Tower",
          killRequire: "10",
          wiki: "Crustcrawler"
        },
        coralGoombaLarge: {
          gameName: "Crustcrag",
          databaseName: "Coral Goomba Large",
          name: "Crustcrag (6)",
          spoiler: "Memorium",
          killRequire: "6",
          wiki: "Crustcrag"
        },
        coralSwimmerFat: {
          gameName: "Kai",
          databaseName: "Coral Swimmer Fat",
          name: "Kai (10)",
          spoiler: "Coral Tower",
          killRequire: "10",
          wiki: "Kai"
        },
        pokeSwimmer: {
          gameName: "Spinebeak Kai",
          databaseName: "Poke Swimmer",
          name: "Spinebeak Kai (10)",
          spoiler: "Coral Tower",
          killRequire: "10",
          wiki: "Spinebeak+Kai"
        },
        spikeSwimmer: {
          gameName: "Steelspine Kai",
          databaseName: "Spike Swimmer",
          name: "Steelspine Kai (15)",
          spoiler: "Coral Tower",
          killRequire: "15",
          wiki: "Steelspine+Kai"
        },
        coralSwimmerSmall: {
          gameName: "Yuma",
          databaseName: "Coral Swimmer Small",
          name: "Yuma (16)",
          spoiler: "Coral Tower",
          killRequire: "16",
          wiki: "Yuma"
        },
        coralBigJellyfish: {
          gameName: "Yumama",
          databaseName: "Coral Big Jellyfish",
          name: "Yumama (3)",
          spoiler: "Coral Tower",
          killRequire: "3",
          wiki: "Yumama"
        },
        coralWarrior: {
          gameName: "Karaka",
          databaseName: "Coral Warrior",
          name: "Karaka (10)",
          spoiler: "Coral Tower",
          killRequire: "10",
          wiki: "Karaka"
        },
        coralFlyer: {
          gameName: "Kakri",
          databaseName: "Coral Flyer",
          name: "Kakri (10)",
          spoiler: "Coral Tower",
          killRequire: "10",
          wiki: "Kakri"
        },
        coralFlyerThrow: {
          gameName: "Yago",
          databaseName: "Coral Flyer Throw",
          name: "Yago (12)",
          spoiler: "Coral Tower",
          killRequire: "12",
          wiki: "Yago"
        },
        coralBrawler: {
          gameName: "Karak Gor",
          databaseName: "Coral Brawler",
          name: "Karak Gor (8)",
          spoiler: "Coral Tower",
          killRequire: "8",
          wiki: "Karak+Gor"
        },
        coralHunter: {
          gameName: "Alita",
          databaseName: "Coral Hunter",
          name: "Alita (6)",
          spoiler: "Coral Tower",
          killRequire: "6",
          wiki: "Alita"
        },
        coralBubbleBrute: {
          gameName: "Corrcrust Karaka",
          databaseName: "Coral Bubble Brute",
          name: "Corrcrust Karaka (6)",
          spoiler: "Coral Tower",
          killRequire: "6",
          wiki: "Corrcrust+Karaka"
        },
        coralKing: {
          gameName: "Crust King Khann",
          databaseName: "Coral King",
          name: "Crust King Khann (1)",
          spoiler: "Coral Tower",
          killRequire: "1",
          wiki: "Crust+King+Khann"
        },
        coralWarriorGrey: {
          gameName: "Watcher at the Edge",
          databaseName: "Coral Warrior Grey",
          name: "Watcher at the Edge (1)",
          spoiler: "hidden zone inside of Sands of Karak, require Silk Soar (Act 3)",
          killRequire: "1",
          wiki: "Watcher+at+the+Edge"
        },
        zapCoreEnemy: {
          gameName: "Voltvyrm",
          databaseName: "Zap Core Enemy",
          name: "Voltvyrm (1)",
          spoiler: "Sands of Karak.",
          killRequire: "1",
          wiki: "Voltvyrm"
        },
        citadelBat: {
          gameName: "Drapefly",
          databaseName: "Citadel Bat",
          name: "Drapefly (30)",
          spoiler: "Underworks and Slab",
          killRequire: "30",
          wiki: "Drapefly"
        },
        citadelBatLarge: {
          gameName: "Drapelord",
          databaseName: "Citadel Bat Large",
          name: "Drapelord (4)",
          spoiler: "East Memorium",
          killRequire: "4",
          wiki: "Drapelord"
        },
        miteHeavy: {
          gameName: "Drapemite",
          databaseName: "Mite Heavy",
          name: "Drapemite (20)",
          spoiler: "Underworks and Slab",
          killRequire: "20",
          wiki: "Drapemite"
        },
        understoreMiteGiant: {
          gameName: "Giant Drapemite",
          databaseName: "Understore Mite Giant",
          name: "Giant Drapemite (6)",
          spoiler: "High Halls",
          killRequire: "6",
          wiki: "Giant+Drapemite"
        },
        understoreSmall: {
          gameName: "Underworker",
          databaseName: "Understore Small",
          name: "Underworker (15)",
          spoiler: "Underworks ",
          killRequire: "15",
          wiki: "Underworker"
        },
        pilgrim03Understore: {
          gameName: "Underscrub",
          databaseName: "Pilgrim 03 Understore",
          name: "Underscrub (20)",
          spoiler: "Underworks ",
          killRequire: "20",
          wiki: "Underscrub"
        },
        pilgrimStaffUnderstore: {
          gameName: "Undersweep",
          databaseName: "Pilgrim Staff Understore",
          name: "Undersweep (10)",
          spoiler: "Underworks ",
          killRequire: "10",
          wiki: "Undersweep"
        },
        understorePoker: {
          gameName: "Underpoke",
          databaseName: "Understore Poker",
          name: "Underpoke (25)",
          spoiler: "Underworks ",
          killRequire: "25",
          wiki: "Underpoke"
        },
        understoreThrower: {
          gameName: "Underloft",
          databaseName: "Understore Thrower",
          name: "Underloft (25)",
          spoiler: "Underworks ",
          killRequire: "25",
          wiki: "Underloft"
        },
        understoreHeavy: {
          gameName: "Undercrank",
          databaseName: "Understore Heavy",
          name: "Undercrank (4)",
          spoiler: "Underworks ",
          killRequire: "4",
          wiki: "Undercrank"
        },
        songPilgrim01: {
          gameName: "Envoy",
          databaseName: "Song Pilgrim 01",
          name: "Envoy (20)",
          spoiler: "Choral Chambers",
          killRequire: "20",
          wiki: "Envoy"
        },
        pilgrim01Song: {
          gameName: "Choir Pouncer",
          databaseName: "Pilgrim 01 Song",
          name: "Choir Pouncer (30)",
          spoiler: "Choral Chambers",
          killRequire: "30",
          wiki: "Choir+Pouncer"
        },
        pilgrim02Song: {
          gameName: "Choir Hornhead",
          databaseName: "Pilgrim 02 Song",
          name: "Choir Hornhead (15)",
          spoiler: "Choral Chambers",
          killRequire: "15",
          wiki: "Choir+Hornhead"
        },
        pilgrim03Song: {
          gameName: "Choir Bellbearer",
          databaseName: "Pilgrim 03 Song",
          name: "Choir Bellbearer (25)",
          spoiler: "Choral Chambers",
          killRequire: "25",
          wiki: "Choir+Bellbearer"
        },
        pilgrim04Song: {
          gameName: "Choir Flyer",
          databaseName: "Pilgrim 04 Song",
          name: "Choir Flyer (20)",
          spoiler: "Choral Chambers",
          killRequire: "20",
          wiki: "Choir+Flyer"
        },
        pilgrimStomperSong: {
          gameName: "Choir Elder",
          databaseName: "Pilgrim Stomper Song",
          name: "Choir Elder (6)",
          spoiler: "Choral Chambers",
          killRequire: "6",
          wiki: "Choir+Elder"
        },
        songPilgrim03: {
          gameName: "Choristor",
          databaseName: "Song Pilgrim 03",
          name: "Choristor (25)",
          spoiler: "Choral Chambers",
          killRequire: "25",
          wiki: "Choristor"
        },
        songReed: {
          gameName: "Reed",
          databaseName: "Song Reed",
          name: "Reed (30)",
          spoiler: "Choral Chambers",
          killRequire: "30",
          wiki: "Reed"
        },
        songReedGrand: {
          gameName: "Grand Reed",
          databaseName: "Song Reed Grand",
          name: "Grand Reed (12)",
          spoiler: "Choral Chambers",
          killRequire: "12",
          wiki: "Grand+Reed"
        },
        songHeavySentry: {
          gameName: "Choir Clapper",
          databaseName: "Song Heavy Sentry",
          name: "Choir Clapper (3)",
          spoiler: "High Halls",
          killRequire: "3",
          wiki: "Choir+Clapper"
        },
        songHandmaiden: {
          gameName: "Clawmaiden",
          databaseName: "Song Handmaiden",
          name: "Clawmaiden (10)",
          spoiler: "Choral Chambers and High Halls",
          killRequire: "10",
          wiki: "Clawmaiden"
        },
        arboriumKeeper: {
          gameName: "Memoria",
          databaseName: "Arborium Keeper",
          name: "Memoria (2)",
          spoiler: "Memorium",
          killRequire: "2",
          wiki: "Memoria"
        },
        songAdministrator: {
          gameName: "Minister",
          databaseName: "Song Administrator",
          name: "Minister (15)",
          spoiler: "High Halls",
          killRequire: "15",
          wiki: "Minister"
        },
        songPilgrimMaestro: {
          gameName: "Maestro",
          databaseName: "Song Pilgrim Maestro",
          name: "Maestro (6)",
          spoiler: "High Halls",
          killRequire: "6",
          wiki: "Maestro"
        },
        songKnight: {
          gameName: "Second Sentinel",
          databaseName: "Song Knight",
          name: "Second Sentinel (1)",
          spoiler: "Final Audience Wish",
          killRequire: "1",
          wiki: "Second+Sentinel"
        },
        songThreadedHusk: {
          gameName: "Dreg Husk",
          databaseName: "Song Threaded Husk",
          name: "Dreg Husk (8)",
          spoiler: "The Unravelled",
          killRequire: "8",
          wiki: "Dreg+Husk"
        },
        songThreadedHuskSpin: {
          gameName: "Dregwheel",
          databaseName: "Song Threaded Husk Spin",
          name: "Dregwheel (8)",
          spoiler: "The Unravelled",
          killRequire: "8",
          wiki: "Dregwheel"
        },
        songPilgrim02: {
          gameName: "Surgeon",
          databaseName: "Song Pilgrim 02",
          name: "Surgeon (3)",
          spoiler: "Whiteward, specifically the Balm for the Wounded wish",
          killRequire: "3",
          wiki: "Surgeon"
        },
        songCreeper: {
          gameName: "Mortician",
          databaseName: "Song Creeper",
          name: "Mortician (10)",
          spoiler: "Whiteward",
          killRequire: "10",
          wiki: "Mortician"
        },
        conductorBoss: {
          gameName: "The Unravelled",
          databaseName: "Conductor Boss",
          name: "The Unravelled (1)",
          spoiler: "Whiteward, south-west, requires Surgeon's Key",
          killRequire: "1",
          wiki: "The+Unravelled"
        },
        understoreAutomaton: {
          gameName: "Cogwork Underfly",
          databaseName: "Understore Automaton",
          name: "Cogwork Underfly (25)",
          spoiler: "Underworks",
          killRequire: "25",
          wiki: "Cogwork+Underfly"
        },
        understoreAutomatonEX: {
          gameName: "Cogwork Hauler",
          databaseName: "Understore Automaton EX",
          name: "Cogwork Hauler (12)",
          spoiler: "Underworks",
          killRequire: "12",
          wiki: "Cogwork+Hauler"
        },
        songAutomatonGoomba: {
          gameName: "Cogwork Crawler",
          databaseName: "Song Automaton Goomba",
          name: "Cogwork Crawler (15)",
          spoiler: "Cogwork Core",
          killRequire: "15",
          wiki: "Cogwork+Crawler"
        },
        songAutomatonFly: {
          gameName: "Cogworker",
          databaseName: "Song Automaton Fly",
          name: "Cogworker (15)",
          spoiler: "Choral Chambers",
          killRequire: "15",
          wiki: "Cogworker"
        },
        songAutomatonFlySpike: {
          gameName: "Cogwork Spine",
          databaseName: "Song Automaton Fly Spike",
          name: "Cogwork Spine (10)",
          spoiler: "Choral Chambers",
          killRequire: "10",
          wiki: "Cogwork+Spine"
        },
        songAutomaton01: {
          gameName: "Cogwork Choirbug",
          databaseName: "Song Automaton 01",
          name: "Cogwork Choirbug (20)",
          spoiler: "Cogwork Core",
          killRequire: "20",
          wiki: "Cogwork+Choirbug"
        },
        songAutomaton02: {
          gameName: "Cogwork Cleanser",
          databaseName: "Song Automaton 02",
          name: "Cogwork Cleanser (12)",
          spoiler: "Cogwork Core",
          killRequire: "12",
          wiki: "Cogwork+Cleanser"
        },
        songAutomatonShield: {
          gameName: "Cogwork Defender",
          databaseName: "Song Automaton Shield",
          name: "Cogwork Defender (8)",
          spoiler: "Cogwork Core",
          killRequire: "8",
          wiki: "Cogwork+Defender"
        },
        songAutomatonBall: {
          gameName: "Cogwork Clapper",
          databaseName: "Song Automaton Ball",
          name: "Cogwork Clapper (1)",
          spoiler: "southeast room in Cogwork Core",
          killRequire: "1",
          wiki: "Cogwork+Clapper"
        },
        clockworkDancer: {
          gameName: "Cogwork Dancers",
          databaseName: "Clockwork Dancer",
          name: "Cogwork Dancers (1)",
          spoiler: "Cogwork Core",
          killRequire: "1",
          wiki: "Cogwork+Dancers"
        },
        songScholarAcolyte: {
          gameName: "Vaultborn",
          databaseName: "Song Scholar Acolyte",
          name: "Vaultborn (20)",
          spoiler: "Whispering Vaults",
          killRequire: "20",
          wiki: "Vaultborn"
        },
        lightbearer: {
          gameName: "Lampbearer",
          databaseName: "Lightbearer",
          name: "Lampbearer (20)",
          spoiler: "Whispering Vaults",
          killRequire: "20",
          wiki: "Lampbearer"
        },
        scrollkeeper: {
          gameName: "Scrollreader",
          databaseName: "Scrollkeeper",
          name: "Scrollreader (15)",
          spoiler: "Whispering Vaults",
          killRequire: "15",
          wiki: "Scrollreader"
        },
        scholar: {
          gameName: "Vaultkeeper",
          databaseName: "Scholar",
          name: "Vaultkeeper (10)",
          spoiler: "Whispering Vaults",
          killRequire: "10",
          wiki: "Vaultkeeper"
        },
        trobbio: {
          gameName: "Trobbio",
          databaseName: "Trobbio",
          name: "Trobbio (1)",
          spoiler: "The Stage between Choral Chambers and Whispering Vaults",
          killRequire: "1",
          wiki: "Trobbio"
        },
        tormentedTrobbio: {
          gameName: "Tormented Trobbio",
          databaseName: "Tormented Trobbio",
          name: "Tormented Trobbio (1)",
          spoiler: "The Stage, Pain, Anguish and Misery wish",
          killRequire: "1",
          wiki: "Tormented+Trobbio"
        },
        slabPrisonerLeaperNew: {
          gameName: "Penitent",
          databaseName: "Slab Prisoner Leaper New",
          name: "Penitent (8)",
          spoiler: "The Slab",
          killRequire: "8",
          wiki: "Penitent"
        },
        slabPrisonerFlyNew: {
          gameName: "Puny Penitent",
          databaseName: "Slab Prisoner Fly New",
          name: "Puny Penitent (6)",
          spoiler: "The Slab",
          killRequire: "6",
          wiki: "Puny+Penitent"
        },
        slabFlySmallFresh: {
          gameName: "Freshfly",
          databaseName: "Slab Fly Small Fresh",
          name: "Freshfly (20)",
          spoiler: "The Wailing Mother Wish",
          killRequire: "20",
          wiki: "Freshfly"
        },
        slabFlySmall: {
          gameName: "Scabfly",
          databaseName: "Slab Fly Small",
          name: "Scabfly (15)",
          spoiler: "The Slab",
          killRequire: "15",
          wiki: "Scabfly"
        },
        slabFlyMid: {
          gameName: "Guardfly",
          databaseName: "Slab Fly Mid",
          name: "Guardfly (10)",
          spoiler: "The Slab",
          killRequire: "10",
          wiki: "Guardfly"
        },
        slabFlyLarge: {
          gameName: "Wardenfly",
          databaseName: "Slab Fly Large",
          name: "Wardenfly (8)",
          spoiler: "The Slab",
          killRequire: "8",
          wiki: "Wardenfly"
        },
        slabFlyBroodmother: {
          gameName: "Broodmother",
          databaseName: "Slab Fly Broodmother",
          name: "Broodmother (1)",
          spoiler: "Grand Hunt wish",
          killRequire: "1",
          wiki: "Broodmother"
        },
        peaksDrifter: {
          gameName: "Driftlin",
          databaseName: "Peaks Drifter",
          name: "Driftlin (20)",
          spoiler: "Mount Fay",
          killRequire: "20",
          wiki: "Driftlin"
        },
        crystalDrifter: {
          gameName: "Mnemonid",
          databaseName: "Crystal Drifter",
          name: "Mnemonid (10)",
          spoiler: "Mount Fay",
          killRequire: "10",
          wiki: "Mnemonid"
        },
        crystalDrifterGiant: {
          gameName: "Mnemonord",
          databaseName: "Crystal Drifter Giant",
          name: "Mnemonord (3)",
          spoiler: "Mount Fay in Brightvein",
          killRequire: "3",
          wiki: "Mnemonord"
        },
        weaverServitor: {
          gameName: "Servitor Ignim",
          databaseName: "Weaver Servitor",
          name: "Servitor Ignim (8)",
          spoiler: "Weavenest Atla",
          killRequire: "8",
          wiki: "Servitor+Ignim"
        },
        weaverServitorLarge: {
          gameName: "Servitor Boran",
          databaseName: "Weaver Servitor Large",
          name: "Servitor Boran (5)",
          spoiler: "Mount Fay",
          killRequire: "5",
          wiki: "Servitor+Boran"
        },
        lifebloodFly: {
          gameName: "Winged Lifeseed",
          databaseName: "Lifeblood Fly",
          name: "Winged Lifeseed (8)",
          spoiler: "Wormways",
          killRequire: "8",
          wiki: "Winged+Lifeseed"
        },
        boneWormBlueBlood: {
          gameName: "Plasmid",
          databaseName: "Bone Worm BlueBlood",
          name: "Plasmid (15)",
          spoiler: "Wormways (Act 3)",
          killRequire: "15",
          wiki: "Plasmid"
        },
        boneWormBlueTurret: {
          gameName: "Plasmidas",
          databaseName: "Bone Worm BlueTurret",
          name: "Plasmidas (6)",
          spoiler: "Wormways (Act 3)",
          killRequire: "6",
          wiki: "Plasmidas"
        },
        blueAssistant: {
          gameName: "Plasmified Zango",
          databaseName: "Blue Assistant",
          name: "Plasmified Zango (1)",
          spoiler: "Wormways (Act 3)",
          killRequire: "1",
          wiki: "Plasmified+Zango"
        },
        lilypadFly: {
          gameName: "Leaf Glider",
          databaseName: "Lilypad Fly",
          name: "Leaf Glider (12)",
          spoiler: "Lost Verdania",
          killRequire: "12",
          wiki: "Leaf+Glider"
        },
        grassGoomba: {
          gameName: "Leaf Roller",
          databaseName: "Grass Goomba",
          name: "Leaf Roller (10)",
          spoiler: "Lost Verdania",
          killRequire: "10",
          wiki: "Leaf+Roller"
        },
        hornetDragonfly: {
          gameName: "Pendra",
          databaseName: "Hornet Dragonfly",
          name: "Pendra (10)",
          spoiler: "Lost Verdania",
          killRequire: "10",
          wiki: "Pendra"
        },
        dragonflyLarge: {
          gameName: "Pendragor",
          databaseName: "Dragonfly Large",
          name: "Pendragor (10)",
          spoiler: "Lost Verdania",
          killRequire: "10",
          wiki: "Pendragor"
        },
        lilypadTrap: {
          gameName: "Nuphar",
          databaseName: "Lilypad Trap",
          name: "Nuphar (6)",
          spoiler: "Lost Verdania",
          killRequire: "6",
          wiki: "Nuphar"
        },
        cloverstag: {
          gameName: "Cloverstag",
          databaseName: "Cloverstag",
          name: "Cloverstag (6)",
          spoiler: "Lost Verdania",
          killRequire: "6",
          wiki: "Cloverstag"
        },
        cloverstagWhite: {
          gameName: "Palestag",
          databaseName: "Cloverstag White",
          name: "Palestag (1)",
          spoiler: "Lost Verdania",
          killRequire: "1",
          wiki: "Palestag"
        },
        grasshopperChild: {
          gameName: "Kindanir",
          databaseName: "Grasshopper Child",
          name: "Kindanir (10)",
          spoiler: "Lost Verdania",
          killRequire: "10",
          wiki: "Kindanir"
        },
        grasshopperSlasher: {
          gameName: "Verdanir",
          databaseName: "Grasshopper Slasher",
          name: "Verdanir (10)",
          spoiler: "Lost Verdania",
          killRequire: "10",
          wiki: "Verdanir"
        },
        grasshopperFly: {
          gameName: "Escalion",
          databaseName: "Grasshopper Fly",
          name: "Escalion (10)",
          spoiler: "Lost Verdania",
          killRequire: "10",
          wiki: "Escalion"
        },
        cloverDancer: {
          gameName: "Clover Dancers",
          databaseName: "Clover Dancer",
          name: "Clover Dancers (1)",
          spoiler: "Lost Verdania",
          killRequire: "1",
          wiki: "Clover+Dancers"
        },
        abyssCrawler: {
          gameName: "Shadow Creeper",
          databaseName: "Abyss Crawler",
          name: "Shadow Creeper (16)",
          spoiler: "The Abyss",
          killRequire: "16",
          wiki: "Shadow+Creeper"
        },
        abyssCrawlerLarge: {
          gameName: "Shadow Charger",
          databaseName: "Abyss Crawler Large",
          name: "Shadow Charger (6)",
          spoiler: "The Abyss",
          killRequire: "6",
          wiki: "Shadow+Charger"
        },
        gloomfly: {
          gameName: "Gloomsac",
          databaseName: "Gloomfly",
          name: "Gloomsac (15)",
          spoiler: "The Abyss",
          killRequire: "15",
          wiki: "Gloomsac"
        },
        gloomBeast: {
          gameName: "Gargant Gloom",
          databaseName: "Gloom Beast",
          name: "Gargant Gloom (4)",
          spoiler: "The Abyss",
          killRequire: "4",
          wiki: "Gargant+Gloom"
        },
        voidTendrils: {
          gameName: "Void Tendrils",
          databaseName: "Void Tendrils",
          name: "Void Tendrils (1)",
          spoiler: "Weavenest Absolom, in the lower eastern section of the Abyss",
          killRequire: "1",
          wiki: "Void+Tendrils"
        },
        blackThreadCore: {
          gameName: "Void Mass",
          databaseName: "Black Thread Core",
          name: "Void Mass (8)",
          spoiler: "Around the map (Act 3)",
          killRequire: "8",
          wiki: "Void+Mass"
        },
        whitePalaceFly: {
          gameName: "Wingmould",
          databaseName: "White Palace Fly",
          name: "Wingmould (10)",
          spoiler: "Red Memory",
          killRequire: "10",
          wiki: "Wingmould"
        },
        centipedeTrap: {
          gameName: "Garpid",
          databaseName: "Centipede Trap",
          name: "Garpid (30)",
          spoiler: "Secret area above The Cradle",
          killRequire: "30",
          wiki: "Garpid"
        },
        spikeLazyFlyer: {
          gameName: "Imoba",
          databaseName: "Spike Lazy Flyer",
          name: "Imoba (4)",
          spoiler: "Secret area above The Cradle",
          killRequire: "4",
          wiki: "Imoba"
        },
        surfaceScuttler: {
          gameName: "Skrill",
          databaseName: "Surface Scuttler",
          name: "Skrill (10)",
          spoiler: "The ruins of The Cradle",
          killRequire: "10",
          wiki: "Skrill"
        },
        giantCentipede: {
          gameName: "Bell Eater",
          databaseName: "Giant Centipede",
          name: "Bell Eater (1)",
          spoiler: "Any Bellway Station in beginning of Act 3 ",
          killRequire: "1",
          wiki: "Bell+Eater"
        },
        giantFlea: {
          gameName: "Huge Flea",
          databaseName: "Giant Flea",
          name: "Huge Flea (1)",
          spoiler: "Memorium",
          killRequire: "1",
          wiki: "Huge+Flea"
        },
        garmond: {
          gameName: "Lost Garmond",
          databaseName: "Garmond",
          name: "Lost Garmond (1)",
          spoiler: "Hero's Call wish",
          killRequire: "1",
          wiki: "Lost+Garmond"
        },
        pinstressBoss: {
          gameName: "Pinstress",
          databaseName: "Pinstress Boss",
          name: "Pinstress (1)",
          spoiler: "Fatal Resolve wish",
          killRequire: "1",
          wiki: "Pinstress"
        },
        spinnerBoss: {
          gameName: "Widow",
          databaseName: "Spinner Boss",
          name: "Widow (1)",
          spoiler: "Bellhart above the town",
          killRequire: "1",
          wiki: "Widow"
        },
        firstWeaver: {
          gameName: "First Sinner",
          databaseName: "First Weaver",
          name: "First Sinner (1)",
          spoiler: "the Slab, require Key of Apostate",
          killRequire: "1",
          wiki: "First+Sinner"
        },
        phantom: {
          gameName: "Phantom",
          databaseName: "Phantom",
          name: "Phantom (1)",
          spoiler: "Bilewater through The Mist in Sinner's Road",
          killRequire: "1",
          wiki: "Phantom"
        },
        lace: {
          gameName: "Lace",
          databaseName: "Lace",
          name: "Lace (2)",
          spoiler: "Deep Docks and the Cradle",
          killRequire: "2",
          wiki: "Lace"
        },
        silkBoss: {
          gameName: "Grand Mother Silk",
          databaseName: "Silk Boss",
          name: "Grand Mother Silk (1)",
          spoiler: "the Cradle",
          killRequire: "1",
          wiki: "Grand+Mother+Silk"
        },
        lostLace: {
          gameName: "Lost Lace",
          databaseName: "Lost Lace",
          name: "Lost Lace (1)",
          spoiler: "The Abyss, require Everbloom",
          killRequire: "1",
          wiki: "Lost+Lace"
        }
      },
    },

    /* ################### Flea Save ################### */

    flea: {
      h2: "Flea",
      id: "hk-flea",
      description: `Flea that belong to Flea Caravan. Help them and the caravan will reward you. they dont count as part of the`,
      percent: 0,
      maxPercent: 30,
      entries: {
        SavedFlea_Bone_06: {
          name: "#1 The Marrow",
          spoiler: "Nothing required",
          wiki: "All+Lost+Flea+Locations#themarrow"
        },
        SavedFlea_Dock_16: {
          name: "#2 Deep Docks",
          spoiler: "Nothing required",
          wiki: "All+Lost+Flea+Locations#deepdocks"
        },
        SavedFlea_Bone_East_05: {
          name: "#3 Deep Docks",
          spoiler: "Swift Step",
          wiki: "All+Lost+Flea+Locations#deepdocks"
        },
        SavedFlea_Dock_03d: {
          name: "#4 Deep Docks",
          spoiler: "Clawline",
          wiki: "All+Lost+Flea+Locations#deepdocks"
        },
        SavedFlea_Ant_03: {
          name: "#5 Hunter's March",
          spoiler: "Nothing required",
          wiki: "All+Lost+Flea+Locations#huntersmarch"
        },
        SavedFlea_Bone_East_17b: {
          name: "#6 Far Fields",
          spoiler: "Nothing required",
          wiki: "All+Lost+Flea+Locations#farfields"
        },
        SavedFlea_Bone_East_10_Church: {
          name: "#7 Far Fields",
          spoiler: "Require Drifter's Cloak and Cling Grip",
          wiki: "All+Lost+Flea+Locations#farfields"
        },
        SavedFlea_Crawl_06: {
          name: "#8 Wormways",
          spoiler: "Nothing required",
          wiki: "All+Lost+Flea+Locations#wormways"
        },        
        SavedFlea_Greymoor_15b: {
          name: "#9 Greymoor",
          spoiler: "Nothing required",
          wiki: "All+Lost+Flea+Locations#crawlake"
        },        
        SavedFlea_Greymoor_06: {
          name: "#10 Greymoor",
          spoiler: "Nothing required",
          wiki: "All+Lost+Flea+Locations#greymoor"
        },        
        CaravanLechReturnedToCaravan: {
          name: "#11 Greymoor (Kratt)",
          spoiler: "Nothing required",
          wiki: "Kratt"
        },        
        SavedFlea_Belltown_04: {
          name: "#12 Bellhart",
          spoiler: "Nothing required",
          wiki: "All+Lost+Flea+Locations#bellhart"
        },        
        SavedFlea_Shellwood_03: {
          name: "#13 Shellwood",
          spoiler: "Nothing required",
          wiki: "All+Lost+Flea+Locations#shellwood"
        },        
        SavedFlea_Coral_35: {
          name: "#14 Blasted Steps",
          spoiler: "Nothing required",
          wiki: "All+Lost+Flea+Locations#blastedsteps"
        },        
        SavedFlea_Dust_12: {
          name: "#15 Sinner's Road",
          spoiler: "Nothing required",
          wiki: "All+Lost+Flea+Locations#sinnersroad"
        },        
        SavedFlea_Shadow_28: {
          name: "#16 Bilewater",
          spoiler: "Nothing required",
          wiki: "All+Lost+Flea+Locations#bilewater"
        },        
        SavedFlea_Dust_09: {
          name: "#17 Bilewater",
          spoiler: "Nothing required",
          wiki: "All+Lost+Flea+Locations#bilewater"
        },        
        SavedFlea_Shadow_10: {
          name: "#18 Bilewater",
          spoiler: "Require Cling Grip",
          wiki: "All+Lost+Flea+Locations#bilewater"
        },        
        SavedFlea_Under_23: {
          name: "#19 Underworks",
          spoiler: "Nothing required",
          wiki: "All+Lost+Flea+Locations#wispthicket"
        },        
        SavedFlea_Under_21: {
          name: "#20 Underworks",
          spoiler: "Nothing required",
          wiki: "All+Lost+Flea+Locations#underworks"
        },        
        SavedFlea_Song_14: {
          name: "#21 Choral Chambers",
          spoiler: "Nothing required",
          wiki: "All+Lost+Flea+Locations#choralchambers"
        },        
        SavedFlea_Song_11: {
          name: "#22 Choral Chambers",
          spoiler: "Drifter's Cloak (or needle-bounce)",
          wiki: "All+Lost+Flea+Locations#choralchambers"
        },        
        SavedFlea_Library_09: {
          name: "#23 Choral Chambers",
          spoiler: "Nothing required",
          wiki: "All+Lost+Flea+Locations#songclave"
        },        
        tamedGiantFlea: {
          name: "#24 Memorium",
          spoiler: "Defeat the Huge Flea in the top",
          wiki: "All+Lost+Flea+Locations#memorium"
        },        
        SavedFlea_Slab_Cell: {
          name: "#25 The Slab",
          spoiler: "Nothing required",
          wiki: "All+Lost+Flea+Locations#theslab"
        },        
        SavedFlea_Slab_06: {
          name: "#26 The Slab",
          spoiler: "Nothing required",
          wiki: "All+Lost+Flea+Locations#theslab"
        },        
        SavedFlea_Peak_05c: {
          name: "#27 Mount Fay",
          spoiler: "Nothing required",
          wiki: "All+Lost+Flea+Locations#mountfay"
        },        
        SavedFlea_Coral_24: {
          name: "#28 Sands of Karak",
          spoiler: "Nothing required",
          wiki: "All+Lost+Flea+Locations#sandsofkarak"
        },        
        MetTroupeHunterWild: {
          name: "#29 Putrified Ducts (Vog)",
          spoiler: "Nothing required",
          wiki: "All+Lost+Flea+Locations#putrifiedducts"
        },        
        SavedFlea_Library_01: {
          name: "#30 Whispering Vaults",
          spoiler: "Nothing required",
          wiki: "All+Lost+Flea+Locations#whisperingvaults"
        },
      },
    },
    
    /********************************************************************************************************* */
    /********************************************************************************************************* */
    /********************************************************************************************************* */
    /********************************************************************************************************* */
    /********************************************************************************************************* */
    /********************************************************************************************************* */
    /********************************************************************************************************* */

    /* ################### Bosses ################### */

    /*bosses: {
      h2: "Bosses",
      id: "hk-bosses",
      description: `Each boss from this list provides 1% Game Completion.<br>
      Note: There are many other bosses in the game. Only about ~half of the total bosses count directly towards % Game Completion stat.<br>
      <b>P1-P4</b> = difficulty level and which <span class='spoiler-span blurred'>Pantheon</span> a given boss unlocks.`,
      percent: 0,
      maxPercent: 14,
      entries: {
        // killedBigFly
        bossGruzMother: {
          name: "P1 Gruz Mother",
          spoiler: "Forgotten Crossroads, lower right area",
          id: "Battle Scene",
          sceneName: "Crossroads_04",
          wiki: "Gruz_Mother"
        },
        falseKnightDefeated: {
          name: "P1 False Knight",
          spoiler: "Forgotten Crossroads, middle area map symbol",
          wiki: "False_Knight"
        }, // "Battle Scene" - "Crossroads_10" ?
        hornet1Defeated: {
          name: "P1 Hornet Protector",
          spoiler: "Greenpath, above Stag Station",
          wiki: "Hornet_Protector"
        },
        defeatedDungDefender: {
          name: "P1 Dung Defender",
          spoiler: "Royal Waterways, right area",
          wiki: "Dung_Defender"
        },
        // killedMawlek
        bossBroodingMawlek: {
          name: "P1 Brooding Mawlek",
          spoiler: "Forgotten Crossroads, use Mantis Claw",
          id: "Battle Scene",
          sceneName: "Crossroads_09",
          wiki: "Brooding_Mawlek"
        },
        mageLordDefeated: {
          name: "P2 Soul Master",
          spoiler: "City of Tears: Soul Sanctum",
          wiki: "Soul_Master"
        },
        defeatedMantisLords: {
          name: "P2 Mantis Lords",
          spoiler: "Fungal Wastes: Mantis Village",
          wiki: "Mantis_Lords"
        },
        // "Battle Scene" - "Deepnest_32" ?
        killedMimicSpider: {
          name: "P2 Nosk",
          spoiler: "Deepnest, use Crystal Heart, left of Hot Spring",
          wiki: "Nosk"
        },
        killedInfectedKnight: {
          name: "P2 Broken Vessel",
          spoiler: "Ancient Basin, lower left, use Crystal Heart",
          wiki: "Broken_Vessel"
        },
        collectorDefeated: {
          name: "P3 The Collector",
          spoiler: "City of Tears: Tower of Love",
          wiki: "Collector"
        },
        defeatedMegaJelly: {
          name: "P3 Uumuu",
          spoiler: "Fog Canyon: Teacher's Archives",
          wiki: "Uumuu"
        },
        hornetOutskirtsDefeated: {
          name: "P3 Hornet Sentinel",
          spoiler: "Kingdom's Edge, requires Monarch Wings",
          wiki: "Hornet_Sentinel"
        },
        // "Battle Scene" - "Fungus3_23" ?
        killedTraitorLord: {
          name: "P4 Traitor Lord",
          spoiler: "Queen's Gardens, requires Shade Cloak",
          wiki: "Traitor_Lord"
        },
        killedBlackKnight: {
          name: "P4 Watcher Knights",
          spoiler: "City of Tears: Watcher's Spire",
          wiki: "Watcher_Knight"
        }
      },
    },*/

    /* ################ Nail Arts ################### */

    /*nailArts: {
      h2: "Nail Arts",
      id: "hk-nailarts",
      description: "Advanced weapon combat techniques. Each new technique learned provides 1% Game Completion.",
      percent: 0,
      maxPercent: 3,
      entries: {
        // this is correct - somehow Team Cherry switched the names here
        hasDashSlash: {
          name: "Great Slash",
          spoiler: "Nailmaster Sheo: Greenpath",
          wiki: "Great_Slash"
        },
        // this is correct - somehow Team Cherry switched the names here 
        hasUpwardSlash: {
          name: "Dash Slash",
          spoiler: "Nailmaster Oro: Kingdom's Edge, 800 Geo",
          wiki: "Dash_Slash"
        },
        hasCyclone: {
          name: "Cyclone Slash",
          spoiler: "Nailmaster Mato: Howling Cliffs",
          wiki: "Cyclone_Slash"
        },
      },
    },*/


    /* ################ Dream Nail and Essence ################### */

    /*dreamNail: {
      h2: "Dream Nail and Essence",
      id: "hk-dreamnail",
      description: "A special dream Ability. Can collect Essence and enter dreams. Each milestone here will provide 1% Game Completion.",
      percent: 0,
      maxPercent: 3,
      entries: {
        hasDreamNail: {
          name: "Dream Nail Acquired",
          spoiler: "Resting Grounds",
          wiki: "Dream_Nail"
        },
        dreamNailUpgraded: {
          name: "Awoken Dream Nail",
          spoiler: "Seer: 1800 Essence",
          wiki: "Dream_Nail#Awoken_Dream_Nail"
        },
        mothDeparted: {
          name: "Hear the Seer's Final Words",
          spoiler: "Seer: 2400 Essence",
          wiki: "Seer"
        }
      },
    },*/

    /* ################ Warrior Dreams ################### */

    /*warriorDreams: {
      h2: "Warrior Dreams",
      id: "hk-warriordreams",
      description: `Special kind of bosses in Hollow Knight, which provide Essence and 1% Game Completion after defeat.<br>
      Note: The Essence must be collected before each boss will provide 1% Game Completion. Uncollected Essence will be marked as not completed.`,
      percent: 0,
      maxPercent: 7,
      entries: {
        aladarSlugDefeated: {
          name: "P1 Gorb",
          spoiler: "Howling Cliffs, top middle area",
          wiki: "Gorb"
        },
        xeroDefeated: {
          name: "P2 Xero",
          spoiler: "Resting Grounds, below Crystal Peak drop",
          wiki: "Xero"
        },
        mumCaterpillarDefeated: {
          name: "P2 Marmu",
          spoiler: "Queen's Gardens, left of Stag Station",
          wiki: "Marmu"
        },
        elderHuDefeated: {
          name: "P3 Elder Hu",
          spoiler: "Fungal Wastes, above acid bridge",
          wiki: "Elder_Hu"
        },
        galienDefeated: {
          name: "P3 Galien",
          spoiler: "Deepnest, below Failed Tramway",
          wiki: "Galien"
        },
        noEyesDefeated: {
          name: "P4 No Eyes",
          spoiler: "Greenpath: Stone Sanctuary, requires Lumafly Lantern",
          wiki: "No_Eyes"
        },
        markothDefeated: {
          name: "P4 Markoth",
          spoiler: "Kingdom's Edge, requires Shade Cloak",
          wiki: "Markoth"
        },
      },
    },*/

    /* ################ Dreamers ################### */

    /*dreamers: {
      h2: "Dreamers",
      id: "hk-dreamers",
      description: "Each Dreamer will provide 1% Game Completion.",
      percent: 0,
      maxPercent: 3,
      entries: {
        lurienDefeated: {
          name: "Lurien the Watcher",
          spoiler: "City of Tears: Watcher's Spire",
          wiki: "Lurien"
        },
        monomonDefeated: {
          name: "Monomon the Teacher",
          spoiler: "Fog Canyon: Teacher's Archives",
          wiki: "Monomon"
        },
        hegemolDefeated: {
          name: "Herrah the Beast",
          spoiler: "Deepnest: Distant Village",
          wiki: "Herrah"
        }
      },
    },*/

    /* ################ Colosseum of Fools ################### */

    /*colosseum: {
      h2: "Colosseum of Fools",
      id: "hk-colosseum",
      description: "Completing each Trial in the Colosseum provides 1% Game Completion. This section sums up the original 100% Game Completion Percentage from Hollow Knight in 2017 (without Content Packs).",
      percent: 0,
      maxPercent: 3,
      entries: {
        colosseumBronzeCompleted: {
          name: "Trial of the Warrior",
          spoiler: "Kingdom's Edge: top area, Little Fool: 100 Geo",
          wiki: "Trial_of_the_Warrior"
        },
        colosseumSilverCompleted: {
          name: "Trial of the Conqueror",
          spoiler: "Little Fool: 450 Geo + Warrior completed",
          wiki: "Trial_of_the_Conqueror"
        },
        colosseumGoldCompleted: {
          name: "Trial of the Fool",
          spoiler: "Little Fool: 800 Geo + Conqueror completed",
          wiki: "Trial_of_the_Fool"
        },
      },
    },*/

    /* ################ Grimm Troupe Content Pack ################### */

    /*grimmTroupe: {
      h2: "Grimm Troupe Content Pack",
      id: "hk-grimmtroupe",
      description: `The first Content Pack. Released October 26th, 2017 (<a href="https://steamcommunity.com/app/367520/discussions/0/1480982338946444782/" target="_blank" title="See the official Patch Notes.">1.2.1.0 Game Update</a>). It added additional +6% to max Game Completion Percentage.<br>
      Note: It requires making a choice, but no matter what you will choose, you will still get the same +1%.`,
      percent: 0,
      maxPercent: 6,
      entries: {
        gotCharm_37: {
          name: "Charm #37 Sprintmaster",
          spoiler: "Sly: 400 Geo + Shopkeeper's Key",
          wiki: "Sprintmaster"
        },
        gotCharm_38: {
          name: "Charm #38 Dreamshield",
          spoiler: "Resting Grounds, go left below Seer",
          wiki: "Dreamshield"
        },
        gotCharm_39: {
          name: "Charm #39 Weaversong",
          spoiler: "Deepnest: Weaver's Den",
          wiki: "Weaversong"
        },
        gotCharm_40: {
          name: "Charm #40 Grimmchild or Carefree Melody",
          nameDefault: "Charm #40 Grimmchild or Carefree Melody",
          nameGrimmchildP1: "Charm #40: Grimmchild (Phase 1)",
          nameGrimmchildP2: "Charm #40: Grimmchild (Phase 2)",
          nameGrimmchildP3: "Charm #40: Grimmchild (Phase 3)",
          nameGrimmchildP4: "Charm #40: Grimmchild (Phase 4)",
          nameCarefreeMelody: "Charm #40: Carefree Melody",
          spoiler: "Dirtmouth",
          spoilerDefault: "Dirtmouth",
          spoilerGrimmchildP1: "Collect 3 flames",
          spoilerGrimmchildP2: "Collect 3 flames",
          spoilerGrimmchildP3: "Collect 3 flames",
          spoilerGrimmchildP4: "Completed the Ritual",
          spoilerCarefreeMelody: "Banished Grimm Troupe",
          wiki: "Grimmchild",
          wikiDefault: "Grimmchild",
          wikiGrimmchild: "Grimmchild",
          wikiCarefreeMelody: "Carefree_Melody"
        },
        killedGrimm: {
          name: "P3 Troupe Master Grimm",
          spoiler: "Dirtmouth, collect 6 flames",
          wiki: "Grimm"
        },
        grimmChildLevel: {
          name: "Complete Ritual or Banish Troupe",
          nameDefault: "Complete Ritual or Banish Troupe",
          nameNightmareKing: "Grimm Troupe Choice: Nightmare King",
          nameBanishment: "Grimm Troupe Choice: Banishment",
          spoiler: "One choice per save file: Dirtmouth or Howling Cliffs",
          spoilerDefault: "One choice per save file: Dirtmouth or Howling Cliffs",
          spoilerNightmareKing: "Completed the Ritual",
          spoilerBanishment: "Banished Grimm Troupe",
          wiki: "Grimm_Troupe_(Quest)",
          wikiDefault: "Grimm_Troupe_(Quest)",
          wikiNightmareKing: "Nightmare_King_Grimm",
          wikiBanishment: "Nymm",
        }
      },
    },*/

    /* ################ Lifeblood Content Pack ################### */

    /*lifeblood: {
      h2: "Lifeblood Content Pack",
      id: "hk-lifeblood",
      description: `The second Content Pack. Released April 20th, 2018 (<a href="https://steamcommunity.com/app/367520/discussions/0/3211505894131332245/" target="_blank" title="See the official Patch Notes.">1.3.1.5 Game Update</a>). Among many quality changes, it added one new boss, which increased the max Game Completion Percentage by +1%.`,
      percent: 0,
      maxPercent: 1,
      entries: {
        killedHiveKnight: {
          name: "P3 Hive Knight",
          spoiler: "The Hive, guards Hiveblood charm",
          wiki: "Hive_Knight"
        }
      },
    },*/

    /* ################ Godmaster Content Pack ################### */

    /*godmaster: {
      h2: "Godmaster Content Pack",
      id: "hk-godmaster",
      description: `The third Content Pack. Released August 23rd, 2018 (<a href="https://hollowknight.fandom.com/wiki/Updates_(Hollow_Knight)#1.4.2.4" target="_blank" title="See the official Patch Notes.">1.4.2.4 Game Update</a>). It added additional +5% to max Game Completion Percentage (up to a total of 112%).`,
      percent: 0,
      maxPercent: 5,
      entries: {
        hasGodfinder: {
          name: "Godtuner",
          spoiler: "Royal Waterways: Junk Pit, requires Simple Key",
          wiki: "Godtuner"
        },
        // ########## Godmaster doors ##########
        pantheonMaster: {
          name: "P1 Pantheon of the Master",
          spoiler: "Godhome: defeat P1 bosses",
          wiki: "Pantheon_of_the_Master",
          property: "bossDoorStateTier1"
        },
        pantheonArtist: {
          name: "P2 Pantheon of the Artist",
          spoiler: "Godhome: defeat P2 bosses",
          wiki: "Pantheon_of_the_Artist",
          property: "bossDoorStateTier2"
        },
        pantheonSage: {
          name: "P3 Pantheon of the Sage",
          spoiler: "Godhome: defeat P3 bosses",
          wiki: "Pantheon_of_the_Sage",
          property: "bossDoorStateTier3"
        },
        pantheonKnight: {
          name: "P4 Pantheon of the Knight",
          spoiler: "Godhome: complete P1, P2 and P3",
          wiki: "Pantheon_of_the_Knight",
          property: "bossDoorStateTier4"
        }
      },
    },*/

    /* ################ Essentials % -> Collectibles ################### */

    /*essentialsCollectibles: {
      h2: "Game Completion % Essentials – Collectibles",
      id: "hk-essentials-collectibles",
      description: "Collectibles that don't count directly towards 112% Game Completion, but are required to achieve full 112%.",
      entries: {
        grubsCollected: {
          name: "Grubs Rescued",
          spoiler: "46 Grubs total",
          max: 46,
          maxDefault: 46,
          wiki: "Grub"
        },
        grubRewards: {
          name: "Grubfather Rewards Awarded",
          spoiler: "46 Rewards total",
          max: 46,
          maxDefault: 46,
          wiki: "Grub#Rewards_and_locations"
        },
        charmsOwned: {
          name: "Charms Owned",
          spoiler: "40 Charms total, useful for Salubra Notches",
          max: 40,
          maxDefault: 40,
          wiki: "Category:Charms#List_of_Charms"
        },
        dreamOrbs: {
          name: "Essence Collected",
          spoiler: "Dream Nail (2400 for completion)",
          max: 2400,
          maxDefault: 2400,
          wiki: "Dream_Nail#Essence"
        },
        hasLantern: {
          name: "Lumafly Lantern",
          spoiler: "Sly: 1800 Geo",
          wiki: "Lumafly_Lantern"
        },
        shopkeeperKey: {
          name: "Shopkeeper's Key",
          spoiler: "Crystal Peak, below Quirrel location",
          wiki: "Shopkeeper's_Key"
        },
        elegantKey: {
          name: "Elegant Key",
          spoiler: "Sly: 800 Geo + Shopkeeper's Key",
          wiki: "Elegant_Key"
        },
        loveKey: {
          name: "Love Key",
          spoiler: "Queen's Gardens, near Fungal Wastes",
          wiki: "Love_Key"
        },
        slySimpleKey: {
          name: "Simple Key #1",
          spoiler: "Sly: 950 Geo",
          wiki: "Simple_Key"
        },
        simpleKeyCityOfTears: {
          name: "Simple Key #2",
          spoiler: "City of Tears, below left Stag Station",
          id: "Shiny Item",
          sceneName: "Ruins1_17",
          wiki: "Simple_Key#How_to_Acquire"
        },
        simpleKeyAncientBasin: {
          name: "Simple Key #3",
          spoiler: "Ancient Basin, below Broken Vessel",
          id: "Shiny Item Stand",
          sceneName: "Abyss_20",
          wiki: "Simple_Key#How_to_Acquire"
        },
        gotLurkerKey: {
          name: "Simple Key #4",
          spoiler: "Colosseum of Fools: Pale Lurker's Retreat",
          wiki: "Simple_Key#How_to_Acquire"
        },
        paleOreAncientBasin: {
          name: "Pale Ore #1",
          spoiler: "Ancient Basin, left of Tram Station",
          id: "Battle Scene Ore",
          sceneName: "Abyss_17",
          wiki: "Pale_Ore"
        },
        paleOreSeer: {
          name: "Pale Ore #2",
          spoiler: "Seer: 300 Essence",
          wiki: "Pale_Ore#How_to_Acquire"
        },
        paleOreCrystalPeak: {
          name: "Pale Ore #3",
          spoiler: "Top of Crystal Peak, use Monarch Wings",
          id: "Shiny Item Stand",
          sceneName: "Mines_34",
          wiki: "Pale_Ore#How_to_Acquire"
        },
        paleOreDeepnest: {
          name: "Pale Ore #4",
          spoiler: "Deepnest, Nosk reward",
          id: "Shiny Item Stand",
          sceneName: "Deepnest_32",
          wiki: "Pale_Ore#How_to_Acquire"
        },
        paleOreGrubfather: {
          name: "Pale Ore #5",
          spoiler: "Grubfather: 31 Grubs rescued",
          id: "Shiny Item Ore",
          sceneName: "Crossroads_38",
          wiki: "Pale_Ore#How_to_Acquire"
        },
        paleOreColosseum: {
          name: "Pale Ore #6",
          spoiler: "Colosseum of Fools: Trial of the Conqueror",
          id: "Shiny Item",
          sceneName: "Room_Colosseum_Silver",
          wiki: "Pale_Ore#How_to_Acquire"
        },
        hasTramPass: {
          name: "Tram Pass",
          spoiler: "Deepnest: Failed Tramway",
          wiki: "Tram_Pass"
        },
        gotQueenFragment: {
          name: "White Fragment: Queen",
          spoiler: "White Lady: Queen's Gardens",
          wiki: "Kingsoul#How_to_Acquire"
        },
        gotKingFragment: {
          name: "White Fragment: King",
          spoiler: "Pale King: White Palace",
          wiki: "Kingsoul#How_to_Acquire"
        },
      },
      grubsList: ["Crossroads_35", "Crossroads_03", "Crossroads_05", "Crossroads_48", "Crossroads_31", "Fungus1_06", "Fungus1_07", "Fungus1_21", "Fungus1_28", "Fungus2_18", "Ruins1_05", "Mines_04", "Mines_03", "Mines_31", "Mines_19", "Ruins1_32", "RestingGrounds_10", "Ruins_House_01", "Mines_35", "Mines_16", "Waterways_04", "Waterways_13", "Abyss_19", "Abyss_17", "Mines_24", "Fungus1_13", "Fungus3_47", "Fungus3_10", "Fungus3_48", "Fungus3_22", "Ruins2_07", "Ruins2_11", "Ruins2_11", "Ruins2_11", "Deepnest_East_11", "Deepnest_East_14", "Fungus2_20", "Ruins2_03", "Deepnest_36", "Deepnest_03", "Deepnest_31", "Deepnest_39", "Deepnest_Spider_Town", "Waterways_14", "Hive_03", "Hive_04"],
    },*/

    /* ################ Essentials % -> Stag Stations ################### */

    /*essentialsStagStations: {
      h2: "Game Completion % Essentials – Stag Stations",
      id: "hk-essentials-stag-stations",
      description: `Opened Stag Stations don't count directly towards 112% Game Completion, but are required to achieve full 112% by discovering the <span class="spoiler-span blurred">Stag Nest for the Vessel Fragment</span>.`,
      entries: {
        openedTownBuilding: {
          name: "Stag Station: Dirtmouth",
          spoiler: "Opened from inside after travelling",
          wiki: "Dirtmouth"
        },
        openedCrossroads: {
          name: "Stag Station: Forgotten Crossroads",
          spoiler: "50 Geo: Right middle-bottom area",
          wiki: "Forgotten_Crossroads"
        },
        openedGreenpath: {
          name: "Stag Station: Greenpath",
          spoiler: "140 Geo: Top middle area, below Hornet",
          wiki: "Greenpath"
        },
        openedFungalWastes: {
          name: "Stag Station: Queen's Station",
          spoiler: "120 Geo: Fungal Wastes, near Fog Canyon",
          wiki: "Fungal_Wastes#Sub-area:_Queen.27s_Station"
        },
        openedRuins1: {
          name: "Stag Station: City Storerooms",
          spoiler: "200 Geo: City of Tears, top left area",
          wiki: "City_of_Tears#City_Storerooms"
        },
        openedRestingGrounds: {
          name: "Stag Station: Resting Grounds",
          spoiler: "0 Geo: Right middle area, near Seer",
          wiki: "Resting_Grounds"
        },
        openedRuins2: {
          name: "Stag Station: King's Station",
          spoiler: "300 Geo: City of Tears, far right area",
          wiki: "City_of_Tears#Sub-area:_King.27s_Station"
        },
        openedRoyalGardens: {
          name: "Stag Station: Queen's Gardens",
          spoiler: "200 Geo: Middle area, near Traitor's Grave",
          wiki: "Queen's_Gardens"
        },
        openedDeepnest: {
          name: "Stag Station: Distant Village",
          spoiler: "250 Geo: Deepnest, far left area",
          wiki: "Deepnest#Sub-area:_Distant_Village"
        },
        openedHiddenStation: {
          name: "Stag Station: Hidden Station",
          spoiler: "300 Geo: Ancient Basin: Palace Grounds",
          wiki: "Ancient_Basin#Sub-Area:_Palace_Grounds"
        },
        openedStagNest: {
          name: "Stag Station: Stag Nest",
          spoiler: "Open all stations: Howling Cliffs, top area",
          wiki: "Howling_Cliffs#Sub-area:_Stag_Nest"
        },
        stagStationsOpened: {
          name: "Stag Stations Opened",
          spoiler: "11 Stag Stations total including Dirtmouth",
          max: 11,
          maxDefault: 11,
          wiki: "Fast_Travel_(Hollow_Knight)#Locations_and_Prices"
        },
      },
    },*/

    /* ################ Essentials % -> World Interactions ################### */

    /*essentialsWorldInteractions: {
      h2: "Game Completion % Essentials – World Interactions",
      id: "hk-essentials-world-interactions",
      description: `Certain interactions the player can make with NPCs in the game or world objects which don't count directly towards 112% Game Completion, but are required to achieve full 112%.`,
      entries: {
        slyRescued: {
          name: "Sly Rescued",
          spoiler: "Forgotten Crossroads, near Gruz Mother",
          wiki: "Sly"
        },
        brettaRescued: {
          name: "Bretta Rescued",
          spoiler: "Fungal Wastes, near Dashmaster charm statue",
          wiki: "Bretta"
        },
        paidLegEater: {
          name: "Paid to See Something Nice",
          spoiler: "Fungal Wastes, Leg Eater: 86 Geo",
          wiki: "Leg_Eater#In-game_events"
        },
        gaveSlykey: {
          name: "Shopkeeper's Key Returned to Sly",
          spoiler: "Dirtmouth, Sly's Shop",
          wiki: "Sly"
        },
        mantisVillageFloorLever: {
          name: "Mantis Village Floor Lever",
          spoiler: "Fungal Wastes, right of Mantis Claw",
          id: "Mantis Lever (1)",
          sceneName: "Fungus2_14",
          wiki: "Fungal_Wastes#Sub-area:_Mantis_Village"
        },
        xunFlowerGiven: {
          name: "Delicate Flower Accepted",
          spoiler: "Resting Grounds: listen to Grey Mourner",
          wiki: "Grey_Mourner#In-game_events"
        },
        waterwaysAcidDrained: {
          name: "Acid Drained",
          spoiler: "Royal Waterways, lever after Dung Defender",
          wiki: "Royal_Waterways#Sub-area:_Isma.27s_Grove"
        },
        openedMageDoor_v2: {
          name: "Elegant Door Unlocked",
          spoiler: "City of Tears: Soul Sanctum, requires Elegant Key",
          wiki: "Elegant_Key#Use"
        },
        openedLoveDoor: {
          name: "Tower of Love Door Unlocked",
          spoiler: "City of Tears, requires Love Key",
          wiki: "City_of_Tears#Sub-area:_Tower_of_Love"
        },
        abyssGateOpened: {
          name: "The Abyss Gate Opened",
          spoiler: "Ancient Basin, requires King's Brand",
          wiki: "Ancient_Basin#Description"
        },
        blueVineDoor: {
          name: "Lifeblood Door Opened",
          spoiler: "The Abyss, requires 14–15+ Lifeblood Masks",
          wiki: "Lifeblood_Core#How_to_Acquire"
        },
        nightmareLanternLit: {
          name: "Nightmare Lantern Lit",
          spoiler: "Howling Cliffs, corpse of a large bug",
          wiki: "Howling_Cliffs#Nightmare_Lantern_Chamber"
        },
        paleLurkersRetreat: {
          name: "Pale Lurker's Retreat",
          spoiler: "Colosseum of Fools, Room above Bench, break wall",
          id: "Breakable Wall_Silhouette",
          sceneName: "Room_Colosseum_Spectate",
          wiki: "Colosseum_of_Fools#Description"
        },
        godseekerUnlocked: {
          name: "Godseeker Cocoon Unlocked",
          spoiler: "Royal Waterways: Junk Pit",
          wiki: "Royal_Waterways#Sub-area:_Junk_Pit"
        },
        fountainGeo: {
          name: "Geo in Fountain",
          spoiler: "Ancient Basin: 3000 Geo maximum",
          max: 3000,
          maxDefault: 3000,
          wiki: "Ancient_Basin#Description"
        },
      },
    },*/

    /* ################ Essentials % -> Bosses ################### */

    /*essentialsBosses: {
      h2: "Game Completion % Essentials – Bosses",
      id: "hk-essentials-bosses",
      description: "Bosses that don't count directly towards 112% Game Completion, but are required to defeat to achieve full 112%.",
      entries: {
        killedMegaMossCharger: {
          name: "P1 Massive Moss Charger",
          spoiler: "Greenpath, near Fog Canyon",
          wiki: "Massive_Moss_Charger"
        },
        pantheonSoulWarrior: {
          name: "P1 Soul Warrior",
          spoiler: "City of Tears: Soul Sanctum",
          id: "Battle Scene v2",
          sceneName: "Ruins1_23",
          wiki: "Soul_Warrior#Location"
        },
        shadeSoulWarrior: {
          name: "Shade Soul Warrior",
          spoiler: "City of Tears: Soul Sanctum, use Elegant Key",
          id: "Battle Scene v2",
          sceneName: "Ruins1_31",
          wiki: "Shade_Soul#How_to_Acquire"
        },
        pantheonCrystalGuardian: {
          name: "P2 Crystal Guardian",
          spoiler: "Crystal Peak, guards Central Bench",
          id: "Mega Zombie Beam Miner (1)",
          sceneName: "Mines_18",
          wiki: "Crystal_Guardian"
        },
        killedBigBuzzer: {
          name: "Vengefly King",
          spoiler: "Colosseum of Fools: Trial of the Warrior, Greenpath",
          wiki: "Vengefly_King"
        },
        killedOblobble: {
          name: "P2 Oblobble",
          spoiler: "Colosseum of Fools: Trial of the Conqueror",
          wiki: "Oblobbles"
        },
        killedLobsterLancer: {
          name: "God Tamer",
          spoiler: "Colosseum of Fools: Trial of the Fool",
          wiki: "God_Tamer"
        },
        killedFlukeMother: {
          name: "P2 Flukemarm",
          spoiler: "Royal Waterways, requires Desolate Dive",
          wiki: "Flukemarm"
        },
        pantheonEnragedGuardian: {
          name: "P4 Enraged Guardian",
          spoiler: "Crystal Peak, requires Monarch Wings",
          id: "Zombie Beam Miner Rematch",
          sceneName: "Mines_32",
          wiki: "Enraged_Guardian"
        },
        killedNailBros: {
          name: "Nailmasters Oro & Mato",
          spoiler: "Godhome: Pantheon of the Master",
          wiki: "Brothers_Oro_%26_Mato"
        },
        killedPaintmaster: {
          name: "Paintmaster Sheo",
          spoiler: "Godhome: Pantheon of the Artist",
          wiki: "Paintmaster_Sheo"
        },
        killedNailsage: {
          name: "Great Nailsage Sly",
          spoiler: "Godhome: Pantheon of the Sage",
          wiki: "Great_Nailsage_Sly"
        },
        killedHollowKnightPrime: {
          name: "Pure Vessel",
          spoiler: "Godhome: Pantheon of the Knight",
          wiki: "Pure_Vessel"
        },
      },
    },*/

    /* ################ Achievements Essentials -> Collectibles ################### */

    /*achievementsCollectibles: {
      h2: "Achievements Essentials – Collectibles",
      id: "hk-achievements-collectibles",
      description: `Collectibles important for unlocking achievements. They don't count or matter towards 112% Game Completion.`,
      entries: {
        hasMap: {
          name: "Inventory Map",
          spoiler: "First map bought from Cornifer or Iselda",
          wiki: "Map_and_Quill"
        },
        hasJournal: {
          name: "Hunter's Journal",
          spoiler: "Greenpath: Hunter, above Stone Sanctuary",
          wiki: "Hunter's_Journal"
        },
        hasHuntersMark: {
          name: "Hunter's Mark",
          spoiler: "Greenpath: Hunter, complete base 146 Hunter Notes",
          wiki: "Hunter's_Mark"
        },
        killsBigBuzzer: {
          name: "Vengefly King Journal Note",
          spoiler: "Colosseum: Trial of the Warrior",
          wiki: "Vengefly_King"
        },
        salubraBlessing: {
          name: "Salubra's Blessing",
          spoiler: "Salubra: 800 Geo + all 40 Charms Owned",
          wiki: "Salubra's_Blessing"
        },
        gotShadeCharm: {
          name: "Void Heart",
          spoiler: "Equip Kingsoul Charm and find Birthplace",
          wiki: "Void_Heart"
        },
      },
    },*/

    /* ################ Achievements Essentials -> Maps ################### */

    /*achievementsMaps: {
      h2: "Achievements Essentials – Maps",
      id: "hk-achievements-maps",
      description: `Acquired maps are important for unlocking achievements. They don't count or matter towards 112% Game Completion.`,
      entries: {
        mapCrossroads: {
          name: "Map: Forgotten Crossroads",
          spoiler: "30/40 Geo: below Gruzzer area",
          wiki: "Forgotten_Crossroads"
        },
        mapGreenpath: {
          name: "Map: Greenpath",
          spoiler: "60/80 Geo: just below Greenpath entrance",
          wiki: "Greenpath"
        },
        mapFungalWastes: {
          name: "Map: Fungal Wastes",
          spoiler: "75/100 Geo: right of Queen's Station",
          wiki: "Fungal_Wastes"
        },
        mapCliffs: {
          name: "Map: Howling Cliffs",
          spoiler: "75/100 Geo: left middle area, near Journal",
          wiki: "Howling_Cliffs"
        },
        mapCity: {
          name: "Map: City of Tears",
          spoiler: "90/120 Geo: left of Soul Sanctum",
          wiki: "City_of_Tears"
        },
        mapMines: {
          name: "Map: Crystal Peak",
          spoiler: "120/150 Geo: top left area",
          wiki: "Crystal_Peak"
        },
        mapWaterways: {
          name: "Map: Royal Waterways",
          spoiler: "75/100 Geo: far left area, near Fungal",
          wiki: "Royal_Waterways"
        },
        mapRestingGrounds: {
          name: "Map: Resting Grounds",
          spoiler: "75 Geo: Iselda's Shop",
          wiki: "Resting_Grounds"
        },
        mapAbyss: {
          name: "Map: Ancient Basin",
          spoiler: "112/150 Geo: center area, near fountain",
          wiki: "Ancient_Basin"
        },
        mapOutskirts: {
          name: "Map: Kingdom's Edge",
          spoiler: "112/150 Geo: left bottom area, inside pipe",
          wiki: "Kingdom's_Edge"
        },
        mapFogCanyon: {
          name: "Map: Fog Canyon",
          spoiler: "150/200 Geo: above Teacher's Archives",
          wiki: "Fog_Canyon"
        },
        mapRoyalGardens: {
          name: "Map: Queen's Gardens",
          spoiler: "150/200 Geo: below Fog Canyon entrance",
          wiki: "Queen's_Gardens"
        },
        mapDeepnest: {
          name: "Map: Deepnest",
          spoiler: "38/50 Geo: near both Fungal Wastes entrances",
          wiki: "Deepnest"
        },
        areaMaps: {
          name: "Area Maps",
          spoiler: "Cornifer and Iselda, 13 Area Maps total",
          max: 13,
          maxDefault: 13,
          wiki: "Map_and_Quill#Maps"
        },
      },
    },*/

    /* ################ Achievements Essentials -> World Interactions ################### */

    /*achievementsWorldInteractions: {
      h2: "Achievements Essentials – World Interactions",
      id: "hk-achievements-world-interactions",
      description: `Certain interactions the player can make with NPCs in the game or world objects important for unlocking achievements. They don't count or matter towards 112% Game Completion. This section includes some choices that the player can make in the game.`,
      entries: {
        quirrelEpilogueCompleted: {
          name: "Quirrel: Witness",
          spoiler: "Blue Lake: after defeating Monomon the Teacher",
          wiki: "Quirrel"
        },
        xunRewardGiven: {
          name: "Grey Mourner: Solace",
          spoiler: "Resting Grounds: Complete Delicate Flower quest",
          wiki: "Grey_Mourner"
        },
        zoteStatus: {
          id: "zoteStatus",
          name: "Zote Status",
          nameDefault: "Zote Status",
          nameNeglect: "Zote Choice: Neglect",
          nameRivalry: "Zote Choice: Rivalry",
          nameTrappedVengefly: "Zote Status: Vengefly",
          nameNotRescuedVengefly: "Zote Status: Greenpath",
          nameTrappedDeepnest: "Zote Status: Deepnest",
          nameColosseum: "Zote Status: Colosseum of Fools",
          spoiler: "One achievement per save file",
          spoilerDefault: "One achievement per save file",
          spoilerNeglect: "Left Zote to die",
          spoilerRivalry: "Defeated Zote in the Colosseum of Fools",
          spoilerTrappedVengefly: "Greenpath, defeat Vengefly King",
          spoilerNotRescuedVengefly: "Check what happened with Zote",
          spoilerTrappedDeepnest: "Deepnest, free from cobwebs",
          spoilerColosseum: "Trial of the Warrior",
          wiki: "Zote"
        },
        nailsmithStatus: {
          id: "nailsmithStatus",
          name: "Nailsmith Status",
          nameDefault: "Nailsmith Status",
          nameHappyCouple: "Nailsmith Choice: Happy Couple",
          namePurity: "Nailsmith Choice: Purity",
          nameSheoHutWaiting: "Nailsmith Status: Sheo",
          nameUpgradeNail: "Nailsmith Status: Waiting",
          spoiler: "One achievement per save file",
          spoilerDefault: "One achievement per save file",
          spoilerHappyCouple: "Found a new calling",
          spoilerPurity: "Slain with Pure Nail",
          spoilerSheoHutWaiting: "Waiting at Sheo's Hut",
          spoilerUpgradeNail: "Upgrade Nail to Pure Nail",
          wiki: "Nailsmith"
        },
        mrMushroomState1: {
          name: "Mr Mushroom #1",
          spoiler: "Fungal Wastes, near Cornifer",
          wiki: "Mister_Mushroom",
          state: 2
        },
        mrMushroomState2: {
          name: "Mr Mushroom #2",
          spoiler: "Kingdom's Edge, near Isma's Grove",
          wiki: "Mister_Mushroom",
          state: 3
        },
        mrMushroomState3: {
          name: "Mr Mushroom #3",
          spoiler: "Deepnest, near Galien",
          wiki: "Mister_Mushroom",
          state: 4
        },
        mrMushroomState4: {
          name: "Mr Mushroom #4",
          spoiler: "Howling Cliffs, near Nailmaster Mato",
          wiki: "Mister_Mushroom",
          state: 5
        },
        mrMushroomState5: {
          name: "Mr Mushroom #5",
          spoiler: "Ancient Basin, near Monarch Wings",
          wiki: "Mister_Mushroom",
          state: 6
        },
        mrMushroomState6: {
          name: "Mr Mushroom #6",
          spoiler: "Fog Canyon, near Overgrown Mound",
          wiki: "Mister_Mushroom",
          state: 7
        },
        mrMushroomState7: {
          name: "Mr Mushroom #7",
          spoiler: "King's Pass, game starting location",
          wiki: "Mister_Mushroom",
          state: 8
        },
        pantheonHallownest: {
          name: "P5 Embrace the Void",
          spoiler: "Godhome: Pantheon of Hallownest",
          wiki: "Pantheon_of_Hallownest"
        },
        /* 
          Mr Mushroom data
          case SplitName.MrMushroom1: shouldSplit = mem.PlayerData<int>(Offset.mrMushroomState) == 2; break;
          case SplitName.MrMushroom2: shouldSplit = mem.PlayerData<int>(Offset.mrMushroomState) == 3; break;
          case SplitName.MrMushroom3: shouldSplit = mem.PlayerData<int>(Offset.mrMushroomState) == 4; break;
          case SplitName.MrMushroom4: shouldSplit = mem.PlayerData<int>(Offset.mrMushroomState) == 5; break;
          case SplitName.MrMushroom5: shouldSplit = mem.PlayerData<int>(Offset.mrMushroomState) == 6; break;
          case SplitName.MrMushroom6: shouldSplit = mem.PlayerData<int>(Offset.mrMushroomState) == 7; break;
          case SplitName.MrMushroom7: shouldSplit = mem.PlayerData<int>(Offset.mrMushroomState) == 8; break;
  
          "mrMushroomState": 4, < this is the current location of Mr Mushroom (Howling Cliffs)
  
          1. Spawn of self, their minds unite, (Fungal Wastes)
          2. Aside the source of acid blight, (Kingdom's Edge, near Isma's Grove)
          3. Aglow in darkest, winding depths, (Deepnest, near Galien)
          4. Winds all howl above fossilstone steps, (Howling Cliffs)
          5. Monarchflys in air set still, (Ancient Basin, near the Monarch Wings location)
          6. To Root's domain and snail once shrill, (Fog Canyon, near Overgrown Mound)
          7. Path of Wyrm, at new lands entered, (King's Pass)
          8. There journeys end. The kingdom ventured.
          */
      /*},
    },*/

    /* ################ Achievements Essentials -> Bosses ################### */

    /*achievementsBosses: {
      h2: "Achievements Essentials – Bosses",
      id: "hk-achievements-bosses",
      description: `Bosses important for unlocking achievements. They don't count or matter towards 112% Game Completion.`,
      entries: {
        falseKnightDreamDefeated: {
          name: "Failed Champion",
          spoiler: "Forgotten Crossroads, near False Knight",
          wiki: "Failed_Champion"
        },
        mageLordDreamDefeated: {
          name: "Soul Tyrant",
          spoiler: "City of Tears: Soul Sanctum, near Soul Master",
          wiki: "Soul_Tyrant"
        },
        infectedKnightDreamDefeated: {
          name: "Lost Kin",
          spoiler: "Ancient Basin, Broken Vessel location",
          wiki: "Lost_Kin"
        },
        whiteDefenderDefeated: {
          name: "White Defender",
          spoiler: "Royal Waterways, Dung Defender, use Desolate Dive",
          wiki: "White_Defender"
        },
        greyPrinceDefeated: {
          name: "Grey Prince Zote",
          spoiler: "Dirtmouth: Bretta's Room (per save choice)",
          wiki: "Grey_Prince_Zote"
        },
        killedHollowKnight: {
          name: "Hollow Knight",
          spoiler: "Forgotten Crossroads: Black Egg Temple",
          wiki: "Hollow_Knight"
        },
        
        //Absolute Radiance (for P5, achievements)
        //Sisters of Battle (for P5, achievements)
        //Winged Nosk (for P5, achievements)
        
        killedFinalBoss: {
          name: "The Radiance",
          spoiler: "Requires Void Heart & Dream Nail Hollow Knight",
          wiki: "Radiance"
        },
      },
    },*/

  
    /* ################ Optional Journal Entries ################### */

    /*huntersJournalOptional: {
      h2: "Optional Journal Entries",
      id: "hk-journal-optional",
      description: "The remaining Hunter's Journal entries which don't count for Hunter's Mark and Keen/True Hunter achievements. Note: 6 entries can be permanently unobtainable, depending on your choices in the save file (<span class='spoiler-span blurred'>Grey Prince Zote, all 3 Zotelings, Grimmkin Nightmare and Nightmare King</span>).",
      entries: {
        HunterMark: {
          name: "Hunter's Mark (1)",
          nameDefault: "Hunter's Mark",
          spoiler: "Greenpath: Hunter, complete base 146 Hunter Notes",
          wiki: "Hunter's_Mark"
        },
        MenderBug: {
          name: "Menderbug (1)",
          nameDefault: "Menderbug",
          spoiler: "Forgotten Crossroads: destroy sign",
          wiki: "Menderbug"
        },
        Zote: {
          name: "Zote (1)",
          nameDefault: "Zote",
          spoiler: "Colosseum: Trial of the Warrior or The Eternal Ordeal",
          wiki: "Zote"
        },
        HollowKnight: {
          name: "Hollow Knight (1)",
          nameDefault: "Hollow Knight",
          spoiler: "Forgotten Crossroads: Black Egg Temple",
          wiki: "Hollow_Knight"
        },
        FinalBoss: {
          name: "The Radiance (1)",
          nameDefault: "The Radiance",
          spoiler: "Requires Void Heart & Dream Nail Hollow Knight",
          wiki: "Radiance"
        },
        WhiteDefender: {
          name: "White Defender (1)",
          nameDefault: "White Defender",
          spoiler: "Royal Waterways: Dung Defender, Desolate Dive",
          wiki: "White_Defender"
        },
        GreyPrince: {
          name: "Grey Prince Zote (1)",
          nameDefault: "Grey Prince Zote",
          spoiler: "Dirtmouth: Bretta's Room (per save choice)",
          wiki: "Grey_Prince_Zote"
        },
        ZotelingBalloon: {
          name: "Volatile Zoteling (1)",
          nameDefault: "Volatile Zoteling",
          spoiler: "Only from Grey Prince Zote, Battle 3+",
          wiki: "Volatile_Zoteling"
        },
        ZotelingHopper: {
          name: "Hopping Zoteling (1)",
          nameDefault: "Hopping Zoteling",
          spoiler: "Only from Grey Prince Zote, Battle 2+",
          wiki: "Hopping_Zoteling"
        },
        ZotelingBuzzer: {
          name: "Winged Zoteling (1)",
          nameDefault: "Winged Zoteling",
          spoiler: "Only from Grey Prince Zote, Battle 1+",
          wiki: "Winged_Zoteling"
        },
        FlameBearerSmall: {
          name: "Grimmkin Novice (3)",
          nameDefault: "Grimmkin Novice",
          spoiler: "Greenpath, Crystal Peak, City of Tears",
          wiki: "Grimmkin_Novice"
        },
        FlameBearerMed: {
          name: "Grimmkin Master (4)",
          nameDefault: "Grimmkin Master",
          spoiler: "King's Pass, Resting Grounds, Kingdom's Edge",
          wiki: "Grimmkin_Master"
        },
        FlameBearerLarge: {
          name: "Grimmkin Nightmare (5)",
          nameDefault: "Grimmkin Nightmare",
          spoiler: "Fungal Core, Royal Waterways, Hive",
          wiki: "Grimmkin_Nightmare"
        },
        Grimm: {
          name: "Troupe Master Grimm (1)",
          nameDefault: "Troupe Master Grimm",
          spoiler: "Dirtmouth: collect 6 flames",
          wiki: "Grimm"
        },
        NightmareGrimm: {
          name: "Nightmare King (1)",
          nameDefault: "Nightmare King",
          spoiler: "Dirtmouth: collect 9 flames",
          wiki: "Nightmare_King"
        },
        BindingSeal: {
          name: "Seal of Binding (1)",
          nameDefault: "Seal of Binding",
          spoiler: "White Palace: Path of Pain completion",
          wiki: "Seal_of_Binding"
        },
        NailBros: {
          name: "Nailmasters Oro & Mato (1)",
          nameDefault: "Nailmasters Oro & Mato",
          spoiler: "Godhome: Pantheon of the Master",
          wiki: "Brothers_Oro_%26_Mato"
        },
        Paintmaster: {
          name: "Paintmaster Sheo (1)",
          nameDefault: "Paintmaster Sheo",
          spoiler: "Godhome: Pantheon of the Artist",
          wiki: "Paintmaster_Sheo"
        },
        Nailsage: {
          name: "Great Nailsage Sly (1)",
          nameDefault: "Great Nailsage Sly",
          spoiler: "Godhome: Pantheon of the Sage",
          wiki: "Great_Nailsage_Sly"
        },
        HollowKnightPrime: {
          name: "Pure Vessel (1)",
          nameDefault: "Pure Vessel",
          spoiler: "Godhome: Pantheon of the Knight",
          wiki: "Pure_Vessel"
        },
        GodseekerMask: {
          name: "Weathered Mask (1)",
          nameDefault: "Weathered Mask",
          spoiler: "Land of Storms: All Pantheons & Bindings",
          wiki: "Weathered_Mask"
        },
        VoidIdol_1: {
          name: "Void Idol Attuned (1)",
          nameDefault: "Void Idol Attuned",
          spoiler: "Hall of Gods: Defeat All (Attuned)",
          wiki: "Void_Idol"
        },
        VoidIdol_2: {
          name: "Void Idol Ascended (1)",
          nameDefault: "Void Idol Ascended",
          spoiler: "Hall of Gods: Defeat All (Ascended)",
          wiki: "Void_Idol"
        },
        VoidIdol_3: {
          name: "Void Idol Radiant (1)",
          nameDefault: "Void Idol Radiant",
          spoiler: "Hall of Gods: Defeat All (Radiant)",
          wiki: "Void_Idol"
        },
      },
    },*/

    /* ###################################### Collectibles -> Charm Notches ############################################## */

    /*charmNotches: {
      h2: "Charm Notches",
      id: "hk-charm-notches",
      description: `Charm Notches are required to equip Charms. They can be found in the game world, bought from Salubra or won from certain challenges.`,
      percent: 0,
      maxPercent: 8,
      entries: {
        notchShroomOgres: {
          name: "Charm Notch #1",
          spoiler: "Fungal Wastes: Shroom Ogres room",
          wiki: "Category:Charms#Notches"
        },
        salubraNotch1: {
          name: "Charm Notch #2",
          spoiler: "Salubra: 120 Geo + 5 Charms found",
          wiki: "Category:Charms#Notches"
        },
        salubraNotch2: {
          name: "Charm Notch #3",
          spoiler: "Salubra: 500 Geo + 10 Charms found",
          wiki: "Category:Charms#Notches"
        },
        salubraNotch3: {
          name: "Charm Notch #4",
          spoiler: "Salubra: 900 Geo + 18 Charms found",
          wiki: "Category:Charms#Notches"
        },
        salubraNotch4: {
          name: "Charm Notch #5",
          spoiler: "Salubra: 1400 Geo + 25 Charms found",
          wiki: "Category:Charms#Notches"
        },
        colosseumBronzeCompleted: {
          name: "Charm Notch #6",
          spoiler: "Colosseum of Fools: Trial of the Warrior",
          wiki: "Category:Charms#Notches"
        },
        notchFogCanyon: {
          name: "Charm Notch #7",
          spoiler: "Fog Canyon: explosive eggs room",
          wiki: "Category:Charms#Notches"
        },
        gotGrimmNotch: {
          name: "Charm Notch #8",
          spoiler: "Dirtmouth: Troupe Leader Grimm",
          wiki: "Category:Charms#Notches"
        },
      },
    },*/

    /* ###################################### Collectibles -> Grubs ############################################## */

    /*grubs: {
      h2: "Grubs",
      id: "hk-grubs",
      description: `Creatures found trapped in glass jars throughout Hallownest. They can be freed from their jar after which the Grubfather grants a reward for each Grub that is saved.<br>
      <b>Note:</b> Due to a bug in recent versions of Hollow Knight, Grubs #33 and #34 (The Collector/Tower of Love) are not marked as released correctly in the save file. As a workaround for this bug, when Grub #32 is detected as released, #33 and #34 are automatically marked as released too in this app.`,
      percent: 0,
      maxPercent: 46,
      entries: {
        grub1: {
          name: "Grub #1",
          spoiler: "Forgotten Crossroads: Acid Corridor",
          id: "Grub Bottle",
          sceneName: "Crossroads_35",
          wiki: "Grub#Rewards_and_locations"
        },
        grub2: {
          name: "Grub #2",
          spoiler: "Forgotten Crossroads: Left of Dark Corridor",
          id: "Grub Bottle",
          sceneName: "Crossroads_03",
          wiki: "Grub#Rewards_and_locations"
        },
        grub3: {
          name: "Grub #3",
          spoiler: "Forgotten Crossroads: Above Ancestral Mound",
          id: "Grub Bottle",
          sceneName: "Crossroads_05",
          wiki: "Grub#Rewards_and_locations"
        },
        grub4: {
          name: "Grub #4",
          spoiler: "Forgotten Crossroads: Husk Guard Room",
          id: "Grub Bottle",
          sceneName: "Crossroads_48",
          wiki: "Grub#Rewards_and_locations"
        },
        grub5: {
          name: "Grub #5",
          spoiler: "Forgotten Crossroads: Spikes Room",
          id: "Grub Bottle",
          sceneName: "Crossroads_31",
          wiki: "Grub#Rewards_and_locations"
        },
        grub6: {
          name: "Grub #6",
          spoiler: "Greenpath: Cornifer Room",
          id: "Grub Bottle",
          sceneName: "Fungus1_06",
          wiki: "Grub#Rewards_and_locations"
        },
        grub7: {
          name: "Grub #7",
          spoiler: "Greenpath: Outside Hunter",
          id: "Grub Bottle",
          sceneName: "Fungus1_07",
          wiki: "Grub#Rewards_and_locations"
        },
        grub8: {
          name: "Grub #8",
          spoiler: "Greenpath: Outside Hornet",
          id: "Grub Bottle",
          sceneName: "Fungus1_21",
          wiki: "Grub#Rewards_and_locations"
        },
        grub9: {
          name: "Grub #9",
          spoiler: "Howling Cliffs: Baldur's Shell Room",
          id: "Grub Bottle",
          sceneName: "Fungus1_28",
          wiki: "Grub#Rewards_and_locations"
        },
        grub10: {
          name: "Grub #10",
          spoiler: "Fungal Wastes: Cornifer Room",
          id: "Grub Bottle",
          sceneName: "Fungus2_18",
          wiki: "Grub#Rewards_and_locations"
        },
        grub11: {
          name: "Grub #11",
          spoiler: "City of Tears: Above Lemm",
          id: "Grub Bottle (1)",
          sceneName: "Ruins1_05",
          wiki: "Grub#Rewards_and_locations"
        },
        grub12: {
          name: "Grub #12",
          spoiler: "Crystal Peak: Left of Dark Corridor",
          id: "Grub Bottle",
          sceneName: "Mines_04",
          wiki: "Grub#Rewards_and_locations"
        },
        grub13: {
          name: "Grub #13",
          spoiler: "Crystal Peak: Spiked Conveyor Belts",
          id: "Grub Bottle",
          sceneName: "Mines_03",
          wiki: "Grub#Rewards_and_locations"
        },
        grub14: {
          name: "Grub #14",
          spoiler: "Crystal Peak: Crystal Heart Gauntlet",
          id: "Grub Bottle",
          sceneName: "Mines_31",
          wiki: "Grub#Rewards_and_locations"
        },
        grub15: {
          name: "Grub #15",
          spoiler: "Crystal Peak: Crushers Below Top Bench",
          id: "Grub Bottle",
          sceneName: "Mines_19",
          wiki: "Grub#Rewards_and_locations"
        },
        grub16: {
          name: "Grub #16",
          spoiler: "City of Tears: Soul Master Rewards Room",
          id: "Grub Bottle",
          sceneName: "Ruins1_32",
          wiki: "Grub#Rewards_and_locations"
        },
        grub17: {
          name: "Grub #17",
          spoiler: "Resting Grounds: Crypts",
          id: "Grub Bottle",
          sceneName: "RestingGrounds_10",
          wiki: "Grub#Rewards_and_locations"
        },
        grub18: {
          name: "Grub #18",
          spoiler: "City of Tears: Guarded House Room in Main Hub",
          id: "Grub Bottle",
          sceneName: "Ruins_House_01",
          wiki: "Grub#Rewards_and_locations"
        },
        grub19: {
          name: "Grub #19",
          spoiler: "Crystal Peak: Crystallized Mound",
          id: "Grub Bottle",
          sceneName: "Mines_35",
          wiki: "Grub#Rewards_and_locations"
        },
        grub20: {
          name: "Grub #20",
          spoiler: "Crystal Peak: Down from Dirtmouth entrance",
          id: "Grub Bottle",
          sceneName: "Mines_16",
          wiki: "Grub#Rewards_and_locations"
        },
        grub21: {
          name: "Grub #21",
          spoiler: "Royal Waterways: Top Left Corridor Above Bench",
          id: "Grub Bottle",
          sceneName: "Waterways_04",
          wiki: "Grub#Rewards_and_locations"
        },
        grub22: {
          name: "Grub #22",
          spoiler: "Royal Waterways: Isma's Grove",
          id: "Grub Bottle",
          sceneName: "Waterways_13",
          wiki: "Grub#Rewards_and_locations"
        },
        grub23: {
          name: "Grub #23",
          spoiler: "Ancient Basin: Broken Vessel Top Room",
          id: "Grub Bottle",
          sceneName: "Abyss_19",
          wiki: "Grub#Rewards_and_locations"
        },
        grub24: {
          name: "Grub #24",
          spoiler: "Ancient Basin: Cloth/Pale Ore Room",
          id: "Grub Bottle",
          sceneName: "Abyss_17",
          wiki: "Grub#Rewards_and_locations"
        },
        grub25: {
          name: "Grub #25",
          spoiler: "Crystal Peak: Hallownest Crown Corridor",
          id: "Grub Bottle",
          sceneName: "Mines_24",
          wiki: "Grub#Rewards_and_locations"
        },
        grub26: {
          name: "Grub #26",
          spoiler: "Greenpath: Whispering Root Corridor",
          id: "Grub Bottle",
          sceneName: "Fungus1_13",
          wiki: "Grub#Rewards_and_locations"
        },
        grub27: {
          name: "Grub #27",
          spoiler: "Fog Canyon: Teacher's Archives Entrance",
          id: "Grub Bottle",
          sceneName: "Fungus3_47",
          wiki: "Grub#Rewards_and_locations"
        },
        grub28: {
          name: "Grub #28",
          spoiler: "Queen's Gardens: Main Arena Above Left Bench",
          id: "Grub Bottle",
          sceneName: "Fungus3_10",
          wiki: "Grub#Rewards_and_locations"
        },
        grub29: {
          name: "Grub #29",
          spoiler: "Queen's Gardens: Near White Lady",
          id: "Grub Bottle",
          sceneName: "Fungus3_48",
          wiki: "Grub#Rewards_and_locations"
        },
        grub30: {
          name: "Grub #30",
          spoiler: "Queen's Gardens: Upper Room near Greenpath",
          id: "Grub Bottle",
          sceneName: "Fungus3_22",
          wiki: "Grub#Rewards_and_locations"
        },
        grub31: {
          name: "Grub #31",
          spoiler: "City of Tears: Below King's Station",
          id: "Grub Bottle",
          sceneName: "Ruins2_07",
          wiki: "Grub#Rewards_and_locations"
        },
        grub32: {
          name: "Grub #32",
          spoiler: "City of Tears: The Collector Arena",
          id: "Grub Bottle",
          sceneName: "Ruins2_11",
          wiki: "Grub#Rewards_and_locations"
        },
        grub33: {
          name: "Grub #33",
          spoiler: "City of Tears: The Collector Arena",
          id: "Grub Bottle (1)",
          sceneName: "Ruins2_11",
          wiki: "Grub#Rewards_and_locations"
        },
        grub34: {
          name: "Grub #34",
          spoiler: "City of Tears: The Collector Arena",
          id: "Grub Bottle (2)",
          sceneName: "Ruins2_11",
          wiki: "Grub#Rewards_and_locations"
        },
        grub35: {
          name: "Grub #35",
          spoiler: "Kingdom's Edge: Below Camp Bench",
          id: "Grub Bottle",
          sceneName: "Deepnest_East_11",
          wiki: "Grub#Rewards_and_locations"
        },
        grub36: {
          name: "Grub #36",
          spoiler: "Kingdom's Edge: Below Nailmaster Oro",
          id: "Grub Bottle",
          sceneName: "Deepnest_East_14",
          wiki: "Grub#Rewards_and_locations"
        },
        grub37: {
          name: "Grub #37",
          spoiler: "Fungal Wastes: Spore Shroom Room",
          id: "Grub Bottle",
          sceneName: "Fungus2_20",
          wiki: "Grub#Rewards_and_locations"
        },
        grub38: {
          name: "Grub #38",
          spoiler: "City of Tears: Watcher's Spire Fourth Floor",
          id: "Grub Bottle",
          sceneName: "Ruins2_03",
          wiki: "Grub#Rewards_and_locations"
        },
        grub39: {
          name: "Grub #39",
          spoiler: "Deepnest: Right of Fungal Wastes Drop",
          id: "Grub Bottle",
          sceneName: "Deepnest_36",
          wiki: "Grub#Rewards_and_locations"
        },
        grub40: {
          name: "Grub #40",
          spoiler: "Deepnest: Left of Hot Spring",
          id: "Grub Bottle",
          sceneName: "Deepnest_03",
          wiki: "Grub#Rewards_and_locations"
        },
        grub41: {
          name: "Grub #41",
          spoiler: "Deepnest: Nosk Corridor",
          id: "Grub Bottle",
          sceneName: "Deepnest_31",
          wiki: "Grub#Rewards_and_locations"
        },
        grub42: {
          name: "Grub #42",
          spoiler: "Deepnest: Whispering Root Room",
          id: "Grub Bottle",
          sceneName: "Deepnest_39",
          wiki: "Grub#Rewards_and_locations"
        },
        grub43: {
          name: "Grub #43",
          spoiler: "Deepnest: Beast's Den",
          id: "Grub Bottle",
          sceneName: "Deepnest_Spider_Town",
          wiki: "Grub#Rewards_and_locations"
        },
        grub44: {
          name: "Grub #44",
          spoiler: "Royal Waterways: Kingdom's Edge Acid Corridor",
          id: "Grub Bottle",
          sceneName: "Waterways_14",
          wiki: "Grub#Rewards_and_locations"
        },
        grub45: {
          name: "Grub #45",
          spoiler: "The Hive: Kingdom's Edge Secret",
          id: "Grub Bottle",
          sceneName: "Hive_03",
          wiki: "Grub#Rewards_and_locations"
        },
        grub46: {
          name: "Grub #46",
          spoiler: "The Hive: Mask Shard Room",
          id: "Grub Bottle",
          sceneName: "Hive_04",
          wiki: "Grub#Rewards_and_locations"
        },
      },
    },*/


    /* ###################################### Collectibles -> Whispering Roots ############################################## */

    /*whisperingRoots: {
      h2: "Whispering Roots",
      id: "hk-whispering-roots",
      description: `There are 15 Whispering Roots in the game, containing a total of 482 Essence. Whispering Root Pin from Iselda reveals the locations of every Whispering Root in an area after that area's Map has been purchased.`,
      percent: 0,
      maxPercent: 15,
      entries: {
        whisperingRoot1: {
          name: "Whispering Root #1: 29 Orbs",
          spoiler: "Forgotten Crossroads: Right of Grubfather",
          id: "Dream Plant",
          sceneName: "Crossroads_07",
          wiki: "Whispering_Root"
        },
        whisperingRoot2: {
          name: "Whispering Root #2: 42 Orbs",
          spoiler: "Forgotten Crossroads: Ancestral Mound",
          id: "Dream Plant",
          sceneName: "Crossroads_ShamanTemple",
          wiki: "Whispering_Root"
        },
        whisperingRoot3: {
          name: "Whispering Root #3: 18 Orbs",
          spoiler: "Fungal Wastes: Above Mantis Village",
          id: "Dream Plant",
          sceneName: "Fungus2_17",
          wiki: "Whispering_Root"
        },
        whisperingRoot4: {
          name: "Whispering Root #4: 28 Orbs",
          spoiler: "City of Tears: Below Stag Station",
          id: "Dream Plant",
          sceneName: "Ruins1_17",
          wiki: "Whispering_Root"
        },
        whisperingRoot5: {
          name: "Whispering Root #5: 46 Orbs",
          spoiler: "Howling Cliffs: Big Main Area",
          id: "Dream Plant",
          sceneName: "Cliffs_01",
          wiki: "Whispering_Root"
        },
        whisperingRoot6: {
          name: "Whispering Root #6: 21 Orbs",
          spoiler: "Crystal Peak: Hallownest Crown Big Area",
          id: "Dream Plant",
          sceneName: "Mines_23",
          wiki: "Whispering_Root"
        },
        whisperingRoot7: {
          name: "Whispering Root #7: 20 Orbs",
          spoiler: "Resting Grounds: Right of Seer, Main Area",
          id: "Dream Plant",
          sceneName: "RestingGrounds_05",
          wiki: "Whispering_Root"
        },
        whisperingRoot8: {
          name: "Whispering Root #8: 34 Orbs",
          spoiler: "Resting Grounds: Spirit's Glade",
          id: "Dream Plant",
          sceneName: "RestingGrounds_08",
          wiki: "Whispering_Root"
        },
        whisperingRoot9: {
          name: "Whispering Root #9: 35 Orbs",
          spoiler: "City of Tears: Broken Elevator",
          id: "Dream Plant",
          sceneName: "Abyss_01",
          wiki: "Whispering_Root"
        },
        whisperingRoot10: {
          name: "Whispering Root #10: 44 Orbs",
          spoiler: "Greenpath: Right of Queen's Gardens",
          id: "Dream Plant",
          sceneName: "Fungus1_13",
          wiki: "Whispering_Root"
        },
        whisperingRoot11: {
          name: "Whispering Root #11: 20 Orbs",
          spoiler: "Fungal Wastes: Left of Leg Eater",
          id: "Dream Plant",
          sceneName: "Fungus2_33",
          wiki: "Whispering_Root"
        },
        whisperingRoot12: {
          name: "Whispering Root #12: 29 Orbs",
          spoiler: "Queen's Gardens: Below Right Bench",
          id: "Dream Plant",
          sceneName: "Fungus3_11",
          wiki: "Whispering_Root"
        },
        whisperingRoot13: {
          name: "Whispering Root #13: 51 Orbs",
          spoiler: "Kingdom's Edge: Right of Tower of Love",
          id: "Dream Plant",
          sceneName: "Deepnest_East_07",
          wiki: "Whispering_Root"
        },
        whisperingRoot14: {
          name: "Whispering Root #14: 45 Orbs",
          spoiler: "Deepnest: Below Queen's Gardens",
          id: "Dream Plant",
          sceneName: "Deepnest_39",
          wiki: "Whispering_Root"
        },
        whisperingRoot15: {
          name: "Whispering Root #15: 20 Orbs",
          spoiler: "The Hive: Right of Bench",
          id: "Dream Plant",
          sceneName: "Hive_02",
          wiki: "Whispering_Root"
        },
      },
    },*/

    /* ###################################### Collectibles -> Relics - Wanderer's Journal ############################################## */

    /*relicsWanderersJournal: {
      h2: "Relics - Wanderer's Journal",
      id: "hk-relics-journal",
      description: `Tablets found commonly throughout Hallownest. They are always found next to corpses that are assumed to be the authors of the journal. Can be sold to Relic Seeker Lemm for 200 Geo.<br>
      14 x 200 = 2800 Geo Total.`,
      percent: 0,
      maxPercent: 14,
      entries: {
        wanderersJournal1: {
          name: "Wanderer's Journal #1",
          spoiler: "Greenpath: Room Above Fog Canyon",
          id: "Shiny Item",
          sceneName: "Fungus1_11",
          wiki: "Wanderer%27s_Journal"
        },
        wanderersJournal2: {
          name: "Wanderer's Journal #2",
          spoiler: "Greenpath: Right of Stag Station",
          id: "Shiny Item",
          sceneName: "Fungus1_22",
          wiki: "Wanderer%27s_Journal"
        },
        wanderersJournal3: {
          name: "Wanderer's Journal #3",
          spoiler: "Fungal Wastes: Below Shrumal Ogres",
          id: "Shiny Item",
          sceneName: "Fungus2_04",
          wiki: "Wanderer%27s_Journal"
        },
        wanderersJournal4: {
          name: "Wanderer's Journal #4",
          spoiler: "Fungal Wastes: Room Above Mantis Village",
          id: "Shiny Item",
          sceneName: "Fungus2_17",
          wiki: "Wanderer%27s_Journal"
        },
        wanderersJournal5: {
          name: "Wanderer's Journal #5",
          spoiler: "City of Tears: City Storerooms",
          id: "Shiny Item",
          sceneName: "Ruins1_28",
          wiki: "Wanderer%27s_Journal"
        },
        wanderersJournal6: {
          name: "Wanderer's Journal #6",
          spoiler: "Howling Cliffs: Main Open Air Area",
          id: "Shiny Item (1)",
          sceneName: "Cliffs_01",
          wiki: "Wanderer%27s_Journal"
        },
        wanderersJournal7: {
          name: "Wanderer's Journal #7",
          spoiler: "Crystal Peak: Right Tall Room",
          id: "Shiny Item (1)",
          sceneName: "Mines_20",
          wiki: "Wanderer%27s_Journal"
        },
        wanderersJournal8: {
          name: "Wanderer's Journal #8",
          spoiler: "Resting Grounds: Crypts",
          id: "Shiny Item",
          sceneName: "RestingGrounds_10",
          wiki: "Wanderer%27s_Journal"
        },
        wanderersJournal9: {
          name: "Wanderer's Journal #9",
          spoiler: "City of Tears: Room Above King's Station",
          id: "Shiny Item",
          sceneName: "Ruins2_05",
          wiki: "Wanderer%27s_Journal"
        },
        wanderersJournal10: {
          name: "Wanderer's Journal #10",
          spoiler: "Ancient Basin: Broken Bridge",
          id: "Shiny Item",
          sceneName: "Abyss_02",
          wiki: "Wanderer%27s_Journal"
        },
        wanderersJournal11: {
          name: "Wanderer's Journal #11",
          spoiler: "City of Tears: Pleasure House Elevator",
          id: "Shiny Item (1)",
          sceneName: "Ruins_Elevator",
          wiki: "Wanderer%27s_Journal"
        },
        wanderersJournal12: {
          name: "Wanderer's Journal #12",
          spoiler: "Kingdom's Edge: Whispering Root Area",
          id: "Shiny Item",
          sceneName: "Deepnest_East_07",
          wiki: "Wanderer%27s_Journal"
        },
        wanderersJournal13: {
          name: "Wanderer's Journal #13",
          spoiler: "Kingdom's Edge: Camp Bench",
          id: "Shiny Item",
          sceneName: "Deepnest_East_13",
          wiki: "Wanderer%27s_Journal"
        },
        wanderersJournal14: {
          name: "Wanderer's Journal #14",
          spoiler: "Kingdom's Edge: Left of Markoth",
          id: "Shiny Item",
          sceneName: "Deepnest_East_18",
          wiki: "Wanderer%27s_Journal"
        },
      },
    },*/

    /* ###################################### Collectibles -> Relics - Hallownest Seal ############################################## */

    /*relicsHallownestSeal: {
      h2: "Relics - Hallownest Seal",
      id: "hk-relics-seal",
      description: `Official symbols of the Pale King and the Five Great Knights. The seals can be found in various locations throughout the world. Can be sold to Relic Seeker Lemm for 450 Geo. Seal #16 is missable when a player enters the <span class="spoiler-span blurred">Beast's Den</span> through the secret path without <span class="spoiler-span blurred">being trapped by using the bench</span>.<br>
      17 x 450 = 7650 Geo Total.`,
      percent: 0,
      maxPercent: 17,
      entries: {
        hallownestSeal1: {
          name: "Hallownest Seal #1",
          spoiler: "Forgotten Crossroads: Inside the Well",
          id: "Shiny Item",
          sceneName: "Crossroads_01",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal2: {
          name: "Hallownest Seal #2",
          spoiler: "Fungal Wastes: Willoh's Room above Queen's Station",
          id: "Shiny Item",
          sceneName: "Fungus2_34",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal3: {
          name: "Hallownest Seal #3",
          spoiler: "Greenpath: Acid Bridge",
          id: "Shiny Item",
          sceneName: "Fungus1_10",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal4: {
          name: "Hallownest Seal #4",
          spoiler: "Fungal Wastes: Right of Queen's Station",
          id: "Shiny Item",
          sceneName: "Fungus2_03",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal5: {
          name: "Hallownest Seal #5",
          spoiler: "City of Tears: Open Air Rafters",
          id: "Shiny Item",
          sceneName: "Ruins1_03",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal6: {
          name: "Hallownest Seal #6",
          spoiler: "City of Tears: Soul Master Rewards Room",
          id: "Shiny Item",
          sceneName: "Ruins1_32",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal7: {
          name: "Hallownest Seal #7",
          spoiler: "Resting Grounds: Crypts",
          id: "Shiny Item (1)",
          sceneName: "RestingGrounds_10",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal8: {
          name: "Hallownest Seal #8",
          spoiler: "City of Tears: King's Station Stag Station",
          id: "Shiny Item",
          sceneName: "Ruins2_08",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal9: {
          name: "Hallownest Seal #9",
          spoiler: "Grubfather: 23 Grubs rescued",
          id: "Shiny Item Relic2",
          sceneName: "Crossroads_38",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal10: {
          name: "Hallownest Seal #10",
          spoiler: "Fog Canyon: Right Tall Area",
          id: "Shiny Item",
          sceneName: "Fungus3_26",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal11: {
          name: "Hallownest Seal #11",
          spoiler: "Fog Canyon: Lifeblood Cocoon Room",
          id: "Shiny Item",
          sceneName: "Fungus3_30",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal12: {
          name: "Hallownest Seal #12",
          spoiler: "Queen's Gardens: Outside White Lady",
          id: "Shiny Item",
          sceneName: "Fungus3_48",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal13: {
          name: "Hallownest Seal #13",
          spoiler: "Fungal Wastes: Mantis Lords Reward Room",
          id: "Shiny Item",
          sceneName: "Fungus2_31",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal14: {
          name: "Hallownest Seal #14",
          spoiler: "City of Tears: Watcher's Spire Fourth Floor",
          id: "Shiny Item",
          sceneName: "Ruins2_03",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal15: {
          name: "Hallownest Seal #15",
          spoiler: "Deepnest: Room Above Lower Cornifer",
          id: "Shiny Item",
          sceneName: "Deepnest_16",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal16: {
          name: "Hallownest Seal #16 (missable)",
          spoiler: "Deepnest: Beast's Den",
          id: "Shiny Item",
          sceneName: "Deepnest_Spider_Town",
          wiki: "Hallownest_Seal"
        },
        hallownestSeal17: {
          name: "Hallownest Seal #17",
          spoiler: "Seer: 100 Essence collected",
          id: "dreamReward1",
          sceneName: "",
          wiki: "Hallownest_Seal"
        },
      },
    },*/

    /* ###################################### Collectibles -> Relics - King's Idol ############################################## */

    /*relicsKingsIdol: {
      h2: "Relics - King's Idol",
      id: "hk-relics-idol",
      description: `Idols made of a mysterious white metal that depict the Pale King. They are found in various locations throughout Hallownest. Can be sold to Relic Seeker Lemm for 800 Geo.<br>
      8 x 800 = 6400 Geo Total.`,
      percent: 0,
      maxPercent: 8,
      entries: {
        kingsIdol1: {
          name: "King's Idol #1",
          spoiler: "Howling Cliffs: Main Open Air Area",
          id: "Shiny Item",
          sceneName: "Cliffs_01",
          wiki: "King%27s_Idol"
        }, 
        kingsIdol2: {
          name: "King's Idol #2",
          spoiler: "Crystal Peak: Cornifer Room, use Monarch Wings",
          id: "Shiny Item Stand",
          sceneName: "Mines_30",
          wiki: "King%27s_Idol"
        }, 
        kingsIdol3: {
          name: "King's Idol #3",
          spoiler: "Resting Grounds: Spirit's Glade, Waterfall",
          id: "Shiny Item",
          sceneName: "RestingGrounds_08",
          wiki: "King%27s_Idol"
        }, 
        kingsIdol4: {
          name: "King's Idol #4",
          spoiler: "Royal Waterways: Dung Defender's Cave",
          id: "Shiny Item Stand",
          sceneName: "Waterways_15",
          wiki: "King%27s_Idol"
        },
        kingsIdol5: {
          name: "King's Idol #5",
          spoiler: "Kingdom's Edge: Great Hopper Below Colosseum Entrance",
          id: "Shiny Item",
          sceneName: "Deepnest_East_08",
          wiki: "King%27s_Idol"
        },
        kingsIdol6: {
          name: "King's Idol #6",
          spoiler: "Deepnest: Zote Arena Left Side",
          id: "Shiny Item",
          sceneName: "Deepnest_33",
          wiki: "King%27s_Idol"
        },
        kingsIdol7: {
          name: "King's Idol #7",
          spoiler: "Grubfather: 38 Grubs rescued",
          id: "Shiny Item Relic3",
          sceneName: "Crossroads_38",
          wiki: "King%27s_Idol"
        },
        kingsIdol8: {
          name: "King's Idol #8",
          spoiler: "Kingdom's Edge: Pale Lurker Room",
          id: "Shiny Item",
          sceneName: "GG_Lurker",
          wiki: "King%27s_Idol"
        },
      },
    },*/

    /* ###################################### Collectibles -> Relics - Arcane Egg ############################################## */

    /*relicsArcaneEgg: {
      h2: "Relics - Arcane Egg",
      id: "hk-relics-egg",
      description: `Jet black stone eggs originating from a civilisation that existed before the Kingdom of Hallownest was founded. Egg #4 is missable when the player will go right instead of left in the <span class="spoiler-span blurred">Lifeblood Core room in the Abyss</span> and will touch the Charm. Can be sold to Relic Seeker Lemm for 1200 Geo.<br>
      4 x 1200 = 4800 Geo Total.`,
      percent: 0,
      maxPercent: 4,
      entries: {
        arcaneEgg1: {
          name: "Arcane Egg #1",
          spoiler: "The Abyss: Shade Cloak Room",
          id: "Shiny Item",
          sceneName: "Abyss_10",
          wiki: "Arcane_Egg"
        },
        arcaneEgg2: {
          name: "Arcane Egg #2",
          spoiler: "Seer: 1200 Essence",
          id: "dreamReward6",
          sceneName: "",
          wiki: "Arcane_Egg"
        },
        arcaneEgg3: {
          name: "Arcane Egg #3",
          spoiler: "The Abyss: Birthplace, requires Kingsoul",
          id: "Shiny Item",
          sceneName: "Abyss_15",
          wiki: "Arcane_Egg"
        },
        arcaneEgg4: {
          name: "Arcane Egg #4 (missable)",
          spoiler: "The Abyss: Lifeblood Core Room",
          id: "Shiny Item (1)",
          sceneName: "Abyss_08",
          wiki: "Abyss#Lifeblood_Chamber"
        },
      },
    },*/

    /* ###################################### Collectibles -> Rancid Eggs ############################################## */

    /*rancidEggs: {
      h2: "Rancid Eggs",
      id: "hk-rancid-eggs",
      description: `A collectable item recovered from the corpses of Bluggsacs. Either an already-dead Bluggsac has to be found or a living one has to be killed to make it drop a Rancid Egg. A certain NPC in the game may be <em>very</em> interested in these... Egg #16 is missable when a player enters the <span class="spoiler-span blurred">Beast's Den</span> through the secret path without <span class="spoiler-span blurred">being trapped by using the bench</span>.`,
      percent: 0,
      maxPercent: 21,
      entries: {
        rancidEgg1: {
          name: "Rancid Egg #1",
          spoiler: "Fungal Wastes: Fungal Core Upper Room",
          id: "Shiny Item",
          sceneName: "Fungus2_29",
          wiki: "Rancid_Egg"
        },
        rancidEgg2: {
          name: "Rancid Egg #2",
          spoiler: "City of Tears: Room Above Lemm",
          id: "Shiny Item",
          sceneName: "Ruins1_05",
          wiki: "Rancid_Egg"
        },
        rancidEgg3: {
          name: "Rancid Egg #3",
          spoiler: "Crystal Peak: Dark Bench Room",
          id: "Shiny Item",
          sceneName: "Mines_29",
          wiki: "Rancid_Egg"
        },
        rancidEgg4: {
          name: "Rancid Egg #4",
          spoiler: "Resting Grounds: Blue Lake",
          id: "Shiny Item(Clone)",
          sceneName: "Crossroads_50",
          wiki: "Rancid_Egg"
        },
        rancidEgg5: {
          name: "Rancid Egg #5",
          spoiler: "Crystal Peak: Desolate Dive Entrance",
          id: "Shiny Item(Clone)",
          sceneName: "Mines_01",
          wiki: "Rancid_Egg"
        },
        rancidEgg6: {
          name: "Rancid Egg #6",
          spoiler: "Royal Waterways: Mask Shard Room",
          id: "Shiny Item",
          sceneName: "Waterways_04b",
          wiki: "Rancid_Egg"
        },
        rancidEgg7: {
          name: "Rancid Egg #7",
          spoiler: "Royal Waterways: Hidden Grub Room",
          id: "Shiny Item(Clone)",
          sceneName: "Waterways_04",
          wiki: "Rancid_Egg"
        },
        rancidEgg8: {
          name: "Rancid Egg #8",
          spoiler: "Royal Waterways: Left of Isma's Grove",
          id: "Shiny Item(Clone)",
          sceneName: "Waterways_07",
          wiki: "Rancid_Egg"
        },
        rancidEgg9: {
          name: "Rancid Egg #9",
          spoiler: "Greenpath: Outside Sheo's Hut",
          id: "Shiny Item",
          sceneName: "Fungus1_15",
          wiki: "Rancid_Egg"
        },
        rancidEgg10: {
          name: "Rancid Egg #10",
          spoiler: "Grubfather: 16 Grubs rescued",
          id: "Shiny Item Rancid Egg",
          sceneName: "Crossroads_38",
          wiki: "Rancid_Egg"
        },
        rancidEgg11: {
          name: "Rancid Egg #11",
          spoiler: "Queen's Gardens: Entrance from Fog Canyon",
          id: "Shiny Item(Clone)",
          sceneName: "Fungus3_34",
          wiki: "Rancid_Egg"
        },
        rancidEgg12: {
          name: "Rancid Egg #12",
          spoiler: "City of Tears: Pleasure House Elevator",
          id: "Shiny Item",
          sceneName: "Ruins_Elevator",
          wiki: "Rancid_Egg"
        },
        rancidEgg13: {
          name: "Rancid Egg #13",
          spoiler: "Kingdom's Edge: Whispering Root Area",
          id: "Shiny Item (1)",
          sceneName: "Deepnest_East_07",
          wiki: "Rancid_Egg"
        },
        rancidEgg14: {
          name: "Rancid Egg #14",
          spoiler: "Deepnest: Weaver's Den",
          id: "Shiny Item",
          sceneName: "Deepnest_45_v02",
          wiki: "Rancid_Egg"
        },
        rancidEgg15: {
          name: "Rancid Egg #15",
          spoiler: "Deepnest: Whispering Root Big Area Left Side",
          id: "Shiny Item(Clone)",
          sceneName: "Deepnest_39",
          wiki: "Rancid_Egg"
        },
        rancidEgg16: {
          name: "Rancid Egg #16 (missable)",
          spoiler: "Deepnest: Beast's Den",
          id: "Shiny Item(Clone)",
          sceneName: "Deepnest_Spider_Town",
          wiki: "Rancid_Egg"
        },
        rancidEgg17: {
          name: "Rancid Egg #17",
          spoiler: "Crystal Peak: Right Tall Room",
          id: "Shiny Item(Clone)",
          sceneName: "Mines_20",
          wiki: "Rancid_Egg"
        },
        rancidEgg18: {
          name: "Rancid Egg #18",
          spoiler: "Royal Waterways: Main Bench Area",
          id: "Shiny Item(Clone)",
          sceneName: "Waterways_02",
          wiki: "Rancid_Egg"
        },
        rancidEgg19: {
          name: "Rancid Egg #19",
          spoiler: "Kingdom's Edge: Below Nailmaster Oro",
          id: "Shiny Item(Clone)",
          sceneName: "Deepnest_East_14",
          wiki: "Rancid_Egg"
        },
        rancidEgg20: {
          name: "Rancid Egg #20",
          spoiler: "Sly: 60 Geo",
          id: "slyRancidEgg",
          sceneName: "",
          wiki: "Rancid_Egg"
        },
        rancidEgg21: {
          name: "Rancid Egg #21",
          spoiler: "Royal Waterways: Tuk's free Egg",
          spoilerNormal: "Royal Waterways: Tuk, with Defender's Crest",
          spoilerSteelSoul: "Royal Waterways: Inspect Tuk",
          idPlayerData: "tukDungEgg",
          id: "Shiny Item",
          sceneName: "Waterways_03",
          wiki: "Tuk"
        },
      },
    },*/

    /* ###################################### Collectibles -> Items ############################################## */

    /*items: {
      h2: "Items",
      id: "hk-items",
      description: `Certain acquirable items, map markers or collectibles in the game that won't fit any specific category. Using custom map pins to mark interesting locations on the map is very useful while playing Hollow Knight. 1440 Geo is needed to buy all map pins from Iselda.`,
      percent: 0,
      maxPercent: 21,
      entries: {
        hasQuill: {
          name: "Quill",
          spoiler: "120 Geo: Iselda's Shop, updates map with explored areas",
          wiki: "Map_and_Quill#Mapping_Tools"
        },
        hasPinBench: {
          name: "Map Pin: Bench",
          spoiler: "100 Geo: Iselda's Shop",
          wiki: "Bench_(Hollow_Knight)"
        },
        hasPinShop: {
          name: "Map Pin: Vendor",
          spoiler: "100 Geo: Iselda's Shop",
          wiki: "Category:NPCs_(Hollow_Knight)#Merchants"
        },
        hasPinCocoon: {
          name: "Map Pin: Lifeblood Cocoon",
          spoiler: "100 Geo: Iselda's Shop",
          wiki: "Lifeblood_Cocoon"
        },
        hasPinSpa: {
          name: "Map Pin: Hot Springs",
          spoiler: "100 Geo: Iselda's Shop",
          wiki: "Hot_Springs"
        },
        hasPinStag: {
          name: "Map Pin: Stag Station",
          spoiler: "100 Geo: Iselda's Shop, unlock first Station",
          wiki: "Stag_Station"
        },
        hasPinGhost: {
          name: "Map Pin: Warrior's Grave",
          spoiler: "180 Geo: Iselda's Shop, acquire Dream Nail",
          wiki: "Warrior_Dreams"
        },
        hasPinDreamPlant: {
          name: "Map Pin: Whispering Root",
          spoiler: "150 Geo: Iselda's Shop, acquire Dream Nail",
          wiki: "Whispering_Root"
        },
        hasPinTram: {
          name: "Map Pin: Tram",
          spoiler: "100 Geo: Iselda's Shop, acquire Tram Pass",
          wiki: "Tram"
        },
        hasMarker_r: {
          name: "Map Pin: Shell Marker",
          spoiler: "100 Geo: Iselda's Shop",
          wiki: "Iselda#Map_Pins"
        },
        hasMarker_b: {
          name: "Map Pin: Scarab Marker",
          spoiler: "100 Geo: Iselda's Shop",
          wiki: "Iselda#Map_Pins"
        },
        hasMarker_y: {
          name: "Map Pin: Token Marker",
          spoiler: "100 Geo: Iselda's Shop, acquire Mothwing Cloak",
          wiki: "Iselda#Map_Pins"
        },
        hasMarker_w: {
          name: "Map Pin: Gleaming Marker",
          spoiler: "210 Geo: Iselda, acquire Mothwing Cloak",
          wiki: "Iselda#Map_Pins"
        },
        hasPinGuardian: {
          name: "Map Pin: Dreamers",
          spoiler: "Resting Grounds: Inspect the shrine",
          wiki: "Dreamers"
        },
        hasPinBlackEgg: {
          name: "Map Pin: Temple of the Black Egg",
          spoiler: "City of Tears: Inspect fountain",
          wiki: "Temple_of_the_Black_Egg"
        },
        hasPinGrub: {
          name: "Collector's Map",
          spoiler: "Kingdom's Edge: Tower of Love, Love Key",
          wiki: "Map_and_Quill#The_Collector's_Map"
        },
        cityCrest: {
          name: "City Crest",
          spoiler: "Forgotten Crossroads: False Knight Reward",
          id: "Shiny Item",
          sceneName: "Crossroads_10",
          wiki: "City_Crest"
        },
        hasDreamGate: {
          name: "Dreamgate",
          spoiler: "Seer: 900 Essence",
          wiki: "Dreamgate"
        },
        fragileGreed_unbreakable: {
          name: "Unbreakable Greed",
          spoiler: "Divine: Fragile Greed + 9000 Geo",
          wiki: "Divine#Unbreakable_Charms"
        },
        fragileHealth_unbreakable: {
          name: "Unbreakable Heart",
          spoiler: "Divine: Fragile Heart + 12000 Geo",
          wiki: "Divine#Unbreakable_Charms"
        },
        fragileStrength_unbreakable: {
          name: "Unbreakable Strength",
          spoiler: "Divine: Fragile Strength + 15000 Geo",
          wiki: "Divine#Unbreakable_Charms"
        },
      },
    },*/

    /* ###################################### Geo Caches -> Geo Chests ############################################## */

    /*geoChests: {
      h2: "Geo Chests",
      id: "hk-geo-chests",
      description: `All Geo Chests in the game, including one empty one and one with 1 Geo. A total of 2380 Geo can be collected from Geo Chests. Equipping the Fragile Greed Charm won't increase the amount of Geo found inside Geo Chests.`,
      percent: 0,
      maxPercent: 14,
      entries: {
        chest1: {
          name: "Chest #1: 200 Geo",
          spoiler: "Forgotten Crossroads: False Knight Reward",
          id: "Chest",
          sceneName: "Crossroads_10",
          wiki: "Geo#How_to_Acquire"
        },
        chest2: {
          name: "Chest #2: 1 Geo",
          spoiler: "Howling Cliffs: Baldur's Shell Room",
          id: "Chest",
          sceneName: "Fungus1_28",
          wiki: "Geo#How_to_Acquire"
        },
        chest3: {
          name: "Chest #3: 78 Geo",
          spoiler: "Crystal Peak: Crushers Room",
          id: "Chest",
          sceneName: "Mines_37",
          wiki: "Geo#How_to_Acquire"
        },
        chest4: {
          name: "Chest #4: 380 Geo",
          spoiler: "City of Tears: Soul Master Reward",
          id: "Chest",
          sceneName: "Ruins1_32",
          wiki: "Geo#How_to_Acquire"
        },
        chest5: {
          name: "Chest #5: 150 Geo",
          spoiler: "Resting Grounds: Crypts",
          id: "Chest",
          sceneName: "RestingGrounds_10",
          wiki: "Geo#How_to_Acquire"
        },
        chest6: {
          name: "Chest #6: 85 Geo",
          spoiler: "Greenpath: Whispering Root Room",
          id: "Chest",
          sceneName: "Fungus1_13",
          wiki: "Geo#How_to_Acquire"
        },
        chest7: {
          name: "Chest #7: 620 Geo",
          spoiler: "Fungal Wastes: Mantis Lords Reward",
          id: "Mantis Chest (2)",
          sceneName: "Fungus2_31",
          wiki: "Geo#How_to_Acquire"
        },
        chest8: {
          name: "Chest #8: 655 Geo",
          spoiler: "City of Tears: Watcher Knight Reward",
          id: "Chest",
          sceneName: "Ruins2_03",
          wiki: "Geo#How_to_Acquire"
        },
        chest9: {
          name: "Chest #9: 160 Geo",
          spoiler: "Deepnest: Weaver's Den, Secret Room",
          id: "Chest",
          sceneName: "Deepnest_45_v02",
          wiki: "Geo#How_to_Acquire"
        },
        chest10: {
          name: "Chest #10: 8 Geo",
          spoiler: "Royal Waterways: Junk Pit",
          id: "Chest",
          sceneName: "GG_Waterways",
          wiki: "Geo#How_to_Acquire"
        },
        chest11: {
          name: "Chest #11: 8 Geo",
          spoiler: "Royal Waterways: Junk Pit",
          id: "Chest (1)",
          sceneName: "GG_Waterways",
          wiki: "Geo#How_to_Acquire"
        },
        chest12: {
          name: "Chest #12: 25 Geo",
          spoiler: "Royal Waterways: Junk Pit",
          id: "Chest (2)",
          sceneName: "GG_Waterways",
          wiki: "Geo#How_to_Acquire"
        },
        chest13: {
          name: "Chest #13: 0 Geo",
          spoiler: "Royal Waterways: Junk Pit",
          id: "Chest (3)",
          sceneName: "GG_Waterways",
          wiki: "Geo#How_to_Acquire"
        },
        chest14: {
          name: "Chest #14: 10 Geo",
          spoiler: "Royal Waterways: Junk Pit",
          id: "Chest (4)",
          sceneName: "GG_Waterways",
          wiki: "Geo#How_to_Acquire"
        },
      },
    },*/

    /* ###################################### Geo Caches -> Geo Rocks ############################################## */

    /*geoRocks: {
      h2: "Geo Rocks",
      id: "hk-geo-rocks",
      description: `All Geo Rocks that can be found in the game. Only fully destroyed Geo Rocks are counted. Partially hit Geo Rocks won't be counted. Equipping the Fragile Greed Charm won't increase the amount of Geo found inside Geo Rocks. A total of 5074 Geo can be collected from Geo Rocks (credit: <a href="https://github.com/ReznoRMichael/hollow-knight-completion-check/pull/9" target="_blank">Araraura</a>).`,
      percent: 0,
      maxPercent: 207,
      entries: {
        geoRock1: {
          name: "Geo Rock #1: 15 Geo",
          spoiler: "King's Pass",
          id: "Geo Rock 4",
          sceneName: "Tutorial_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock2: {
          name: "Geo Rock #2: 15 Geo",
          spoiler: "King's Pass",
          id: "Geo Rock 1",
          sceneName: "Tutorial_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock3: {
          name: "Geo Rock #3: 15 Geo",
          spoiler: "King's Pass",
          id: "Geo Rock 3",
          sceneName: "Tutorial_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock4: {
          name: "Geo Rock #4: 18 Geo",
          spoiler: "King's Pass",
          id: "Geo Rock 2",
          sceneName: "Tutorial_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock5: {
          name: "Geo Rock #5: 15 Geo",
          spoiler: "King's Pass",
          id: "Geo Rock 5",
          sceneName: "Tutorial_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock6: {
          name: "Geo Rock #6: 19 Geo",
          spoiler: "Forgotten Crossroads: Well",
          id: "Geo Rock 2",
          sceneName: "Crossroads_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock7: {
          name: "Geo Rock #7: 15 Geo",
          spoiler: "Forgotten Crossroads: Gruzzer Vertical Room",
          id: "Geo Rock 1",
          sceneName: "Crossroads_07",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock8: {
          name: "Geo Rock #8: 15 Geo",
          spoiler: "Forgotten Crossroads: Gruzzer Vertical Room",
          id: "Geo Rock 1 (2)",
          sceneName: "Crossroads_07",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock9: {
          name: "Geo Rock #9: 15 Geo",
          spoiler: "Forgotten Crossroads: Gruzzer Vertical Room",
          id: "Geo Rock 1 (1)",
          sceneName: "Crossroads_07",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock10: {
          name: "Geo Rock #10: 15 Geo",
          spoiler: "Forgotten Crossroads: Corridor to Acid Grub",
          id: "Geo Rock 2",
          sceneName: "Crossroads_12",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock11: {
          name: "Geo Rock #11: 10 Geo",
          spoiler: "Forgotten Crossroads: Aspid Arena",
          id: "Geo Rock 1 (3)",
          sceneName: "Crossroads_08",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock12: {
          name: "Geo Rock #12: 10 Geo",
          spoiler: "Forgotten Crossroads: Aspid Arena",
          id: "Geo Rock 1 (2)",
          sceneName: "Crossroads_08",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock13: {
          name: "Geo Rock #13: 15 Geo",
          spoiler: "Forgotten Crossroads: Aspid Arena",
          id: "Geo Rock 1",
          sceneName: "Crossroads_08",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock14: {
          name: "Geo Rock #14: 10 Geo",
          spoiler: "Forgotten Crossroads: Aspid Arena",
          id: "Geo Rock 1 (1)",
          sceneName: "Crossroads_08",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock15: {
          name: "Geo Rock #15: 15 Geo",
          spoiler: "Forgotten Crossroads: Fungal Wastes Entrance",
          id: "Geo Rock 1",
          sceneName: "Crossroads_18",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock16: {
          name: "Geo Rock #16: 15 Geo",
          spoiler: "Forgotten Crossroads: Fungal Wastes Entrance",
          id: "Geo Rock 2",
          sceneName: "Crossroads_18",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock17: {
          name: "Geo Rock #17: 15 Geo",
          spoiler: "Forgotten Crossroads: Fungal Wastes Entrance",
          id: "Geo Rock 3",
          sceneName: "Crossroads_18",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock18: {
          name: "Geo Rock #18: 15 Geo",
          spoiler: "Forgotten Crossroads: Goam Mask Shard",
          id: "Geo Rock 2",
          sceneName: "Crossroads_13",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock19: {
          name: "Geo Rock #19: 15 Geo",
          spoiler: "Forgotten Crossroads: Goam Mask Shard",
          id: "Geo Rock 1",
          sceneName: "Crossroads_13",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock20: {
          name: "Geo Rock #20: 15 Geo",
          spoiler: "Forgotten Crossroads: Right of Mask Shard",
          id: "Geo Rock 2",
          sceneName: "Crossroads_42",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock21: {
          name: "Geo Rock #21: 15 Geo",
          spoiler: "Forgotten Crossroads: Right of Mask Shard",
          id: "Geo Rock 1",
          sceneName: "Crossroads_42",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock22: {
          name: "Geo Rock #22: 15 Geo",
          spoiler: "Forgotten Crossroads: Before Gruz Mother",
          id: "Geo Rock 1",
          sceneName: "Crossroads_19",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock23: {
          name: "Geo Rock #23: 15 Geo",
          spoiler: "Forgotten Crossroads: Outside False Knight",
          id: "Geo Rock 1",
          sceneName: "Crossroads_21",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock24: {
          name: "Geo Rock #24: 15 Geo",
          spoiler: "Forgotten Crossroads: Crystal Peak Dark Toll",
          id: "Geo Rock 2 (1)",
          sceneName: "Mines_33",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock25: {
          name: "Geo Rock #25: 15 Geo",
          spoiler: "Forgotten Crossroads: Crystal Peak Dark Toll",
          id: "Geo Rock 2",
          sceneName: "Mines_33",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock26: {
          name: "Geo Rock #26: 15 Geo",
          spoiler: "Forgotten Crossroads: Crystal Peak Dark Toll",
          id: "Geo Rock 2 (2)",
          sceneName: "Mines_33",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock27: {
          name: "Geo Rock #27: 15 Geo",
          spoiler: "Forgotten Crossroads: Above Lever",
          id: "Geo Rock 2",
          sceneName: "Crossroads_16",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock28: {
          name: "Geo Rock #28: 15 Geo",
          spoiler: "Forgotten Crossroads: Central Grub",
          id: "Geo Rock 1",
          sceneName: "Crossroads_05",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock29: {
          name: "Geo Rock #29: 15 Geo",
          spoiler: "Forgotten Crossroads: Outside Tram",
          id: "Geo Rock 1",
          sceneName: "Crossroads_27",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock30: {
          name: "Geo Rock #30: 15 Geo",
          spoiler: "Forgotten Crossroads: Tram",
          id: "Geo Rock 1",
          sceneName: "Crossroads_46",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock31: {
          name: "Geo Rock #31: 15 Geo",
          spoiler: "Forgotten Crossroads: False Knight Arena",
          id: "Geo Rock 1",
          sceneName: "Crossroads_10",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock32: {
          name: "Geo Rock #32: 15 Geo",
          spoiler: "Forgotten Crossroads: Ancestral Mound",
          id: "Geo Rock 2",
          sceneName: "Crossroads_ShamanTemple",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock33: {
          name: "Geo Rock #33: 15 Geo",
          spoiler: "Forgotten Crossroads: Ancestral Mound",
          id: "Geo Rock 2 (1)",
          sceneName: "Crossroads_ShamanTemple",
          hitsLeft: "5",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock34: {
          name: "Geo Rock #34: 15 Geo",
          spoiler: "Forgotten Crossroads: Ancestral Mound",
          id: "Geo Rock 1",
          sceneName: "Crossroads_ShamanTemple",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock35: {
          name: "Geo Rock #35: 15 Geo",
          spoiler: "Forgotten Crossroads: Ancestral Mound",
          id: "Geo Rock 2",
          sceneName: "Crossroads_ShamanTemple",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock36: {
          name: "Geo Rock #36: 26 Geo",
          spoiler: "Greenpath: Entrance",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock37: {
          name: "Geo Rock #37: 26 Geo",
          spoiler: "Greenpath: Waterfall Bench",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_01b",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock38: {
          name: "Geo Rock #38: 26 Geo",
          spoiler: "Greenpath: First Hornet Sighting",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_02",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock39: {
          name: "Geo Rock #39: 26 Geo",
          spoiler: "Greenpath: First Hornet Sighting",
          id: "Geo Rock Green Path 01 (1)",
          sceneName: "Fungus1_02",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock40: {
          name: "Geo Rock #40: 26 Geo",
          spoiler: "Greenpath: Outside Hunter",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_07",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock41: {
          name: "Geo Rock #41: 26 Geo",
          spoiler: "Greenpath: Above Sanctuary Bench",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_19",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock42: {
          name: "Geo Rock #42: 26 Geo",
          spoiler: "Greenpath: Acid Bridge",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_10",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock43: {
          name: "Geo Rock #43: 26 Geo",
          spoiler: "Greenpath: Outside Stag Station",
          id: "Geo Rock Green Path 01 (1)",
          sceneName: "Fungus1_22",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock44: {
          name: "Geo Rock #44: 26 Geo",
          spoiler: "Greenpath: Outside Stag Station",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_22",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock45: {
          name: "Geo Rock #45: 26 Geo",
          spoiler: "Greenpath: Toll",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_31",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock46: {
          name: "Geo Rock #46: 15 Geo",
          spoiler: "Greenpath: Toll",
          id: "Geo Rock 1 (1)",
          sceneName: "Fungus1_31",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock47: {
          name: "Geo Rock #47: 15 Geo",
          spoiler: "Greenpath: Toll",
          id: "Geo Rock 2 (1)",
          sceneName: "Fungus1_31",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock48: {
          name: "Geo Rock #48: 26 Geo",
          spoiler: "Greenpath: Storerooms",
          id: "Geo Rock Green Path 01 (2)",
          sceneName: "Fungus1_03",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock49: {
          name: "Geo Rock #49: 26 Geo",
          spoiler: "Greenpath: Storerooms",
          id: "Geo Rock Green Path 01 (1)",
          sceneName: "Fungus1_03",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock50: {
          name: "Geo Rock #50: 26 Geo",
          spoiler: "Greenpath: Storerooms",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_03",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock51: {
          name: "Geo Rock #51: 15 Geo",
          spoiler: "Greenpath: Outside Thorns",
          id: "Geo Rock 2",
          sceneName: "Fungus1_05",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock52: {
          name: "Geo Rock #52: 15 Geo",
          spoiler: "Howling Cliffs: Baldur's Shell",
          id: "Geo Rock 2",
          sceneName: "Fungus1_28",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock53: {
          name: "Geo Rock #53: 15 Geo",
          spoiler: "Howling Cliffs: Baldur's Shell",
          id: "Geo Rock 1 (2)",
          sceneName: "Fungus1_28",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock54: {
          name: "Geo Rock #54: 30 Geo",
          spoiler: "Greenpath: Outside Hornet",
          id: "Geo Rock Green Path 02",
          sceneName: "Fungus1_21",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock55: {
          name: "Geo Rock #55: 30 Geo",
          spoiler: "Greenpath: Outside Hornet",
          id: "Geo Rock Green Path 02 (1)",
          sceneName: "Fungus1_21",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock56: {
          name: "Geo Rock #56: 30 Geo",
          spoiler: "Greenpath: Outside Hornet",
          id: "Geo Rock Green Path 02 (2)",
          sceneName: "Fungus1_21",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock57: {
          name: "Geo Rock #57: 26 Geo",
          spoiler: "Greenpath: Hornet",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_04",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock58: {
          name: "Geo Rock #58: 26 Geo",
          spoiler: "Greenpath: Massive Moss Charger",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_29",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock59: {
          name: "Geo Rock #59: 26 Geo",
          spoiler: "Greenpath: Massive Moss Charger Corridor",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus1_12",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock60: {
          name: "Geo Rock #60: 26 Geo",
          spoiler: "Greenpath: Massive Moss Charger Corridor",
          id: "Geo Rock Green Path 01 (1)",
          sceneName: "Fungus1_12",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock61: {
          name: "Geo Rock #61: 30 Geo",
          spoiler: "Greenpath: Massive Moss Charger Corridor",
          id: "Geo Rock Green Path 02",
          sceneName: "Fungus1_12",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock62: {
          name: "Geo Rock #62: 26 Geo",
          spoiler: "Fog Canyon: Queen's Gardens Acid Entrance",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus3_03",
          hitsLeft: "5",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock63: {
          name: "Geo Rock #63: 22 Geo",
          spoiler: "Fungal Wastes: Below Shrumal Ogres",
          id: "Geo Rock Fung 01",
          sceneName: "Fungus2_04",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock64: {
          name: "Geo Rock #64: 22 Geo",
          spoiler: "Fungal Wastes: Cornifer",
          id: "Geo Rock Fung 01 (1)",
          sceneName: "Fungus2_18",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock65: {
          name: "Geo Rock #65: 22 Geo",
          spoiler: "Fungal Wastes: Cornifer",
          id: "Geo Rock Fung 01",
          sceneName: "Fungus2_18",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock66: {
          name: "Geo Rock #66: 17 Geo",
          spoiler: "Fungal Wastes: Cornifer",
          id: "Geo Rock Fung 02 (1)",
          sceneName: "Fungus2_18",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock67: {
          name: "Geo Rock #67: 17 Geo",
          spoiler: "Fungal Wastes: Cornifer",
          id: "Geo Rock Fung 02 (2)",
          sceneName: "Fungus2_18",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock68: {
          name: "Geo Rock #68: 15 Geo",
          spoiler: "Forgotten Crossroads: Goam Journal",
          id: "Geo Rock 1",
          sceneName: "Crossroads_52",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock69: {
          name: "Geo Rock #69: 15 Geo",
          spoiler: "Forgotten Crossroads: Goam Journal",
          id: "Geo Rock 2",
          sceneName: "Crossroads_52",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock70: {
          name: "Geo Rock #70: 22 Geo",
          spoiler: "Fungal Wastes: Outside Elder Hu",
          id: "Geo Rock Fung 01",
          sceneName: "Fungus2_08",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock71: {
          name: "Geo Rock #71: 22 Geo",
          spoiler: "Fungal Wastes: Left Of Pilgrim's Way",
          id: "Geo Rock Fung 01",
          sceneName: "Fungus2_10",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock72: {
          name: "Geo Rock #72: 17 Geo",
          spoiler: "Fungal Wastes: Right of Bouncy Mushroom Grub",
          id: "Geo Rock Fung 02",
          sceneName: "Fungus2_11",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock73: {
          name: "Geo Rock #73: 22 Geo",
          spoiler: "Fungal Wastes: Right of Bouncy Mushroom Grub",
          id: "Geo Rock Fung 01",
          sceneName: "Fungus2_11",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock74: {
          name: "Geo Rock #74: 22 Geo",
          spoiler: "Fungal Wastes: Bretta Bench",
          id: "Geo Rock Fung 01 (1)",
          sceneName: "Fungus2_13",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock75: {
          name: "Geo Rock #75: 22 Geo",
          spoiler: "Fungal Wastes: Bretta Bench",
          id: "Geo Rock Fung 01",
          sceneName: "Fungus2_13",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock76: {
          name: "Geo Rock #76: 17 Geo",
          spoiler: "Fungal Wastes: Bretta Bench",
          id: "Geo Rock Fung 02",
          sceneName: "Fungus2_13",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock77: {
          name: "Geo Rock #77: 15 Geo",
          spoiler: "Fungal Wastes: Mantis Village",
          id: "Geo Rock 2 (2)",
          sceneName: "Fungus2_14",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock78: {
          name: "Geo Rock #78: 15 Geo",
          spoiler: "Fungal Wastes: Mantis Village",
          id: "Geo Rock 1",
          sceneName: "Fungus2_14",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock79: {
          name: "Geo Rock #79: 15 Geo",
          spoiler: "Fungal Wastes: Mantis Village",
          id: "Geo Rock 2 (3)",
          sceneName: "Fungus2_14",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock80: {
          name: "Geo Rock #80: 15 Geo",
          spoiler: "Fungal Wastes: Mantis Village",
          id: "Geo Rock 2 (1)",
          sceneName: "Fungus2_14",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock81: {
          name: "Geo Rock #81: 15 Geo",
          spoiler: "Fungal Wastes: Mantis Village",
          id: "Geo Rock 2",
          sceneName: "Fungus2_14",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock82: {
          name: "Geo Rock #82: 15 Geo",
          spoiler: "Fungal Wastes: Mantis Lords",
          id: "Geo Rock 1",
          sceneName: "Fungus2_15",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock83: {
          name: "Geo Rock #83: 15 Geo",
          spoiler: "Fungal Wastes: Mantis Lords",
          id: "Geo Rock 1 (1)",
          sceneName: "Fungus2_15",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock84: {
          name: "Geo Rock #84: 22 Geo",
          spoiler: "Fungal Wastes: Fungal Core Upper",
          id: "Geo Rock Fung 01",
          sceneName: "Fungus2_29",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock85: {
          name: "Geo Rock #85: 15 Geo",
          spoiler: "Fungal Wastes: Pilgrim's Way",
          id: "Geo Rock 1",
          sceneName: "Fungus2_21",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock86: {
          name: "Geo Rock #86: 30 Geo",
          spoiler: "City of Tears: Rafters",
          id: "Geo Rock City 1",
          sceneName: "Ruins1_03",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock87: {
          name: "Geo Rock #87: 30 Geo",
          spoiler: "City of Tears: Lemm Room",
          id: "Geo Rock City 1 (1)",
          sceneName: "Ruins1_05b",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock88: {
          name: "Geo Rock #88: 30 Geo",
          spoiler: "City of Tears: Rancid Egg Above Lemm",
          id: "Geo Rock City 1",
          sceneName: "Ruins1_05c",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock89: {
          name: "Geo Rock #89: 15 Geo",
          spoiler: "Forgotten Crossroads: Vessel Fragment",
          id: "Geo Rock 2",
          sceneName: "Crossroads_37",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock90: {
          name: "Geo Rock #90: 15 Geo",
          spoiler: "Forgotten Crossroads: Brooding Mawlek Middle",
          id: "Geo Rock 1",
          sceneName: "Crossroads_36",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock91: {
          name: "Geo Rock #91: 15 Geo",
          spoiler: "Howling Cliffs: Gorb",
          id: "Geo Rock 1",
          sceneName: "Cliffs_02",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock92: {
          name: "Geo Rock #92: 15 Geo",
          spoiler: "Howling Cliffs: Gorb",
          id: "Geo Rock 1 (1)",
          sceneName: "Cliffs_02",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock93: {
          name: "Geo Rock #93: 15 Geo",
          spoiler: "Howling Cliffs: Main",
          id: "Geo Rock 2 (2)",
          sceneName: "Cliffs_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock94: {
          name: "Geo Rock #94: 15 Geo",
          spoiler: "Howling Cliffs: Main",
          id: "Geo Rock 2 (1)",
          sceneName: "Cliffs_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock95: {
          name: "Geo Rock #95: 15 Geo",
          spoiler: "Howling Cliffs: Main",
          id: "Geo Rock 2 (4)",
          sceneName: "Cliffs_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock96: {
          name: "Geo Rock #96: 15 Geo",
          spoiler: "Howling Cliffs: Main",
          id: "Geo Rock 2 (3)",
          sceneName: "Cliffs_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock97: {
          name: "Geo Rock #97: 24 Geo",
          spoiler: "Crystal Peak: Dark Entrance",
          id: "Geo Rock Mine",
          sceneName: "Mines_02",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock98: {
          name: "Geo Rock #98: 15 Geo",
          spoiler: "Crystal Peak: Dark Entrance",
          id: "Geo Rock 1",
          sceneName: "Mines_02",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock99: {
          name: "Geo Rock #99: 22 Geo",
          spoiler: "Crystal Peak: Dark Entrance",
          id: "Geo Rock Mine (1)",
          sceneName: "Mines_02",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock100: {
          name: "Geo Rock #100: 16 Geo",
          spoiler: "Crystal Peak: Conveyor Belts Entrance",
          id: "Geo Rock Mine (1)",
          sceneName: "Mines_04",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock101: {
          name: "Geo Rock #101: 16 Geo",
          spoiler: "Crystal Peak: Conveyor Belts Entrance",
          id: "Geo Rock Mine",
          sceneName: "Mines_04",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock102: {
          name: "Geo Rock #102: 22 Geo",
          spoiler: "Crystal Peak: Above Spike Grub",
          id: "Geo Rock Mine",
          sceneName: "Mines_05",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock103: {
          name: "Geo Rock #103: 24 Geo",
          spoiler: "Crystal Peak: East Tall",
          id: "Geo Rock Mine (4)",
          sceneName: "Mines_20",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock104: {
          name: "Geo Rock #104: 24 Geo",
          spoiler: "Crystal Peak: East Tall",
          id: "Geo Rock Mine (3)",
          sceneName: "Mines_20",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock105: {
          name: "Geo Rock #105: 24 Geo",
          spoiler: "Crystal Peak: East Tall",
          id: "Geo Rock Mine (2)",
          sceneName: "Mines_20",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock106: {
          name: "Geo Rock #106: 24 Geo",
          spoiler: "Crystal Peak: Chest Crushers",
          id: "Geo Rock Mine",
          sceneName: "Mines_37",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock107: {
          name: "Geo Rock #107: 24 Geo",
          spoiler: "Crystal Peak: Chest Crushers",
          id: "Geo Rock Mine (1)",
          sceneName: "Mines_37",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock108: {
          name: "Geo Rock #108: 30 Geo",
          spoiler: "Royal Waterways: Entrance",
          id: "Geo Rock City 1",
          sceneName: "Waterways_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock109: {
          name: "Geo Rock #109: 26 Geo",
          spoiler: "Royal Waterways: Entrance",
          id: "Geo Rock City 1 (1)",
          sceneName: "Waterways_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock110: {
          name: "Geo Rock #110: 30 Geo",
          spoiler: "Royal Waterways: Mask Shard Room",
          id: "Geo Rock City 1",
          sceneName: "Waterways_04b",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock111: {
          name: "Geo Rock #111: 15 Geo",
          spoiler: "City of Tears: Broken Elevator",
          id: "Geo Rock 2 (1)",
          sceneName: "Abyss_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock112: {
          name: "Geo Rock #112: 15 Geo",
          spoiler: "City of Tears: Broken Elevator",
          id: "Geo Rock 2",
          sceneName: "Abyss_01",
          hitsLeft: "5",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock113: {
          name: "Geo Rock #113: 15 Geo",
          spoiler: "City of Tears: Broken Elevator",
          id: "Geo Rock 1",
          sceneName: "Abyss_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock114: {
          name: "Geo Rock #114: 15 Geo",
          spoiler: "Ancient Basin: Broken Bridge",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Abyss_02",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock115: {
          name: "Geo Rock #115: 15 Geo",
          spoiler: "Ancient Basin: Broken Bridge",
          id: "Geo Rock Deepnest",
          sceneName: "Abyss_02",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock116: {
          name: "Geo Rock #116: 15 Geo",
          spoiler: "Ancient Basin: Broken Bridge",
          id: "Geo Rock Deepnest (2)",
          sceneName: "Abyss_02",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock117: {
          name: "Geo Rock #117: 30 Geo",
          spoiler: "City of Tears: King's Station",
          id: "Geo Rock City 1",
          sceneName: "Ruins2_06",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock118: {
          name: "Geo Rock #118: 30 Geo",
          spoiler: "City of Tears: Above King's Station",
          id: "Geo Rock City 1",
          sceneName: "Ruins2_05",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock119: {
          name: "Geo Rock #119: 44 Geo",
          spoiler: "Kingdom's Edge: Whispering Root",
          id: "Geo Rock Outskirts",
          sceneName: "Deepnest_East_07",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock120: {
          name: "Geo Rock #120: 44 Geo",
          spoiler: "Kingdom's Edge: Whispering Root",
          id: "Geo Rock Outskirts (1)",
          sceneName: "Deepnest_East_07",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock121: {
          name: "Geo Rock #121: 44 Geo",
          spoiler: "Kingdom's Edge: Outside Nailmaster Oro",
          id: "Geo Rock Outskirts",
          sceneName: "Deepnest_East_06",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock122: {
          name: "Geo Rock #122: 44 Geo",
          spoiler: "Kingdom's Edge: Outside Nailmaster Oro",
          id: "Geo Rock Outskirts (1)",
          sceneName: "Deepnest_East_06",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock123: {
          name: "Geo Rock #123: 44 Geo",
          spoiler: "Kingdom's Edge: Bardoon",
          id: "Geo Rock Outskirts",
          sceneName: "Deepnest_East_04",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock124: {
          name: "Geo Rock #124: 44 Geo",
          spoiler: "Kingdom's Edge: Great Hopper King's Idol",
          id: "Geo Rock Outskirts",
          sceneName: "Deepnest_East_08",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock125: {
          name: "Geo Rock #125: 44 Geo",
          spoiler: "Kingdom's Edge: Pale Lurker Arena",
          id: "Geo Rock Outskirts",
          sceneName: "GG_Lurker",
          hitsLeft: "5",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock126: {
          name: "Geo Rock #126: 30 Geo",
          spoiler: "Fog Canyon: Overgrown Mound",
          id: "Geo Rock Green Path 02",
          sceneName: "Room_Fungus_Shaman",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock127: {
          name: "Geo Rock #127: 30 Geo",
          spoiler: "City of Tears: Soul Master Rewards Room",
          id: "Geo Rock City 1",
          sceneName: "Ruins1_32",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock128: {
          name: "Geo Rock #128: 30 Geo",
          spoiler: "Royal Waterways: Outside Flukemarm",
          id: "Geo Rock City 1",
          sceneName: "Waterways_08",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock129: {
          name: "Geo Rock #129: 30 Geo",
          spoiler: "Royal Waterways: Flukemunga Corridor",
          id: "Geo Rock City 1",
          sceneName: "GG_Pipeway",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock130: {
          name: "Geo Rock #130: 22 Geo",
          spoiler: "Royal Waterways: Fluke Hermit Room",
          id: "Geo Rock Fung 01",
          sceneName: "Room_GG_Shortcut",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock131: {
          name: "Geo Rock #131: 17 Geo",
          spoiler: "Royal Waterways: Fluke Hermit Room",
          id: "Geo Rock Fung 02 (1)",
          sceneName: "Room_GG_Shortcut",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock132: {
          name: "Geo Rock #132: 25 Geo",
          spoiler: "Resting Grounds: Crypts",
          id: "Geo Rock Grave 02 (1)",
          sceneName: "RestingGrounds_10",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock133: {
          name: "Geo Rock #133: 25 Geo",
          spoiler: "Resting Grounds: Crypts",
          id: "Geo Rock Grave 02",
          sceneName: "RestingGrounds_10",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock134: {
          name: "Geo Rock #134: 25 Geo",
          spoiler: "Resting Grounds: Crypts",
          id: "Geo Rock Grave 01",
          sceneName: "RestingGrounds_10",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock135: {
          name: "Geo Rock #135: 24 Geo",
          spoiler: "Crystal Peak: Crystal Heart Gauntlet",
          id: "Geo Rock Mine",
          sceneName: "Mines_31",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock136: {
          name: "Geo Rock #136: 24 Geo",
          spoiler: "Crystal Peak: Grub Mimic",
          id: "Geo Rock Mine",
          sceneName: "Mines_16",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock137: {
          name: "Geo Rock #137: 35 Geo",
          spoiler: "Ancient Basin: Corridor to Broken Vessel",
          id: "Geo Rock Abyss",
          sceneName: "Abyss_18",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock138: {
          name: "Geo Rock #138: 35 Geo",
          spoiler: "The Abyss: Main/Core Area",
          id: "Geo Rock Abyss (1)",
          sceneName: "Abyss_06_Core",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock139: {
          name: "Geo Rock #139: 35 Geo",
          spoiler: "The Abyss: Main/Core Area",
          id: "Geo Rock Abyss",
          sceneName: "Abyss_06_Core",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock140: {
          name: "Geo Rock #140: 35 Geo",
          spoiler: "The Abyss: Main/Core Area",
          id: "Geo Rock Abyss",
          sceneName: "Abyss_06_Core",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock141: {
          name: "Geo Rock #141: 35 Geo",
          spoiler: "Ancient Basin: Broken Vessel Grub",
          id: "Geo Rock Abyss (1)",
          sceneName: "Abyss_19",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock142: {
          name: "Geo Rock #142: 35 Geo",
          spoiler: "Ancient Basin: Broken Vessel Grub",
          id: "Geo Rock Abyss",
          sceneName: "Abyss_19",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock143: {
          name: "Geo Rock #143: 24 Geo",
          spoiler: "Crystal Peak: Hallownest Crown Climb",
          id: "Geo Rock Mine",
          sceneName: "Mines_25",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock144: {
          name: "Geo Rock #144: 24 Geo",
          spoiler: "Crystal Peak: Hallownest Crown Climb",
          id: "Geo Rock Mine (4)",
          sceneName: "Mines_25",
          hitsLeft: "4",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock145: {
          name: "Geo Rock #145: 24 Geo",
          spoiler: "Crystal Peak: Hallownest Crown Climb",
          id: "Geo Rock Mine (2)",
          sceneName: "Mines_25",
          hitsLeft: "4",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock146: {
          name: "Geo Rock #146: 24 Geo",
          spoiler: "Crystal Peak: Hallownest Crown Climb",
          id: "Geo Rock Mine (1)",
          sceneName: "Mines_25",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock147: {
          name: "Geo Rock #147: 24 Geo",
          spoiler: "Crystal Peak: Hallownest Crown Climb",
          id: "Geo Rock Mine (3)",
          sceneName: "Mines_25",
          hitsLeft: "4",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock148: {
          name: "Geo Rock #148: 30 Geo",
          spoiler: "City of Tears: Watcher's Spire Second Floor",
          id: "Geo Rock City 1",
          sceneName: "Ruins2_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock149: {
          name: "Geo Rock #149: 30 Geo",
          spoiler: "Fog Canyon: East Tall",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus3_26",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock150: {
          name: "Geo Rock #150: 26 Geo",
          spoiler: "Queen's Gardens: Main Arena",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus3_10",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock151: {
          name: "Geo Rock #151: 30 Geo",
          spoiler: "Queen's Gardens: Outside White Lady",
          id: "Geo Rock Green Path 02",
          sceneName: "Fungus3_48",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock152: {
          name: "Geo Rock #152: 27 Geo",
          spoiler: "Queen's Gardens: Moss Prophet Room",
          id: "Geo Rock Green Path 01 (1)",
          sceneName: "Fungus3_39",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock153: {
          name: "Geo Rock #153: 30 Geo",
          spoiler: "Queen's Gardens: Moss Prophet Room",
          id: "Geo Rock Green Path 01",
          sceneName: "Fungus3_39",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock154: {
          name: "Geo Rock #154: 15 Geo",
          spoiler: "Fungal Wastes: Deepnest Fall",
          id: "Geo Rock 1",
          sceneName: "Deepnest_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock155: {
          name: "Geo Rock #155: 15 Geo",
          spoiler: "Fungal Wastes: Deepnest Fall",
          id: "Geo Rock 2",
          sceneName: "Deepnest_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock156: {
          name: "Geo Rock #156: 26 Geo",
          spoiler: "Queen's Gardens: Corridor To Deepnest",
          id: "Geo Rock Green Path 01 (1)",
          sceneName: "Deepnest_43",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock157: {
          name: "Geo Rock #157: 26 Geo",
          spoiler: "Queen's Gardens: Corridor To Deepnest",
          id: "Geo Rock Green Path 01",
          sceneName: "Deepnest_43",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock158: {
          name: "Geo Rock #158: 22 Geo",
          spoiler: "Fungal Wastes: Fungal Core Lower",
          id: "Geo Rock Fung 01",
          sceneName: "Fungus2_30",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock159: {
          name: "Geo Rock #159: 22 Geo",
          spoiler: "Fungal Wastes: Fungal Core Lower",
          id: "Geo Rock Fung 01 (1)",
          sceneName: "Fungus2_30",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock160: {
          name: "Geo Rock #160: 15 Geo",
          spoiler: "Deepnest: Lower Cornifer",
          id: "Geo Rock Deepnest",
          sceneName: "Fungus2_25",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock161: {
          name: "Geo Rock #161: 15 Geo",
          spoiler: "Deepnest: Lower Cornifer",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Fungus2_25",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock162: {
          name: "Geo Rock #162: 15 Geo",
          spoiler: "Deepnest: Lower Cornifer",
          id: "Geo Rock Deepnest (2)",
          sceneName: "Fungus2_25",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock163: {
          name: "Geo Rock #163: 15 Geo",
          spoiler: "Deepnest: Top of Lower Cornifer",
          id: "Geo Rock Deepnest (4)",
          sceneName: "Deepnest_16",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock164: {
          name: "Geo Rock #164: 15 Geo",
          spoiler: "Deepnest: Top of Lower Cornifer",
          id: "Geo Rock Deepnest (3)",
          sceneName: "Deepnest_16",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock165: {
          name: "Geo Rock #165: 15 Geo",
          spoiler: "Deepnest: Top of Lower Cornifer",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Deepnest_16",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock166: {
          name: "Geo Rock #166: 15 Geo",
          spoiler: "Deepnest: Top of Lower Cornifer",
          id: "Geo Rock Deepnest",
          sceneName: "Deepnest_16",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock167: {
          name: "Geo Rock #167: 15 Geo",
          spoiler: "Deepnest: Top of Lower Cornifer",
          id: "Geo Rock Deepnest (2)",
          sceneName: "Deepnest_16",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock168: {
          name: "Geo Rock #168: 15 Geo",
          spoiler: "Deepnest: Outside Grub Mimics",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Deepnest_02",
          hitsLeft: "3",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock169: {
          name: "Geo Rock #169: 15 Geo",
          spoiler: "Deepnest: Outside Grub Mimics",
          id: "Geo Rock Deepnest",
          sceneName: "Deepnest_02",
          hitsLeft: "3",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock170: {
          name: "Geo Rock #170: 15 Geo",
          spoiler: "Deepnest: Whispering Root",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Deepnest_39",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock171: {
          name: "Geo Rock #171: 15 Geo",
          spoiler: "Deepnest: Whispering Root",
          id: "Geo Rock Deepnest (2)",
          sceneName: "Deepnest_39",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock172: {
          name: "Geo Rock #172: 15 Geo",
          spoiler: "Deepnest: Whispering Root",
          id: "Geo Rock Deepnest",
          sceneName: "Deepnest_39",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock173: {
          name: "Geo Rock #173: 15 Geo",
          spoiler: "Deepnest: Left of Hot Spring",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Deepnest_03",
          hitsLeft: "3",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock174: {
          name: "Geo Rock #174: 15 Geo",
          spoiler: "Deepnest: Left of Hot Spring",
          id: "Geo Rock Deepnest (2)",
          sceneName: "Deepnest_03",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock175: {
          name: "Geo Rock #175: 15 Geo",
          spoiler: "Deepnest: Left of Hot Spring",
          id: "Geo Rock Deepnest",
          sceneName: "Deepnest_03",
          hitsLeft: "3",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock176: {
          name: "Geo Rock #176: 15 Geo",
          spoiler: "Deepnest: Outside Galien",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Deepnest_35",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock177: {
          name: "Geo Rock #177: 15 Geo",
          spoiler: "Deepnest: Outside Galien",
          id: "Geo Rock Deepnest",
          sceneName: "Deepnest_35",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock178: {
          name: "Geo Rock #178: 15 Geo",
          spoiler: "Deepnest: Corridor to Tram",
          id: "Geo Rock Deepnest",
          sceneName: "Deepnest_37",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock179: {
          name: "Geo Rock #179: 15 Geo",
          spoiler: "Deepnest: Corridor to Tram",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Deepnest_37",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock180: {
          name: "Geo Rock #180: 15 Geo",
          spoiler: "Kingdom's Edge: Left of The Hive",
          id: "Geo Rock Deepnest",
          sceneName: "Deepnest_East_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock181: {
          name: "Geo Rock #181: 15 Geo",
          spoiler: "Kingdom's Edge: Left of The Hive",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Deepnest_East_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock182: {
          name: "Geo Rock #182: 15 Geo",
          spoiler: "Kingdom's Edge: Above The Hive",
          id: "Geo Rock Deepnest",
          sceneName: "Deepnest_East_02",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock183: {
          name: "Geo Rock #183: 15 Geo",
          spoiler: "Kingdom's Edge: Above The Hive",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Deepnest_East_02",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock184: {
          name: "Geo Rock #184: 30 Geo",
          spoiler: "Royal Waterways: Left of Isma's Grove",
          id: "Geo Rock City 1",
          sceneName: "Waterways_07",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock185: {
          name: "Geo Rock #185: 56 Geo",
          spoiler: "The Hive: Outside Grub",
          id: "Geo Rock Hive (2)",
          sceneName: "Hive_03",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock186: {
          name: "Geo Rock #186: 56 Geo",
          spoiler: "The Hive: Outside Grub",
          id: "Geo Rock Hive",
          sceneName: "Hive_03",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock187: {
          name: "Geo Rock #187: 56 Geo",
          spoiler: "The Hive: Outside Grub",
          id: "Geo Rock Hive (1)",
          sceneName: "Hive_03",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock188: {
          name: "Geo Rock #188: 56 Geo",
          spoiler: "The Hive: Entrance",
          id: "Geo Rock Hive",
          sceneName: "Hive_01",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock189: {
          name: "Geo Rock #189: 56 Geo",
          spoiler: "The Hive: Whispering Root",
          id: "Geo Rock Hive",
          sceneName: "Hive_02",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock190: {
          name: "Geo Rock #190: 56 Geo",
          spoiler: "The Hive: Whispering Root",
          id: "Geo Rock Hive (2)",
          sceneName: "Hive_02",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock191: {
          name: "Geo Rock #191: 56 Geo",
          spoiler: "The Hive: Whispering Root",
          id: "Geo Rock Hive (1)",
          sceneName: "Hive_02",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock192: {
          name: "Geo Rock #192: 56 Geo",
          spoiler: "The Hive: Mask Shard Room",
          id: "Geo Rock Hive",
          sceneName: "Hive_04",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock193: {
          name: "Geo Rock #193: 56 Geo",
          spoiler: "The Hive: Mask Shard Room",
          id: "Geo Rock Hive (1)",
          sceneName: "Hive_04",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock194: {
          name: "Geo Rock #194: 15 Geo",
          spoiler: "Deepnest: Nosk Corridor",
          id: "Geo Rock Deepnest",
          sceneName: "Deepnest_31",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock195: {
          name: "Geo Rock #195: 15 Geo",
          spoiler: "Deepnest: Nosk Corridor",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Deepnest_31",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock196: {
          name: "Geo Rock #196: 15 Geo",
          spoiler: "Deepnest: Nosk Corridor",
          id: "Geo Rock Deepnest (2)",
          sceneName: "Deepnest_31",
          hitsLeft: "3",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock197: {
          name: "Geo Rock #197: 15 Geo",
          spoiler: "Deepnest: Beast's Den",
          id: "Geo Rock Deepnest (3)",
          sceneName: "Deepnest_Spider_Town",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock198: {
          name: "Geo Rock #198: 15 Geo",
          spoiler: "Deepnest: Beast's Den",
          id: "Geo Rock Deepnest (4)",
          sceneName: "Deepnest_Spider_Town",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock199: {
          name: "Geo Rock #199: 20 Geo",
          spoiler: "Deepnest: Beast's Den",
          id: "Geo Rock Deepnest (5)",
          sceneName: "Deepnest_Spider_Town",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock200: {
          name: "Geo Rock #200: 15 Geo",
          spoiler: "Deepnest: Beast's Den",
          id: "Geo Rock Deepnest",
          sceneName: "Deepnest_Spider_Town",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock201: {
          name: "Geo Rock #201: 15 Geo",
          spoiler: "Deepnest: Beast's Den",
          id: "Geo Rock Deepnest (1)",
          sceneName: "Deepnest_Spider_Town",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock202: {
          name: "Geo Rock #202: 30 Geo",
          spoiler: "Deepnest: Beast's Den",
          id: "Geo Rock Deepnest (7)",
          sceneName: "Deepnest_Spider_Town",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock203: {
          name: "Geo Rock #203: 15 Geo",
          spoiler: "Deepnest: Beast's Den",
          id: "Geo Rock Deepnest (2)",
          sceneName: "Deepnest_Spider_Town",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock204: {
          name: "Geo Rock #204: 20 Geo",
          spoiler: "Deepnest: Beast's Den",
          id: "Geo Rock Deepnest (6)",
          sceneName: "Deepnest_Spider_Town",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock205: {
          name: "Geo Rock #205: 30 Geo",
          spoiler: "City of Tears: Pleasure House Elevator",
          id: "Geo Rock City 1",
          sceneName: "Ruins_Elevator",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock206: {
          name: "Geo Rock #206: 44 Geo",
          spoiler: "Kingdom's Edge: Near 420 Geo Rock",
          id: "Geo Rock Outskirts",
          sceneName: "Deepnest_East_17",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
        geoRock207: {
          name: "Geo Rock #207: 420 Geo",
          spoiler: "Kingdom's Edge",
          id: "Giant Geo Egg",
          sceneName: "Deepnest_East_17",
          hitsLeft: "0",
          wiki: "Geo#How_to_Acquire"
        },
      },
    },*/

    /* ###################################### Secrets -> World Interactions ############################################## */

    /*worldInteractions: {
      h2: "World Interactions",
      id: "hk-world-interactions",
      description: `Certain interactions the player can make with NPCs in the game or world objects. All these here don't count towards either 112% Game Completion or Achievements.`,
      entries: {
        unlockedCompletionRate: {
          name: "World Sense Ability",
          spoiler: "Temple of the Black Egg: Lore Tablet",
          wiki: "World_Sense"
        },
        spaBugsEncountered: {
          name: "Gossipping Bugs",
          spoiler: "Forgotten Crossroads: Hot Springs, acquire Mantis Claw",
          wiki: "Hot_Spring#Forgotten_Crossroads"
        },
        jijiDoorUnlocked: {
          name: "Confessor Jiji's Cave Unlocked",
          spoiler: "Dirtmouth, requires Simple Key",
          wiki: "Jiji"
        },
        bathHouseOpened: {
          name: "Pleasure House Door Unlocked",
          spoiler: "City of Tears: Right Side Main Hub Area",
          wiki: "City_of_Tears#Sub-area:_Pleasure_House"
        },
        openedWaterwaysManhole: {
          name: "Waterways Manhole Unlocked",
          spoiler: "City of Tears: below Lemm, use Simple Key",
          wiki: "Royal_Waterways#How_to_access"
        },
        gladeDoorOpened: {
          name: "Spirits' Glade Door Opened",
          spoiler: "Resting Grounds, Seer: 200 Essence",
          wiki: "Resting_Grounds#Sub-area:_Spirits'_Glade"
        },
        openedCityGate: {
          name: "City of Tears Gate Opened",
          spoiler: "Fungal Wastes, requires City Crest",
          wiki: "Fungal_Wastes"
        },
        soulSanctumShortcut: {
          name: "Soul Sanctum Shortcut",
          spoiler: "City of Tears: Cornifer Lift Room, break left wall",
          id: "Breakable Wall Ruin Lift",
          sceneName: "Ruins1_31",
          wiki: "City_of_Tears#Sub-area:_Soul_Sanctum"
        },
        waterwaysGate: {
          name: "Waterways Gate Opened",
          spoiler: "Royal Waterways: Cornifer Room, use lever",
          wiki: "Royal_Waterways"
        },
        watcherChandelier: {
          name: "Chandelier Dropped",
          spoiler: "City of Tears: Watcher Knights Room, break ceiling",
          wiki: "Watcher_Knight#In-game_events"
        },
        colosseumHiddenHotSpring: {
          name: "Hidden Hot Spring",
          spoiler: "Colosseum of Fools, break wall right of Bench",
          id: "Breakable Wall_Silhouette",
          sceneName: "Room_Colosseum_02",
          wiki: "Colosseum_of_Fools#Description"
        },
        stagEggInspected: {
          name: "Stag Nest Egg Inspected",
          spoiler: "Howling Cliffs: Top of Stag Nest",
          wiki: "Howling_Cliffs#Sub-area:_Stag_Nest"
        },
        deepnestBridgeCollapsed: {
          name: "Deepnest Entry Bridge Collapsed",
          spoiler: "Fungal Wastes, left of Spore Shroom",
          wiki: "Deepnest#How_to_access"
        },
        maskmakerUnmasked1: {
          name: "Mask Maker Unmasked",
          spoiler: "Deepnest, use Desolate Dive on Mask Maker",
          wiki: "Mask_Maker#In-game_events"
        },
        bankerAccountPurchased: {
          name: "Bank Account Opened",
          spoiler: "100 Geo: Fog Canyon: Millibelle the Banker",
          wiki: "Millibelle"
        },
        millibelleLeft: {
          name: "Banker Disappeared",
          spoiler: "Fog Canyon: Millibelle the Banker",
          wiki: "Millibelle"
        },
        millibelleCheckedStand: {
          name: "Banker Stand Investigated",
          spoiler: "Fog Canyon: Millibelle the Banker",
          wiki: "Millibelle"
        },
        bankerSpaMet: {
          name: "Found & Talked to Millibelle",
          spoiler: "City of Tears: Hot Springs, Simple Key",
          wiki: "Millibelle"
        },
        millibelleReclaimedAllGeo: {
          name: "Reclaimed All Geo",
          spoiler: "City of Tears: Hot Springs, Millibelle the Thief",
          wiki: "Millibelle"
        },
        elderbugGaveFlower: {
          name: "Delicate Flower: Elderbug",
          spoiler: "Deliver from Traitor's Child Grave",
          wiki: "Delicate_Flower#List_of_Possible_Recipients"
        },
        givenGodseekerFlower: {
          name: "Delicate Flower: Godseeker",
          spoiler: "Possible after completing 2 Pantheons",
          wiki: "Delicate_Flower#List_of_Possible_Recipients"
        },
        givenOroFlower: {
          name: "Delicate Flower: Nailmaster Oro",
          spoiler: "D. from Traitor's Child Grave",
          wiki: "Delicate_Flower#List_of_Possible_Recipients"
        },
        givenWhiteLadyFlower: {
          name: "Delicate Flower: White Lady",
          spoiler: "Deliver from Traitor's Child Grave",
          wiki: "Delicate_Flower#List_of_Possible_Recipients"
        },
        givenEmilitiaFlower: {
          name: "Delicate Flower: Emilitia",
          spoiler: "Deliver from Traitor's Child Grave",
          wiki: "Delicate_Flower#List_of_Possible_Recipients"
        },
      },
    },*/

    /* ###################################### Secrets -> Secret Rooms ############################################## */

    /*secretRooms: {
      h2: "Secret Rooms",
      id: "hk-secret-rooms",
      description: `Certain Secret Rooms in the game. <span class="spoiler-span blurred">Grimm's Tent Secret</span> is missable when the player will <span class="spoiler-span blurred">Banish the Troupe or complete the Ritual</span>.`,
      entries: {
        grimmTentSecretRoom: {
          name: "Grimm's Tent: Secret Room (missable)",
          spoiler: "Dirtmouth: inside Grimm's Tent",
          id: "Secret Mask",
          sceneName: "Grimm_Main_Tent",
          wiki: "Dirtmouth#The_Grimm_Troupe.27s_Tents"
        },
        towerOfLoveSecretRoom: {
          name: "Tower of Love: Secret Room",
          spoiler: "City of Tears: near The Collector's Map",
          id: "secret sound_grub room",
          sceneName: "Ruins2_11",
          wiki: "Collector#Trivia"
        },
        weaversDenSecretRoom1: {
          name: "Weaver's Den: Secret Room #1",
          spoiler: "Deepnest: inside Weaver's Den",
          id: "Breakable Wall",
          sceneName: "Deepnest_45_v02",
          wiki: "Deepnest#Sub-area:_Weavers.27_Den"
        },
        weaversDenSecretRoom2: {
          name: "Weaver's Den: Secret Room #2",
          spoiler: "Deepnest: inside Weaver's Den",
          id: "Breakable Wall Waterways",
          sceneName: "Deepnest_45_v02",
          wiki: "Deepnest#Sub-area:_Weavers.27_Den"
        },
        pathOfPainEntrance: {
          name: "White Palace: Path of Pain Entrance",
          spoiler: "Break left wall above lift area",
          id: "Breakable Wall Ruin Lift",
          sceneName: "White_Palace_06",
          wiki: "White_Palace#Sub-area:_Path_of_Pain"
        },
        killsBindingSeal: {
          name: "White Palace: Path of Pain",
          spoiler: "Main Secret Area, After Middle Lift",
          wiki: "White_Palace#Sub-area:_Path_of_Pain"
        },
        whitePalaceSecretRoomVisited: {
          name: "White Palace: Secret Room #1",
          spoiler: "The Pale King's Workshop",
          wiki: "White_Palace#The_Pale_King.27s_workshop"
        },
        whiteLadyRoom: {
          name: "White Palace: Secret Room #2",
          spoiler: "White Lady's Room, break floor",
          id: "Quake Floor",
          sceneName: "White_Palace_09",
          wiki: "White_Palace#White_Lady.27s_room"
        },
        throneRoomLoreTablet: {
          name: "White Palace: Secret Room #3",
          spoiler: "Throne Room, break right wall",
          id: "Breakable Wall Waterways",
          sceneName: "White_Palace_09",
          wiki: "White_Palace#Throne_room_Lore_Tablet"
        },
        
        //#52 Quake Floor 🗺️ Palace Caged Lever ⌨️ White_Palace_15
        //#53 Breakable Wall Waterways 🗺️ Palace Spike Drop ⌨️ White_Palace_12
        //#54 Break Floor 1 🗺️ Palace Spike Drop ⌨️ White_Palace_12
        
      },
    },*/

    /* ###################################### Secrets -> Cornifer's Notes ############################################## */

    /*corniferNotes: {
      h2: "Cornifer's Notes",
      id: "hk-cornifer-notes",
      description: `Cornifer the Cartographer leaves his note on the ground every time he leaves the current area. The note will be at the same spot where Cornifer was met. He leaves an area once a specific condition from that area was met, like defeating a boss or learning a new ability. After reading a note it will stop glowing and the entry will be marked as completed.`,
      entries: {
        corniferNote1: {
          name: "Note #1: Forgotten Crossroads",
          spoiler: "Below Big Gruzzer Room",
          id: "Shiny",
          sceneName: "Crossroads_33",
          wiki: "Cornifer#Locations"
        },
        corniferNote2: {
          name: "Note #2: Greenpath",
          spoiler: "Room below the Crossroads entrance",
          id: "Shiny",
          sceneName: "Fungus1_06",
          wiki: "Cornifer#Locations"
        },
        corniferNote3: {
          name: "Note #3: Fungal Wastes",
          spoiler: "Right of Queen's Station",
          id: "Shiny",
          sceneName: "Fungus2_18",
          wiki: "Cornifer#Locations"
        },
        corniferNote4: {
          name: "Note #4: Howling Cliffs",
          spoiler: "Big Main Area on the left side",
          id: "Shiny",
          sceneName: "Cliffs_01",
          wiki: "Cornifer#Locations"
        },
        corniferNote5: {
          name: "Note #5: City of Tears",
          spoiler: "Toll Bench left of Soul Sanctum",
          id: "Shiny",
          sceneName: "Ruins1_31",
          wiki: "Cornifer#Locations"
        },
        corniferNote6: {
          name: "Note #6: Crystal Peak",
          spoiler: "Left of Central Bench",
          id: "Shiny",
          sceneName: "Mines_30",
          wiki: "Cornifer#Locations"
        },
        corniferNote7: {
          name: "Note #7: Resting Grounds",
          spoiler: "Near the Stag Station",
          id: "Shiny",
          sceneName: "RestingGrounds_09",
          wiki: "Cornifer#Locations"
        },
        corniferNote8: {
          name: "Note #8: Royal Waterways",
          spoiler: "Near Fungal Wastes exit",
          id: "Shiny",
          sceneName: "Waterways_09",
          wiki: "Cornifer#Locations"
        },
        corniferNote9: {
          name: "Note #9: Ancient Basin",
          spoiler: "Below the Tram and Fountain",
          id: "Shiny",
          sceneName: "Abyss_04",
          wiki: "Cornifer#Locations"
        },
        corniferNote10: {
          name: "Note #10: Kingdom's Edge",
          spoiler: "Below the King's Station entrance",
          id: "Shiny",
          sceneName: "Deepnest_East_03",
          wiki: "Cornifer#Locations"
        },
      },
    },*/

    /* ################ Game Statistics ################### */

    /*statistics: {
      h2: "Game Statistics",
      id: "hk-statistics",
      description: "Dedicated to numbers and stats fans. Everything what the game may not always tell you directly, but what can be read from a save file.",
      entries: {
        journalEntriesCompleted: {
          name: "Creatures Encountered",
          spoiler: "Hunter's Journal (158-164 max)",
          spoilerDefault: "Hunter's Journal",
          max: 164,
          maxDefault: 164,
          wiki: "Category:Enemies_(Hollow_Knight)#Compendium"
        },
        
        //Add 4 remaining to Hunter Notes max

        journalNotesCompleted: {
          name: "Hunter Notes Completed",
          spoiler: "Hunter's Journal (158-164 max)",
          spoilerDefault: "Hunter's Journal",
          max: 164,
          maxDefault: 164,
          wiki: "Category:Enemies_(Hollow_Knight)#Compendium"
        },
        nailDamage: {
          name: "Base Nail Damage",
          spoiler: "Nailsmith upgrades, City of Tears",
          max: 21,
          maxDefault: 21,
          wiki: "Nail#Nail_Upgrades"
        },
        // not ghostCoins
        geoPool: {
          name: "Shade Geo",
          spoiler: "Amount of Geo the Shade is currently holding",
          min: 0,
          wiki: "Shade"
        },
        soldTrinket1: {
          name: "Wanderer's Journals Sold",
          spoiler: "City of Tears: Relic Seeker Lemm",
          geoValue: 200,
          wiki: "Wanderer's_Journal"
        },
        soldTrinket2: {
          name: "Hallownest Seals Sold",
          spoiler: "City of Tears: Relic Seeker Lemm",
          geoValue: 450,
          wiki: "Hallownest_Seal"
        },
        soldTrinket3: {
          name: "King's Idols Sold",
          spoiler: "City of Tears: Relic Seeker Lemm",
          geoValue: 800,
          wiki: "King's_Idol"
        },
        soldTrinket4: {
          name: "Arcane Eggs Sold",
          spoiler: "City of Tears: Relic Seeker Lemm",
          geoValue: 1200,
          wiki: "Arcane_Egg"
        },
        relicsSoldTotalGeo: {
          name: "Total Geo from Sold Relics",
          spoiler: "City of Tears: Relic Seeker Lemm",
          wiki: "Lemm#Collectibles"
        },
        ore: {
          name: "Pale Ore",
          spoiler: "Current amount of Pale Ore in inventory",
          wiki: "Pale_Ore"
        },
        simpleKeys: {
          name: "Simple Keys",
          spoiler: "Current amount of Simple Keys in inventory",
          wiki: "Simple_Key"
        },
        rancidEggs: {
          name: "Rancid Eggs",
          spoiler: "Current amount of Rancid Eggs in inventory",
          wiki: "Rancid_Egg"
        },
        jinnEggsSold: {
          name: "Rancid Eggs Sold",
          spoiler: "Dirtmouth: Jinn, Steel Soul Mode only",
          wiki: "Jinn"
        },
        xunFlowerBrokeTimes: {
          name: "Delicate Flowers Destroyed",
          spoiler: "Grey Mourner, Traitor's Child Grave",
          wiki: "Delicate_Flower"
        },
        itemsDiscovered: {
          id: "itemsDiscovered",
          name: "Interactables",
          spoiler: "Not A. | Activated | Discovered",
          wiki: "Category:Exploration_(Hollow_Knight)",
          notActivated: 0,
          activated: 0,
          discoveredTotal: 0
        },
        bankerBalance: {
          name: "Bank Account Balance",
          spoiler: "Fog Canyon: Millibelle the Banker",
          wiki: "Millibelle"
        },
        whiteDefenderDefeats: {
          name: "White Defender Times Defeated",
          spoiler: "Royal Waterways (5 max)",
          max: 5,
          maxDefault: 5,
          wiki: "White_Defender"
        },
        greyPrinceDefeats: {
          name: "Grey Prince Zote Times Defeated",
          spoiler: "Dirtmouth (10 max)",
          max: 10,
          maxDefault: 10,
          wiki: "Grey_Prince_Zote"
        }
      },
    },*/

    /* ################################################# Godhome Statistics ############################################## */

    /*godhomeStatistics: {
      h2: "Godhome Statistics",
      id: "hk-godhome-statistics",
      description: "Everything in Godhome, that didn't fit any other category.",
      entries: {
        seenGGWastes: {
          name: "Tuner Memory",
          spoiler: "Requires completing 3 Pantheons, 2% chance",
          wiki: "Godhome#Tuner_Memory"
        },
        blueRoomDoorUnlocked: {
          name: "Lifeblood Door Open",
          spoiler: "Complete any 8 Pantheon bindings total",
          wiki: "Godhome#Locked_Lifeblood_Room"
        },
        killedVoidIdol_1: {
          name: "Journal: Void Idol Attuned",
          spoiler: "Hall of Gods: Defeat All (Attuned)",
          wiki: "Void_Idol"
        },
        killedVoidIdol_2: {
          name: "Journal: Void Idol Ascended",
          spoiler: "Hall of Gods: Defeat All (Ascended)",
          wiki: "Void_Idol"
        },
        killedVoidIdol_3: {
          name: "Journal: Void Idol Radiant",
          spoiler: "Hall of Gods: Defeat All (Radiant)",
          wiki: "Void_Idol"
        },
        killedGodseekerMask: {
          name: "Journal: Weathered Mask",
          spoiler: "Land of Storms: All Pantheons & Bindings",
          wiki: "Weathered_Mask"
        },
        zoteStatueWallBroken: {
          name: "Intruder Discovered",
          spoiler: "Hall of Gods: Zote Statue (upper right)",
          wiki: "Hall_of_Gods#Zote"
        },
        ordealAchieved: {
          name: "The Eternal Ordeal",
          spoiler: "Reach 57 Zotelings defeated",
          wiki: "Eternal_Ordeal"
        }
      },
    },*/

    /* ################################################### Pantheon of the Master #################################################### */

    /*pantheonOfTheMaster: {
      h2: "P1 – Pantheon of the Master",
      id: "hk-pantheon-master",
      property: "bossDoorStateTier1",
      description: "Seek the Gods of Nail and Shell",
      entries: {
        unlocked: {
          name: "P1 Unlocked",
          spoiler: "Defeat P1 bosses in the game world to unlock",
          wiki: "Pantheon_of_the_Master"
        },
        completed: {
          name: "P1 Completed",
          spoiler: "Defeat all bosses in a row to complete",
          wiki: "Pantheon_of_the_Master"
        },
        boundNail: {
          name: "P1 Binding: Nail",
          spoiler: "Complete with the Nail binding active",
          wiki: "Pantheons#Bindings"
        },
        boundShell: {
          name: "P1 Binding: Shell",
          spoiler: "Complete with the Shell binding active",
          wiki: "Pantheons#Bindings"
        },
        boundCharms: {
          name: "P1 Binding: Charms",
          spoiler: "Complete with the Charm binding active",
          wiki: "Pantheons#Bindings"
        },
        boundSoul: {
          name: "P1 Binding: Soul",
          spoiler: "Complete with the Soul binding active",
          wiki: "Pantheons#Bindings"
        },
        allBindings: {
          name: "P1 All Bindings",
          spoiler: "Complete with all bindings active at once",
          wiki: "Pantheons#Bindings"
        },
        noHits: {
          name: "P1 No Damage",
          spoiler: "Complete without taking a single hit",
          wiki: "Pantheons"
        },
      },
    },*/

    /* ################################################### Pantheon of the Artist #################################################### */

    /*pantheonOfTheArtist: {
      h2: "P2 – Pantheon of the Artist",
      id: "hk-pantheon-artist",
      property: "bossDoorStateTier2",
      description: "Seek the God Inspired",
      entries: {
        unlocked: {
          name: "P2 Unlocked",
          spoiler: "Defeat P2 bosses in the game world to unlock",
          wiki: "Pantheon_of_the_Artist"
        },
        completed: {
          name: "P2 Completed",
          spoiler: "Defeat all bosses in a row to complete",
          wiki: "Pantheon_of_the_Artist"
        },
        boundNail: {
          name: "P2 Binding: Nail",
          spoiler: "Complete with the Nail binding active",
          wiki: "Pantheons#Bindings"
        },
        boundShell: {
          name: "P2 Binding: Shell",
          spoiler: "Complete with the Shell binding active",
          wiki: "Pantheons#Bindings"
        },
        boundCharms: {
          name: "P2 Binding: Charms",
          spoiler: "Complete with the Charm binding active",
          wiki: "Pantheons#Bindings"
        },
        boundSoul: {
          name: "P2 Binding: Soul",
          spoiler: "Complete with the Soul binding active",
          wiki: "Pantheons#Bindings"
        },
        allBindings: {
          name: "P2 All Bindings",
          spoiler: "Complete with all bindings active at once",
          wiki: "Pantheons#Bindings"
        },
        noHits: {
          name: "P2 No Damage",
          spoiler: "Complete without taking a single hit",
          wiki: "Pantheons"
        },
      },
    },*/

    /* ################################################### Pantheon of the Sage #################################################### */

    /*pantheonOfTheSage: {
      h2: "P3 – Pantheon of the Sage",
      id: "hk-pantheon-sage",
      property: "bossDoorStateTier3",
      description: "Seek the God of Wealth and Power",
      entries: {
        unlocked: {
          name: "P3 Unlocked",
          spoiler: "Defeat P3 bosses in the game world to unlock",
          wiki: "Pantheon_of_the_Sage"
        },
        completed: {
          name: "P3 Completed",
          spoiler: "Defeat all bosses in a row to complete",
          wiki: "Pantheon_of_the_Sage"
        },
        boundNail: {
          name: "P3 Binding: Nail",
          spoiler: "Complete with the Nail binding active",
          wiki: "Pantheons#Bindings"
        },
        boundShell: {
          name: "P3 Binding: Shell",
          spoiler: "Complete with the Shell binding active",
          wiki: "Pantheons#Bindings"
        },
        boundCharms: {
          name: "P3 Binding: Charms",
          spoiler: "Complete with the Charm binding active",
          wiki: "Pantheons#Bindings"
        },
        boundSoul: {
          name: "P3 Binding: Soul",
          spoiler: "Complete with the Soul binding active",
          wiki: "Pantheons#Bindings"
        },
        allBindings: {
          name: "P3 All Bindings",
          spoiler: "Complete with all bindings active at once",
          wiki: "Pantheons#Bindings"
        },
        noHits: {
          name: "P3 No Damage",
          spoiler: "Complete without taking a single hit",
          wiki: "Pantheons"
        },
      },
    },*/

    /* ################################################### Pantheon of the Knight #################################################### */

    /*pantheonOfTheKnight: {
      h2: "P4 – Pantheon of the Knight",
      id: "hk-pantheon-knight",
      property: "bossDoorStateTier4",
      description: "Seek the Pure God",
      entries: {
        unlocked: {
          name: "P4 Unlocked",
          spoiler: "Complete 3 previous Pantheons to unlock",
          wiki: "Pantheon_of_the_Knight"
        },
        completed: {
          name: "P4 Completed",
          spoiler: "Defeat all bosses in a row to complete",
          wiki: "Pantheon_of_the_Knight"
        },
        boundNail: {
          name: "P4 Binding: Nail",
          spoiler: "Complete with the Nail binding active",
          wiki: "Pantheons#Bindings"
        },
        boundShell: {
          name: "P4 Binding: Shell",
          spoiler: "Complete with the Shell binding active",
          wiki: "Pantheons#Bindings"
        },
        boundCharms: {
          name: "P4 Binding: Charms",
          spoiler: "Complete with the Charm binding active",
          wiki: "Pantheons#Bindings"
        },
        boundSoul: {
          name: "P4 Binding: Soul",
          spoiler: "Complete with the Soul binding active",
          wiki: "Pantheons#Bindings"
        },
        allBindings: {
          name: "P4 All Bindings",
          spoiler: "Complete with all bindings active at once",
          wiki: "Pantheons#Bindings"
        },
        noHits: {
          name: "P4 No Damage",
          spoiler: "Complete without taking a single hit",
          wiki: "Pantheons"
        },
      },
    },*/

    /* ################################################### Pantheon of Hallownest #################################################### */

    /*pantheonOfHallownest: {
      h2: "P5 – Pantheon of Hallownest",
      id: "hk-pantheon-hallownest",
      property: "bossDoorStateTier5",
      description: "Seek the Kingdom's Forgotten Light",
      entries: {
        unlocked: {
          name: "P5 Unlocked",
          spoiler: "Complete 4 previous Pantheons to unlock",
          wiki: "Pantheon_of_Hallownest"
        },
        completed: {
          name: "P5 Completed",
          spoiler: "Defeat all bosses in a row to complete",
          wiki: "Pantheon_of_Hallownest"
        },
        boundNail: {
          name: "P5 Binding: Nail",
          spoiler: "Complete with the Nail binding active",
          wiki: "Pantheons#Bindings"
        },
        boundShell: {
          name: "P5 Binding: Shell",
          spoiler: "Complete with the Shell binding active",
          wiki: "Pantheons#Bindings"
        },
        boundCharms: {
          name: "P5 Binding: Charms",
          spoiler: "Complete with the Charm binding active",
          wiki: "Pantheons#Bindings"
        },
        boundSoul: {
          name: "P5 Binding: Soul",
          spoiler: "Complete with the Soul binding active",
          wiki: "Pantheons#Bindings"
        },
        allBindings: {
          name: "P5 All Bindings",
          spoiler: "Complete with all bindings active at once",
          wiki: "Pantheons#Bindings"
        },
        noHits: {
          name: "P5 No Damage",
          spoiler: "Complete without taking a single hit",
          wiki: "Pantheons"
        },
      },
    },*/

    /* ################################################### Hall of Gods ############################################################# */

    /*hallOfGods: {
      h2: "Hall of Gods",
      id: "hk-hall-of-gods",
      property: "statueState",
      description: "Bottom of Godhome. Detecting what bosses have been unlocked and defeated on all three difficulty levels: Attuned, Ascended and Radiant.",
      entries: {
        GruzMotherUnlocked: {
          name: "Gruz Mother: Unlocked",
          spoiler: "I sleep amongst winding roads",
          id: "GruzMother",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Gruz_Mother"
        },
        GruzMotherAttuned: {
          name: "Gruz Mother: Attuned",
          spoiler: "Slumbering god of fertility",
          id: "GruzMother",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Gruz_Mother"
        },
        GruzMotherAscended: {
          name: "Gruz Mother: Ascended",
          spoiler: "Slumbering god of fertility",
          id: "GruzMother",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Gruz_Mother"
        },
        GruzMotherRadiant: {
          name: "Gruz Mother: Radiant",
          spoiler: "Slumbering god of fertility",
          id: "GruzMother",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Gruz_Mother"
        },
        VengeflyUnlocked: {
          name: "Vengefly King: Unlocked",
          spoiler: "I keep guard above a verdant land",
          id: "Vengefly",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Vengefly_King"
        },
        VengeflyAttuned: {
          name: "Vengefly King: Attuned",
          spoiler: "Vicious god of territories",
          id: "Vengefly",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Vengefly_King"
        },
        VengeflyAscended: {
          name: "Vengefly King: Ascended",
          spoiler: "Vicious god of territories",
          id: "Vengefly",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Vengefly_King"
        },
        VengeflyRadiant: {
          name: "Vengefly King: Radiant",
          spoiler: "Vicious god of territories",
          id: "Vengefly",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Vengefly_King"
        },
        BroodingMawlekUnlocked: {
          name: "Brooding Mawlek: Unlocked",
          spoiler: "I call out to no one...",
          id: "BroodingMawlek",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Brooding_Mawlek"
        },
        BroodingMawlekAttuned: {
          name: "Brooding Mawlek: Attuned",
          spoiler: "...hidden by roads and highways",
          id: "BroodingMawlek",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Brooding_Mawlek"
        },
        BroodingMawlekAscended: {
          name: "Brooding Mawlek: Ascended",
          spoiler: "Lonely god of the nest",
          id: "BroodingMawlek",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Brooding_Mawlek"
        },
        BroodingMawlekRadiant: {
          name: "Brooding Mawlek: Radiant",
          spoiler: "Lonely god of the nest",
          id: "BroodingMawlek",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Brooding_Mawlek"
        },
        FalseKnightUnlocked: {
          name: "False Knight: Unlocked",
          spoiler: "I protect the weak in...",
          id: "FalseKnight",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#False_Knight"
        },
        FalseKnightAttuned: {
          name: "False Knight: Attuned",
          spoiler: "...the heart of the crossroads",
          id: "FalseKnight",
          check: "completedTier1",
          wiki: "Hall_of_Gods#False_Knight"
        },
        FalseKnightAscended: {
          name: "False Knight: Ascended",
          spoiler: "Angry god of the downtrodden",
          id: "FalseKnight",
          check: "completedTier2",
          wiki: "Hall_of_Gods#False_Knight"
        },
        FalseKnightRadiant: {
          name: "False Knight: Radiant",
          spoiler: "Angry god of the downtrodden",
          id: "FalseKnight",
          check: "completedTier3",
          wiki: "Hall_of_Gods#False_Knight"
        },
        FailedChampionUnlocked: {
          name: "Failed Champion: Unlocked",
          spoiler: "Baleful god of regrets",
          id: "FailedChampion",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Failed_Champion"
        },
        FailedChampionAttuned: {
          name: "Failed Champion: Attuned",
          spoiler: "Baleful god of regrets",
          id: "FailedChampion",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Failed_Champion"
        },
        FailedChampionAscended: {
          name: "Failed Champion: Ascended",
          spoiler: "Baleful god of regrets",
          id: "FailedChampion",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Failed_Champion"
        },
        FailedChampionRadiant: {
          name: "Failed Champion: Radiant",
          spoiler: "Baleful god of regrets",
          id: "FailedChampion",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Failed_Champion"
        },
        Hornet1Unlocked: {
          name: "Hornet Protector: Unlocked",
          spoiler: "I watch over lush pathways...",
          id: "Hornet1",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Hornet_Protector"
        },
        Hornet1Attuned: {
          name: "Hornet Protector: Attuned",
          spoiler: "...and distant ash-swept graves",
          id: "Hornet1",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Hornet_Protector"
        },
        Hornet1Ascended: {
          name: "Hornet Protector: Ascended",
          spoiler: "God protector of a fading land",
          id: "Hornet1",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Hornet_Protector"
        },
        Hornet1Radiant: {
          name: "Hornet Protector: Radiant",
          spoiler: "God protector of a fading land",
          id: "Hornet1",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Hornet_Protector"
        },
        Hornet2Unlocked: {
          name: "Hornet Sentinel: Unlocked",
          spoiler: "God protector of a fading land",
          id: "Hornet2",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Hornet_Sentinel"
        },
        Hornet2Attuned: {
          name: "Hornet Sentinel: Attuned",
          spoiler: "God protector of a fading land",
          id: "Hornet2",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Hornet_Sentinel"
        },
        Hornet2Ascended: {
          name: "Hornet Sentinel: Ascended",
          spoiler: "God protector of a fading land",
          id: "Hornet2",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Hornet_Sentinel"
        },
        Hornet2Radiant: {
          name: "Hornet Sentinel: Radiant",
          spoiler: "God protector of a fading land",
          id: "Hornet2",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Hornet_Sentinel"
        },
        MegaMossChargerUnlocked: {
          name: "Massive Moss Charger: Unlocked",
          spoiler: "Together we hunt in paths...",
          id: "MegaMossCharger",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Massive_Moss_Charger"
        },
        MegaMossChargerAttuned: {
          name: "Massive Moss Charger: Attuned",
          spoiler: "...overgrown with green",
          id: "MegaMossCharger",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Massive_Moss_Charger"
        },
        MegaMossChargerAscended: {
          name: "Massive Moss Charger: Ascended",
          spoiler: "Restless god of those...",
          id: "MegaMossCharger",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Massive_Moss_Charger"
        },
        MegaMossChargerRadiant: {
          name: "Massive Moss Charger: Radiant",
          spoiler: "...who band together",
          id: "MegaMossCharger",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Massive_Moss_Charger"
        },
        FlukemarmUnlocked: {
          name: "Flukemarm: Unlocked",
          spoiler: "I lie within a maze of pipes",
          id: "Flukemarm",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Flukemarm"
        },
        FlukemarmAttuned: {
          name: "Flukemarm: Attuned",
          spoiler: "Alluring god of motherhood",
          id: "Flukemarm",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Flukemarm"
        },
        FlukemarmAscended: {
          name: "Flukemarm: Ascended",
          spoiler: "Alluring god of motherhood",
          id: "Flukemarm",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Flukemarm"
        },
        FlukemarmRadiant: {
          name: "Flukemarm: Radiant",
          spoiler: "Alluring god of motherhood",
          id: "Flukemarm",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Flukemarm"
        },
        MantisLordsUnlocked: {
          name: "Mantis Lords: Unlocked",
          spoiler: "We watch over a village of warriors",
          id: "MantisLords",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Mantis_Lords"
        },
        MantisLordsAttuned: {
          name: "Mantis Lords: Attuned",
          spoiler: "Noble sister gods of combat",
          id: "MantisLords",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Mantis_Lords"
        },
        MantisLordsAscended: {
          name: "Mantis Lords: Ascended",
          spoiler: "Noble sister gods of combat",
          id: "MantisLords",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Mantis_Lords"
        },
        MantisLordsRadiant: {
          name: "Mantis Lords: Radiant",
          spoiler: "Noble sister gods of combat",
          id: "MantisLords",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Mantis_Lords"
        },
        MantisLordsExtraUnlocked: {
          name: "Sisters of Battle: Unlocked",
          spoiler: "Revered gods of a proud tribe",
          id: "MantisLordsExtra",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Sisters_of_Battle"
        },
        MantisLordsExtraAttuned: {
          name: "Sisters of Battle: Attuned",
          spoiler: "Revered gods of a proud tribe",
          id: "MantisLordsExtra",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Sisters_of_Battle"
        },
        MantisLordsExtraAscended: {
          name: "Sisters of Battle: Ascended",
          spoiler: "Revered gods of a proud tribe",
          id: "MantisLordsExtra",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Sisters_of_Battle"
        },
        MantisLordsExtraRadiant: {
          name: "Sisters of Battle: Radiant",
          spoiler: "Revered gods of a proud tribe",
          id: "MantisLordsExtra",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Sisters_of_Battle"
        },
        OblobblesUnlocked: {
          name: "Oblobbles: Unlocked",
          spoiler: "Together we are chained in a strange colosseum",
          id: "Oblobbles",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Oblobbles"
        },
        OblobblesAttuned: {
          name: "Oblobbles: Attuned",
          spoiler: "Lover gods of faith and devotion",
          id: "Oblobbles",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Oblobbles"
        },
        OblobblesAscended: {
          name: "Oblobbles: Ascended",
          spoiler: "Lover gods of faith and devotion",
          id: "Oblobbles",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Oblobbles"
        },
        OblobblesRadiant: {
          name: "Oblobbles: Radiant",
          spoiler: "Lover gods of faith and devotion",
          id: "Oblobbles",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Oblobbles"
        },
        HiveKnightUnlocked: {
          name: "Hive Knight: Unlocked",
          spoiler: "I guard the heart of the hive for my Queen",
          id: "HiveKnight",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Hive_Knight"
        },
        HiveKnightAttuned: {
          name: "Hive Knight: Attuned",
          spoiler: "Watchful god of duty",
          id: "HiveKnight",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Hive_Knight"
        },
        HiveKnightAscended: {
          name: "Hive Knight: Ascended",
          spoiler: "Watchful god of duty",
          id: "HiveKnight",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Hive_Knight"
        },
        HiveKnightRadiant: {
          name: "Hive Knight: Radiant",
          spoiler: "Watchful god of duty",
          id: "HiveKnight",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Hive_Knight"
        },
        BrokenVesselUnlocked: {
          name: "Broken Vessel: Unlocked",
          spoiler: "I sleep in the deep caves below the world",
          id: "BrokenVessel",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Broken_Vessel"
        },
        BrokenVesselAttuned: {
          name: "Broken Vessel: Attuned",
          spoiler: "Broken shell of an empty god",
          id: "BrokenVessel",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Broken_Vessel"
        },
        BrokenVesselAscended: {
          name: "Broken Vessel: Ascended",
          spoiler: "Broken shell of an empty god",
          id: "BrokenVessel",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Broken_Vessel"
        },
        BrokenVesselRadiant: {
          name: "Broken Vessel: Radiant",
          spoiler: "Broken shell of an empty god",
          id: "BrokenVessel",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Broken_Vessel"
        },
        LostKinUnlocked: {
          name: "Lost Kin: Unlocked",
          spoiler: "Lost god of the Abyss",
          id: "LostKin",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Lost_Kin"
        },
        LostKinAttuned: {
          name: "Lost Kin: Attuned",
          spoiler: "Lost god of the Abyss",
          id: "LostKin",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Lost_Kin"
        },
        LostKinAscended: {
          name: "Lost Kin: Ascended",
          spoiler: "Lost god of the Abyss",
          id: "LostKin",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Lost_Kin"
        },
        LostKinRadiant: {
          name: "Lost Kin: Radiant",
          spoiler: "Lost god of the Abyss",
          id: "LostKin",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Lost_Kin"
        },
        NoskUnlocked: {
          name: "Nosk: Unlocked",
          spoiler: "I wait patiently in a dark nest of predators",
          id: "Nosk",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Nosk"
        },
        NoskAttuned: {
          name: "Nosk: Attuned",
          spoiler: "Everchanging god of the faceless",
          id: "Nosk",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Nosk"
        },
        NoskAscended: {
          name: "Nosk: Ascended",
          spoiler: "Everchanging god of the faceless",
          id: "Nosk",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Nosk"
        },
        NoskRadiant: {
          name: "Nosk: Radiant",
          spoiler: "Everchanging god of the faceless",
          id: "Nosk",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Nosk"
        },
        NoskHornetUnlocked: {
          name: "Winged Nosk: Unlocked",
          spoiler: "Deceptive god assuming a protector's form",
          id: "NoskHornet",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Winged_Nosk"
        },
        NoskHornetAttuned: {
          name: "Winged Nosk: Attuned",
          spoiler: "Deceptive god assuming a protector's form",
          id: "NoskHornet",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Winged_Nosk"
        },
        NoskHornetAscended: {
          name: "Winged Nosk: Ascended",
          spoiler: "Deceptive god assuming a protector's form",
          id: "NoskHornet",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Winged_Nosk"
        },
        NoskHornetRadiant: {
          name: "Winged Nosk: Radiant",
          spoiler: "Deceptive god assuming a protector's form",
          id: "NoskHornet",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Winged_Nosk"
        },
        CollectorUnlocked: {
          name: "The Collector: Unlocked",
          spoiler: "I lurk at the peak of a forsaken tower",
          id: "Collector",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#The_Collector"
        },
        CollectorAttuned: {
          name: "The Collector: Attuned",
          spoiler: "Joyful god of protection",
          id: "Collector",
          check: "completedTier1",
          wiki: "Hall_of_Gods#The_Collector"
        },
        CollectorAscended: {
          name: "The Collector: Ascended",
          spoiler: "Joyful god of protection",
          id: "Collector",
          check: "completedTier2",
          wiki: "Hall_of_Gods#The_Collector"
        },
        CollectorRadiant: {
          name: "The Collector: Radiant",
          spoiler: "Joyful god of protection",
          id: "Collector",
          check: "completedTier3",
          wiki: "Hall_of_Gods#The_Collector"
        },
        GodTamerUnlocked: {
          name: "God Tamer: Unlocked",
          spoiler: "I wait, weapon in hand, within the colosseum",
          id: "GodTamer",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#God_Tamer"
        },
        GodTamerAttuned: {
          name: "God Tamer: Attuned",
          spoiler: "Gallant god of the arena",
          id: "GodTamer",
          check: "completedTier1",
          wiki: "Hall_of_Gods#God_Tamer"
        },
        GodTamerAscended: {
          name: "God Tamer: Ascended",
          spoiler: "Gallant god of the arena",
          id: "GodTamer",
          check: "completedTier2",
          wiki: "Hall_of_Gods#God_Tamer"
        },
        GodTamerRadiant: {
          name: "God Tamer: Radiant",
          spoiler: "Gallant god of the arena",
          id: "GodTamer",
          check: "completedTier3",
          wiki: "Hall_of_Gods#God_Tamer"
        },
        CrystalGuardian1Unlocked: {
          name: "Crystal Guardian: Unlocked",
          spoiler: "I rest amongst crystals...",
          id: "CrystalGuardian1",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Crystal_Guardian"
        },
        CrystalGuardian1Attuned: {
          name: "Crystal Guardian: Attuned",
          spoiler: "...and strange machinery",
          id: "CrystalGuardian1",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Crystal_Guardian"
        },
        CrystalGuardian1Ascended: {
          name: "Crystal Guardian: Ascended",
          spoiler: "Shining god of greed",
          id: "CrystalGuardian1",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Crystal_Guardian"
        },
        CrystalGuardian1Radiant: {
          name: "Crystal Guardian: Radiant",
          spoiler: "Shining god of greed",
          id: "CrystalGuardian1",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Crystal_Guardian"
        },
        CrystalGuardian2Unlocked: {
          name: "Enraged Guardian: Unlocked",
          spoiler: "Shining god of greed",
          id: "CrystalGuardian2",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Enraged_Guardian"
        },
        CrystalGuardian2Attuned: {
          name: "Enraged Guardian: Attuned",
          spoiler: "Shining god of greed",
          id: "CrystalGuardian2",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Enraged_Guardian"
        },
        CrystalGuardian2Ascended: {
          name: "Enraged Guardian: Ascended",
          spoiler: "Shining god of greed",
          id: "CrystalGuardian2",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Enraged_Guardian"
        },
        CrystalGuardian2Radiant: {
          name: "Enraged Guardian: Radiant",
          spoiler: "Shining god of greed",
          id: "CrystalGuardian2",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Enraged_Guardian"
        },
        UumuuUnlocked: {
          name: "Uumuu: Unlocked",
          spoiler: "I sleep submerged in the depths of the archive",
          id: "Uumuu",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Uumuu"
        },
        UumuuAttuned: {
          name: "Uumuu: Attuned",
          spoiler: "Uncanny god of knowledge",
          id: "Uumuu",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Uumuu"
        },
        UumuuAscended: {
          name: "Uumuu: Ascended",
          spoiler: "Uncanny god of knowledge",
          id: "Uumuu",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Uumuu"
        },
        UumuuRadiant: {
          name: "Uumuu: Radiant",
          spoiler: "Uncanny god of knowledge",
          id: "Uumuu",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Uumuu"
        },
        TraitorLordUnlocked: {
          name: "Traitor Lord: Unlocked",
          spoiler: "I defile the gardens of false royalty",
          id: "TraitorLord",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Traitor_Lord"
        },
        TraitorLordAttuned: {
          name: "Traitor Lord: Attuned",
          spoiler: "Treacherous god of anger",
          id: "TraitorLord",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Traitor_Lord"
        },
        TraitorLordAscended: {
          name: "Traitor Lord: Ascended",
          spoiler: "Treacherous god of anger",
          id: "TraitorLord",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Traitor_Lord"
        },
        TraitorLordRadiant: {
          name: "Traitor Lord: Radiant",
          spoiler: "Treacherous god of anger",
          id: "TraitorLord",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Traitor_Lord"
        },
        GreyPrinceUnlocked: {
          name: "Grey Prince Zote: Unlocked",
          spoiler: "I serve my Queen inside her dreams",
          id: "GreyPrince",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Grey_Prince_Zote"
        },
        GreyPrinceAttuned: {
          name: "Grey Prince Zote: Attuned",
          spoiler: "False god conjured by the lonely",
          id: "GreyPrince",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Grey_Prince_Zote"
        },
        GreyPrinceAscended: {
          name: "Grey Prince Zote: Ascended",
          spoiler: "False god conjured by the lonely",
          id: "GreyPrince",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Grey_Prince_Zote"
        },
        GreyPrinceRadiant: {
          name: "Grey Prince Zote: Radiant",
          spoiler: "False god conjured by the lonely",
          id: "GreyPrince",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Grey_Prince_Zote"
        },
        MageKnightUnlocked: {
          name: "Soul Warrior: Unlocked",
          spoiler: "I haunt the halls of a sanctum",
          id: "MageKnight",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Soul_Warrior"
        },
        MageKnightAttuned: {
          name: "Soul Warrior: Attuned",
          spoiler: "Haunted god of the sanctum",
          id: "MageKnight",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Soul_Warrior"
        },
        MageKnightAscended: {
          name: "Soul Warrior: Ascended",
          spoiler: "Haunted god of the sanctum",
          id: "MageKnight",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Soul_Warrior"
        },
        MageKnightRadiant: {
          name: "Soul Warrior: Radiant",
          spoiler: "Haunted god of the sanctum",
          id: "MageKnight",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Soul_Warrior"
        },
        SoulMasterUnlocked: {
          name: "Soul Master: Unlocked",
          spoiler: "Immortal, I rule the Sanctum",
          id: "SoulMaster",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Soul_Master"
        },
        SoulMasterAttuned: {
          name: "Soul Master: Attuned",
          spoiler: "Covetous god of soul",
          id: "SoulMaster",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Soul_Master"
        },
        SoulMasterAscended: {
          name: "Soul Master: Ascended",
          spoiler: "Covetous god of soul",
          id: "SoulMaster",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Soul_Master"
        },
        SoulMasterRadiant: {
          name: "Soul Master: Radiant",
          spoiler: "Covetous god of soul",
          id: "SoulMaster",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Soul_Master"
        },
        SoulTyrantUnlocked: {
          name: "Soul Tyrant: Unlocked",
          spoiler: "Frenzied god of mortality",
          id: "SoulTyrant",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Soul_Tyrant"
        },
        SoulTyrantAttuned: {
          name: "Soul Tyrant: Attuned",
          spoiler: "Frenzied god of mortality",
          id: "SoulTyrant",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Soul_Tyrant"
        },
        SoulTyrantAscended: {
          name: "Soul Tyrant: Ascended",
          spoiler: "Frenzied god of mortality",
          id: "SoulTyrant",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Soul_Tyrant"
        },
        SoulTyrantRadiant: {
          name: "Soul Tyrant: Radiant",
          spoiler: "Frenzied god of mortality",
          id: "SoulTyrant",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Soul_Tyrant"
        },
        DungDefenderUnlocked: {
          name: "Dung Defender: Unlocked",
          spoiler: "I protect the pipeways of the kingdom",
          id: "DungDefender",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Dung_Defender"
        },
        DungDefenderAttuned: {
          name: "Dung Defender: Attuned",
          spoiler: "Kindly god of bravery and honour",
          id: "DungDefender",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Dung_Defender"
        },
        DungDefenderAscended: {
          name: "Dung Defender: Ascended",
          spoiler: "Kindly god of bravery and honour",
          id: "DungDefender",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Dung_Defender"
        },
        DungDefenderRadiant: {
          name: "Dung Defender: Radiant",
          spoiler: "Kindly god of bravery and honour",
          id: "DungDefender",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Dung_Defender"
        },
        WhiteDefenderUnlocked: {
          name: "White Defender: Unlocked",
          spoiler: "Kindly god of bravery and honour",
          id: "WhiteDefender",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#White_Defender"
        },
        WhiteDefenderAttuned: {
          name: "White Defender: Attuned",
          spoiler: "Kindly god of bravery and honour",
          id: "WhiteDefender",
          check: "completedTier1",
          wiki: "Hall_of_Gods#White_Defender"
        },
        WhiteDefenderAscended: {
          name: "White Defender: Ascended",
          spoiler: "Kindly god of bravery and honour",
          id: "WhiteDefender",
          check: "completedTier2",
          wiki: "Hall_of_Gods#White_Defender"
        },
        WhiteDefenderRadiant: {
          name: "White Defender: Radiant",
          spoiler: "Kindly god of bravery and honour",
          id: "WhiteDefender",
          check: "completedTier3",
          wiki: "Hall_of_Gods#White_Defender"
        },
        WatcherKnightsUnlocked: {
          name: "Watcher Knight: Unlocked",
          spoiler: "We lie dormant, guarding the Spire's peak",
          id: "WatcherKnights",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Watcher_Knight"
        },
        WatcherKnightsAttuned: {
          name: "Watcher Knight: Attuned",
          spoiler: "Sentinel gods of the spire",
          id: "WatcherKnights",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Watcher_Knight"
        },
        WatcherKnightsAscended: {
          name: "Watcher Knight: Ascended",
          spoiler: "Sentinel gods of the spire",
          id: "WatcherKnights",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Watcher_Knight"
        },
        WatcherKnightsRadiant: {
          name: "Watcher Knight: Radiant",
          spoiler: "Sentinel gods of the spire",
          id: "WatcherKnights",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Watcher_Knight"
        },
        NoEyesUnlocked: {
          name: "No Eyes: Unlocked",
          spoiler: "I lie dreaming in a silent sanctuary",
          id: "NoEyes",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#No_Eyes"
        },
        NoEyesAttuned: {
          name: "No Eyes: Attuned",
          spoiler: "Dreamborn god of fear and relief",
          id: "NoEyes",
          check: "completedTier1",
          wiki: "Hall_of_Gods#No_Eyes"
        },
        NoEyesAscended: {
          name: "No Eyes: Ascended",
          spoiler: "Dreamborn god of fear and relief",
          id: "NoEyes",
          check: "completedTier2",
          wiki: "Hall_of_Gods#No_Eyes"
        },
        NoEyesRadiant: {
          name: "No Eyes: Radiant",
          spoiler: "Dreamborn god of fear and relief",
          id: "NoEyes",
          check: "completedTier3",
          wiki: "Hall_of_Gods#No_Eyes"
        },
        MarmuUnlocked: {
          name: "Marmu: Unlocked",
          spoiler: "I lie dreaming patiently in a garden",
          id: "Marmu",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Marmu"
        },
        MarmuAttuned: {
          name: "Marmu: Attuned",
          spoiler: "Dreamborn god of gardens",
          id: "Marmu",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Marmu"
        },
        MarmuAscended: {
          name: "Marmu: Ascended",
          spoiler: "Dreamborn god of gardens",
          id: "Marmu",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Marmu"
        },
        MarmuRadiant: {
          name: "Marmu: Radiant",
          spoiler: "Dreamborn god of gardens",
          id: "Marmu",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Marmu"
        },
        GalienUnlocked: {
          name: "Galien: Unlocked",
          spoiler: "I lie dreaming in darkness, surrounded by predators",
          id: "Galien",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Galien"
        },
        GalienAttuned: {
          name: "Galien: Attuned",
          spoiler: "Dreamborn god of heroic hearts",
          id: "Galien",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Galien"
        },
        GalienAscended: {
          name: "Galien: Ascended",
          spoiler: "Dreamborn god of heroic hearts",
          id: "Galien",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Galien"
        },
        GalienRadiant: {
          name: "Galien: Radiant",
          spoiler: "Dreamborn god of heroic hearts",
          id: "Galien",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Galien"
        },
        MarkothUnlocked: {
          name: "Markoth: Unlocked",
          spoiler: "I lie dreaming at the edge of the world",
          id: "Markoth",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Markoth"
        },
        MarkothAttuned: {
          name: "Markoth: Attuned",
          spoiler: "Dreamborn god of meditation and isolation",
          id: "Markoth",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Markoth"
        },
        MarkothAscended: {
          name: "Markoth: Ascended",
          spoiler: "Dreamborn god of meditation and isolation",
          id: "Markoth",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Markoth"
        },
        MarkothRadiant: {
          name: "Markoth: Radiant",
          spoiler: "Dreamborn god of meditation and isolation",
          id: "Markoth",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Markoth"
        },
        XeroUnlocked: {
          name: "Xero: Unlocked",
          spoiler: "I lie dreaming amongst peaceful graves",
          id: "Xero",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Xero"
        },
        XeroAttuned: {
          name: "Xero: Attuned",
          spoiler: "Dreamborn god of faith and betrayal",
          id: "Xero",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Xero"
        },
        XeroAscended: {
          name: "Xero: Ascended",
          spoiler: "Dreamborn god of faith and betrayal",
          id: "Xero",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Xero"
        },
        XeroRadiant: {
          name: "Xero: Radiant",
          spoiler: "Dreamborn god of faith and betrayal",
          id: "Xero",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Xero"
        },
        GorbUnlocked: {
          name: "Gorb: Unlocked",
          spoiler: "I lie dreaming at a wind-blasted peak",
          id: "Gorb",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Gorb"
        },
        GorbAttuned: {
          name: "Gorb: Attuned",
          spoiler: "Dreamborn god of the beyond",
          id: "Gorb",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Gorb"
        },
        GorbAscended: {
          name: "Gorb: Ascended",
          spoiler: "Dreamborn god of the beyond",
          id: "Gorb",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Gorb"
        },
        GorbRadiant: {
          name: "Gorb: Radiant",
          spoiler: "Dreamborn god of the beyond",
          id: "Gorb",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Gorb"
        },
        ElderHuUnlocked: {
          name: "Elder Hu: Unlocked",
          spoiler: "I lie dreaming in the wastes",
          id: "ElderHu",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Elder_Hu"
        },
        ElderHuAttuned: {
          name: "Elder Hu: Attuned",
          spoiler: "Dreamborn god of travellers and sages",
          id: "ElderHu",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Elder_Hu"
        },
        ElderHuAscended: {
          name: "Elder Hu: Ascended",
          spoiler: "Dreamborn god of travellers and sages",
          id: "ElderHu",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Elder_Hu"
        },
        ElderHuRadiant: {
          name: "Elder Hu: Radiant",
          spoiler: "Dreamborn god of travellers and sages",
          id: "ElderHu",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Elder_Hu"
        },
        NailmastersUnlocked: {
          name: "Oro & Mato: Unlocked",
          spoiler: "Together, we stand at a Pantheon's peak",
          id: "Nailmasters",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Oro_.26_Mato"
        },
        NailmastersAttuned: {
          name: "Oro & Mato: Attuned",
          spoiler: "Loyal brother gods of the nail",
          id: "Nailmasters",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Oro_.26_Mato"
        },
        NailmastersAscended: {
          name: "Oro & Mato: Ascended",
          spoiler: "Loyal brother gods of the nail",
          id: "Nailmasters",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Oro_.26_Mato"
        },
        NailmastersRadiant: {
          name: "Oro & Mato: Radiant",
          spoiler: "Loyal brother gods of the nail",
          id: "Nailmasters",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Oro_.26_Mato"
        },
        PaintmasterUnlocked: {
          name: "Paintmaster Sheo: Unlocked",
          spoiler: "I hone my craft at a Pantheon's peak",
          id: "Paintmaster",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Paintmaster_Sheo"
        },
        PaintmasterAttuned: {
          name: "Paintmaster Sheo: Attuned",
          spoiler: "Talented god of artists and creators",
          id: "Paintmaster",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Paintmaster_Sheo"
        },
        PaintmasterAscended: {
          name: "Paintmaster Sheo: Ascended",
          spoiler: "Talented god of artists and creators",
          id: "Paintmaster",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Paintmaster_Sheo"
        },
        PaintmasterRadiant: {
          name: "Paintmaster Sheo: Radiant",
          spoiler: "Talented god of artists and creators",
          id: "Paintmaster",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Paintmaster_Sheo"
        },
        SlyUnlocked: {
          name: "Nailsage Sly: Unlocked",
          spoiler: "I await you at a Pantheon's peak",
          id: "Sly",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Nailsage_Sly"
        },
        SlyAttuned: {
          name: "Nailsage Sly: Attuned",
          spoiler: "Cunning god of opportunity",
          id: "Sly",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Nailsage_Sly"
        },
        SlyAscended: {
          name: "Nailsage Sly: Ascended",
          spoiler: "Cunning god of opportunity",
          id: "Sly",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Nailsage_Sly"
        },
        SlyRadiant: {
          name: "Nailsage Sly: Radiant",
          spoiler: "Cunning god of opportunity",
          id: "Sly",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Nailsage_Sly"
        },
        HollowKnightUnlocked: {
          name: "Pure Vessel: Unlocked",
          spoiler: "This empty god stands at a Pantheon's peak",
          id: "HollowKnight",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Pure_Vessel"
        },
        HollowKnightAttuned: {
          name: "Pure Vessel: Attuned",
          spoiler: "Mighty god of nothingness",
          id: "HollowKnight",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Pure_Vessel"
        },
        HollowKnightAscended: {
          name: "Pure Vessel: Ascended",
          spoiler: "Mighty god of nothingness",
          id: "HollowKnight",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Pure_Vessel"
        },
        HollowKnightRadiant: {
          name: "Pure Vessel: Radiant",
          spoiler: "Mighty god of nothingness",
          id: "HollowKnight",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Pure_Vessel"
        },
        GrimmUnlocked: {
          name: "Grimm: Unlocked",
          spoiler: "I await the lighting of the lantern",
          id: "Grimm",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Grimm"
        },
        GrimmAttuned: {
          name: "Grimm: Attuned",
          spoiler: "Travelling god of the troupe",
          id: "Grimm",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Grimm"
        },
        GrimmAscended: {
          name: "Grimm: Ascended",
          spoiler: "Travelling god of the troupe",
          id: "Grimm",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Grimm"
        },
        GrimmRadiant: {
          name: "Grimm: Radiant",
          spoiler: "Travelling god of the troupe",
          id: "Grimm",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Grimm"
        },
        NightmareGrimmUnlocked: {
          name: "Nightmare King: Unlocked",
          spoiler: "God of nightmares",
          id: "NightmareGrimm",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Nightmare_King"
        },
        NightmareGrimmAttuned: {
          name: "Nightmare King: Attuned",
          spoiler: "God of nightmares",
          id: "NightmareGrimm",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Nightmare_King"
        },
        NightmareGrimmAscended: {
          name: "Nightmare King: Ascended",
          spoiler: "God of nightmares",
          id: "NightmareGrimm",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Nightmare_King"
        },
        NightmareGrimmRadiant: {
          name: "Nightmare King: Radiant",
          spoiler: "God of nightmares",
          id: "NightmareGrimm",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Nightmare_King"
        },
        RadianceUnlocked: {
          name: "Radiance: Unlocked",
          spoiler: "Forgotten god of light",
          id: "Radiance",
          check: "isUnlocked",
          wiki: "Hall_of_Gods#Radiance"
        },
        RadianceAttuned: {
          name: "Radiance: Attuned",
          spoiler: "Forgotten god of light",
          id: "Radiance",
          check: "completedTier1",
          wiki: "Hall_of_Gods#Radiance"
        },
        RadianceAscended: {
          name: "Radiance: Ascended",
          spoiler: "Forgotten god of light",
          id: "Radiance",
          check: "completedTier2",
          wiki: "Hall_of_Gods#Radiance"
        },
        RadianceRadiant: {
          name: "Radiance: Radiant",
          spoiler: "Forgotten god of light",
          id: "Radiance",
          check: "completedTier3",
          wiki: "Hall_of_Gods#Radiance"
        },
      },
    }*/


  },
};

export default HK;