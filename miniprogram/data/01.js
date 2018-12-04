
export default {
    "card_set": {
        "version": 1,
        "set_info": {
            "set_id": 1,
            "pack_item_def": 1000,
            "name": "武装号召"
        },
        "card_list": [
            {
                "card_id": 10001,
                "base_card_id": 10001,
                "card_type": "Hero",
                "card_name": "剧毒术士",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>剧毒本性</span><br/>每次部署阶段，召唤一名<span style='font-weight:bold;color:#ffffff;'>瘟疫守卫</span>至剧毒术士的兵线。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10001.c2456641c9dd1b758dd7a0caf5e2a56f727a51f8.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10001_large_schinese.4dd64b8e9d2f9e7e1ec979e177066038e2a7cd50.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10001_ingame.1c347d3e7359e39d7ca61f6add8b06604b9ecffd.png"
                },
                "illustrator": "JiHun Lee",
                "rarity": "Common",
                "is_blue": true,
                "item_def": 110001,
                "attack": 2,
                "hit_points": 6,
                "references": [
                    {
                        "card_id": 10002,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10491,
                        "ref_type": "passive_ability"
                    }
                ]
            },
            {
                "card_id": 10491,
                "base_card_id": 10491,
                "card_type": "Passive Ability",
                "card_name": "剧毒本性",
                "card_text": "每次部署阶段，召唤一名<span style='font-weight:bold;color:#ffffff;'>瘟疫守卫</span>至剧毒术士的兵线。",
                "mini_image": {},
                "ingame_image": {},
                "references": [
                    {
                        "card_id": 10003,
                        "ref_type": "references"
                    }
                ]
            },
            {
                "card_id": 10002,
                "base_card_id": 10002,
                "card_type": "Spell",
                "card_name": "播撒烈毒",
                "card_text": "召唤两名<span style='font-weight:bold;color:#ffffff;'>瘟疫守卫</span>。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10002.68a876b165ec268ce38d3681a4c3a94a5cbc6a53.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10002_large_schinese.cf2da899bf53e60b077106cdcb0615dd7899304b.png",
                "ingame_image": {},
                "illustrator": "JiHun Lee",
                "is_blue": true,
                "mana_cost": 4,
                "references": [
                    {
                        "card_id": 10003,
                        "ref_type": "references"
                    }
                ]
            },
            {
                "card_id": 10003,
                "base_card_id": 10003,
                "card_type": "Creep",
                "card_name": "瘟疫守卫",
                "card_text": "行动阶段前，对瘟疫守卫的一个随机敌方近邻造成2透甲伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10003.776af3d9fa1c77d9e8066038861660153cc9f6b3.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10003_large_schinese.84e2d1a5f73b9c7a6cdda4f3f58d2239f0883b03.png",
                "ingame_image": {},
                "illustrator": "JiHun Lee",
                "is_blue": true,
                "mana_cost": 3,
                "attack": 1,
                "hit_points": 3,
                "references": []
            },
            {
                "card_id": 10004,
                "base_card_id": 10004,
                "card_type": "Hero",
                "card_name": "米波",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>忽悠</span><br/><span style='font-weight:bold;color:#ffffff;'>主动2：</span> 将米波移至友方<span style='font-weight:bold;color:#ffffff;'>米波</span>的兵线，对新的敌方近邻造成2伤害。\r\n<BR/>\n<BR/>\n<span style='font-weight:bold;color:#ffffff;'>合则倒</span><br/>米波具有灵魂束缚。（如果米波死亡，每条兵线上的所有其他友方米波也会死亡。）",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10004.8e77e6463c971dab1fa01b3761808eb2cf5163b0.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10004_large_schinese.8f610354e62d6827515300da37988b9e5d1b8c30.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10004_ingame.abad49f30c45897120d06d3bef0db20798800c49.png"
                },
                "illustrator": "Wisnu Tan",
                "rarity": "Rare",
                "is_blue": true,
                "item_def": 110004,
                "attack": 4,
                "hit_points": 5,
                "references": [
                    {
                        "card_id": 10005,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10429,
                        "ref_type": "active_ability"
                    },
                    {
                        "card_id": 10490,
                        "ref_type": "passive_ability"
                    }
                ]
            },
            {
                "card_id": 10429,
                "base_card_id": 10429,
                "card_type": "Ability",
                "card_name": "忽悠",
                "card_text": "将米波移至友方<span style='font-weight:bold;color:#ffffff;'>米波</span>的兵线，对新的敌方近邻造成2伤害。",
                "mini_image": {},
                "ingame_image": {},
                "is_crosslane": true,
                "references": [
                    {
                        "card_id": 10004,
                        "ref_type": "references"
                    }
                ]
            },
            {
                "card_id": 10490,
                "base_card_id": 10490,
                "card_type": "Passive Ability",
                "card_name": "合则倒",
                "card_text": "米波具有灵魂束缚。（如果米波死亡，每条兵线上的所有其他友方米波也会死亡。）",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10005,
                "base_card_id": 10005,
                "card_type": "Spell",
                "card_name": "分则立",
                "card_text": "召唤一名<span style='font-weight:bold;color:#ffffff;'>米波</span>。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10005.0d4ea601200a728eb864a53232880e0ed7b119ad.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10005_large_schinese.0896d0877c08ce5120174e28ebbf50856d858cc9.png",
                "ingame_image": {},
                "illustrator": "Wisnu Tan",
                "is_blue": true,
                "mana_cost": 4,
                "references": [
                    {
                        "card_id": 10004,
                        "ref_type": "references"
                    }
                ]
            },
            {
                "card_id": 10006,
                "base_card_id": 10006,
                "card_type": "Hero",
                "card_name": "露娜",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>月光</span><br/>行动阶段前，对一个随机敌人造成1透甲伤害，并使你手牌和牌组中的三张随机<span style='font-weight:bold;color:#ffffff;'>月蚀</span>卡牌增加1能量。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10006.ee9329205440996f09bdcc600c6aaeaa8440c44b.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10006_large_schinese.d080612d36bfcc1aeedfe866f48a70ecfe6814d1.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10006_ingame.89d98455aa3b6db2aac61d258774b198540b7dbd.png"
                },
                "illustrator": "Anthony Palumbo",
                "rarity": "Uncommon",
                "is_blue": true,
                "item_def": 110006,
                "attack": 3,
                "hit_points": 8,
                "references": [
                    {
                        "card_id": 10007,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10489,
                        "ref_type": "passive_ability"
                    }
                ]
            },
            {
                "card_id": 10489,
                "base_card_id": 10489,
                "card_type": "Passive Ability",
                "card_name": "月光",
                "card_text": "行动阶段前，对一个随机敌人造成1透甲伤害，并使你手牌和牌组中的三张随机<span style='font-weight:bold;color:#ffffff;'>月蚀</span>卡牌增加1能量。",
                "mini_image": {},
                "ingame_image": {},
                "references": [
                    {
                        "card_id": 10007,
                        "ref_type": "references"
                    }
                ]
            },
            {
                "card_id": 10007,
                "base_card_id": 10007,
                "card_type": "Spell",
                "card_name": "月蚀",
                "card_text": "每有1能量重复一次：对一个随机敌人造成3透甲伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10007.07294b44cc2bb4b5cafbfd9f76d310c52e355412.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10007_large_schinese.cf3be1c1c103719f8934ed9fb8f56bce8abba5d2.png",
                "ingame_image": {},
                "illustrator": "Anthony Palumbo",
                "is_blue": true,
                "mana_cost": 6,
                "charges": 1,
                "references": []
            },
            {
                "card_id": 10010,
                "base_card_id": 10010,
                "card_type": "Hero",
                "card_name": "寒冬飞龙",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>严寒烧灼</span><br/><span style='font-weight:bold;color:#ffffff;'>主动2：</span>将寒冬飞龙移至一个空白战斗位置，并使其在本回合+4攻击。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10010.ad0a64e7f9814fc0cb1c7e2aa4b217e549239bb6.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10010_large_schinese.fda86ec90af25b2d9b8a3204c02688d1b29e3e87.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10010_ingame.633228c1be0c51fb3416a901351e42397ccc9912.png"
                },
                "illustrator": "Sung Choi",
                "rarity": "Uncommon",
                "is_black": true,
                "item_def": 110010,
                "attack": 6,
                "hit_points": 6,
                "references": [
                    {
                        "card_id": 10011,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10430,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10430,
                "base_card_id": 10430,
                "card_type": "Ability",
                "card_name": "严寒烧灼",
                "card_text": "将寒冬飞龙移至一个空白战斗位置，并使其在本回合+4攻击。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10011,
                "base_card_id": 10011,
                "card_type": "Spell",
                "card_name": "寒冬诅咒",
                "card_text": "缴械一个单位直至回合结束为止。使该单位的友方近邻与其战斗。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10011.092b9f98ad10895c3d108fc05388de8f2f0a6b9c.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10011_large_schinese.cd742126bd7527ba79e2c929a348b9cbc29d0a25.png",
                "ingame_image": {},
                "illustrator": "Sung Choi",
                "is_black": true,
                "mana_cost": 6,
                "references": []
            },
            {
                "card_id": 10014,
                "base_card_id": 10014,
                "card_type": "Hero",
                "card_name": "狼人",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>野性驱使</span><br/>狼人的友方近邻+2攻击。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10014.d0b682f37b2b7b777078f811bdf93a6fa5231ac5.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10014_large_schinese.cbafc392049e21bf3b97312e5053f74d85e3c764.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10014_ingame.1572d914aaa6aeb157087adb6619e8d2555cf419.png"
                },
                "illustrator": "Ryan Pancoast",
                "rarity": "Common",
                "is_green": true,
                "item_def": 110014,
                "attack": 4,
                "hit_points": 10,
                "references": [
                    {
                        "card_id": 10112,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10494,
                        "ref_type": "passive_ability"
                    }
                ]
            },
            {
                "card_id": 10494,
                "base_card_id": 10494,
                "card_type": "Passive Ability",
                "card_name": "野性驱使",
                "card_text": "狼人的友方近邻+2攻击。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10016,
                "base_card_id": 10016,
                "card_type": "Hero",
                "card_name": "亚巴顿",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>回光返照</span><br/><span style='font-weight:bold;color:#ffffff;'>主动2：</span>完整治疗亚巴顿，并使其在本回合获得伤害免疫。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10016.49550e3b17ccf2611eb71b22f58664ae338be8ae.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10016_large_schinese.0fc4d1cdf750a10cffc0ae49e31d781e1a2bef9c.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10016_ingame.e554b0820026fab65e0d93a6c236f3971ff9aa0d.png"
                },
                "illustrator": "Chase Stone",
                "rarity": "Uncommon",
                "is_green": true,
                "item_def": 110016,
                "attack": 4,
                "hit_points": 9,
                "references": [
                    {
                        "card_id": 10287,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10431,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10431,
                "base_card_id": 10431,
                "card_type": "Ability",
                "card_name": "回光返照",
                "card_text": "完整治疗亚巴顿，并使其在本回合获得伤害免疫。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10017,
                "base_card_id": 10017,
                "card_type": "Hero",
                "card_name": "陈",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>神圣劝化</span><br/><span style='font-weight:bold;color:#ffffff;'>主动4：</span>控制一名敌方小兵。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10017.c755182fd873b5df7f4d9bf6075dc1065021b560.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10017_large_schinese.fe8f761b3633c5d6bd5b2b7c27f05761d07b8efc.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10017_ingame.6ebdad88afa95fd63b1833564028e432b0ac2d30.png"
                },
                "illustrator": "Clint Cearley",
                "rarity": "Rare",
                "is_green": true,
                "item_def": 110017,
                "attack": 4,
                "hit_points": 9,
                "references": [
                    {
                        "card_id": 10340,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10432,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10432,
                "base_card_id": 10432,
                "card_type": "Ability",
                "card_name": "神圣劝化",
                "card_text": "控制一名敌方小兵。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10018,
                "base_card_id": 10018,
                "card_type": "Hero",
                "card_name": "血魔",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>屠戮</span><br/>当阻挡其前的单位死亡后，完整治疗血魔。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10018.99a88322fecd54fc5fe195cd8a12f49bc64e424c.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10018_large_schinese.5315d612269db3850998cf85994bc05943dc13c6.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10018_ingame.e30c301154cb882531366a397486b99bdadf4004.png"
                },
                "illustrator": "Lake Hurwitz",
                "rarity": "Common",
                "is_black": true,
                "item_def": 110018,
                "attack": 7,
                "hit_points": 6,
                "references": [
                    {
                        "card_id": 10289,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10496,
                        "ref_type": "passive_ability"
                    }
                ]
            },
            {
                "card_id": 10496,
                "base_card_id": 10496,
                "card_type": "Passive Ability",
                "card_name": "屠戮",
                "card_text": "当阻挡其前的单位死亡后，完整治疗血魔。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10020,
                "base_card_id": 10020,
                "card_type": "Hero",
                "card_name": "斧王",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10020.023febd622949d771d9f6a4322efc339ced8c560.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10020_large_schinese.43df9f625df040bcefc14e9ea622c6b4ad786445.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10020_ingame.4b1773e0546ae29327b3d1be27455ca6b38bc4bc.png"
                },
                "illustrator": "Tyler Jacobson",
                "rarity": "Rare",
                "is_red": true,
                "item_def": 110020,
                "attack": 7,
                "armor": 2,
                "hit_points": 11,
                "references": [
                    {
                        "card_id": 10288,
                        "ref_type": "includes",
                        "count": 3
                    }
                ]
            },
            {
                "card_id": 10021,
                "base_card_id": 10021,
                "card_type": "Hero",
                "card_name": "半人马战行者",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>反击</span><br/>半人马战行者+2反伤。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10021.f655334174b3964b58604e3cfa80360e06d83004.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10021_large_schinese.cb38d539c0407cc593682443d93d3c984bdb9e1a.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10021_ingame.ef3cf78a69b914097f4cf8ad54b89cc03a96f4e9.png"
                },
                "illustrator": "Lius Lasahido",
                "rarity": "Rare",
                "is_red": true,
                "item_def": 110021,
                "attack": 4,
                "hit_points": 14,
                "references": [
                    {
                        "card_id": 10292,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10497,
                        "ref_type": "passive_ability"
                    }
                ]
            },
            {
                "card_id": 10497,
                "base_card_id": 10497,
                "card_type": "Passive Ability",
                "card_name": "反击",
                "card_text": "半人马战行者+2反伤。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10022,
                "base_card_id": 10022,
                "card_type": "Hero",
                "card_name": "伐木机",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>活性护甲</span><br/>伐木机每有一个攻击者，便+1护甲。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10022.065c0b1ce65b1f201bca225121177c2d19df2c89.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10022_large_schinese.ed88330251b1834b677480e276b008ac9e476238.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10022_ingame.298367b2c0a9d5a83a290c4b26c4db8118bc1f0a.png"
                },
                "illustrator": "JiHun Lee",
                "rarity": "Uncommon",
                "is_red": true,
                "item_def": 110022,
                "attack": 4,
                "hit_points": 11,
                "references": [
                    {
                        "card_id": 10296,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10498,
                        "ref_type": "passive_ability"
                    }
                ]
            },
            {
                "card_id": 10498,
                "base_card_id": 10498,
                "card_type": "Passive Ability",
                "card_name": "活性护甲",
                "card_text": "伐木机每有一个攻击者，便+1护甲。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10023,
                "base_card_id": 10023,
                "card_type": "Hero",
                "card_name": "赏金猎人",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>忍术</span><br/>行动阶段前，赏金猎人在本回合有50%几率+4攻击。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10023.503fcb60e0cdc30aa1d5a6f858a4050e3315b5f0.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10023_large_schinese.9734add9b0ab992459961be4afa2f31f59841275.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10023_ingame.98f5e792764681cf0d2662d6e38a8ff430404cb7.png"
                },
                "illustrator": "E.M. Gist",
                "rarity": "Common",
                "is_black": true,
                "item_def": 110023,
                "attack": 7,
                "hit_points": 7,
                "references": [
                    {
                        "card_id": 10416,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10499,
                        "ref_type": "passive_ability"
                    }
                ]
            },
            {
                "card_id": 10499,
                "base_card_id": 10499,
                "card_type": "Passive Ability",
                "card_name": "忍术",
                "card_text": "行动阶段前，赏金猎人在本回合有50%几率+4攻击。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10024,
                "base_card_id": 10024,
                "card_type": "Hero",
                "card_name": "潮汐猎人",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>毁灭</span><br/><span style='font-weight:bold;color:#ffffff;'>主动4：</span>在本回合晕眩潮汐猎人的敌方近邻，其他敌人也有50%几率被晕眩。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10024.1ffefd6bce93c5753f51eefdd39e1089b810b08b.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10024_large_schinese.e93ff336255f4a5aa64dcd823ae16707488e4e38.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10024_ingame.79325d3e4ff8841ba2833786d5d7c3bc9f3a5d8a.png"
                },
                "illustrator": "Daarken",
                "rarity": "Uncommon",
                "is_red": true,
                "item_def": 110024,
                "attack": 2,
                "armor": 1,
                "hit_points": 18,
                "references": [
                    {
                        "card_id": 10290,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10434,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10434,
                "base_card_id": 10434,
                "card_type": "Ability",
                "card_name": "毁灭",
                "card_text": "在本回合晕眩潮汐猎人的敌方近邻，其他敌人也有50%几率被晕眩。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10025,
                "base_card_id": 10025,
                "card_type": "Hero",
                "card_name": "修补匠",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>激光</span><br/><span style='font-weight:bold;color:#ffffff;'>主动3：</span>对一个单位造成3伤害，并在本回合使其缴械。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10025.33033b1e8b19d9a934322355077aef6467115d73.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10025_large_schinese.ea5ff6798745864beb80649f81cf76297a05a654.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10025_ingame.21005804eb139e25697a143575fe5b0cac36c579.png"
                },
                "illustrator": "James Paick",
                "rarity": "Rare",
                "is_black": true,
                "item_def": 110025,
                "attack": 7,
                "hit_points": 5,
                "references": [
                    {
                        "card_id": 10291,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10435,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10435,
                "base_card_id": 10435,
                "card_type": "Ability",
                "card_name": "激光",
                "card_text": "对一个单位造成3伤害，并在本回合使其缴械。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10026,
                "base_card_id": 10026,
                "card_type": "Hero",
                "card_name": "瑞克斯",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>不懈叛军</span><br/>瑞克斯具有快速部署。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10026.59c2df4317db54a08c492c3d78f23ed9206a2a17.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10026_large_schinese.32962cb234cea859c252febaa74065cf929633d1.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10026_ingame.0b596f4469b0ad3050552849284804a8d1a986be.png"
                },
                "illustrator": "Chris Rahn",
                "rarity": "Uncommon",
                "is_green": true,
                "item_def": 110026,
                "attack": 3,
                "hit_points": 7,
                "references": [
                    {
                        "card_id": 10420,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10500,
                        "ref_type": "passive_ability"
                    }
                ]
            },
            {
                "card_id": 10500,
                "base_card_id": 10500,
                "card_type": "Passive Ability",
                "card_name": "不懈叛军",
                "card_text": "瑞克斯具有快速部署。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10028,
                "base_card_id": 10028,
                "card_type": "Hero",
                "card_name": "冥界亚龙",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>腐蚀皮肤</span><br/>当一个单位对冥界亚龙造成战斗伤害时，修改该单位，使其-1攻击。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10028.50b8bc7588cab219f86ac87014b2c394d0ee5754.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10028_large_schinese.4a99f6f5182803d30eba5745daca04ba6ff0a23b.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10028_ingame.f78ba0c0871819c7763bd3e7321554d176b7903a.png"
                },
                "illustrator": "Lars Grant-West",
                "rarity": "Uncommon",
                "is_green": true,
                "item_def": 110028,
                "attack": 4,
                "hit_points": 10,
                "references": [
                    {
                        "card_id": 10294,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10501,
                        "ref_type": "passive_ability"
                    }
                ]
            },
            {
                "card_id": 10501,
                "base_card_id": 10501,
                "card_type": "Passive Ability",
                "card_name": "腐蚀皮肤",
                "card_text": "当一个单位对冥界亚龙造成战斗伤害时，修改该单位，使其-1攻击。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10029,
                "base_card_id": 10029,
                "card_type": "Hero",
                "card_name": "兽王",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>野性呼唤</span><br/><span style='font-weight:bold;color:#ffffff;'>主动3：</span>召唤一头<span style='font-weight:bold;color:#ffffff;'>忠诚野兽</span>。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10029.9deae28f2a6715b2456e5844e2fdea7aaa28418f.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10029_large_schinese.37a62516fcf2a7725d04508235e38015c635c470.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10029_ingame.0a80b175673b135a779857bd0fa9b347b5082144.png"
                },
                "illustrator": "Clint Cearley",
                "rarity": "Common",
                "is_red": true,
                "item_def": 110029,
                "attack": 5,
                "hit_points": 12,
                "references": [
                    {
                        "card_id": 10293,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10437,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10437,
                "base_card_id": 10437,
                "card_type": "Ability",
                "card_name": "野性呼唤",
                "card_text": "召唤一头<span style='font-weight:bold;color:#ffffff;'>忠诚野兽</span>。",
                "mini_image": {},
                "ingame_image": {},
                "references": [
                    {
                        "card_id": 10136,
                        "ref_type": "references"
                    }
                ]
            },
            {
                "card_id": 10030,
                "base_card_id": 10030,
                "card_type": "Hero",
                "card_name": "钢背兽",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>酒馆醉拳</span><br/>当阻挡其前的英雄死亡后，修改钢背兽，使其+2护甲。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10030.d6427ab9016cda608a66759ed0b5e8a51a532d0f.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10030_large_schinese.f803b33e2b530e8a17422da415a2d12f13006e49.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10030_ingame.3637b79cc931a18328e3d324ee1a61dfc4e2c35b.png"
                },
                "illustrator": "JiHun Lee",
                "rarity": "Common",
                "is_red": true,
                "item_def": 110030,
                "attack": 8,
                "hit_points": 12,
                "references": [
                    {
                        "card_id": 10419,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10502,
                        "ref_type": "passive_ability"
                    }
                ]
            },
            {
                "card_id": 10502,
                "base_card_id": 10502,
                "card_type": "Passive Ability",
                "card_name": "酒馆醉拳",
                "card_text": "当阻挡其前的英雄死亡后，修改钢背兽，使其+2护甲。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10031,
                "base_card_id": 10031,
                "card_type": "Hero",
                "card_name": "卡娜",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>征服使者</span><br/>将随机友方<span style='font-weight:bold;color:#ffffff;'>近战小兵</span>部署至卡娜的兵线。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10031.967b53755c3a477cc89b05422018a06d08e837f2.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10031_large_schinese.16a02e4c15e7f400518f7e2524b0d600ba3777ca.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10031_ingame.f73eb3453e6882b39142225ac45c2ea7a1686044.png"
                },
                "illustrator": "Scott M Fischer",
                "rarity": "Rare",
                "is_blue": true,
                "item_def": 110031,
                "attack": 2,
                "hit_points": 12,
                "references": [
                    {
                        "card_id": 10325,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10503,
                        "ref_type": "passive_ability"
                    }
                ]
            },
            {
                "card_id": 10503,
                "base_card_id": 10503,
                "card_type": "Passive Ability",
                "card_name": "征服使者",
                "card_text": "将随机友方<span style='font-weight:bold;color:#ffffff;'>近战小兵</span>部署至卡娜的兵线。",
                "mini_image": {},
                "ingame_image": {},
                "references": [
                    {
                        "card_id": 1006,
                        "ref_type": "references"
                    }
                ]
            },
            {
                "card_id": 10032,
                "base_card_id": 10032,
                "card_type": "Hero",
                "card_name": "卓尔游侠",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>精准灵气</span><br/>所有兵线上的其他友方单位+1攻击。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10032.ac3532fc6482ff603748ddde2fb3564273a3b72e.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10032_large_schinese.f8edfc092c62c4136345d173f3768b590a77cab3.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10032_ingame.7fbb9f47159e639d43413a9f8dc37dc87f895bbf.png"
                },
                "illustrator": "Livia Prima",
                "rarity": "Rare",
                "is_green": true,
                "item_def": 110032,
                "attack": 4,
                "hit_points": 7,
                "references": [
                    {
                        "card_id": 10339,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10504,
                        "ref_type": "passive_ability"
                    }
                ]
            },
            {
                "card_id": 10504,
                "base_card_id": 10504,
                "card_type": "Passive Ability",
                "card_name": "精准灵气",
                "card_text": "所有兵线上的其他友方单位+1攻击。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10033,
                "base_card_id": 10033,
                "card_type": "Hero",
                "card_name": "撼地者",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>沟壑</span><br/><span style='font-weight:bold;color:#ffffff;'>主动4：</span>在本回合晕眩撼地者的敌方近邻。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10033.7c8e9fa3eccd923d8433ed2b98aef717766ca0d9.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10033_large_schinese.cfe83e8bf05a27f43d2828c09e02c42440738afe.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10033_ingame.12e1d59de9862d5f8ede3c0014fad6b7bf2ad3ff.png"
                },
                "illustrator": "Forrest Imel",
                "rarity": "Rare",
                "is_blue": true,
                "item_def": 110033,
                "attack": 2,
                "hit_points": 7,
                "references": [
                    {
                        "card_id": 10323,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10438,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10438,
                "base_card_id": 10438,
                "card_type": "Ability",
                "card_name": "沟壑",
                "card_text": "在本回合晕眩撼地者的敌方近邻。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10036,
                "base_card_id": 10036,
                "card_type": "Hero",
                "card_name": "魅惑魔女",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>自然之助</span><br/>魅惑魔女+2恢复。魅惑魔女的友方近邻+2恢复。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10036.995dc56212e8e8bf40471d3121262d43a82e7c31.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10036_large_schinese.edb793b397d608fc527630c0ed8e6645dc43ad48.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10036_ingame.f65dfe92226c5bb9b5e401a6a1be9fa8265803a0.png"
                },
                "illustrator": "Randy Vargas",
                "rarity": "Common",
                "is_green": true,
                "item_def": 110036,
                "attack": 4,
                "hit_points": 8,
                "references": [
                    {
                        "card_id": 10193,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10506,
                        "ref_type": "passive_ability"
                    }
                ]
            },
            {
                "card_id": 10506,
                "base_card_id": 10506,
                "card_type": "Passive Ability",
                "card_name": "自然之助",
                "card_text": "魅惑魔女+2恢复。魅惑魔女的友方近邻+2恢复。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10038,
                "base_card_id": 10038,
                "card_type": "Hero",
                "card_name": "巫妖",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>献祭</span><br/><span style='font-weight:bold;color:#ffffff;'>主动2：</span>惩处另一个友方单位并抽一张牌。如果该友方单位的攻击为6或以上，则多抽一张牌。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10038.26778b9a203a57b0d3ffb1bc75b7a0734e88c6c8.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10038_large_schinese.c40d13f67acda2fbebee33799a6a2286fa6cbdc0.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10038_ingame.7544eda066c78d85403c1a96ed096435f7343341.png"
                },
                "illustrator": "Wisnu Tan",
                "rarity": "Rare",
                "is_black": true,
                "item_def": 110038,
                "attack": 5,
                "hit_points": 9,
                "references": [
                    {
                        "card_id": 10318,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10440,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10440,
                "base_card_id": 10440,
                "card_type": "Ability",
                "card_name": "献祭",
                "card_text": "惩处另一个友方单位并抽一张牌。如果该友方单位的攻击为6或以上，则多抽一张牌。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10043,
                "base_card_id": 10043,
                "card_type": "Hero",
                "card_name": "食人魔魔法师",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>多重施法</span><br/>打出一张<span style='font-weight:bold;color:#2f7492;'>蓝色法术</span>后，有25%几率将该卡牌的基础副本加入你的手牌。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10043.4b52a60db821028ba02a7fb728988bec2842397f.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10043_large_schinese.6d73ea7c000a2440ca6d6ed0df095033fd523dd5.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10043_ingame.127396b9101aa4b8d7c32f6a763a30becf82d575.png"
                },
                "illustrator": "Randy Vargas",
                "rarity": "Common",
                "is_blue": true,
                "item_def": 110043,
                "attack": 3,
                "hit_points": 7,
                "references": [
                    {
                        "card_id": 10160,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10509,
                        "ref_type": "passive_ability"
                    }
                ]
            },
            {
                "card_id": 10509,
                "base_card_id": 10509,
                "card_type": "Passive Ability",
                "card_name": "多重施法",
                "card_text": "打出一张<span style='font-weight:bold;color:#2f7492;'>蓝色法术</span>后，有25%几率将该卡牌的基础副本加入你的手牌。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10044,
                "base_card_id": 10044,
                "card_type": "Hero",
                "card_name": "全知骑士",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>洗礼</span><br/><span style='font-weight:bold;color:#ffffff;'>主动2：</span>对一个单位进行3治疗。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10044.5fe4f8195b2a005f6b40ab273b2504782e84d191.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10044_large_schinese.d5edf177707bc481d6081eea0032993f6938809d.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10044_ingame.72d9db93559dfb850db41b5c56dfa9324d525473.png"
                },
                "illustrator": "Sam Carr",
                "rarity": "Rare",
                "is_green": true,
                "item_def": 110044,
                "attack": 5,
                "hit_points": 12,
                "references": [
                    {
                        "card_id": 10348,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10443,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10443,
                "base_card_id": 10443,
                "card_type": "Ability",
                "card_name": "洗礼",
                "card_text": "对一个单位进行3治疗。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10046,
                "base_card_id": 10046,
                "card_type": "Hero",
                "card_name": "殁境神蚀者",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>精华灵气</span><br/>打出一张<span style='font-weight:bold;color:#2f7492;'>蓝色卡牌</span>后，有50%几率恢复2魔力。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10046.959caac2a5c3a0e8efeec6af631337a483bb8795.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10046_large_schinese.11eb2472e798101238882f7bad9f93dd9521d39a.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10046_ingame.f93f51f512a39868f15a0adae08dbe098d2aa10b.png"
                },
                "illustrator": "Joseph Meehan",
                "rarity": "Uncommon",
                "is_blue": true,
                "item_def": 110046,
                "attack": 4,
                "hit_points": 6,
                "references": [
                    {
                        "card_id": 10267,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10511,
                        "ref_type": "passive_ability"
                    }
                ]
            },
            {
                "card_id": 10511,
                "base_card_id": 10511,
                "card_type": "Passive Ability",
                "card_name": "精华灵气",
                "card_text": "打出一张<span style='font-weight:bold;color:#2f7492;'>蓝色卡牌</span>后，有50%几率恢复2魔力。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10047,
                "base_card_id": 10047,
                "card_type": "Hero",
                "card_name": "幻影刺客",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>杀戮高手</span><br/>幻影刺客攻击英雄时，造成+4伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10047.dd94f5bc1b22bef2e9b18264c523d8e28704f728.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10047_large_schinese.769380fb186f74aeb03b81eb8f97865f04ef1b08.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10047_ingame.77fafd6442149fa870af2246ef2e44e41bba38c0.png"
                },
                "illustrator": "Greg Opalinski",
                "rarity": "Common",
                "is_black": true,
                "item_def": 110047,
                "attack": 6,
                "hit_points": 8,
                "references": [
                    {
                        "card_id": 10308,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10512,
                        "ref_type": "passive_ability"
                    }
                ]
            },
            {
                "card_id": 10512,
                "base_card_id": 10512,
                "card_type": "Passive Ability",
                "card_name": "杀戮高手",
                "card_text": "幻影刺客攻击英雄时，造成+4伤害。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10048,
                "base_card_id": 10048,
                "card_type": "Hero",
                "card_name": "帕格纳",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>幽冥爆轰</span><br/><span style='font-weight:bold;color:#ffffff;'>主动3：</span>惩处一个随机敌方强化。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10048.ca73a1b73aa37fc74a7807a69357e2e5641b01df.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10048_large_schinese.00c2f792d5d8ee8db47e0162c15c204a73fb217a.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10048_ingame.727075c100ba4f0fa47e223c5fe671e920ed4d0c.png"
                },
                "illustrator": "Randy Vargas",
                "rarity": "Rare",
                "is_red": true,
                "item_def": 110048,
                "attack": 6,
                "hit_points": 9,
                "references": [
                    {
                        "card_id": 10173,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10444,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10444,
                "base_card_id": 10444,
                "card_type": "Ability",
                "card_name": "幽冥爆轰",
                "card_text": "惩处一个随机敌方强化。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10050,
                "base_card_id": 10050,
                "card_type": "Hero",
                "card_name": "狙击手",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>爆头</span><br/><span style='font-weight:bold;color:#ffffff;'>主动3：</span>对一个单位造成5伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10050.be0a865d3d49ca386d2a3835cc46eab52a923f47.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10050_large_schinese.aaaf8b457bb72a9be6e79b9e89557f01f9b6b09f.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10050_ingame.9f298145ea43e62aa3e55fc6ba180e8b32f7e029.png"
                },
                "illustrator": "Forrest Imel",
                "rarity": "Uncommon",
                "is_black": true,
                "item_def": 110050,
                "attack": 5,
                "hit_points": 6,
                "references": [
                    {
                        "card_id": 10272,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10446,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10446,
                "base_card_id": 10446,
                "card_type": "Ability",
                "card_name": "爆头",
                "card_text": "对一个单位造成5伤害。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10052,
                "base_card_id": 10052,
                "card_type": "Hero",
                "card_name": "梅兹",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10052.16b67615c0229d72fd946e7b9e2407420bbbf67f.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10052_large_schinese.4522335ae466f8f5cb0c0f1b07f3b0a29baef007.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10052_ingame.983cb22019635500e40ab9aabe11fa0e4c9050c3.png"
                },
                "illustrator": "Lius Lasahido",
                "rarity": "Common",
                "is_red": true,
                "item_def": 110052,
                "attack": 6,
                "armor": 3,
                "hit_points": 6,
                "references": [
                    {
                        "card_id": 10179,
                        "ref_type": "includes",
                        "count": 3
                    }
                ]
            },
            {
                "card_id": 10053,
                "base_card_id": 10053,
                "card_type": "Hero",
                "card_name": "普瑞蕾斯",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>信仰使者</span><br/>g:204部署阶段，召唤一名<span style='font-weight:bold;color:#ffffff;'>近战小兵</span>至普瑞蕾斯的兵线。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10053.46d6ca300f26d8e05aaf9d63c590508a723415b5.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10053_large_schinese.5a7f6aaa5ad9221e9eab9b1072eff59855cb93e9.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10053_ingame.8089df7555c623afc0e20e7873d62f0a8d5c3f66.png"
                },
                "illustrator": "Lius Lasahido",
                "rarity": "Uncommon",
                "is_blue": true,
                "item_def": 110053,
                "attack": 3,
                "hit_points": 5,
                "references": [
                    {
                        "card_id": 10147,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10523,
                        "ref_type": "passive_ability"
                    }
                ]
            },
            {
                "card_id": 10523,
                "base_card_id": 10523,
                "card_type": "Passive Ability",
                "card_name": "信仰使者",
                "card_text": "每次部署阶段，召唤一名<span style='font-weight:bold;color:#ffffff;'>近战小兵</span>至普瑞蕾斯的兵线。",
                "mini_image": {},
                "ingame_image": {},
                "references": [
                    {
                        "card_id": 1006,
                        "ref_type": "references"
                    }
                ]
            },
            {
                "card_id": 10054,
                "base_card_id": 10054,
                "card_type": "Hero",
                "card_name": "斯温",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>巨力挥舞</span><br/>斯温+X顺势，X为其攻击的一半。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10054.f7ec19918c68fa805f4577fd31457b5a8a7da2e5.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10054_large_schinese.b7911c99c59477d9df6522f6ad84e34e33726d08.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10054_ingame.28b35264859897d83c4ff6c4ceac138f194706c9.png"
                },
                "illustrator": "Yongjae Choi",
                "rarity": "Common",
                "is_red": true,
                "item_def": 110054,
                "attack": 5,
                "hit_points": 11,
                "references": [
                    {
                        "card_id": 10330,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10513,
                        "ref_type": "passive_ability"
                    }
                ]
            },
            {
                "card_id": 10513,
                "base_card_id": 10513,
                "card_type": "Passive Ability",
                "card_name": "巨力挥舞",
                "card_text": "斯温+X顺势，X为其攻击的一半。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10056,
                "base_card_id": 10056,
                "card_type": "Hero",
                "card_name": "树精卫士",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>钢铁树枝</span><br/>树精卫士的友方近邻+2护甲。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10056.4ea3388b448c9ee13bbbfd7248b46f0c3e71e98a.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10056_large_schinese.435a333d341c4ee1c9e547cc63a6b4e1e819ebfc.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10056_ingame.22ad237a7bc3ac7c093590392823d8c6241ac30d.png"
                },
                "illustrator": "Alix Branwyn",
                "rarity": "Common",
                "is_green": true,
                "item_def": 110056,
                "attack": 4,
                "hit_points": 10,
                "references": [
                    {
                        "card_id": 10117,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10514,
                        "ref_type": "passive_ability"
                    }
                ]
            },
            {
                "card_id": 10514,
                "base_card_id": 10514,
                "card_type": "Passive Ability",
                "card_name": "钢铁树枝",
                "card_text": "树精卫士的友方近邻+2护甲。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10058,
                "base_card_id": 10058,
                "card_type": "Hero",
                "card_name": "索尔拉可汗",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>好战者</span><br/>索尔拉可汗攻击塔时，造成+4伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10058.635583094b11fcc0f86d624e9007f4a519179f38.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10058_large_schinese.c7e5a5077f31a607ed96185b4391aaf122cfef4e.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10058_ingame.f40b33ccbbbb5749e3a418c9b9c20db908fe4472.png"
                },
                "illustrator": "Tyler Jacobson",
                "rarity": "Uncommon",
                "is_black": true,
                "item_def": 110058,
                "attack": 8,
                "hit_points": 6,
                "references": [
                    {
                        "card_id": 10177,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10516,
                        "ref_type": "passive_ability"
                    }
                ]
            },
            {
                "card_id": 10516,
                "base_card_id": 10516,
                "card_type": "Passive Ability",
                "card_name": "好战者",
                "card_text": "索尔拉可汗攻击塔时，造成+4伤害。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10059,
                "base_card_id": 10059,
                "card_type": "Hero",
                "card_name": "瘟疫法师",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>施虐之心</span><br/>g:600敌方近邻死亡后，修改瘟疫法师，使其+1生命。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10059.66aae3f23e16000eb90086810be1d750ec6babe0.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10059_large_schinese.5761920696ed88d30b1f5310cb15e1f3e7e72f3a.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10059_ingame.3b8bbf6012bb0d2000f4f8fac91c8d2ac56a169a.png"
                },
                "illustrator": "Kieran Yanner",
                "rarity": "Common",
                "is_black": true,
                "item_def": 110059,
                "attack": 5,
                "hit_points": 6,
                "references": [
                    {
                        "card_id": 10274,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10517,
                        "ref_type": "passive_ability"
                    }
                ]
            },
            {
                "card_id": 10517,
                "base_card_id": 10517,
                "card_type": "Passive Ability",
                "card_name": "施虐之心",
                "card_text": "一个敌方近邻死亡后，修改瘟疫法师，使其+1生命。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10060,
                "base_card_id": 10060,
                "card_type": "Hero",
                "card_name": "莱恩",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>死亡之指</span><br/><span style='font-weight:bold;color:#ffffff;'>主动4：</span>对一个单位造成8透甲伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10060.1b8ab00d3d43fa0aec13c1d4f078c510c2828eed.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10060_large_schinese.c8bd1b5447976ca6f63f597be501b261626551c3.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10060_ingame.3cc7cccf0863e3326fdb57fadc4be375ee9c5415.png"
                },
                "illustrator": "Stepan Alekseev",
                "rarity": "Common",
                "is_black": true,
                "item_def": 110060,
                "attack": 6,
                "hit_points": 5,
                "references": [
                    {
                        "card_id": 10275,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10449,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10449,
                "base_card_id": 10449,
                "card_type": "Ability",
                "card_name": "死亡之指",
                "card_text": "对一个单位造成8透甲伤害。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10062,
                "base_card_id": 10062,
                "card_type": "Hero",
                "card_name": "天怒法师",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>震荡光弹</span><br/><span style='font-weight:bold;color:#ffffff;'>主动2：</span>在本回合使一名英雄及其友方近邻-2护甲。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10062.320871aec38db2b973d6fa8933e62d3f44e8e407.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10062_large_schinese.27867d08c813cd5cf35be5979fdbf4303c00cfc3.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10062_ingame.9890e2113b5e86406485a425ecfc1d81f7b1be3c.png"
                },
                "illustrator": "Greg Opalinski",
                "rarity": "Common",
                "is_blue": true,
                "item_def": 110062,
                "attack": 3,
                "hit_points": 6,
                "references": [
                    {
                        "card_id": 10063,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10451,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10451,
                "base_card_id": 10451,
                "card_type": "Ability",
                "card_name": "震荡光弹",
                "card_text": "在本回合使一名英雄及其友方近邻-2护甲。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10063,
                "base_card_id": 10063,
                "card_type": "Spell",
                "card_name": "神秘之耀",
                "card_text": "造成12伤害。由一个单位及其友方近邻平均分摊。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10063.151e14066698af6f78a6a23fa01ddf88c325fe6a.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10063_large_schinese.78265b5480c92aa0cc3f3d5a4e4ac20e81dcdc85.png",
                "ingame_image": {},
                "illustrator": "Greg Opalinski",
                "is_blue": true,
                "mana_cost": 6,
                "references": []
            },
            {
                "card_id": 10064,
                "base_card_id": 10064,
                "card_type": "Hero",
                "card_name": "冰晶圣女",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>奥术灵气</span><br/>在各兵线上首次打出友方法术后，该兵线上的塔恢复2魔力。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10064.e76bb6f2b597ae16bc8a5efa82eca5ff39afaa29.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10064_large_schinese.57b653f150dbf9b9a09fb1b64a7d4f081f43ce2c.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10064_ingame.2ec56e566f1a8f6a6b800f1613f10515b4fd7d17.png"
                },
                "illustrator": "Stepan Alekseev",
                "rarity": "Common",
                "is_blue": true,
                "item_def": 110064,
                "attack": 2,
                "hit_points": 5,
                "references": [
                    {
                        "card_id": 10277,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10518,
                        "ref_type": "passive_ability"
                    }
                ]
            },
            {
                "card_id": 10518,
                "base_card_id": 10518,
                "card_type": "Passive Ability",
                "card_name": "奥术灵气",
                "card_text": "在各兵线上首次打出友方法术后，该兵线上的塔恢复2魔力。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10519,
                "base_card_id": 10519,
                "card_type": "Passive Ability",
                "card_name": "静电场",
                "card_text": "打出一张<span style='font-weight:bold;color:#2f7492;'>蓝色法术</span>后，对宙斯的敌方近邻造成1透甲伤害。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10065,
                "base_card_id": 10065,
                "card_type": "Hero",
                "card_name": "宙斯",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10065.de19a6f1e68cfcab2f38f25b3d8847866ba87ccb.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10065_large_schinese.77bbfdb6a4d419d6e448a56fbd7683122adea9f4.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10065_ingame.66b980fa18c866fcfb5d704423f1a27e24822e3c.png"
                },
                "illustrator": "David Palumbo",
                "rarity": "Common",
                "is_blue": true,
                "item_def": 110065,
                "attack": 3,
                "hit_points": 7,
                "references": [
                    {
                        "card_id": 10278,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10519,
                        "ref_type": "passive_ability"
                    }
                ]
            },
            {
                "card_id": 10067,
                "base_card_id": 10067,
                "card_type": "Hero",
                "card_name": "马格纳斯",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10067.9130bf7958f290e69cf5bcc960332d44830919ae.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10067_large_schinese.a9471a721523458674e30e7be69c9f03b034053c.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10067_ingame.9b4157f13dfd086f9cb1e2357985ccc384578119.png"
                },
                "illustrator": "Magali Villeneuve",
                "rarity": "Common",
                "is_green": true,
                "item_def": 110067,
                "attack": 4,
                "armor": 1,
                "hit_points": 9,
                "references": [
                    {
                        "card_id": 10280,
                        "ref_type": "includes",
                        "count": 3
                    }
                ]
            },
            {
                "card_id": 10068,
                "base_card_id": 10068,
                "card_type": "Hero",
                "card_name": "黑暗贤者",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>奔腾</span><br/><span style='font-weight:bold;color:#ffffff;'>主动2：</span>将另一个友方单位移至另一条兵线。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10068.e8e173ac8dd4f1d582fe41378232b4c3637ab039.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10068_large_schinese.94347b01508947ef022d16a94e2a6d63f8ec2520.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10068_ingame.d551de559af77e7376f663a900d27f99b7616d6c.png"
                },
                "illustrator": "Stepan Alekseev",
                "rarity": "Common",
                "is_green": true,
                "item_def": 110068,
                "attack": 5,
                "hit_points": 9,
                "references": [
                    {
                        "card_id": 10281,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10452,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10452,
                "base_card_id": 10452,
                "card_type": "Ability",
                "card_name": "奔腾",
                "card_text": "将另一个友方单位移至另一条兵线。",
                "mini_image": {},
                "ingame_image": {},
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10069,
                "base_card_id": 10069,
                "card_type": "Hero",
                "card_name": "军团指挥官",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>勇气之霎</span><br/>军团指挥官+2反伤。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10069.f0595417e162f98c02cd6ce7b3a45b5413f6639f.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10069_large_schinese.c2fb48f754fc02b7e48fe6549d26d15a43c12b6e.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10069_ingame.659a7475aaa6e1cbeb8c7d86ab74d1e740a91a11.png"
                },
                "illustrator": "Randy Vargas",
                "rarity": "Uncommon",
                "is_red": true,
                "item_def": 110069,
                "attack": 6,
                "armor": 1,
                "hit_points": 8,
                "references": [
                    {
                        "card_id": 10341,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10520,
                        "ref_type": "passive_ability"
                    }
                ]
            },
            {
                "card_id": 10520,
                "base_card_id": 10520,
                "card_type": "Passive Ability",
                "card_name": "勇气之霎",
                "card_text": "军团指挥官+2反伤。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10070,
                "base_card_id": 10070,
                "card_type": "Hero",
                "card_name": "熊战士",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>怒意狂击</span><br/>当熊战士对一个单位造成战斗伤害时，修改该单位，使其-1护甲。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10070.0fb457ff9ef3010b7f2743789889339aa74b4152.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10070_large_schinese.54b003ec29c4828758ba514c7cd1f1c554fb4492.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10070_ingame.42164bc5c798b36a6ddc65e2ad113e96486c4f3d.png"
                },
                "illustrator": "Forrest Imel",
                "rarity": "Common",
                "is_red": true,
                "item_def": 110070,
                "attack": 7,
                "hit_points": 10,
                "references": [
                    {
                        "card_id": 10282,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10521,
                        "ref_type": "passive_ability"
                    }
                ]
            },
            {
                "card_id": 10521,
                "base_card_id": 10521,
                "card_type": "Passive Ability",
                "card_name": "怒意狂击",
                "card_text": "当熊战士对一个单位造成战斗伤害时，修改该单位，使其-1护甲。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10076,
                "base_card_id": 10076,
                "card_type": "Creep",
                "card_name": "打铁小魔武器大师",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>出牌效果：</span>修改一名随机友方英雄，使其+2攻击。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10076.a86d96da771fc88bfec128071a1209125acadfaf.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10076_large_schinese.0059f73bc89a4f29740e885f93da3ca4d98b1839.png",
                "ingame_image": {},
                "illustrator": "Mike Azevedo",
                "rarity": "Uncommon",
                "is_red": true,
                "mana_cost": 4,
                "item_def": 110076,
                "attack": 2,
                "hit_points": 2,
                "references": []
            },
            {
                "card_id": 10077,
                "base_card_id": 10077,
                "card_type": "Creep",
                "card_name": "幻纱姐妹会刺客",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>主动1：</span>为幻纱姐妹会刺客选择一个战斗目标。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10077.7451246292f34e03091b67466babbc7f0947bbf1.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10077_large_schinese.0a272d2b01d2e30172f587053be6d683725f6c9b.png",
                "ingame_image": {},
                "illustrator": "Anthony Palumbo",
                "rarity": "Uncommon",
                "is_black": true,
                "mana_cost": 5,
                "item_def": 110077,
                "attack": 4,
                "hit_points": 5,
                "references": [
                    {
                        "card_id": 10454,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10454,
                "base_card_id": 10454,
                "card_type": "Ability",
                "card_name": "幻纱姐妹会刺客",
                "card_text": "为幻纱姐妹会刺客选择一个战斗目标。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10078,
                "base_card_id": 10078,
                "card_type": "Creep",
                "card_name": "泰勒庄园巡检",
                "card_text": "敌方塔-1魔力。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10078.adb17a86187b3e8907ae01f37399b74919c23c35.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10078_large_schinese.3ae0089b3219896e1ac94a5a78bff7aa526707ba.png",
                "ingame_image": {},
                "illustrator": "James Paick",
                "rarity": "Uncommon",
                "is_black": true,
                "mana_cost": 4,
                "item_def": 110078,
                "attack": 2,
                "hit_points": 8,
                "references": []
            },
            {
                "card_id": 10079,
                "base_card_id": 10079,
                "card_type": "Creep",
                "card_name": "打铁小魔铁匠",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>出牌效果：</span>修改一名随机友方英雄，使其+1护甲。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10079.0353e0aaf9b574b3456e63b8d5cfaede0f67580d.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10079_large_schinese.1a5a4bffab9450f8165b07edcb8f70007a8a78a4.png",
                "ingame_image": {},
                "illustrator": "Izzy",
                "rarity": "Uncommon",
                "is_green": true,
                "mana_cost": 4,
                "item_def": 110079,
                "attack": 2,
                "hit_points": 2,
                "references": []
            },
            {
                "card_id": 10080,
                "base_card_id": 10080,
                "card_type": "Creep",
                "card_name": "叛军诱饵",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>主动1：</span>将叛军诱饵与另一个友方单位互换位置。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10080.45f68a0e2677040d8eeac43771df4006fe4790fe.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10080_large_schinese.6398938fb04c8d8ca17ecae8288954222ede8911.png",
                "ingame_image": {},
                "illustrator": "Jason Kang",
                "rarity": "Common",
                "is_green": true,
                "mana_cost": 3,
                "item_def": 110080,
                "attack": 2,
                "hit_points": 3,
                "references": [
                    {
                        "card_id": 10455,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10455,
                "base_card_id": 10455,
                "card_type": "Ability",
                "card_name": "叛军诱饵",
                "card_text": "将叛军诱饵与另一个友方单位互换位置。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10082,
                "base_card_id": 10082,
                "card_type": "Creep",
                "card_name": "半人马猎者",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10082.222d55d60939ad4c2bb8dad54e6220b00c92cf33.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10082_large_schinese.9ced3f3349874c839e982567609369135953be93.png",
                "ingame_image": {},
                "illustrator": "James Paick",
                "is_red": true,
                "mana_cost": 5,
                "attack": 4,
                "hit_points": 8,
                "references": []
            },
            {
                "card_id": 10083,
                "base_card_id": 10083,
                "card_type": "Creep",
                "card_name": "囚尸岭绝命斗士",
                "card_text": "一个友方近邻死亡后，修改囚尸岭绝命斗士，使其+2攻击。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10083.8a7652f25a09f456967ddf48eebe39edf7f03175.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10083_large_schinese.6aaccc9ecd9a2c8ad37dffcd51f45f78d6c05890.png",
                "ingame_image": {},
                "illustrator": "Daarken",
                "rarity": "Rare",
                "is_black": true,
                "mana_cost": 4,
                "item_def": 110083,
                "attack": 2,
                "hit_points": 8,
                "references": []
            },
            {
                "card_id": 10084,
                "base_card_id": 10084,
                "card_type": "Creep",
                "card_name": "叛乱煽动者",
                "card_text": "战斗阶段后，如果叛乱煽动者在本回合对一名小兵造成战斗伤害，召唤一名<span style='font-weight:bold;color:#ffffff;'>叛乱煽动者</span>。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10084.af79046d024a3109a96e670661395acd9e767211.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10084_large_schinese.c2bc899cdf57a091b209a398829640cbda2c9cbb.png",
                "ingame_image": {},
                "illustrator": "Forrest Imel",
                "rarity": "Uncommon",
                "is_red": true,
                "mana_cost": 4,
                "item_def": 110084,
                "attack": 2,
                "hit_points": 3,
                "references": []
            },
            {
                "card_id": 10085,
                "base_card_id": 10085,
                "card_type": "Creep",
                "card_name": "刺客暗影",
                "card_text": "攻城5。每有一个友方单位，刺客暗影-2攻击。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10085.f09a15f66768b837fafb28f60b72769173c22add.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10085_large_schinese.0c1edc16d1f1ed77091947d5a87e3a3770c82af5.png",
                "ingame_image": {},
                "illustrator": "Daniel Romanovsky",
                "rarity": "Rare",
                "is_black": true,
                "mana_cost": 7,
                "item_def": 110085,
                "attack": 15,
                "hit_points": 5,
                "references": []
            },
            {
                "card_id": 10086,
                "base_card_id": 10086,
                "card_type": "Creep",
                "card_name": "奈文摩尔的信徒",
                "card_text": "其他友方单位+2攻击和-2护甲。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10086.4fde2e719dbdad72806d9ac0e3b91fecb0c03eb9.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10086_large_schinese.37ff23c9e2da1fc6b505de5a54c926abf3f3d26d.png",
                "ingame_image": {},
                "illustrator": "Lius Lasahido",
                "rarity": "Common",
                "is_black": true,
                "mana_cost": 3,
                "item_def": 110086,
                "attack": 4,
                "armor": -2,
                "hit_points": 4,
                "references": []
            },
            {
                "card_id": 10087,
                "base_card_id": 10087,
                "card_type": "Creep",
                "card_name": "军团旗手",
                "card_text": "军团旗手的友方近邻+4攻击。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10087.955aef063a2a4591748bf4c5de8561e20f1660bf.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10087_large_schinese.14c0cb1f87e593af3b8cfa1584ee080a2fb0f6b0.png",
                "ingame_image": {},
                "illustrator": "Wisnu Tan",
                "rarity": "Uncommon",
                "is_red": true,
                "mana_cost": 4,
                "item_def": 110087,
                "hit_points": 6,
                "references": []
            },
            {
                "card_id": 10090,
                "base_card_id": 10090,
                "card_type": "Creep",
                "card_name": "不屈僵尸",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>出牌效果：</span>使不屈僵尸获得一面免死护盾。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10090.42e284f16be88c517eaac9f2c823d363d5ea899a.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10090_large_schinese.fa37b874b53034e43f07cc980f69ae435aa9176b.png",
                "ingame_image": {},
                "illustrator": "Lars Grant-West",
                "rarity": "Common",
                "is_blue": true,
                "mana_cost": 2,
                "item_def": 110090,
                "attack": 2,
                "hit_points": 2,
                "references": []
            },
            {
                "card_id": 10091,
                "base_card_id": 10091,
                "card_type": "Creep",
                "card_name": "瑞文泰尔护卫队",
                "card_text": "瑞文泰尔护卫队+X攻击，X为你持有金钱的一半。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10091.4f031e4b2abec7e0baeb8e64aa11fee139527a59.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10091_large_schinese.efe3a00a4a9d1493d62bc5c2dd975e88371b5567.png",
                "ingame_image": {},
                "illustrator": "Darek Zabrocki",
                "rarity": "Rare",
                "is_green": true,
                "mana_cost": 5,
                "item_def": 110091,
                "hit_points": 20,
                "references": []
            },
            {
                "card_id": 10092,
                "base_card_id": 10092,
                "card_type": "Creep",
                "card_name": "高地人破坏者",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>出牌效果：</span>对敌方塔造成4伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10092.8c1d0f80d2a8a666a2f882f0a50379d547d9ae29.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10092_large_schinese.f8923bfc14a6813a53fdcb138d458f85f61d9343.png",
                "ingame_image": {},
                "illustrator": "JiHun Lee",
                "rarity": "Common",
                "is_black": true,
                "mana_cost": 4,
                "item_def": 110092,
                "attack": 4,
                "hit_points": 4,
                "references": []
            },
            {
                "card_id": 10093,
                "base_card_id": 10093,
                "card_type": "Creep",
                "card_name": "战争猎犬",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10093.7c619d4eed89bc0c220d3a455a1a482e67a4e5e5.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10093_large_schinese.33f2143355bfddcc9bcec6f412cf3794290c46d4.png",
                "ingame_image": {},
                "illustrator": "Lake Hurwitz",
                "is_black": true,
                "mana_cost": 3,
                "attack": 2,
                "hit_points": 1,
                "references": []
            },
            {
                "card_id": 10094,
                "base_card_id": 10094,
                "card_type": "Creep",
                "card_name": "亡命佣兵",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>主动2：</span>消耗你所有的金钱。修改亡命佣兵，使其+X攻击和+X生命，X为消耗金钱的一半。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10094.b1329de0d8604df994bdf12fd1c1b4db65e0535e.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10094_large_schinese.551864a7f2d5881267c0b5a83f09864790d019d1.png",
                "ingame_image": {},
                "illustrator": "John Stanko",
                "rarity": "Rare",
                "is_red": true,
                "mana_cost": 3,
                "item_def": 110094,
                "attack": 2,
                "armor": 1,
                "hit_points": 4,
                "references": [
                    {
                        "card_id": 10456,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10456,
                "base_card_id": 10456,
                "card_type": "Ability",
                "card_name": "亡命佣兵",
                "card_text": "消耗你所有的金钱。修改亡命佣兵，使其+X攻击和+X生命，X为消耗金钱的一半。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10095,
                "base_card_id": 10095,
                "card_type": "Creep",
                "card_name": "基恩巨傀儡",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>出牌效果：</span>舍弃你的手牌。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10095.58b35411a7a53f43b6f60471f10be93e89708b83.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10095_large_schinese.71b2e1f5d752d139bc44af9d6de65aa1648e6b93.png",
                "ingame_image": {},
                "illustrator": "Wisnu Tan",
                "rarity": "Rare",
                "is_red": true,
                "mana_cost": 6,
                "item_def": 110095,
                "attack": 13,
                "hit_points": 13,
                "references": []
            },
            {
                "card_id": 10096,
                "base_card_id": 10096,
                "card_type": "Creep",
                "card_name": "评议团密使",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>主动1：</span>修改友方单位，使其+2攻击和+2生命。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10096.cc30832b644f3814ee1ad83985c9c631d9d93836.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10096_large_schinese.7e2f99066aa06fd16b2fba1459d3a51242fbf57d.png",
                "ingame_image": {},
                "illustrator": "Kieran Yanner",
                "rarity": "Rare",
                "is_green": true,
                "mana_cost": 8,
                "item_def": 110096,
                "attack": 1,
                "armor": 2,
                "hit_points": 10,
                "references": [
                    {
                        "card_id": 10457,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10457,
                "base_card_id": 10457,
                "card_type": "Ability",
                "card_name": "评议团密使",
                "card_text": "修改友方单位，使其+2攻击和+2生命。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10097,
                "base_card_id": 10097,
                "card_type": "Creep",
                "card_name": "断骨格斗士",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10097.0fbb18ea6b9af005a6877b2155e2864eb650af1f.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10097_large_schinese.623a94333e256d01e2b507fc81ca2ede8b38fc38.png",
                "ingame_image": {},
                "illustrator": "Vance Kovacs",
                "rarity": "Rare",
                "is_red": true,
                "mana_cost": 6,
                "item_def": 110097,
                "attack": 6,
                "hit_points": 16,
                "references": []
            },
            {
                "card_id": 10102,
                "base_card_id": 10102,
                "card_type": "Creep",
                "card_name": "雷肤兽群",
                "card_text": "攻城6。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10102.82f2f65f664181ca761751979cc46d385211ec92.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10102_large_schinese.32d1cd5a67a2b9eb4f61439937c1912a7033a64d.png",
                "ingame_image": {},
                "illustrator": "Lars Grant-West",
                "rarity": "Common",
                "is_green": true,
                "mana_cost": 8,
                "item_def": 110102,
                "attack": 14,
                "hit_points": 14,
                "references": []
            },
            {
                "card_id": 10103,
                "base_card_id": 10103,
                "card_type": "Creep",
                "card_name": "食人魔投尸手",
                "card_text": "一名友方<span style='font-weight:bold;color:#ffffff;'>近战小兵</span>死亡后，对敌方塔造成2透甲伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10103.186f93a8d665b55ec5e908e9b7a5d694ed61473e.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10103_large_schinese.8085141df43f2a4e6c525169cd1ec4bdcbdaa889.png",
                "ingame_image": {},
                "illustrator": "Bayard Wu",
                "rarity": "Rare",
                "is_red": true,
                "mana_cost": 5,
                "item_def": 110103,
                "attack": 2,
                "hit_points": 10,
                "references": [
                    {
                        "card_id": 1006,
                        "ref_type": "references"
                    }
                ]
            },
            {
                "card_id": 10104,
                "base_card_id": 10104,
                "card_type": "Creep",
                "card_name": "古铜军团士兵",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10104.834d68cad9ae1f9a4b3a342817ace09f5882e257.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10104_large_schinese.4f8b1e3f07ee33d3e5523cd487fd8094472fd4c9.png",
                "ingame_image": {},
                "illustrator": "Stepan Alekseev",
                "rarity": "Common",
                "is_red": true,
                "mana_cost": 2,
                "item_def": 110104,
                "attack": 4,
                "armor": 2,
                "hit_points": 2,
                "references": []
            },
            {
                "card_id": 10106,
                "base_card_id": 10106,
                "card_type": "Creep",
                "card_name": "赛莉蒙妮的化身",
                "card_text": "打出任意卡牌后，你的塔恢复全部魔力。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10106.c5ab80f62e1075f918b5d49d9ed5a71940b7de66.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10106_large_schinese.df3020301b5778933713f80f830419d81dc293f4.png",
                "ingame_image": {},
                "illustrator": "Anthony Palumbo",
                "rarity": "Rare",
                "is_blue": true,
                "mana_cost": 9,
                "item_def": 110106,
                "attack": 3,
                "hit_points": 11,
                "references": []
            },
            {
                "card_id": 10107,
                "base_card_id": 10107,
                "card_type": "Creep",
                "card_name": "豺狼人殉道者",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>死亡效果：</span>修改友方单位，使其+1攻击和+1生命。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10107.dc63e26ca00e4b29b6a5bb9bc5a28c565e675779.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10107_large_schinese.780eb14ece2763434f1fe43a20cfeccfbd54bfda.png",
                "ingame_image": {},
                "illustrator": "Jakub Kasper",
                "rarity": "Common",
                "is_green": true,
                "mana_cost": 2,
                "item_def": 110107,
                "attack": 2,
                "hit_points": 2,
                "references": []
            },
            {
                "card_id": 10108,
                "base_card_id": 10108,
                "card_type": "Creep",
                "card_name": "雷肤兽领袖",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10108.6cd0b952c8ebbc1721906d0e0bf90621183b579d.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10108_large_schinese.dc5c799fea6578be342bc7cf2f890d1d86f541fe.png",
                "ingame_image": {},
                "illustrator": "Vance Kovacs",
                "rarity": "Rare",
                "is_green": true,
                "mana_cost": 9,
                "item_def": 110108,
                "attack": 25,
                "hit_points": 25,
                "references": []
            },
            {
                "card_id": 10111,
                "base_card_id": 10111,
                "card_type": "Creep",
                "card_name": "萨特决斗家",
                "card_text": "战斗阶段后，修改萨特决斗家，使其+2攻击。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10111.c4cbe25b01123928f52af27718bef137fdd433f9.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10111_large_schinese.1ab999bdcea29e75650e3293d778872f13ea993d.png",
                "ingame_image": {},
                "illustrator": "Wisnu Tan",
                "rarity": "Common",
                "is_green": true,
                "mana_cost": 4,
                "item_def": 110111,
                "attack": 3,
                "hit_points": 5,
                "references": []
            },
            {
                "card_id": 10112,
                "base_card_id": 10112,
                "card_type": "Creep",
                "card_name": "野蛮灵狼",
                "card_text": "战斗阶段后，修改野蛮灵狼，使其+1攻击和+2生命。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10112.a9c0aa6b1432b8056ba722c0f7fe2838cabcf607.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10112_large_schinese.d3ac5cc9aa7d817886a8cc79862806d7c8c3b8b8.png",
                "ingame_image": {},
                "illustrator": "Ryan Pancoast",
                "is_green": true,
                "mana_cost": 4,
                "attack": 3,
                "hit_points": 3,
                "references": []
            },
            {
                "card_id": 10113,
                "base_card_id": 10113,
                "card_type": "Creep",
                "card_name": "暴走地狱熊怪",
                "card_text": "战斗阶段后，修改暴走地狱熊怪，使其+4攻击。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10113.f810e4777d6da93e40c89090545055c94f65c3c1.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10113_large_schinese.afa7e5449635c8af18be55901773fecf79a057f2.png",
                "ingame_image": {},
                "illustrator": "Vance Kovacs",
                "rarity": "Rare",
                "is_green": true,
                "mana_cost": 4,
                "item_def": 110113,
                "attack": 2,
                "hit_points": 3,
                "references": []
            },
            {
                "card_id": 10114,
                "base_card_id": 10114,
                "card_type": "Creep",
                "card_name": "被诅咒的萨特",
                "card_text": "战斗阶段后，为你的对手召唤一具<span style='font-weight:bold;color:#ffffff;'>僵尸</span>。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10114.530ef12971662949b70ea6bc1d522abad791bff5.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10114_large_schinese.7de13400f273f8106a0b9ae94ddba9b701f5fbed.png",
                "ingame_image": {},
                "illustrator": "Jakub Kasper",
                "rarity": "Uncommon",
                "is_red": true,
                "mana_cost": 5,
                "item_def": 110114,
                "attack": 6,
                "hit_points": 6,
                "references": [
                    {
                        "card_id": 1009,
                        "ref_type": "references"
                    }
                ]
            },
            {
                "card_id": 10115,
                "base_card_id": 10115,
                "card_type": "Creep",
                "card_name": "勾财黑鸦",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>主动1：</span>惩处阻挡勾财黑鸦的单位装备的一件随机物品。获得与该物品基础价格相等的金钱。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10115.2ba848eb157dd21e6c9096e5cc5ff0dbf027556f.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10115_large_schinese.4889448471b5e26791ca32692a4d322a343f958e.png",
                "ingame_image": {},
                "illustrator": "Heonhwa Choe",
                "rarity": "Rare",
                "is_black": true,
                "mana_cost": 6,
                "item_def": 110115,
                "attack": 3,
                "hit_points": 6,
                "references": [
                    {
                        "card_id": 10524,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10524,
                "base_card_id": 10524,
                "card_type": "Ability",
                "card_name": "勾财黑鸦",
                "card_text": "惩处阻挡勾财黑鸦的单位装备的一件随机物品。获得与该物品基础价格相等的金钱。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10116,
                "base_card_id": 10116,
                "card_type": "Creep",
                "card_name": "贪婪众生",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>主动1：</span>惩处贪婪众生的友方近邻。修改贪婪众生，使其获得那些单位的攻击和生命。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10116.fe74a19ec0cab3b4522e517f5eb4957a12cbb2a3.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10116_large_schinese.675df02de4922d7d32a63cc2d60af205fa6342d7.png",
                "ingame_image": {},
                "illustrator": "Mike Azevedo",
                "rarity": "Rare",
                "is_black": true,
                "mana_cost": 4,
                "item_def": 110116,
                "attack": 1,
                "hit_points": 1,
                "references": [
                    {
                        "card_id": 10459,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10459,
                "base_card_id": 10459,
                "card_type": "Ability",
                "card_name": "贪婪众生",
                "card_text": "惩处贪婪众生的友方近邻。修改贪婪众生，使其获得那些单位的攻击和生命。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10117,
                "base_card_id": 10117,
                "card_type": "Creep",
                "card_name": "玫叶德鲁伊",
                "card_text": "你的塔+1魔力。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10117.5eea0573852449f0341e0e38f894977e6b070b73.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10117_large_schinese.f82e5aebe854b7cb93bc3fee86b381b7902ae358.png",
                "ingame_image": {},
                "illustrator": "Alix Branwyn",
                "is_green": true,
                "mana_cost": 4,
                "attack": 2,
                "hit_points": 6,
                "references": []
            },
            {
                "card_id": 10118,
                "base_card_id": 10118,
                "card_type": "Creep",
                "card_name": "地狱熊怪摧残者",
                "card_text": "当地狱熊怪摧残者对一个单位造成战斗伤害时，修改该单位，使其-1攻击。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10118.06997fa22931c7f4b8fd6c266b33654033a07fd9.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10118_large_schinese.f721864ec93db46b8ce0004caac829c9863ff15f.png",
                "ingame_image": {},
                "illustrator": "Vance Kovacs",
                "rarity": "Common",
                "is_red": true,
                "mana_cost": 3,
                "item_def": 110118,
                "attack": 3,
                "hit_points": 3,
                "references": []
            },
            {
                "card_id": 10119,
                "base_card_id": 10119,
                "card_type": "Creep",
                "card_name": "自私教士",
                "card_text": "战斗阶段后，完整治疗自私教士。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10119.314b3f4cab73ab3b0835e08f32d1311deb411442.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10119_large_schinese.9b72c70874425fdfbeceed8da615164f1d4c47af.png",
                "ingame_image": {},
                "illustrator": "John Stanko",
                "rarity": "Common",
                "is_green": true,
                "mana_cost": 4,
                "item_def": 110119,
                "attack": 4,
                "hit_points": 4,
                "references": []
            },
            {
                "card_id": 10120,
                "base_card_id": 10120,
                "card_type": "Creep",
                "card_name": "玫叶墙",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10120.ef052dfc29add765463c92a99ed255b849d18657.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10120_large_schinese.29d16eaa589bad0f6dcb2278eb75f5cb3f04ff8e.png",
                "ingame_image": {},
                "illustrator": "Pauline Voss",
                "is_green": true,
                "mana_cost": 3,
                "hit_points": 8,
                "references": []
            },
            {
                "card_id": 10127,
                "base_card_id": 10127,
                "card_type": "Creep",
                "card_name": "食人魔士兵",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10127.0b2176feded4927be83fb6d9373477eff70198fe.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10127_large_schinese.1a527f85c8739318d6a719d9511373ca173bf655.png",
                "ingame_image": {},
                "illustrator": "Lius Lasahido",
                "rarity": "Common",
                "is_red": true,
                "mana_cost": 6,
                "item_def": 110127,
                "attack": 7,
                "armor": 2,
                "hit_points": 7,
                "references": []
            },
            {
                "card_id": 10128,
                "base_card_id": 10128,
                "card_type": "Creep",
                "card_name": "未经考验的士兵",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10128.fcbdb64d383d35d026fe3bb64c29ee995039aeb3.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10128_large_schinese.c7958e0fcb96e97dd9d8021c369a9e8b588e871d.png",
                "ingame_image": {},
                "illustrator": "Jason Kang",
                "rarity": "Common",
                "is_black": true,
                "mana_cost": 2,
                "item_def": 110128,
                "attack": 4,
                "hit_points": 2,
                "references": []
            },
            {
                "card_id": 10129,
                "base_card_id": 10129,
                "card_type": "Creep",
                "card_name": "刺客学徒",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>主动1：</span>为刺客学徒选择一个战斗目标。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10129.d985ab71ce9cf0c3a02d7f501e4cbfdcb9df5af7.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10129_large_schinese.74fd4417772266bf482163c14dcdbd2c9ce066f3.png",
                "ingame_image": {},
                "illustrator": "David Palumbo",
                "rarity": "Common",
                "is_black": true,
                "mana_cost": 2,
                "item_def": 110129,
                "attack": 3,
                "hit_points": 2,
                "references": [
                    {
                        "card_id": 10543,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10543,
                "base_card_id": 10543,
                "card_type": "Ability",
                "card_name": "刺客学徒",
                "card_text": "为刺客学徒选择一个战斗目标。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10131,
                "base_card_id": 10131,
                "card_type": "Creep",
                "card_name": "石堂城精英",
                "card_text": "当阻挡其前的单位死亡后，修改石堂城精英，使其获得+2攻击和+2生命。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10131.b5451ce8ec5535c1241278b6696c9d440780ef61.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10131_large_schinese.239aee3257bcf419cc0b33b7a7ad4f22ecf033cf.png",
                "ingame_image": {},
                "illustrator": "Jason Kang",
                "rarity": "Uncommon",
                "is_red": true,
                "mana_cost": 4,
                "item_def": 110131,
                "attack": 4,
                "armor": 2,
                "hit_points": 2,
                "references": []
            },
            {
                "card_id": 10132,
                "base_card_id": 10132,
                "card_type": "Creep",
                "card_name": "红雾掠夺者",
                "card_text": "战斗阶段后，如果红雾掠夺者在本回合对一座塔造成战斗伤害，召唤一名<span style='font-weight:bold;color:#ffffff;'>红雾掠夺者</span>。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10132.9dc636e0a6e2a15098e8f8f14e55e64b0ccc5d06.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10132_large_schinese.160c5c65d085366fc232122590cbd1186cdd9b3e.png",
                "ingame_image": {},
                "illustrator": "Anastasia Ovchinnikova",
                "rarity": "Uncommon",
                "is_red": true,
                "mana_cost": 5,
                "item_def": 110132,
                "attack": 4,
                "hit_points": 2,
                "references": []
            },
            {
                "card_id": 10133,
                "base_card_id": 10133,
                "card_type": "Creep",
                "card_name": "遗迹卫士",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>出牌效果：</span>每有一个敌人，修改遗迹卫士，使其+1攻击、+1生命和+1顺势。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10133.149d8c1fd2e23796a222652a806be8f06a40c5db.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10133_large_schinese.4465a57a9c74933696af3fb6044de590331a596e.png",
                "ingame_image": {},
                "illustrator": "Daarken",
                "rarity": "Rare",
                "is_green": true,
                "mana_cost": 7,
                "item_def": 110133,
                "attack": 2,
                "hit_points": 6,
                "references": []
            },
            {
                "card_id": 10134,
                "base_card_id": 10134,
                "card_type": "Creep",
                "card_name": "玫叶神医",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>出牌效果：</span>对你的塔进行7治疗。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10134.df2c1af4f93727a3e800619355772762cbdf4670.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10134_large_schinese.d9bab763c42a464636be61364cee89b5194c600d.png",
                "ingame_image": {},
                "illustrator": "Jakub Kasper",
                "rarity": "Uncommon",
                "is_green": true,
                "mana_cost": 7,
                "item_def": 110134,
                "attack": 7,
                "hit_points": 7,
                "references": []
            },
            {
                "card_id": 10136,
                "base_card_id": 10136,
                "card_type": "Creep",
                "card_name": "忠诚野兽",
                "card_text": "当忠诚野兽对一个单位造成战斗伤害时，修改该单位，使其-1攻击。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10136.b5edbdda5ac2020d3f67b914662dae9fc4aad0f6.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10136_large_schinese.161689a8ee5ffdd2a2b7647abe892585b9eedbad.png",
                "ingame_image": {},
                "illustrator": "Clint Cearley",
                "is_red": true,
                "mana_cost": 3,
                "attack": 3,
                "armor": 1,
                "hit_points": 3,
                "references": []
            },
            {
                "card_id": 10137,
                "base_card_id": 10137,
                "card_type": "Creep",
                "card_name": "萨特魔术师",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>主动1：</span>使你的塔恢复全部魔力。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10137.9f8ab4909042ac588a9a8cd873c0803044ce68e4.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10137_large_schinese.428849ec111270036bc9e7ff7a3e1e4ead9fec02.png",
                "ingame_image": {},
                "illustrator": "Alix Branwyn",
                "rarity": "Uncommon",
                "is_blue": true,
                "mana_cost": 5,
                "item_def": 110137,
                "attack": 2,
                "hit_points": 5,
                "references": [
                    {
                        "card_id": 10542,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10138,
                "base_card_id": 10138,
                "card_type": "Creep",
                "card_name": "巨魔占卜师",
                "card_text": "每回合多抽一张牌。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10138.ea9ae00f45e48b03bc04324cdb77d6aa075481e7.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10138_large_schinese.bfbae387060eb026546b85cc4a7e3bbad7032ee4.png",
                "ingame_image": {},
                "illustrator": "Sam Carr",
                "rarity": "Uncommon",
                "is_blue": true,
                "mana_cost": 6,
                "item_def": 110138,
                "attack": 2,
                "hit_points": 8,
                "references": []
            },
            {
                "card_id": 10141,
                "base_card_id": 10141,
                "card_type": "Improvement",
                "card_name": "同归于尽",
                "card_text": "所有英雄+4攻城。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10141.74b79736c4654aff7594dfa1438ec95b7f382a6f.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10141_large_schinese.2529cb56ac4f34c79f9b534be8bfef96b4e5dc19.png",
                "ingame_image": {},
                "illustrator": "Titus Lunter",
                "rarity": "Rare",
                "is_black": true,
                "mana_cost": 3,
                "item_def": 110141,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10147,
                "base_card_id": 10147,
                "card_type": "Improvement",
                "card_name": "兵营",
                "card_text": "每次部署阶段，召唤一名<span style='font-weight:bold;color:#ffffff;'>近战小兵</span>至此兵线。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10147.327049cf33e13c2528a1859d1aca7d2fd74adf07.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10147_large_schinese.e0464492b6f440a7ca64ab80e3a7a4e22ad155aa.png",
                "ingame_image": {},
                "illustrator": "Lius Lasahido",
                "is_blue": true,
                "mana_cost": 5,
                "is_crosslane": true,
                "references": [
                    {
                        "card_id": 1006,
                        "ref_type": "references"
                    }
                ]
            },
            {
                "card_id": 10148,
                "base_card_id": 10148,
                "card_type": "Improvement",
                "card_name": "破碎时间轴",
                "card_text": "行动阶段前，使对手的一张随机手牌+1锁定。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10148.5672c59b99db6c230fa175d7e6b5e762d6185dcf.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10148_large_schinese.f905c19f5a73371d2c9b1ac773913cbb0a6249e9.png",
                "ingame_image": {},
                "illustrator": "Sam Carr",
                "rarity": "Rare",
                "is_blue": true,
                "mana_cost": 2,
                "item_def": 110148,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10149,
                "base_card_id": 10149,
                "card_type": "Improvement",
                "card_name": "秘密出土",
                "card_text": "如果你的塔在本回合受到伤害，战斗阶段后抽一张牌。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10149.bbf94f94ccb16527e189f082bcedc5cd11850632.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10149_large_schinese.5cbaed8ece62274ca122849701346124685919cd.png",
                "ingame_image": {},
                "illustrator": "David Palumbo",
                "rarity": "Rare",
                "is_green": true,
                "mana_cost": 3,
                "item_def": 110149,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10150,
                "base_card_id": 10150,
                "card_type": "Improvement",
                "card_name": "诈者之路",
                "card_text": "打出一张<span style='font-weight:bold;color:#736e80;'>黑色卡牌</span>后，修改一个随机友方单位，使其+1攻城。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10150.aeefba4a2970c07ecae7ceda1605b31a15168861.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10150_large_schinese.f9faff050a130ee01d6c96ffa0b1585886c045bd.png",
                "ingame_image": {},
                "illustrator": "Alayna Danner",
                "rarity": "Rare",
                "is_black": true,
                "mana_cost": 3,
                "item_def": 110150,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10151,
                "base_card_id": 10151,
                "card_type": "Improvement",
                "card_name": "智者之路",
                "card_text": "打出一张<span style='font-weight:bold;color:#2f7492;'>蓝色卡牌</span>后，对一个随机敌人造成1透甲伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10151.2cc1239701efc31137db12cee1f65924331232fa.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10151_large_schinese.9403dca686a029cc7b30b39f3ddaad4045cb7865.png",
                "ingame_image": {},
                "illustrator": "Alayna Danner",
                "rarity": "Rare",
                "is_blue": true,
                "mana_cost": 3,
                "item_def": 110151,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10152,
                "base_card_id": 10152,
                "card_type": "Improvement",
                "card_name": "梦者之路",
                "card_text": "打出一张<span style='font-weight:bold;color:#479036;'>绿色卡牌</span>后，你的塔+3恢复，直至回合结束为止。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10152.5e65e0eeeefc61c563628e89ff8bee9913a8d6f0.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10152_large_schinese.7bbb45e5fbb3d7419975258c1c034c04c28b492d.png",
                "ingame_image": {},
                "illustrator": "Alayna Danner",
                "rarity": "Rare",
                "is_green": true,
                "mana_cost": 3,
                "item_def": 110152,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10153,
                "base_card_id": 10153,
                "card_type": "Improvement",
                "card_name": "勇者之路",
                "card_text": "打出一张<span style='font-weight:bold;color:#c2352d;'>红色卡牌</span>后，修改一个随机友方单位，使其+1攻击。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10153.9134dc9491ea616436b46385f74f23760a0c0a02.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10153_large_schinese.5e1be6598d72c9862558e2322dd011315ba9014c.png",
                "ingame_image": {},
                "illustrator": "Alayna Danner",
                "rarity": "Rare",
                "is_red": true,
                "mana_cost": 3,
                "item_def": 110153,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10154,
                "base_card_id": 10154,
                "card_type": "Improvement",
                "card_name": "泰勒庄园",
                "card_text": "双方的塔-2魔力。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10154.7b32da3636a800fa11fa654406efabf72fc0691a.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10154_large_schinese.5c6cfa6460eda3556e23d2da4b3e01d9399d2f36.png",
                "ingame_image": {},
                "illustrator": "Dimitar Marinski",
                "rarity": "Uncommon",
                "is_black": true,
                "mana_cost": 4,
                "item_def": 110154,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10155,
                "base_card_id": 10155,
                "card_type": "Improvement",
                "card_name": "地主优势",
                "card_text": "行动阶段前，在本回合缴械一个随机敌人。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10155.e35ee486f15a76582a433bf4b8fe1128707485b6.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10155_large_schinese.2bc9517859dec23eef5b54e9873cd343b08cb2cc.png",
                "ingame_image": {},
                "illustrator": "Jason Kang",
                "rarity": "Uncommon",
                "is_green": true,
                "mana_cost": 4,
                "item_def": 110155,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10156,
                "base_card_id": 10156,
                "card_type": "Improvement",
                "card_name": "夙敌",
                "card_text": "战斗阶段后，从夙敌移除1能量。行动阶段前，如果夙敌的能量为零，则对双方塔造成6伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10156.c3cfea6136ffc347bb0e1c7090f34c34ba7d2272.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10156_large_schinese.024bd92a4e14f75976816c30e839b84ffc18e439.png",
                "ingame_image": {},
                "illustrator": "Lius Lasahido",
                "rarity": "Rare",
                "is_black": true,
                "mana_cost": 2,
                "charges": 3,
                "item_def": 110156,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10157,
                "base_card_id": 10157,
                "card_type": "Improvement",
                "card_name": "烈焰",
                "card_text": "行动阶段前，对每个敌人造成2伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10157.1d1b25f8f8c06bde880de95e314a126fc12f1ed0.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10157_large_schinese.c68f3b8957873b24c01ff0e0e5e97f6cb085d9d3.png",
                "ingame_image": {},
                "illustrator": "Lius Lasahido",
                "rarity": "Rare",
                "is_blue": true,
                "mana_cost": 5,
                "item_def": 110157,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10160,
                "base_card_id": 10160,
                "card_type": "Improvement",
                "card_name": "引燃",
                "card_text": "行动阶段前，对每个敌人造成1透甲伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10160.eb191e94eba28f9ee0bfb5654730d65cf30161f9.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10160_large_schinese.0a2a3a6f42abae85ac8fbd083027afe2837ff772.png",
                "ingame_image": {},
                "illustrator": "Randy Vargas",
                "is_blue": true,
                "mana_cost": 3,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10161,
                "base_card_id": 10161,
                "card_type": "Improvement",
                "card_name": "投石机",
                "card_text": "行动阶段前，对敌方塔造成2透甲伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10161.3faba98804eda9fb4b5ec47c849e42a50488dae7.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10161_large_schinese.2126231c03197c49559796ebc52a59181b10e088.png",
                "ingame_image": {},
                "illustrator": "Suzanne Helmigh",
                "rarity": "Common",
                "is_black": true,
                "mana_cost": 1,
                "item_def": 110161,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10162,
                "base_card_id": 10162,
                "card_type": "Improvement",
                "card_name": "无人监控的火炮",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>主动1：</span>对敌方塔造成4透甲伤害。只能在没有未受阻挡的敌人时使用。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10162.288597f89a2633883293ac26b13993572a0584d4.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10162_large_schinese.94cff35e9a44769580431bea9e71741be555b8e9.png",
                "ingame_image": {},
                "illustrator": "Forrest Imel",
                "rarity": "Uncommon",
                "is_black": true,
                "mana_cost": 2,
                "item_def": 110162,
                "is_crosslane": true,
                "references": [
                    {
                        "card_id": 10462,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10462,
                "base_card_id": 10462,
                "card_type": "Ability",
                "card_name": "无人火炮",
                "card_text": "对敌方塔造成4透甲伤害。只能在没有未受阻挡的敌人时使用。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10164,
                "base_card_id": 10164,
                "card_type": "Improvement",
                "card_name": "瑞文泰尔的资产",
                "card_text": "战斗阶段后，为瑞文泰尔的资产增加1能量。<BR/>\n<BR/>\n<span style='font-weight:bold;color:#ffffff;'>主动1：</span>每有1能量，获得4金钱。惩处瑞文泰尔的资产。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10164.6167f3647ec77bb58f7f33813b976dbb4603d49e.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10164_large_schinese.559a5a615ad1fea63d9d414a3778aec000f796da.png",
                "ingame_image": {},
                "illustrator": "Jason Kang",
                "rarity": "Rare",
                "is_black": true,
                "mana_cost": 3,
                "item_def": 110164,
                "is_crosslane": true,
                "references": [
                    {
                        "card_id": 10463,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10463,
                "base_card_id": 10463,
                "card_type": "Ability",
                "card_name": "瑞文泰尔的资产",
                "card_text": "每有1能量，获得4金钱。惩处瑞文泰尔的资产。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10165,
                "base_card_id": 10165,
                "card_type": "Improvement",
                "card_name": "铁雾金矿",
                "card_text": "战斗阶段后，获得3金钱。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10165.26c0f0a3a335f1ce78c8fcd8ee48f59c3bff8b0a.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10165_large_schinese.98d22da79ce7a007cc746abeb9991d18f161e3e5.png",
                "ingame_image": {},
                "illustrator": "James Paick",
                "rarity": "Common",
                "is_black": true,
                "mana_cost": 3,
                "item_def": 110165,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10168,
                "base_card_id": 10168,
                "card_type": "Improvement",
                "card_name": "赛莉蒙妮的眷顾",
                "card_text": "你的塔+2魔力。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10168.f3dd30975a7d163d56d3282c751f1219619285c6.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10168_large_schinese.adcb2ab5775d7147d645266a985eceba012dcf30.png",
                "ingame_image": {},
                "illustrator": "Tenaya Sims",
                "rarity": "Common",
                "is_green": true,
                "mana_cost": 4,
                "item_def": 110168,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10169,
                "base_card_id": 10169,
                "card_type": "Improvement",
                "card_name": "魔霭迷雾",
                "card_text": "行动阶段前，修改友方单位，使其+1攻击。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10169.7ccc2c69db0565e9eb9460d865801c021cba0639.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10169_large_schinese.3da1899960c7d16712dc9a878b40032006fa3861.png",
                "ingame_image": {},
                "illustrator": "Joseph Meehan",
                "rarity": "Uncommon",
                "is_green": true,
                "mana_cost": 3,
                "item_def": 110169,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10170,
                "base_card_id": 10170,
                "card_type": "Improvement",
                "card_name": "癫狂之月祭坛",
                "card_text": "友方<span style='font-weight:bold;color:#ffffff;'>近战小兵</span>+2恢复。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10170.651ec2a56cfbd2f33d13d03d4049b049e261c99e.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10170_large_schinese.0faf47470255baff183f677090ee5e01866fa006.png",
                "ingame_image": {},
                "illustrator": "Dimitar Marinski",
                "rarity": "Uncommon",
                "is_green": true,
                "mana_cost": 4,
                "item_def": 110170,
                "is_crosslane": true,
                "references": [
                    {
                        "card_id": 1006,
                        "ref_type": "references"
                    }
                ]
            },
            {
                "card_id": 10171,
                "base_card_id": 10171,
                "card_type": "Improvement",
                "card_name": "咆哮意志",
                "card_text": "你和对手每回合多抽一张牌。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10171.0583b3acc578ab0408d91f81a43f4a3b22b2398c.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10171_large_schinese.a79028aef843a833a22dd9cc6203daaa3a2c9370.png",
                "ingame_image": {},
                "illustrator": "James Paick",
                "rarity": "Uncommon",
                "is_blue": true,
                "mana_cost": 3,
                "item_def": 110171,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10172,
                "base_card_id": 10172,
                "card_type": "Improvement",
                "card_name": "战争神殿",
                "card_text": "所有装备物品的英雄+2攻击和+1护甲。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10172.2e0804937231a21e3250ca8ef8abfa3bbddb6e69.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10172_large_schinese.066d5b2d14a9fd2f5f985973018bb7dfb68aa52a.png",
                "ingame_image": {},
                "illustrator": "Titus Lunter",
                "rarity": "Uncommon",
                "is_red": true,
                "mana_cost": 3,
                "item_def": 110172,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10173,
                "base_card_id": 10173,
                "card_type": "Improvement",
                "card_name": "幽冥守卫",
                "card_text": "对手打出一张法术后，对敌方塔造成3伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10173.033b5a290f528f65c2651afb26fe3fb3856b6e26.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10173_large_schinese.5896507fdcee7ce4f63f34cdcced7c9a9db219bb.png",
                "ingame_image": {},
                "illustrator": "Randy Vargas",
                "is_red": true,
                "mana_cost": 4,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10174,
                "base_card_id": 10174,
                "card_type": "Improvement",
                "card_name": "滚烫火油",
                "card_text": "你的塔+2反伤。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10174.1ea57f0ee236525a0b66baa511c05aa50c098237.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10174_large_schinese.2b929e12bdc6d2489ddac3ab100ee10da1c1fea2.png",
                "ingame_image": {},
                "illustrator": "Daarken",
                "rarity": "Uncommon",
                "is_red": true,
                "mana_cost": 1,
                "item_def": 110174,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10175,
                "base_card_id": 10175,
                "card_type": "Improvement",
                "card_name": "阿哈利姆圣所",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>主动1：</span>使你的塔恢复全部魔力。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10175.d8b5b5c552b50b34e52b9e36ec12653fb3759518.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10175_large_schinese.bbbf49117d110f205978d7b3b2db9dd53e667626.png",
                "ingame_image": {},
                "illustrator": "Lake Hurwitz",
                "rarity": "Uncommon",
                "is_blue": true,
                "mana_cost": 4,
                "item_def": 110175,
                "is_crosslane": true,
                "references": [
                    {
                        "card_id": 10464,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10464,
                "base_card_id": 10464,
                "card_type": "Ability",
                "card_name": "阿哈利姆圣所",
                "card_text": "使你的塔恢复全部魔力。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10542,
                "base_card_id": 10542,
                "card_type": "Ability",
                "card_name": "萨特魔术师",
                "card_text": "使你的塔恢复全部魔力。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10176,
                "base_card_id": 10176,
                "card_type": "Improvement",
                "card_name": "脱逃路线",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>主动1：</span>将一名友方英雄召回泉水。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10176.8eb2c4ea8e13025b903db5566f753c70d70f0b9e.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10176_large_schinese.a0ef8897162d5c9fbbc653e20c52de492f949208.png",
                "ingame_image": {},
                "illustrator": "Bayard Wu",
                "rarity": "Rare",
                "is_black": true,
                "mana_cost": 1,
                "item_def": 110176,
                "is_crosslane": true,
                "references": [
                    {
                        "card_id": 10465,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10465,
                "base_card_id": 10465,
                "card_type": "Ability",
                "card_name": "脱逃路线",
                "card_text": "将一名友方英雄召回泉水。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10177,
                "base_card_id": 10177,
                "card_type": "Improvement",
                "card_name": "攻城梯",
                "card_text": "友方单位攻击塔时，造成+2伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10177.0a720140de825b8f17709022f7b2e2c7ec1b5310.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10177_large_schinese.5142295c36b5b944346c83af1db77db08b74bf6b.png",
                "ingame_image": {},
                "illustrator": "Tyler Jacobson",
                "is_black": true,
                "mana_cost": 3,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10178,
                "base_card_id": 10178,
                "card_type": "Improvement",
                "card_name": "大乱斗",
                "card_text": "如果此兵线上有一名<span style='font-weight:bold;color:#c2352d;'>友方红色英雄</span>，所有英雄+2顺势。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10178.76e0bb2818ea1e9662bc500059ce88461dad620a.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10178_large_schinese.774761061b6e80226cd2b1fad42161d371b8dacb.png",
                "ingame_image": {},
                "illustrator": "JiHun Lee",
                "rarity": "Rare",
                "is_red": true,
                "mana_cost": 3,
                "item_def": 110178,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10179,
                "base_card_id": 10179,
                "card_type": "Improvement",
                "card_name": "铜墙铁壁",
                "card_text": "你的塔+1护甲。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10179.0d10fd377b4169a61fb00c1288ca3b870d225dca.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10179_large_schinese.2a3e711fdc019c39cfa4121632a598566434768d.png",
                "ingame_image": {},
                "illustrator": "Lius Lasahido",
                "is_red": true,
                "mana_cost": 4,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10180,
                "base_card_id": 10180,
                "card_type": "Improvement",
                "card_name": "信使之巢",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>主动1：</span>选择一个友方单位，为其选择一个战斗目标。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10180.2474743c462a0d97066e3a9e157c3a825c80784d.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10180_large_schinese.b5a0063746687d907a175d9c6ea2216c771483f0.png",
                "ingame_image": {},
                "illustrator": "Forrest Imel",
                "rarity": "Common",
                "is_blue": true,
                "mana_cost": 1,
                "item_def": 110180,
                "is_crosslane": true,
                "references": [
                    {
                        "card_id": 10466,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10466,
                "base_card_id": 10466,
                "card_type": "Ability",
                "card_name": "信使之巢",
                "card_text": "选择一个友方单位，为其选择一个战斗目标。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10181,
                "base_card_id": 10181,
                "card_type": "Improvement",
                "card_name": "命不该绝",
                "card_text": "如果此兵线上有一名<span style='font-weight:bold;color:#479036;'>友方绿色英雄</span>，友方单位即将死亡时，有50%几率以1生命幸存。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10181.00a134b9e56988aa8991b81f31a12b0f0470bada.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10181_large_schinese.1f822256a8cdd4f05a92643f23093b8db0b42a67.png",
                "ingame_image": {},
                "illustrator": "Daarken",
                "rarity": "Rare",
                "is_green": true,
                "mana_cost": 5,
                "item_def": 110181,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10182,
                "base_card_id": 10182,
                "card_type": "Improvement",
                "card_name": "誓约",
                "card_text": "当此兵线为活跃兵线时，无法打出法术或小兵。如果此兵线上有一名<span style='font-weight:bold;color:#736e80;'>友方黑色英雄</span>，友方单位+4攻击。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10182.dc50045772db55b6723733bdab86af792da657af.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10182_large_schinese.b651d9e9476ea4f43ef89ed004698859d8e511af.png",
                "ingame_image": {},
                "illustrator": "Daarken",
                "rarity": "Rare",
                "is_black": true,
                "mana_cost": 3,
                "item_def": 110182,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10183,
                "base_card_id": 10183,
                "card_type": "Improvement",
                "card_name": "欧梅克斯竞技场",
                "card_text": "当一名英雄死亡后，抽一张牌。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10183.47c7b564afe5ec9118fa682945b835523f0d425a.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10183_large_schinese.1bda8ef31ae29b1246a2d1f5021616b5ab101a30.png",
                "ingame_image": {},
                "illustrator": "Dimitar Marinski",
                "rarity": "Uncommon",
                "is_red": true,
                "mana_cost": 6,
                "item_def": 110183,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10184,
                "base_card_id": 10184,
                "card_type": "Improvement",
                "card_name": "基恩炮塔",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>主动1：</span>对一个单位造成2透甲伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10184.fe19482732ea5279922b61a394d590895e1b0abb.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10184_large_schinese.474bc2e13398a6ceeeac18ca0ae16c092e5a80a8.png",
                "ingame_image": {},
                "illustrator": "Robbie Trevino",
                "rarity": "Uncommon",
                "is_black": true,
                "mana_cost": 4,
                "item_def": 110184,
                "is_crosslane": true,
                "references": [
                    {
                        "card_id": 10467,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10467,
                "base_card_id": 10467,
                "card_type": "Ability",
                "card_name": "基恩炮塔",
                "card_text": "对一个单位造成2透甲伤害。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10185,
                "base_card_id": 10185,
                "card_type": "Improvement",
                "card_name": "蒸汽大炮",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>主动1：</span>对任意兵线上的一个单位造成4透甲伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10185.472ba2e6c5591a6267717f595107b8211a032a36.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10185_large_schinese.f0976749bd76100680888538a3e09cacf260c4ce.png",
                "ingame_image": {},
                "illustrator": "Lake Hurwitz",
                "rarity": "Rare",
                "is_black": true,
                "mana_cost": 7,
                "item_def": 110185,
                "is_crosslane": true,
                "references": [
                    {
                        "card_id": 10468,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10468,
                "base_card_id": 10468,
                "card_type": "Ability",
                "card_name": "蒸汽大炮",
                "card_text": "对任意兵线上的一个单位造成4透甲伤害。",
                "mini_image": {},
                "ingame_image": {},
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10187,
                "base_card_id": 10187,
                "card_type": "Improvement",
                "card_name": "困惑符文",
                "card_text": "当任何一个单位进入此兵线时，在本回合使其晕眩。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10187.500d3d2a6e5bd67ff268725dc6514a7c173d4491.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10187_large_schinese.1dc307a64d2cb8c2cc43a557d5eec4bbbac52347.png",
                "ingame_image": {},
                "illustrator": "Stepan Alekseev",
                "rarity": "Rare",
                "is_blue": true,
                "mana_cost": 6,
                "item_def": 110187,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10192,
                "base_card_id": 10192,
                "card_type": "Spell",
                "card_name": "鲁姆斯克的祝福",
                "card_text": "选择一条兵线，修改此兵线上的友方单位，使其+3生命。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10192.bc945ea1b11aaa28249315e0b7d983da51b86c58.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10192_large_schinese.638a311f557a0e6f50e6547bfdbd6851654e581d.png",
                "ingame_image": {},
                "illustrator": "John Stanko",
                "rarity": "Common",
                "is_green": true,
                "mana_cost": 3,
                "item_def": 110192,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10193,
                "base_card_id": 10193,
                "card_type": "Improvement",
                "card_name": "青翠庇护",
                "card_text": "友方单位+1护甲。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10193.5b5d08dc9f99733a351ffcb4f17b85851c48195c.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10193_large_schinese.e1807b5adbfa74d6982a4c5539e76b75da587db8.png",
                "ingame_image": {},
                "illustrator": "Chris Rallis",
                "is_green": true,
                "mana_cost": 5,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10194,
                "base_card_id": 10194,
                "card_type": "Improvement",
                "card_name": "瞭望塔",
                "card_text": "当一个敌方强化进入此兵线时，抽一张牌。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10194.2dda1255debe8bbdcd3416882c9da337c6c4de5e.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10194_large_schinese.6be963c6cca91f23aa10f7bb22f63ca8eb77105e.png",
                "ingame_image": {},
                "illustrator": "Forrest Imel",
                "rarity": "Rare",
                "is_blue": true,
                "mana_cost": 1,
                "item_def": 110194,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10202,
                "base_card_id": 10202,
                "card_type": "Item",
                "card_name": "刺客面纱",
                "card_text": "装备此物品的英雄+4生命 。<BR/>\n<BR/>\n<span style='font-weight:bold;color:#ffffff;'>主动2：</span>为装备此物品的英雄选择一个战斗目标。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10202.291985bec629c14acaecdf928006e962df7c435a.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10202_large_schinese.32e3a5e7e8d8c95f2407a2e35be2dccc8cd30144.png",
                "ingame_image": {},
                "illustrator": "Pauline Voss",
                "rarity": "Uncommon",
                "sub_type": "Accessory",
                "gold_cost": 6,
                "item_def": 110202,
                "references": [
                    {
                        "card_id": 10469,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10469,
                "base_card_id": 10469,
                "card_type": "Ability",
                "card_name": "刺客面纱",
                "card_text": "为装备此物品的英雄选择一个战斗目标。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10203,
                "base_card_id": 10203,
                "card_type": "Item",
                "card_name": "相位鞋",
                "card_text": "装备此物品的英雄+4生命 。<BR/>\n<BR/>\n<span style='font-weight:bold;color:#ffffff;'>主动2：</span>将装备此物品的英雄与另一个友方单位互换位置。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10203.d2a4fa3d2d7e42fd4af22b3f0b622ef53648f728.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10203_large_schinese.4e5ac2629b30bfb239f834b56ba382672c6af161.png",
                "ingame_image": {},
                "illustrator": "Pauline Voss",
                "rarity": "Uncommon",
                "sub_type": "Accessory",
                "gold_cost": 6,
                "item_def": 110203,
                "references": [
                    {
                        "card_id": 10470,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10470,
                "base_card_id": 10470,
                "card_type": "Ability",
                "card_name": "相位鞋",
                "card_text": "将装备此物品的英雄与另一个友方单位互换位置。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10205,
                "base_card_id": 10205,
                "card_type": "Item",
                "card_name": "石堂城斗篷",
                "card_text": "装备此物品的英雄+4生命 。战斗阶段后修改石堂城斗篷，使其获得“装备此物品的英雄+2生命”。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10205.e2a2c7f9df70397d4b378457985419a4f7df5a69.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10205_large_schinese.9cc54dd06b34b753aeae9f0ebb9f9c3669d0b2de.png",
                "ingame_image": {},
                "illustrator": "Suzanne Helmigh",
                "rarity": "Common",
                "sub_type": "Accessory",
                "gold_cost": 5,
                "item_def": 110205,
                "references": []
            },
            {
                "card_id": 10206,
                "base_card_id": 10206,
                "card_type": "Item",
                "card_name": "闪烁匕首",
                "card_text": "装备此物品的英雄+2攻击。<BR/>\n<BR/>\n<span style='font-weight:bold;color:#ffffff;'>主动2：</span>将装备此物品的英雄移至另一条兵线。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10206.aea7821beb6e2e965819b3994b032d320b13bac3.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10206_large_schinese.09a163454ef877831c64d4665c9ca96397d05cc4.png",
                "ingame_image": {},
                "illustrator": "Pauline Voss",
                "rarity": "Uncommon",
                "sub_type": "Weapon",
                "gold_cost": 7,
                "item_def": 110206,
                "references": [
                    {
                        "card_id": 10471,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10471,
                "base_card_id": 10471,
                "card_type": "Ability",
                "card_name": "闪烁匕首",
                "card_text": "将装备此物品的英雄移至另一条兵线。",
                "mini_image": {},
                "ingame_image": {},
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10207,
                "base_card_id": 10207,
                "card_type": "Item",
                "card_name": "瑞文泰尔印戒",
                "card_text": "装备此物品的英雄+4生命和-3赏金。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10207.668577de189f906ce644ef0c057528303c0ac5c1.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10207_large_schinese.a86cf39c2ef72063d560c3fd0b07fcca75a01f3a.png",
                "ingame_image": {},
                "illustrator": "JiHun Lee",
                "rarity": "Uncommon",
                "sub_type": "Accessory",
                "gold_cost": 4,
                "item_def": 110207,
                "references": []
            },
            {
                "card_id": 10208,
                "base_card_id": 10208,
                "card_type": "Item",
                "card_name": "倒刺链甲",
                "card_text": "装备此物品的英雄+1护甲和+2反伤。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10208.7eeaafba7b5d9ac55c04063e7356282062f25bf1.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10208_large_schinese.7fd3ebac7694f8f6b4c1e1b7f7426d53101eef58.png",
                "ingame_image": {},
                "illustrator": "Sam Carr",
                "rarity": "Common",
                "sub_type": "Armor",
                "gold_cost": 6,
                "item_def": 110208,
                "references": []
            },
            {
                "card_id": 10210,
                "base_card_id": 10210,
                "card_type": "Item",
                "card_name": "祛魔之槌",
                "card_text": "装备此物品的英雄+2攻击。<BR/>\n<BR/>\n<span style='font-weight:bold;color:#ffffff;'>主动1：</span>惩处一个随机敌方强化。只能在装备此物品的英雄未受阻挡时使用。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10210.8ea1d8a7f8375f7da86c2d377d045a9b668bc1ea.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10210_large_schinese.5538966498d9b4d2751165e5f014ad84b41417f7.png",
                "ingame_image": {},
                "illustrator": "Lake Hurwitz",
                "rarity": "Uncommon",
                "sub_type": "Weapon",
                "gold_cost": 5,
                "item_def": 110210,
                "references": [
                    {
                        "card_id": 10540,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10540,
                "base_card_id": 10540,
                "card_type": "Ability",
                "card_name": "祛魔之槌",
                "card_text": "惩处一个随机敌方强化。只能在装备此物品的英雄未受阻挡时使用。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10211,
                "base_card_id": 10211,
                "card_type": "Item",
                "card_name": "抹灭法球",
                "card_text": "惩处一个强化。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10211.7e81c4432e3bf53d908acf96887c21b378706d18.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10211_large_schinese.80c1d894eca905ca4fd274338eefbaedb227f0e0.png",
                "ingame_image": {},
                "illustrator": "Forrest Imel",
                "rarity": "Uncommon",
                "sub_type": "Consumable",
                "gold_cost": 10,
                "item_def": 110211,
                "references": []
            },
            {
                "card_id": 10212,
                "base_card_id": 10212,
                "card_type": "Item",
                "card_name": "守夜大剑",
                "card_text": "装备此物品的英雄+2攻击和+2顺势。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10212.17f33568c0cbd5c6b78621ffbded32cdb14a97f7.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10212_large_schinese.1dd224168a7dabcc686df05a409a81bea2a5f4ca.png",
                "ingame_image": {},
                "illustrator": "Sam Carr",
                "rarity": "Common",
                "sub_type": "Weapon",
                "gold_cost": 7,
                "item_def": 110212,
                "references": []
            },
            {
                "card_id": 10213,
                "base_card_id": 10213,
                "card_type": "Item",
                "card_name": "皮袄斗篷",
                "card_text": "装备此物品的英雄+8生命 。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10213.6fcbdc292dafd4fa9ebff40a8640934585673fd8.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10213_large_schinese.01abf5ab848267e1056f6b5dda68eb035ff29da4.png",
                "ingame_image": {},
                "illustrator": "Pauline Voss",
                "rarity": "Common",
                "sub_type": "Accessory",
                "gold_cost": 7,
                "item_def": 110213,
                "references": []
            },
            {
                "card_id": 10214,
                "base_card_id": 10214,
                "card_type": "Item",
                "card_name": "锁子甲",
                "card_text": "装备此物品的英雄+2护甲。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10214.c6af4723fd468e5b8ca4bcabefcd19872b8581c9.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10214_large_schinese.0071b1bdf5a86fb742a3533323932c09f28bb81f.png",
                "ingame_image": {},
                "illustrator": "Pauline Voss",
                "rarity": "Common",
                "sub_type": "Armor",
                "gold_cost": 7,
                "item_def": 110214,
                "references": []
            },
            {
                "card_id": 10215,
                "base_card_id": 10215,
                "card_type": "Item",
                "card_name": "阔剑",
                "card_text": "装备此物品的英雄+4攻击。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10215.f5116cfa6d48236260d81f98022a63535d2bdf24.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10215_large_schinese.0bdd48c32d04d5c7a532a5b8277bc559fafbebff.png",
                "ingame_image": {},
                "illustrator": "Tommy Arnold",
                "rarity": "Common",
                "sub_type": "Weapon",
                "gold_cost": 7,
                "item_def": 110215,
                "references": []
            },
            {
                "card_id": 10216,
                "base_card_id": 10216,
                "card_type": "Item",
                "card_name": "金奖券",
                "card_text": "从神秘商店获得一件随机物品。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10216.eab7439af5f89a4329d5ac5ffa4ebc3850f1b0ff.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10216_large_schinese.1fbeb293192f5379ee46c93095c1c1f8e9c19ec7.png",
                "ingame_image": {},
                "illustrator": "Pauline Voss",
                "rarity": "Uncommon",
                "sub_type": "Consumable",
                "gold_cost": 9,
                "item_def": 110216,
                "references": []
            },
            {
                "card_id": 10217,
                "base_card_id": 10217,
                "card_type": "Item",
                "card_name": "鲁姆斯克法袍",
                "card_text": "装备此物品的英雄+1护甲。<BR/>\n<BR/>\n<span style='font-weight:bold;color:#ffffff;'>主动2：</span>对一个单位进行4治疗。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10217.c351e63021caf227d92bff6f0dc2dfde511a8a5d.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10217_large_schinese.666c58f2319a2a76d27e26ee0b7bf697ebddcf46.png",
                "ingame_image": {},
                "illustrator": "Sara Winters",
                "rarity": "Common",
                "sub_type": "Armor",
                "gold_cost": 9,
                "item_def": 110217,
                "references": [
                    {
                        "card_id": 10473,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10473,
                "base_card_id": 10473,
                "card_type": "Ability",
                "card_name": "鲁姆斯克法袍",
                "card_text": "对一个单位进行4治疗。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10218,
                "base_card_id": 10218,
                "card_type": "Item",
                "card_name": "基恩火枪",
                "card_text": "装备此物品的英雄+2攻击。<BR/>\n<BR/>\n<span style='font-weight:bold;color:#ffffff;'>主动2：</span>对一个单位造成2伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10218.0562cabc3ebcf16a346023cb65696d8b314e6f4c.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10218_large_schinese.2de83c4ce27989b799db108274ed3e2e6d7221b4.png",
                "ingame_image": {},
                "illustrator": "Mobo Boehme",
                "rarity": "Common",
                "sub_type": "Weapon",
                "gold_cost": 7,
                "item_def": 110218,
                "references": [
                    {
                        "card_id": 10474,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10474,
                "base_card_id": 10474,
                "card_type": "Ability",
                "card_name": "基恩火枪",
                "card_text": "对一个单位造成2伤害。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10220,
                "base_card_id": 10220,
                "card_type": "Item",
                "card_name": "恐鳌之戒",
                "card_text": "装备此物品的英雄+4生命和+6恢复。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10220.e4eef11b4d11b1b5ddebc64186167157f01ef9bb.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10220_large_schinese.489c77dd886604012f59d7da34b25681f95a14a1.png",
                "ingame_image": {},
                "illustrator": "Daarken",
                "rarity": "Common",
                "sub_type": "Accessory",
                "gold_cost": 12,
                "item_def": 110220,
                "references": []
            },
            {
                "card_id": 10222,
                "base_card_id": 10222,
                "card_type": "Item",
                "card_name": "牺牲背心",
                "card_text": "装备此物品的英雄+2护甲。<BR/>\n<BR/>\n<span style='font-weight:bold;color:#ffffff;'>主动1：</span>对装备此物品的英雄的敌方近邻造成6伤害，并惩处装备此物品的英雄。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10222.d11548f662d2d292d19cb52f78182020f3fc0a8b.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10222_large_schinese.9e2ea43e12ffff6c2cfaaa6b1dfb12632387546c.png",
                "ingame_image": {},
                "illustrator": "Mark Winters",
                "rarity": "Rare",
                "sub_type": "Armor",
                "gold_cost": 8,
                "item_def": 110222,
                "references": [
                    {
                        "card_id": 10476,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10476,
                "base_card_id": 10476,
                "card_type": "Ability",
                "card_name": "牺牲背心",
                "card_text": "对装备此物品的英雄的敌方近邻造成6伤害，并惩处装备此物品的英雄。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10223,
                "base_card_id": 10223,
                "card_type": "Item",
                "card_name": "红雾巨锤",
                "card_text": "装备此物品的英雄+2攻击和+5攻城。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10223.c7e8dddebdd23c49533f39758578f3a5741a64d9.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10223_large_schinese.5c0aeff0466053d1a47b1602ef6352af74aeff11.png",
                "ingame_image": {},
                "illustrator": "Pauline Voss",
                "rarity": "Common",
                "sub_type": "Weapon",
                "gold_cost": 10,
                "item_def": 110223,
                "references": []
            },
            {
                "card_id": 10224,
                "base_card_id": 10224,
                "card_type": "Item",
                "card_name": "支配头盔",
                "card_text": "装备此物品的英雄+3护甲 。<BR/>\n<BR/>\n<span style='font-weight:bold;color:#ffffff;'>主动2：</span>控制一名敌方小兵。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10224.5342f086b5d82b9b189a2fe8a87363fd8ac08eb8.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10224_large_schinese.6f89e94f67a1be79a541446305854a329bd98cd9.png",
                "ingame_image": {},
                "illustrator": "Chris Welch",
                "rarity": "Uncommon",
                "sub_type": "Armor",
                "gold_cost": 19,
                "item_def": 110224,
                "references": [
                    {
                        "card_id": 10477,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10477,
                "base_card_id": 10477,
                "card_type": "Ability",
                "card_name": "支配头盔",
                "card_text": "控制一名敌方小兵。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10225,
                "base_card_id": 10225,
                "card_type": "Item",
                "card_name": "暴君王袍",
                "card_text": "装备此物品的英雄+3护甲并获得快速部署。你的塔+3护甲。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10225.6626f9c164c5ef3b5e28733d0a5b8782c7863c5f.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10225_large_schinese.7689b02f561166de3460e79eaa32c675196e9193.png",
                "ingame_image": {},
                "illustrator": "Suzanne Helmigh",
                "rarity": "Rare",
                "sub_type": "Armor",
                "gold_cost": 19,
                "item_def": 110225,
                "references": []
            },
            {
                "card_id": 10226,
                "base_card_id": 10226,
                "card_type": "Item",
                "card_name": "折翼之锤",
                "card_text": "装备此物品的英雄+4攻击。<BR/>\n<BR/>\n<span style='font-weight:bold;color:#ffffff;'>主动1：</span>在本回合装备此物品的英雄及其友方近邻+X恢复，X为其攻击的一半。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10226.d6e408d4954c77ca98be49cb2f2f37f2bea1b61e.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10226_large_schinese.2faf6bb12bda213cb56ad169221087e1fd8f8452.png",
                "ingame_image": {},
                "illustrator": "JiHun Lee",
                "rarity": "Rare",
                "sub_type": "Weapon",
                "gold_cost": 19,
                "item_def": 110226,
                "references": [
                    {
                        "card_id": 10478,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10478,
                "base_card_id": 10478,
                "card_type": "Ability",
                "card_name": "折翼之锤",
                "card_text": "在本回合装备此物品的英雄及其友方近邻+X恢复，X为其攻击的一半。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10230,
                "base_card_id": 10230,
                "card_type": "Item",
                "card_name": "瑞斯托纹章",
                "card_text": "装备此物品的英雄+4生命和-2护甲。阻挡装备此物品的英雄的单位-2护甲。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10230.a6e33545f8e4a0872932039811c981eeb39e84d9.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10230_large_schinese.a95cf5fa6f23512d1cbe69a1eda22ac67e8c7459.png",
                "ingame_image": {},
                "illustrator": "Christine Choi",
                "rarity": "Rare",
                "sub_type": "Accessory",
                "gold_cost": 4,
                "item_def": 110230,
                "references": []
            },
            {
                "card_id": 10231,
                "base_card_id": 10231,
                "card_type": "Item",
                "card_name": "戮尽斗篷",
                "card_text": "装备此物品的英雄+8生命 。当装备此物品的英雄的一个友方近邻死亡后，抽一张牌。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10231.2b1a9e7e240ded213fb1139db6c3597e58876016.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10231_large_schinese.0a106d7f3ec18b9a474f247ef64b89c9ef84f95f.png",
                "ingame_image": {},
                "illustrator": "Daarken",
                "rarity": "Rare",
                "sub_type": "Accessory",
                "gold_cost": 13,
                "item_def": 110231,
                "references": []
            },
            {
                "card_id": 10232,
                "base_card_id": 10232,
                "card_type": "Item",
                "card_name": "炽天使护盾",
                "card_text": "装备此物品的英雄+2护甲。所有单位-2攻击。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10232.9fbfded5a831e5f6d4805f6c24fd365aebc98788.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10232_large_schinese.d2fad7401f275c06021e3ac01b5a539dddaf1562.png",
                "ingame_image": {},
                "illustrator": "Magali Villeneuve",
                "rarity": "Rare",
                "sub_type": "Armor",
                "gold_cost": 13,
                "item_def": 110232,
                "references": []
            },
            {
                "card_id": 10234,
                "base_card_id": 10234,
                "card_type": "Item",
                "card_name": "盗猎刀",
                "card_text": "装备此物品的英雄+2攻击。当一名敌方英雄死亡后，获得5金钱。当一名敌方小兵死亡后，获得1金钱。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10234.543e935ef22e2aa22d3d307d600d26958c0c653b.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10234_large_schinese.08de857e226525c363ebcd7b99d391eed0f1620f.png",
                "ingame_image": {},
                "illustrator": "Pauline Voss",
                "rarity": "Rare",
                "sub_type": "Weapon",
                "gold_cost": 8,
                "item_def": 110234,
                "references": []
            },
            {
                "card_id": 10235,
                "base_card_id": 10235,
                "card_type": "Item",
                "card_name": "亡者之书",
                "card_text": "装备此物品的英雄+4生命 。当一名友方<span style='font-weight:bold;color:#ffffff;'>近战小兵</span>死亡后，为亡者之书增加1能量。<BR/>\n<BR/>\n<span style='font-weight:bold;color:#ffffff;'>主动2：</span>每有1能量，就召唤一具<span style='font-weight:bold;color:#ffffff;'>僵尸</span>，并移除所有能量。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10235.4547ba37bddb345f94977ea70806b5d8e5b3df5d.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10235_large_schinese.dbace6b10274d7ed08b31c47a540a670ee57f991.png",
                "ingame_image": {},
                "illustrator": "Pauline Voss",
                "rarity": "Common",
                "sub_type": "Accessory",
                "gold_cost": 10,
                "item_def": 110235,
                "references": [
                    {
                        "card_id": 10480,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10480,
                "base_card_id": 10480,
                "card_type": "Ability",
                "card_name": "亡者之书",
                "card_text": "每有1能量，召唤一具<span style='font-weight:bold;color:#ffffff;'>僵尸</span>，并移除所有能量。",
                "mini_image": {},
                "ingame_image": {},
                "references": [
                    {
                        "card_id": 1009,
                        "ref_type": "references"
                    },
                    {
                        "card_id": 1006,
                        "ref_type": "references"
                    }
                ]
            },
            {
                "card_id": 10236,
                "base_card_id": 10236,
                "card_type": "Item",
                "card_name": "英雄披风",
                "card_text": "装备此物品的英雄+16生命 。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10236.b8720448263fd63e447c8a1799af75f56ac08e2e.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10236_large_schinese.9c3aeb1f851676e2e26c0bd34e50302cc47dbbcc.png",
                "ingame_image": {},
                "illustrator": "Pauline Voss",
                "rarity": "Uncommon",
                "sub_type": "Accessory",
                "gold_cost": 15,
                "item_def": 110236,
                "references": []
            },
            {
                "card_id": 10237,
                "base_card_id": 10237,
                "card_type": "Item",
                "card_name": "板甲",
                "card_text": "装备此物品的英雄+4护甲。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10237.12ee393fbd37d7ad79e775ab6360727362f79617.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10237_large_schinese.14ebfc4642a9a9622a94f47d8a4d72de8bac9bf3.png",
                "ingame_image": {},
                "illustrator": "Sam Carr",
                "rarity": "Uncommon",
                "sub_type": "Armor",
                "gold_cost": 15,
                "item_def": 110237,
                "references": []
            },
            {
                "card_id": 10238,
                "base_card_id": 10238,
                "card_type": "Item",
                "card_name": "大剑",
                "card_text": "装备此物品的英雄+8攻击。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10238.af1c4e6a32483e582ab953d30082941d46ff9266.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10238_large_schinese.e2cf29a1a2b402f95a1507bce2c88d3f6b89072a.png",
                "ingame_image": {},
                "illustrator": "Tommy Arnold",
                "rarity": "Uncommon",
                "sub_type": "Weapon",
                "gold_cost": 15,
                "item_def": 110238,
                "references": []
            },
            {
                "card_id": 10241,
                "base_card_id": 10241,
                "card_type": "Item",
                "card_name": "超维视界沙漏",
                "card_text": "装备此物品的英雄+4生命 。如果装备此物品的英雄在任意兵线上，使对手每次抽取的牌+1锁定。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10241.5403aa618f58f7251802993b710a9f7583d0b786.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10241_large_schinese.28f89599e244ae939111d0875c2ffe8cf583a094.png",
                "ingame_image": {},
                "illustrator": "Magali Villeneuve",
                "rarity": "Uncommon",
                "sub_type": "Accessory",
                "gold_cost": 10,
                "item_def": 110241,
                "references": []
            },
            {
                "card_id": 10242,
                "base_card_id": 10242,
                "card_type": "Item",
                "card_name": "王者之盾",
                "card_text": "装备此物品的英雄+2护甲。装备此物品的英雄的友方近邻+1护甲。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10242.910a5c7b7183d8b641121692feb229fb11a82972.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10242_large_schinese.4fdbe865ad4a4218911390d426eff8079dc3979f.png",
                "ingame_image": {},
                "illustrator": "Pauline Voss",
                "rarity": "Common",
                "sub_type": "Armor",
                "gold_cost": 8,
                "item_def": 110242,
                "references": []
            },
            {
                "card_id": 10243,
                "base_card_id": 10243,
                "card_type": "Item",
                "card_name": "天鹰之盾",
                "card_text": "装备此物品的英雄+2护甲。装备此物品的英雄的友方近邻+3护甲。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10243.63893d91ee681a4b15645343c8b9542ce160698c.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10243_large_schinese.5a13c6ab3c960a7d0344fbdaea181a3415689557.png",
                "ingame_image": {},
                "illustrator": "Anastasia Ovchinnikova",
                "rarity": "Rare",
                "sub_type": "Armor",
                "gold_cost": 10,
                "item_def": 110243,
                "references": []
            },
            {
                "card_id": 10248,
                "base_card_id": 10248,
                "card_type": "Item",
                "card_name": "希瓦的守护",
                "card_text": "装备此物品的英雄+2护甲。<BR/>\n<BR/>\n<span style='font-weight:bold;color:#ffffff;'>主动2：</span>修改一个单位及其友方近邻，使其-2攻击。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10248.2a80ad64c6f1483eed64309e8f0f9588b100065a.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10248_large_schinese.372e49f4ff966c6ca5d3dfd079643f7493c8771b.png",
                "ingame_image": {},
                "illustrator": "Magali Villeneuve",
                "rarity": "Rare",
                "sub_type": "Armor",
                "gold_cost": 16,
                "item_def": 110248,
                "references": [
                    {
                        "card_id": 10481,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10481,
                "base_card_id": 10481,
                "card_type": "Ability",
                "card_name": "希瓦的守护",
                "card_text": "修改一个单位及其友方近邻，使其-2攻击。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10252,
                "base_card_id": 10252,
                "card_type": "Item",
                "card_name": "石堂城长枪",
                "card_text": "装备此物品的英雄+2攻击。战斗阶段后，修改石堂城长枪，使其获得“装备此物品的英雄+1攻击”。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10252.be2238de1794c3424f9ce23d11fbe11f45c652ff.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10252_large_schinese.72057e4b477b17658df6660cd602faca371966fc.png",
                "ingame_image": {},
                "illustrator": "Robbie Trevino",
                "rarity": "Common",
                "sub_type": "Weapon",
                "gold_cost": 6,
                "item_def": 110252,
                "references": []
            },
            {
                "card_id": 10253,
                "base_card_id": 10253,
                "card_type": "Item",
                "card_name": "石堂城板甲",
                "card_text": "装备此物品的英雄+1护甲。战斗阶段后，修改石堂城板甲，使其获得“装备此物品的英雄+1护甲”。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10253.6701aa5baec9a8196db6c5a4f4679dd18462954e.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10253_large_schinese.6897a8e0741149c995c2b8ab9ce6918b97ce87d1.png",
                "ingame_image": {},
                "illustrator": "Pauline Voss",
                "rarity": "Common",
                "sub_type": "Armor",
                "gold_cost": 6,
                "item_def": 110253,
                "references": []
            },
            {
                "card_id": 10255,
                "base_card_id": 10255,
                "card_type": "Item",
                "card_name": "商店契约",
                "card_text": "你的神秘商店中每件物品的价格降低X，X为其基础价格。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10255.7eb65eec608ac46cb8171222bae12fdcb8f0e6c2.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10255_large_schinese.8397d3e93307b17207f8376779a2222e2b80b823.png",
                "ingame_image": {},
                "illustrator": "Lius Lasahido",
                "rarity": "Rare",
                "sub_type": "Deed",
                "gold_cost": 22,
                "item_def": 110255,
                "references": []
            },
            {
                "card_id": 10256,
                "base_card_id": 10256,
                "card_type": "Item",
                "card_name": "碧玉匕首",
                "card_text": "装备此物品的英雄+2攻击和获得透甲。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10256.943fe541b9635df2e0cbc75d600d6b6fcb8c1155.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10256_large_schinese.f371b9632cba30b6d18801bc2df29b8d3b1d1a32.png",
                "ingame_image": {},
                "illustrator": "Pauline Voss",
                "rarity": "Uncommon",
                "sub_type": "Weapon",
                "gold_cost": 7,
                "item_def": 110256,
                "references": []
            },
            {
                "card_id": 10259,
                "base_card_id": 10259,
                "card_type": "Item",
                "card_name": "基恩板甲",
                "card_text": "装备此物品的英雄+1护甲。装备此物品的英雄每有一个攻击者，便+1护甲。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10259.5edb9bb7ca2ef69ebc7a1a32f10a88627b19e885.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10259_large_schinese.fe9de8af534f6e0efda58cf8df9444b087833145.png",
                "ingame_image": {},
                "illustrator": "James Paick",
                "rarity": "Uncommon",
                "sub_type": "Armor",
                "gold_cost": 8,
                "item_def": 110259,
                "references": []
            },
            {
                "card_id": 10260,
                "base_card_id": 10260,
                "card_type": "Item",
                "card_name": "领袖号角",
                "card_text": "装备此物品的英雄+4 生命 。<BR/>\n<BR/>\n<span style='font-weight:bold;color:#ffffff;'>主动2：</span>召唤一个<span style='font-weight:bold;color:#ffffff;'>雷肤兽群</span>。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10260.f008a86ce8c33d887fd22ece50a3ac0432f18652.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10260_large_schinese.b692d3ce7f1ece600384115c86d9a2f6570a7e78.png",
                "ingame_image": {},
                "illustrator": "Anastasia Ovchinnikova",
                "rarity": "Rare",
                "sub_type": "Accessory",
                "gold_cost": 25,
                "item_def": 110260,
                "references": [
                    {
                        "card_id": 10483,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10483,
                "base_card_id": 10483,
                "card_type": "Ability",
                "card_name": "领袖号角",
                "card_text": "召唤一个<span style='font-weight:bold;color:#ffffff;'>雷肤兽群</span>。",
                "mini_image": {},
                "ingame_image": {},
                "references": [
                    {
                        "card_id": 10102,
                        "ref_type": "references"
                    }
                ]
            },
            {
                "card_id": 10262,
                "base_card_id": 10262,
                "card_type": "Item",
                "card_name": "妮塔莎的守护",
                "card_text": "装备此物品的英雄+1护甲。<BR/>\n<BR/>\n<span style='font-weight:bold;color:#ffffff;'>主动1：</span>将装备此物品的英雄的敌方近邻移至其他随机兵线。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10262.7c69c4de1d9da8c6c35373440d051421df3a06aa.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10262_large_schinese.b72c6d71ac54390330b300af33e979d577629c51.png",
                "ingame_image": {},
                "illustrator": "Forrest Imel",
                "rarity": "Rare",
                "sub_type": "Armor",
                "gold_cost": 25,
                "item_def": 110262,
                "references": [
                    {
                        "card_id": 10484,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10484,
                "base_card_id": 10484,
                "card_type": "Ability",
                "card_name": "妮塔莎的守护",
                "card_text": "将装备此物品的英雄的敌方近邻移至其他随机兵线。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10263,
                "base_card_id": 10263,
                "card_type": "Item",
                "card_name": "封神之刃",
                "card_text": "装备此物品的英雄+8攻击和+4攻城。惩处受到装备此物品的英雄战斗伤害的所有单位。<BR/>\n<BR/>\n<span style='font-weight:bold;color:#ffffff;'>主动1：</span>惩处敌方强化。惩处阻挡装备此物品的英雄的单位所装备的所有物品。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10263.72384252a5de0a86182aa952059a907880d8eef0.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10263_large_schinese.66ebe98810576a21cab1f7c824de3610cfd50763.png",
                "ingame_image": {},
                "illustrator": "Kieran Yanner",
                "rarity": "Rare",
                "sub_type": "Weapon",
                "gold_cost": 25,
                "item_def": 110263,
                "references": [
                    {
                        "card_id": 10541,
                        "ref_type": "active_ability"
                    }
                ]
            },
            {
                "card_id": 10541,
                "base_card_id": 10541,
                "card_type": "Ability",
                "card_name": "封神之刃",
                "card_text": "惩处敌方强化。惩处阻挡装备此物品的英雄的单位所装备的所有物品。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10142,
                "base_card_id": 10142,
                "card_type": "Spell",
                "card_name": "腐蚀迷雾",
                "card_text": "惩处所有已装备的物品。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10142.5f9643f56d886b272fc5af8fa3f6d58fc01cd5b2.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10142_large_schinese.64b2704352278510eba1ecb99310c78954af3e7a.png",
                "ingame_image": {},
                "illustrator": "Magali Villeneuve",
                "rarity": "Rare",
                "is_green": true,
                "mana_cost": 5,
                "item_def": 110142,
                "references": []
            },
            {
                "card_id": 10191,
                "base_card_id": 10191,
                "card_type": "Spell",
                "card_name": "一败涂地",
                "card_text": "修改在泉水的敌方英雄，使其-X攻击，X为其攻击的一半。修改敌方英雄，使其获得“你的塔-1魔力”。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10191.a8e63eabc2b13dc8368045564cd5ee524e22d57f.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10191_large_schinese.5485a8cf1d08e3d9496dccf914225797a287114d.png",
                "ingame_image": {},
                "illustrator": "Robert Simon",
                "rarity": "Rare",
                "is_red": true,
                "mana_cost": 6,
                "item_def": 110191,
                "references": []
            },
            {
                "card_id": 10196,
                "base_card_id": 10196,
                "card_type": "Spell",
                "card_name": "…我也来一个",
                "card_text": "选择一个英雄，将该英雄装备的一件随机物品的基础副本加入你的手牌。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10196.18d3d793e3ee07f5d0dbd0ed2be0bfdda1853b64.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10196_large_schinese.9a1c2e81f4fd0654de6e794ea5c2c4318f496374.png",
                "ingame_image": {},
                "illustrator": "Randy Vargas",
                "rarity": "Uncommon",
                "is_blue": true,
                "mana_cost": 4,
                "item_def": 110196,
                "references": []
            },
            {
                "card_id": 10198,
                "base_card_id": 10198,
                "card_type": "Spell",
                "card_name": "奔腾风暴",
                "card_text": "对所有兵线上的所有塔造成2伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10198.02643bccc4a7958def9ae3a9933dfd917bb75d3c.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10198_large_schinese.c54528dbf88ffcf3e697e5a5065043dfb5b85105.png",
                "ingame_image": {},
                "illustrator": "Daarken",
                "rarity": "Uncommon",
                "is_blue": true,
                "mana_cost": 3,
                "item_def": 110198,
                "references": []
            },
            {
                "card_id": 10267,
                "base_card_id": 10267,
                "card_type": "Spell",
                "card_name": "星体禁锢",
                "card_text": "在本回合晕眩一个单位，并使该单位在本回合获得伤害免疫。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10267.f221646cae086ecea571669062b0ad08b0cc7a56.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10267_large_schinese.770cf2e07d1633d4402e88426107d816bcf1cf2b.png",
                "ingame_image": {},
                "illustrator": "Joseph Meehan",
                "is_blue": true,
                "mana_cost": 4,
                "references": []
            },
            {
                "card_id": 10268,
                "base_card_id": 10268,
                "card_type": "Spell",
                "card_name": "磁石爆破",
                "card_text": "对敌方塔造成伤害，数值为敌人护甲的总和。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10268.1630e864ecbc70e5ea6998dc394ce562e97cff3f.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10268_large_schinese.25b16f95c225579b00b6ad584a8b3a751b82e397.png",
                "ingame_image": {},
                "illustrator": "Darek Zabrocki",
                "rarity": "Uncommon",
                "is_black": true,
                "mana_cost": 3,
                "item_def": 110268,
                "references": []
            },
            {
                "card_id": 10270,
                "base_card_id": 10270,
                "card_type": "Spell",
                "card_name": "擦肩之矢",
                "card_text": "对任意兵线上的一个单位造成2伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10270.cb6b13cf05b3031d1afcd38421452f81478734bf.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10270_large_schinese.85612501944bb9a063035432714a98c51d9bcb96.png",
                "ingame_image": {},
                "illustrator": "Kieran Yanner",
                "rarity": "Common",
                "is_black": true,
                "mana_cost": 1,
                "item_def": 110270,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10272,
                "base_card_id": 10272,
                "card_type": "Spell",
                "card_name": "暗杀",
                "card_text": "对任意兵线上的一个单位造成10透甲伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10272.5ce226b5830a6e8842cc5cbbf1fe74d078c211f4.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10272_large_schinese.ee3396e69c93e50fb48754e0f1c597ea371ad833.png",
                "ingame_image": {},
                "illustrator": "Forrest Imel",
                "is_black": true,
                "mana_cost": 7,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10273,
                "base_card_id": 10273,
                "card_type": "Spell",
                "card_name": "腰射",
                "card_text": "对一个单位造成4伤害。<br><br><span style='font-weight:bold;color:#ffffff;'>获得先手。</span>",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10273.e136bc0cc14635fcd4fe758b80c3e846e5337241.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10273_large_schinese.b867f7dec7d9fec23b8f47ea1ae6016c390ba6be.png",
                "ingame_image": {},
                "illustrator": "Daarken",
                "rarity": "Common",
                "is_black": true,
                "mana_cost": 4,
                "item_def": 110273,
                "is_quick": true,
                "references": []
            },
            {
                "card_id": 10274,
                "base_card_id": 10274,
                "card_type": "Spell",
                "card_name": "竭心灵气",
                "card_text": "修改一名<span style='font-weight:bold;color:#736e80;'>黑色英雄</span>，使其获得“行动阶段前，对此英雄的敌方近邻造成2透甲伤害。”",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10274.b662c863cb95d046da9aade01cb3a2662de1aa26.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10274_large_schinese.c86bbea97baadbb939dd82722099edfec08194a4.png",
                "ingame_image": {},
                "illustrator": "Kieran Yanner",
                "is_black": true,
                "mana_cost": 4,
                "references": []
            },
            {
                "card_id": 10275,
                "base_card_id": 10275,
                "card_type": "Spell",
                "card_name": "法力吸取",
                "card_text": "在本回合使敌方塔-2魔力，并使你的塔+2魔力。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10275.052001f72ea072d9f61246448e50c8954e855fec.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10275_large_schinese.10a0f885266a619e12a94bfcf4856508a5eb3e1e.png",
                "ingame_image": {},
                "illustrator": "Stepan Alekseev",
                "is_black": true,
                "mana_cost": 2,
                "references": []
            },
            {
                "card_id": 10277,
                "base_card_id": 10277,
                "card_type": "Spell",
                "card_name": "冰封禁制",
                "card_text": "对一个单位造成2伤害，并在本回合使其缴械。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10277.6e8142cc509d853344b6b1746ec82bca7f349519.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10277_large_schinese.9a326e2ad9095990afa0647c1419be5232030b9b.png",
                "ingame_image": {},
                "illustrator": "Stepan Alekseev",
                "is_blue": true,
                "mana_cost": 3,
                "references": []
            },
            {
                "card_id": 10278,
                "base_card_id": 10278,
                "card_type": "Spell",
                "card_name": "雷神之怒",
                "card_text": "对所有兵线上的每名敌方英雄造成4透甲伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10278.2a8b26d7bd15731369285a2206d28f8ceb9d72ca.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10278_large_schinese.21dace92858c023c323fd1ec74cf275293fa9f0a.png",
                "ingame_image": {},
                "illustrator": "David Palumbo",
                "is_blue": true,
                "mana_cost": 7,
                "references": []
            },
            {
                "card_id": 10280,
                "base_card_id": 10280,
                "card_type": "Spell",
                "card_name": "授予力量",
                "card_text": "修改一个单位，使其+3攻击和+3顺势。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10280.717d0b4c863a25ad1d173fbbc0aec518fb921503.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10280_large_schinese.67763a17e9990295612658fa0cd1258521dc1f93.png",
                "ingame_image": {},
                "illustrator": "Magali Villeneuve",
                "is_green": true,
                "mana_cost": 4,
                "references": []
            },
            {
                "card_id": 10281,
                "base_card_id": 10281,
                "card_type": "Spell",
                "card_name": "离子外壳",
                "card_text": "修改一个单位，使其+3反伤。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10281.eec8b13d54c8f23c4e2e55f839368b8d2a9315fb.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10281_large_schinese.e5f0c6058bd9f484845477073d2bb1da8bce4872.png",
                "ingame_image": {},
                "illustrator": "Stepan Alekseev",
                "is_green": true,
                "mana_cost": 4,
                "references": []
            },
            {
                "card_id": 10282,
                "base_card_id": 10282,
                "card_type": "Spell",
                "card_name": "激怒",
                "card_text": "在本回合使一名<span style='font-weight:bold;color:#c2352d;'>红色英雄</span>+4攻击和+4护甲。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10282.1efbd5ae29a9d227a8dd917ac47d5a179150b442.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10282_large_schinese.8eb0dca1af74539dcb11d6113c138e8d389088a2.png",
                "ingame_image": {},
                "illustrator": "Forrest Imel",
                "is_red": true,
                "mana_cost": 4,
                "references": []
            },
            {
                "card_id": 10287,
                "base_card_id": 10287,
                "card_type": "Spell",
                "card_name": "无光之盾",
                "card_text": "净化一个单位上的所有对手效果。在本回合使该单位+2护甲和+2反伤。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10287.8e0c063a22e021c8b76c059bf6c11b6090e8e4c8.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10287_large_schinese.2b3eb3273d6f0d569e5dbfb7b3e7cb5fd28532d2.png",
                "ingame_image": {},
                "illustrator": "Chase Stone",
                "is_green": true,
                "mana_cost": 2,
                "references": []
            },
            {
                "card_id": 10288,
                "base_card_id": 10288,
                "card_type": "Spell",
                "card_name": "狂战士之吼",
                "card_text": "选择一名<span style='font-weight:bold;color:#c2352d;'>友方红色英雄</span>，使其与敌方近邻战斗。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10288.c1bb6d79b9117d124fc130f240410da3dadd53b4.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10288_large_schinese.35b7de2f4e3768fae43e471ba25680dfe04fcd5a.png",
                "ingame_image": {},
                "illustrator": "Tyler Jacobson",
                "is_red": true,
                "mana_cost": 6,
                "references": []
            },
            {
                "card_id": 10289,
                "base_card_id": 10289,
                "card_type": "Spell",
                "card_name": "血之狂暴",
                "card_text": "在本回合沉默一个单位，并使该单位+4攻击。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10289.e9e94d913e4c8072f7e4d48ca414d07c09da0e1d.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10289_large_schinese.a3184c5689bb6afda61f7fc4ec9b6c6345ee3887.png",
                "ingame_image": {},
                "illustrator": "Lake Hurwitz",
                "is_black": true,
                "mana_cost": 5,
                "references": []
            },
            {
                "card_id": 10290,
                "base_card_id": 10290,
                "card_type": "Spell",
                "card_name": "海妖外壳",
                "card_text": "修改一名<span style='font-weight:bold;color:#c2352d;'>红色英雄</span>，使其+1护甲。<br><br><span style='font-weight:bold;color:#ffffff;'>获得先手。</span>",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10290.e8c27c0fbcb9d18e0531d840d0c5083cd806ad81.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10290_large_schinese.577910718a12d39697bb56f040c456f608fdaa57.png",
                "ingame_image": {},
                "illustrator": "Daarken",
                "is_red": true,
                "mana_cost": 1,
                "is_quick": true,
                "references": []
            },
            {
                "card_id": 10291,
                "base_card_id": 10291,
                "card_type": "Improvement",
                "card_name": "机械行军",
                "card_text": "行动阶段前，如果机械行军有能量，移除1能量，对敌方塔和所有敌人各造成2伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10291.a7cfd666856d5b71c21f768cb969de35bf6b2b5a.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10291_large_schinese.af6cf7e29e7c60c4c62e81d9e1c0302ea840afb8.png",
                "ingame_image": {},
                "illustrator": "James Paick",
                "is_black": true,
                "mana_cost": 5,
                "charges": 3,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10292,
                "base_card_id": 10292,
                "card_type": "Spell",
                "card_name": "双刃剑",
                "card_text": "在本回合使一名<span style='font-weight:bold;color:#c2352d;'>红色英雄</span>+8攻击和-8护甲。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10292.c969a021e6b0f4652ceec97ac8a8437fba24a5f2.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10292_large_schinese.3a439ebca4472d9cd35e700458208431088a7b26.png",
                "ingame_image": {},
                "illustrator": "Lius Lasahido",
                "is_red": true,
                "mana_cost": 1,
                "references": []
            },
            {
                "card_id": 10293,
                "base_card_id": 10293,
                "card_type": "Spell",
                "card_name": "原始咆哮",
                "card_text": "在本回合晕眩一个阻挡<span style='font-weight:bold;color:#c2352d;'>友方红色英雄</span>的单位，将该单位的友方近邻移至其他随机兵线。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10293.fd1f927f707d0e50da5c8e60ccfc5a0fb5bc14e9.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10293_large_schinese.dae391d0c5a7a2f8d024d0a5cb35420dc85c0713.png",
                "ingame_image": {},
                "illustrator": "Clint Cearley",
                "is_red": true,
                "mana_cost": 7,
                "references": []
            },
            {
                "card_id": 10294,
                "base_card_id": 10294,
                "card_type": "Spell",
                "card_name": "蝮蛇突袭",
                "card_text": "施加于一个单位，使其获得“行动阶段前，对此单位造成2透甲伤害”，直至其死亡为止。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10294.fce39a4c45cfc6e1f7f0e390b4317373a50615d1.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10294_large_schinese.c591a2185b6fa250f7fe29792168749727d337e7.png",
                "ingame_image": {},
                "illustrator": "Lars Grant-West",
                "is_green": true,
                "mana_cost": 3,
                "references": []
            },
            {
                "card_id": 10295,
                "base_card_id": 10295,
                "card_type": "Spell",
                "card_name": "奥术谴责",
                "card_text": "修改敌方塔，使其-1魔力。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10295.fc45257d443150f3dd3f4307cce48ca5afc3305a.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10295_large_schinese.74a3501b056b9d4965c6f38d77b95faf14807e98.png",
                "ingame_image": {},
                "illustrator": "Alix Branwyn",
                "rarity": "Common",
                "is_black": true,
                "mana_cost": 4,
                "item_def": 110295,
                "references": []
            },
            {
                "card_id": 10296,
                "base_card_id": 10296,
                "card_type": "Spell",
                "card_name": "死亡回旋",
                "card_text": "选择一名<span style='font-weight:bold;color:#c2352d;'>友方红色英雄</span>，在本回合对其敌方近邻造成2伤害和-2攻击。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10296.d10d22d473f407811637c99279aefa2a253b6045.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10296_large_schinese.d3ed4604b4a4ad02e8cb7d3f7e65ea09ace91a1f.png",
                "ingame_image": {},
                "illustrator": "JiHun Lee",
                "is_red": true,
                "mana_cost": 2,
                "references": []
            },
            {
                "card_id": 10297,
                "base_card_id": 10297,
                "card_type": "Spell",
                "card_name": "防御架势",
                "card_text": "在本回合使一名英雄+3护甲。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10297.283a24c6ab4b238d3005b12a9367e36ad9d86f1e.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10297_large_schinese.f362c00bbb7494182f2da2fcf68fcefdf10062b7.png",
                "ingame_image": {},
                "illustrator": "Bayard Wu",
                "rarity": "Common",
                "is_red": true,
                "mana_cost": 2,
                "item_def": 110297,
                "references": []
            },
            {
                "card_id": 10298,
                "base_card_id": 10298,
                "card_type": "Spell",
                "card_name": "迷失时空",
                "card_text": "使对手的三张随机手牌+3锁定。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10298.bf7192984d8ce38adfeb51b64f132f9844d155e1.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10298_large_schinese.aacc2415b5346c949b19fc2b338eab222e3e72d1.png",
                "ingame_image": {},
                "illustrator": "JiHun Lee",
                "rarity": "Uncommon",
                "is_blue": true,
                "mana_cost": 6,
                "item_def": 110298,
                "references": []
            },
            {
                "card_id": 10299,
                "base_card_id": 10299,
                "card_type": "Spell",
                "card_name": "捍卫弱者",
                "card_text": "修改一个单位，使其获得“此单位的友方近邻+2护甲”。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10299.7ad631f30f7bb6e1ad41e16cf942141ae0b99b3f.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10299_large_schinese.fa9afad605505337042c2c63b1f1ad5d553700fb.png",
                "ingame_image": {},
                "illustrator": "Svetlin Velinov",
                "rarity": "Uncommon",
                "is_green": true,
                "mana_cost": 2,
                "item_def": 110299,
                "references": []
            },
            {
                "card_id": 10300,
                "base_card_id": 10300,
                "card_type": "Spell",
                "card_name": "战斗训练",
                "card_text": "修改一名英雄，使其+2攻击。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10300.2a18454ab4d9d4c7f224370536ad0093e0710b40.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10300_large_schinese.302c5536d69ab1fa42099e1a69809870fd592d5b.png",
                "ingame_image": {},
                "illustrator": "Magali Villeneuve",
                "rarity": "Common",
                "is_red": true,
                "mana_cost": 3,
                "item_def": 110300,
                "references": []
            },
            {
                "card_id": 10302,
                "base_card_id": 10302,
                "card_type": "Spell",
                "card_name": "自我破坏",
                "card_text": "修改对手的两张随机手牌，使其获得“对任意兵线上的一座随机友方塔造成6伤害”。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10302.84152555578c231946045a125e5e00921c5fad23.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10302_large_schinese.df3e1b1593f0ff83e7e7d1152e909d2a5ccf7a33.png",
                "ingame_image": {},
                "illustrator": "JiHun Lee",
                "rarity": "Uncommon",
                "is_blue": true,
                "mana_cost": 4,
                "item_def": 110302,
                "references": []
            },
            {
                "card_id": 10303,
                "base_card_id": 10303,
                "card_type": "Spell",
                "card_name": "喝斥",
                "card_text": "将一名小兵移至另一条随机兵线。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10303.69d09f5be25185944980fdeaabb477fe8beba362.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10303_large_schinese.d329d839d704d15ad751f7407701755b2bb60766.png",
                "ingame_image": {},
                "illustrator": "Forrest Imel",
                "rarity": "Common",
                "is_green": true,
                "mana_cost": 2,
                "item_def": 110303,
                "references": []
            },
            {
                "card_id": 10305,
                "base_card_id": 10305,
                "card_type": "Spell",
                "card_name": "全面拆除",
                "card_text": "惩处所有敌方强化。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10305.63ec42f016facf2e4f66410edd9a99186058d652.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10305_large_schinese.75fdb3d117e21e42df820449610a094bf16863f4.png",
                "ingame_image": {},
                "illustrator": "Mike Azevedo",
                "rarity": "Rare",
                "is_red": true,
                "mana_cost": 5,
                "item_def": 110305,
                "references": []
            },
            {
                "card_id": 10306,
                "base_card_id": 10306,
                "card_type": "Spell",
                "card_name": "粉碎防御！",
                "card_text": "惩处一个强化。抽一张牌。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10306.26bb5c39cd65b31224f117dfceb15590727b07d1.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10306_large_schinese.9f6c01765cc5433ad5ad6f30fe15f2cdeee7294c.png",
                "ingame_image": {},
                "illustrator": "JiHun Lee",
                "rarity": "Uncommon",
                "is_red": true,
                "mana_cost": 3,
                "item_def": 110306,
                "references": []
            },
            {
                "card_id": 10307,
                "base_card_id": 10307,
                "card_type": "Spell",
                "card_name": "先见之明",
                "card_text": "抽两张牌。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10307.46f3b0c17c8f6ac269cc481f4f5f6c74e8d4b9b6.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10307_large_schinese.b48dd4a27499c111b120cb69b246e15b96bc3452.png",
                "ingame_image": {},
                "illustrator": "Magali Villeneuve",
                "rarity": "Common",
                "is_blue": true,
                "mana_cost": 4,
                "item_def": 110307,
                "references": []
            },
            {
                "card_id": 10308,
                "base_card_id": 10308,
                "card_type": "Spell",
                "card_name": "恩赐解脱",
                "card_text": "舍弃一张随机卡牌，惩处一名英雄。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10308.e4bec4fbb50d0feccc065c5d4bb5f7f207a67d06.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10308_large_schinese.5a910cf0c7869f0af1c109beafe222bfcb64ec77.png",
                "ingame_image": {},
                "illustrator": "Greg Opalinski",
                "is_black": true,
                "mana_cost": 6,
                "references": []
            },
            {
                "card_id": 10310,
                "base_card_id": 10310,
                "card_type": "Creep",
                "card_name": "高地人投石器",
                "card_text": "行动阶段前，对敌方塔造成2透甲伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10310.1716e7773dd0477edce796f5a104f33c22017035.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10310_large_schinese.89312846270d55139ac97f1a24fbd4fa265fce83.png",
                "ingame_image": {},
                "illustrator": "Mark Winters",
                "rarity": "Uncommon",
                "is_black": true,
                "mana_cost": 2,
                "item_def": 110310,
                "hit_points": 4,
                "references": []
            },
            {
                "card_id": 10311,
                "base_card_id": 10311,
                "card_type": "Spell",
                "card_name": "武装叛军",
                "card_text": "修改友方小兵，使其+2攻击和+1护甲。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10311.bfb78866eecf39a274a1f22ff6a837fdfba14b91.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10311_large_schinese.506640c2be6544f24cddf492055a49910ea37b23.png",
                "ingame_image": {},
                "illustrator": "Robert Simon",
                "rarity": "Common",
                "is_green": true,
                "mana_cost": 4,
                "item_def": 110311,
                "references": []
            },
            {
                "card_id": 10312,
                "base_card_id": 10312,
                "card_type": "Spell",
                "card_name": "低空扫射",
                "card_text": "对每名敌方小兵各造成2伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10312.1d44358f026daa5b62e7913b24bf5c6026b0015a.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10312_large_schinese.39d8f8fbc33a7cefdc682a78789338a8e8b36f6a.png",
                "ingame_image": {},
                "illustrator": "Daarken",
                "rarity": "Common",
                "is_blue": true,
                "mana_cost": 1,
                "item_def": 110312,
                "references": []
            },
            {
                "card_id": 10313,
                "base_card_id": 10313,
                "card_type": "Spell",
                "card_name": "如箭在弦",
                "card_text": "在本回合使一名<span style='font-weight:bold;color:#c2352d;'>红色英雄</span>+4攻击。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10313.4656d7a38aea1d2479461ab3692f81bc89b8923d.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10313_large_schinese.953cd75aadc6e91f108e0c00cdeaf89c4412a703.png",
                "ingame_image": {},
                "illustrator": "Magali Villeneuve",
                "rarity": "Common",
                "is_red": true,
                "mana_cost": 1,
                "item_def": 110313,
                "references": []
            },
            {
                "card_id": 10314,
                "base_card_id": 10314,
                "card_type": "Spell",
                "card_name": "肮脏勾当",
                "card_text": "敌方塔每有一个强化就受2伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10314.61788d7cced886c853cc99d799924f1f490edc88.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10314_large_schinese.c9289c312a0375e767f7c2e6e2a6b2ba892d4847.png",
                "ingame_image": {},
                "illustrator": "Forrest Imel",
                "rarity": "Uncommon",
                "is_black": true,
                "mana_cost": 3,
                "item_def": 110314,
                "references": []
            },
            {
                "card_id": 10315,
                "base_card_id": 10315,
                "card_type": "Spell",
                "card_name": "灭绝",
                "card_text": "惩处所有单位。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10315.7cce831a3058de5aec9e0977bad2db081be117f3.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10315_large_schinese.7cbe0d954ecd48e91c7ddd893b9000bac89fb06a.png",
                "ingame_image": {},
                "illustrator": "Titus Lunter",
                "rarity": "Rare",
                "is_blue": true,
                "mana_cost": 6,
                "item_def": 110315,
                "references": []
            },
            {
                "card_id": 10316,
                "base_card_id": 10316,
                "card_type": "Spell",
                "card_name": "洞察弱点",
                "card_text": "在本回合使一名英雄及其友方近邻获得透甲。抽一张牌。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10316.a59a98719b000276fb4292fa03e2cd896378970f.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10316_large_schinese.537c1a74ed8885e5cc9b12b1b4001c21053bdc84.png",
                "ingame_image": {},
                "illustrator": "Lius Lasahido",
                "rarity": "Uncommon",
                "is_red": true,
                "mana_cost": 3,
                "item_def": 110316,
                "references": []
            },
            {
                "card_id": 10317,
                "base_card_id": 10317,
                "card_type": "Spell",
                "card_name": "衰退诅咒",
                "card_text": "修改敌方英雄，使其-2攻击。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10317.da920ec1c119141dd35af364aa50a66a6aca68cd.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10317_large_schinese.baa3f06653a093f261cd2b5c783d93f3bf788f33.png",
                "ingame_image": {},
                "illustrator": "Magali Villeneuve",
                "rarity": "Rare",
                "is_green": true,
                "mana_cost": 6,
                "item_def": 110317,
                "references": []
            },
            {
                "card_id": 10318,
                "base_card_id": 10318,
                "card_type": "Spell",
                "card_name": "连环霜冻",
                "card_text": "对一个单位造成3伤害。重复7次：对其左侧或右侧的一个随机单位造成3伤害。<br><br><span style='font-weight:bold;color:#ffffff;'>获得先手。</span>",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10318.3a928e846d16fb7a61ccd1f92c96d3d94195a910.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10318_large_schinese.4a52d532ebcdef1f6a134eb7bdd3f5921e1cd0a2.png",
                "ingame_image": {},
                "illustrator": "Wisnu Tan",
                "is_black": true,
                "mana_cost": 7,
                "is_quick": true,
                "references": []
            },
            {
                "card_id": 10319,
                "base_card_id": 10319,
                "card_type": "Spell",
                "card_name": "恶魔启示",
                "card_text": "抽两张牌。对所有兵线上的友方单位造成2伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10319.38668948962fc5fda9888e805179c763d6746277.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10319_large_schinese.31d7a79a902b47c528a3c250da0531421d84bde1.png",
                "ingame_image": {},
                "illustrator": "Jana Schirmer",
                "rarity": "Uncommon",
                "is_blue": true,
                "mana_cost": 1,
                "item_def": 110319,
                "references": []
            },
            {
                "card_id": 10322,
                "base_card_id": 10322,
                "card_type": "Spell",
                "card_name": "发薪日",
                "card_text": "你的金钱加倍。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10322.4e9f787863814c8cef54b907d514ce9af6d47bd9.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10322_large_schinese.25eae867381bfb311681605f5449e86afb512f17.png",
                "ingame_image": {},
                "illustrator": "JiHun Lee",
                "rarity": "Common",
                "is_black": true,
                "mana_cost": 3,
                "item_def": 110322,
                "references": []
            },
            {
                "card_id": 10323,
                "base_card_id": 10323,
                "card_type": "Spell",
                "card_name": "回音击",
                "card_text": "对每个敌人造成伤害，数值为敌人的数量。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10323.1b9aff51b5c1259b7f7688338f48d1612e5477bf.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10323_large_schinese.1c9115ce12a372f2efdc74187f702e55024e687a.png",
                "ingame_image": {},
                "illustrator": "Forrest Imel",
                "is_blue": true,
                "mana_cost": 7,
                "references": []
            },
            {
                "card_id": 10324,
                "base_card_id": 10324,
                "card_type": "Spell",
                "card_name": "铁树枝干守护",
                "card_text": "使任意兵线上的一个单位+3护甲，直至其下个战斗阶段结束为止。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10324.abbf2ce92acb77c3a983c66d04d1cab323b6cb3c.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10324_large_schinese.13bb1fc985ef8e3673bff1349c7a1df35ad6b13d.png",
                "ingame_image": {},
                "illustrator": "Magali Villeneuve",
                "rarity": "Uncommon",
                "is_green": true,
                "mana_cost": 2,
                "item_def": 110324,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10325,
                "base_card_id": 10325,
                "card_type": "Spell",
                "card_name": "弱肉强食",
                "card_text": "每有一个受伤的单位，就召唤一头<span style='font-weight:bold;color:#ffffff;'>战争猎犬</span>。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10325.5089ab12356a67542b219554cb3ad518362d3fcb.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10325_large_schinese.115d7eac11a04fbb368e953c175fc0674cd79b85.png",
                "ingame_image": {},
                "illustrator": "Lake Hurwitz",
                "is_blue": true,
                "mana_cost": 4,
                "references": [
                    {
                        "card_id": 10093,
                        "ref_type": "references"
                    }
                ]
            },
            {
                "card_id": 10326,
                "base_card_id": 10326,
                "card_type": "Spell",
                "card_name": "废话少说！",
                "card_text": "直接进入战斗阶段。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10326.1af86cb4b6f62d613e61c3f169145bb88f24608e.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10326_large_schinese.abcf8efcee72b59498e35ba4538a01af9a425fa2.png",
                "ingame_image": {},
                "illustrator": "JiHun Lee",
                "rarity": "Uncommon",
                "is_red": true,
                "mana_cost": 5,
                "item_def": 110326,
                "references": []
            },
            {
                "card_id": 10327,
                "base_card_id": 10327,
                "card_type": "Spell",
                "card_name": "英勇意志",
                "card_text": "修改一名<span style='font-weight:bold;color:#c2352d;'>红色英雄</span>，使其获得“每打出一张魔力消耗不超过2的非物品卡后，修改此英雄，使其+2生命”。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10327.fa06b4c637f9d47b5725b0590e41bf52783482c1.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10327_large_schinese.ec019fcb7f88e29631608f054e52e5899db71118.png",
                "ingame_image": {},
                "illustrator": "JiHun Lee",
                "rarity": "Rare",
                "is_red": true,
                "mana_cost": 2,
                "item_def": 110327,
                "references": []
            },
            {
                "card_id": 10328,
                "base_card_id": 10328,
                "card_type": "Spell",
                "card_name": "偷袭",
                "card_text": "选择一名<span style='font-weight:bold;color:#736e80;'>友方黑色英雄</span>和任意兵线上的另一个单位，让双方战斗。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10328.2c48fab7991235032df9f2df9ba74338d554d0a5.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10328_large_schinese.6fb18c02346c973e4e9881e48241eaa413bee433.png",
                "ingame_image": {},
                "illustrator": "Yongjae Choi",
                "rarity": "Uncommon",
                "is_black": true,
                "mana_cost": 4,
                "item_def": 110328,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10330,
                "base_card_id": 10330,
                "card_type": "Spell",
                "card_name": "神之力量",
                "card_text": "修改一名<span style='font-weight:bold;color:#c2352d;'>红色英雄</span>，使其+4攻击。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10330.5c5f3ba2bfdcd3be22bd69c76cd9f2cfdc86291c.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10330_large_schinese.e3ab3f26089a4f1ac959b61a1e7185e5e371c6d7.png",
                "ingame_image": {},
                "illustrator": "Yongjae Choi",
                "is_red": true,
                "mana_cost": 6,
                "references": []
            },
            {
                "card_id": 10331,
                "base_card_id": 10331,
                "card_type": "Spell",
                "card_name": "金钱之怒",
                "card_text": "消耗你所有的金钱。每消耗1金钱，重复一次：对一个随机友方单位或敌人造成4伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10331.41974bf2f68178df778274e877604753a3bf5b68.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10331_large_schinese.106ca7e94500c67579a128f18d4414afc99b5429.png",
                "ingame_image": {},
                "illustrator": "Mike Azevedo",
                "rarity": "Rare",
                "is_blue": true,
                "mana_cost": 3,
                "item_def": 110331,
                "references": []
            },
            {
                "card_id": 10332,
                "base_card_id": 10332,
                "card_type": "Spell",
                "card_name": "杀戮阴谋",
                "card_text": "在本回合使一名<span style='font-weight:bold;color:#736e80;'>黑色英雄</span>+8攻击。为其选择一个战斗目标。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10332.b26fc23429335e1db60d247ed76b646706a2b70e.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10332_large_schinese.70204c378b6cdd44bed96e50ddb622a2b2555c66.png",
                "ingame_image": {},
                "illustrator": "Kieran Yanner",
                "rarity": "Uncommon",
                "is_black": true,
                "mana_cost": 4,
                "item_def": 110332,
                "references": []
            },
            {
                "card_id": 10334,
                "base_card_id": 10334,
                "card_type": "Spell",
                "card_name": "五星连珠",
                "card_text": "在本回合使你的塔+3魔力。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10334.a811d0456917bde54c6def92dd8639ecb3718e35.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10334_large_schinese.7512ff636dd3d01af9d6a1ad82ab68d125a53acb.png",
                "ingame_image": {},
                "illustrator": "John Stanko",
                "rarity": "Uncommon",
                "is_green": true,
                "mana_cost": 1,
                "item_def": 110334,
                "references": []
            },
            {
                "card_id": 10335,
                "base_card_id": 10335,
                "card_type": "Spell",
                "card_name": "呼叫预备军",
                "card_text": "召唤两名<span style='font-weight:bold;color:#ffffff;'>近战小兵</span>至任意兵线。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10335.0ec934ba8df2978db2c9eeba919d6dc9f0ba9875.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10335_large_schinese.ca606fb16b7fbbfc77490696201e5fa0edfe3d16.png",
                "ingame_image": {},
                "illustrator": "Mike Azevedo",
                "rarity": "Uncommon",
                "is_blue": true,
                "mana_cost": 6,
                "item_def": 110335,
                "is_crosslane": true,
                "references": [
                    {
                        "card_id": 1006,
                        "ref_type": "references"
                    }
                ]
            },
            {
                "card_id": 10336,
                "base_card_id": 10336,
                "card_type": "Spell",
                "card_name": "为时未晚",
                "card_text": "召唤一名<span style='font-weight:bold;color:#ffffff;'>近战小兵</span>至任意兵线。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10336.20ede0428193b56065cc1e572ca3c04d8781febf.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10336_large_schinese.6088a6049ad2115aca802d9115fee83a2b976316.png",
                "ingame_image": {},
                "illustrator": "Lake Hurwitz",
                "rarity": "Common",
                "is_blue": true,
                "mana_cost": 3,
                "item_def": 110336,
                "is_crosslane": true,
                "references": [
                    {
                        "card_id": 1006,
                        "ref_type": "references"
                    }
                ]
            },
            {
                "card_id": 10338,
                "base_card_id": 10338,
                "card_type": "Spell",
                "card_name": "神圣干预",
                "card_text": "在本回合使友方单位获得伤害免疫。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10338.b8133b409fa051a98e988459a5ead239dccc88c4.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10338_large_schinese.61dec72e4dd812d44abb722e68f05c90504ed263.png",
                "ingame_image": {},
                "illustrator": "Wisnu Tan",
                "rarity": "Uncommon",
                "is_green": true,
                "mana_cost": 5,
                "item_def": 110338,
                "references": []
            },
            {
                "card_id": 10339,
                "base_card_id": 10339,
                "card_type": "Spell",
                "card_name": "狂风",
                "card_text": "在本回合沉默敌方英雄。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10339.46691b969309ffa664e02da618f9e04b632111b9.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10339_large_schinese.73571608d9d3bf50037bfb86ee0003ab588a54ff.png",
                "ingame_image": {},
                "illustrator": "Livia Prima",
                "is_green": true,
                "mana_cost": 4,
                "references": []
            },
            {
                "card_id": 10340,
                "base_card_id": 10340,
                "card_type": "Spell",
                "card_name": "上帝之手",
                "card_text": "完整治疗所有友方单位，在本回合使其获得伤害免疫。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10340.19223490c350845298c2f6cedf92f513ce74ff97.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10340_large_schinese.d7cb44635343bf8344bc8e477e579677cb437d54.png",
                "ingame_image": {},
                "illustrator": "Clint Cearley",
                "is_green": true,
                "mana_cost": 7,
                "references": []
            },
            {
                "card_id": 10341,
                "base_card_id": 10341,
                "card_type": "Spell",
                "card_name": "决斗",
                "card_text": "选择一名<span style='font-weight:bold;color:#c2352d;'>友方红色英雄</span>和另一个单位，让双方战斗。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10341.80437481b6c0f9fc4bfe330865c095ac40a90cdd.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10341_large_schinese.177d6ec40f046ee277b9f1ca327e9ff2d94d206f.png",
                "ingame_image": {},
                "illustrator": "Bayard Wu",
                "is_red": true,
                "mana_cost": 2,
                "references": []
            },
            {
                "card_id": 10342,
                "base_card_id": 10342,
                "card_type": "Spell",
                "card_name": "惹是生非",
                "card_text": "选择一名友方英雄，使其嘲讽，为其选择一个战斗目标。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10342.f7f50aa3a8cfdb750ba55b13d0f2bfb856c297f5.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10342_large_schinese.8f8dc216d6804962897b64db779ad96f5fbcd4f5.png",
                "ingame_image": {},
                "illustrator": "JiHun Lee",
                "rarity": "Common",
                "is_red": true,
                "mana_cost": 2,
                "item_def": 110342,
                "references": []
            },
            {
                "card_id": 10344,
                "base_card_id": 10344,
                "card_type": "Spell",
                "card_name": "一扫而空",
                "card_text": "在本回合使一个友方英雄+4顺势。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10344.f7adaa7a246c7f9eceabf57543926c8b28100901.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10344_large_schinese.83033df500ae531456beb928cc4bdf37973bbc34.png",
                "ingame_image": {},
                "illustrator": "Bayard Wu",
                "rarity": "Common",
                "is_red": true,
                "mana_cost": 4,
                "item_def": 110344,
                "references": []
            },
            {
                "card_id": 10347,
                "base_card_id": 10347,
                "card_type": "Spell",
                "card_name": "绽放防御",
                "card_text": "召唤两道<span style='font-weight:bold;color:#ffffff;'>玫叶墙</span>。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10347.c561e603dc1dc01967784b4f446e1ba1d7168b08.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10347_large_schinese.c1611327be50e030b0c6e3c47778353afb46bb8f.png",
                "ingame_image": {},
                "illustrator": "Jana Schirmer",
                "rarity": "Uncommon",
                "is_green": true,
                "mana_cost": 4,
                "item_def": 110347,
                "references": [
                    {
                        "card_id": 10120,
                        "ref_type": "references"
                    }
                ]
            },
            {
                "card_id": 10348,
                "base_card_id": 10348,
                "card_type": "Spell",
                "card_name": "全视者恩泽",
                "card_text": "修改一名<span style='font-weight:bold;color:#479036;'>绿色英雄</span>，使其获得“友方单位+2恢复”。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10348.9e42ca383a4a13c45c0606d68ef783d5d897cb5e.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10348_large_schinese.e02fd057cf3c3b9b2ba24ab8ca17329b057d64f8.png",
                "ingame_image": {},
                "illustrator": "Sam Carr",
                "is_green": true,
                "mana_cost": 4,
                "references": []
            },
            {
                "card_id": 10349,
                "base_card_id": 10349,
                "card_type": "Spell",
                "card_name": "怒火高涨",
                "card_text": "修改一名<span style='font-weight:bold;color:#c2352d;'>红色英雄</span>，使其获得“每打出一张魔力消耗不超过2的非物品卡后，修改此英雄，使其+1攻击”。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10349.be3a218ea41c6b312aa4a6340ac945505ae11139.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10349_large_schinese.704966a70a2be9eedd2af0b597d369e5e82f28b1.png",
                "ingame_image": {},
                "illustrator": "JiHun Lee",
                "rarity": "Rare",
                "is_red": true,
                "mana_cost": 2,
                "item_def": 110349,
                "references": []
            },
            {
                "card_id": 10350,
                "base_card_id": 10350,
                "card_type": "Spell",
                "card_name": "冷不胜防",
                "card_text": "在本回合晕眩一个阻挡<span style='font-weight:bold;color:#c2352d;'>友方红色英雄</span>的单位，并对该单位造成2伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10350.b0f0140afd577696e57f0fd6c3ea43f694ced182.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10350_large_schinese.b2de20341722e832009817a09ddea1db8767cd97.png",
                "ingame_image": {},
                "illustrator": "Wisnu Tan",
                "rarity": "Common",
                "is_red": true,
                "mana_cost": 4,
                "item_def": 110350,
                "references": []
            },
            {
                "card_id": 10352,
                "base_card_id": 10352,
                "card_type": "Spell",
                "card_name": "闪电一击",
                "card_text": "对敌方塔造成6伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10352.a5223797348f69a3f49a070202c5f79509ee84b5.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10352_large_schinese.d643175447b860cbd021d0c13c5e431f158469ba.png",
                "ingame_image": {},
                "illustrator": "Daniel Romanovsky",
                "rarity": "Common",
                "is_blue": true,
                "mana_cost": 2,
                "item_def": 110352,
                "references": []
            },
            {
                "card_id": 10353,
                "base_card_id": 10353,
                "card_type": "Spell",
                "card_name": "达摩克斯霹雳",
                "card_text": "对敌方塔造成20伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10353.d7bccf0e740458f183286c929e3de7b16966f81b.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10353_large_schinese.862d9cea38f858a7bb3e48c8f7f6ab6f6e529241.png",
                "ingame_image": {},
                "illustrator": "Daniel Romanovsky",
                "rarity": "Rare",
                "is_blue": true,
                "mana_cost": 10,
                "item_def": 110353,
                "references": []
            },
            {
                "card_id": 10354,
                "base_card_id": 10354,
                "card_type": "Spell",
                "card_name": "逐一击破",
                "card_text": "对任意兵线上的一个单位造成4伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10354.3d3929d8af8f02aab24a0c8b8aee77bdc6497e6d.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10354_large_schinese.ebfd87a9dc5900ac36737a6b872fdd8caa740660.png",
                "ingame_image": {},
                "illustrator": "Randy Vargas",
                "rarity": "Uncommon",
                "is_black": true,
                "mana_cost": 4,
                "item_def": 110354,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10355,
                "base_card_id": 10355,
                "card_type": "Spell",
                "card_name": "次元传送门",
                "card_text": "召唤三名<span style='font-weight:bold;color:#ffffff;'>近战小兵</span>。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10355.fc832e69bc15df06010fda36437284a640b7e940.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10355_large_schinese.1da86a4f280151263356bc8b0f2ece76ad76ae6d.png",
                "ingame_image": {},
                "illustrator": "Svetlin Velinov",
                "rarity": "Common",
                "is_blue": true,
                "mana_cost": 4,
                "item_def": 110355,
                "references": [
                    {
                        "card_id": 1006,
                        "ref_type": "references"
                    }
                ]
            },
            {
                "card_id": 10358,
                "base_card_id": 10358,
                "card_type": "Spell",
                "card_name": "妙手回春",
                "card_text": "对你的塔进行8治疗。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10358.bca14ce73953f0f9c94d77b21084123aa6cd1aa9.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10358_large_schinese.51b4ba6ce4a04c7e8dcb11961b985e3400f4f99e.png",
                "ingame_image": {},
                "illustrator": "Darkken",
                "rarity": "Uncommon",
                "is_green": true,
                "mana_cost": 4,
                "item_def": 110358,
                "references": []
            },
            {
                "card_id": 10359,
                "base_card_id": 10359,
                "card_type": "Spell",
                "card_name": "拖延战术",
                "card_text": "使对手的两张随机手牌+2锁定。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10359.4bf50048b5904b00d49334d7089433f2b268564c.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10359_large_schinese.3a4ccb8a5fac1f1dcb73d11483af2aab0ed707ca.png",
                "ingame_image": {},
                "illustrator": "Sung Choi",
                "rarity": "Common",
                "is_blue": true,
                "mana_cost": 3,
                "item_def": 110359,
                "references": []
            },
            {
                "card_id": 10360,
                "base_card_id": 10360,
                "card_type": "Spell",
                "card_name": "误伤",
                "card_text": "选择两个敌人，让双方战斗。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10360.6571baf44a01bd62985c1d2d07f2a93b6351f7f2.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10360_large_schinese.a0794dceac4848129ac8ce5572ba098ccd38ddc6.png",
                "ingame_image": {},
                "illustrator": "Darek Zabrocki",
                "rarity": "Uncommon",
                "is_blue": true,
                "mana_cost": 6,
                "item_def": 110360,
                "references": []
            },
            {
                "card_id": 10361,
                "base_card_id": 10361,
                "card_type": "Spell",
                "card_name": "联手突袭",
                "card_text": "修改一名<span style='font-weight:bold;color:#736e80;'>黑色英雄</span>，使其获得“打出一张<span style='font-weight:bold;color:#736e80;'>黑色卡牌</span>后，在本回合此英雄及其友方近邻+2攻击”。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10361.f48c6445bbb1bd5c5266b73ac261f8835df980b7.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10361_large_schinese.f7d43f72fab8188e16f8100fd9bd983ebc2a178d.png",
                "ingame_image": {},
                "illustrator": "Wisnu Tan",
                "rarity": "Rare",
                "is_black": true,
                "mana_cost": 4,
                "item_def": 110361,
                "references": []
            },
            {
                "card_id": 10365,
                "base_card_id": 10365,
                "card_type": "Spell",
                "card_name": "绕树",
                "card_text": "将一个友方单位与其友方近邻互换位置。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10365.b39b61928fa8f460ccd51c1e555aba01bce551fd.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10365_large_schinese.7ce1db5cbc840114491ef3d5aa0b9a538071d3be.png",
                "ingame_image": {},
                "illustrator": "Forrest Imel",
                "rarity": "Common",
                "is_green": true,
                "mana_cost": 1,
                "item_def": 110365,
                "references": []
            },
            {
                "card_id": 10366,
                "base_card_id": 10366,
                "card_type": "Spell",
                "card_name": "新命令",
                "card_text": "选择一个友方单位，为其选择一个战斗目标。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10366.3d9a3af9ab3a2e64e3bb7199395e77f5dcc48d41.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10366_large_schinese.42f5da9b3d2e4043b8911a193e6732f6c31ecf4e.png",
                "ingame_image": {},
                "illustrator": "Robert Simon",
                "rarity": "Common",
                "is_red": true,
                "mana_cost": 1,
                "item_def": 110366,
                "references": []
            },
            {
                "card_id": 10367,
                "base_card_id": 10367,
                "card_type": "Spell",
                "card_name": "撕裂护甲",
                "card_text": "修改一个单位，使其-X护甲，X为其护甲。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10367.d93c935bb2152fc90b6b3c3abf78a948f92e9349.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10367_large_schinese.ff0c8369d86d304fca181676da36538e7ced043e.png",
                "ingame_image": {},
                "illustrator": "Forrest Imel",
                "rarity": "Uncommon",
                "is_red": true,
                "mana_cost": 3,
                "item_def": 110367,
                "references": []
            },
            {
                "card_id": 10368,
                "base_card_id": 10368,
                "card_type": "Spell",
                "card_name": "魔霭福泽",
                "card_text": "修改一个单位，使其+2攻击。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10368.865d9ad6bec7c4c415502ddad7d12242808a0ed2.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10368_large_schinese.b5440b81b4868f3c679edc9df2815c9634d40248.png",
                "ingame_image": {},
                "illustrator": "Livia Prima",
                "rarity": "Common",
                "is_green": true,
                "mana_cost": 3,
                "item_def": 110368,
                "references": []
            },
            {
                "card_id": 10370,
                "base_card_id": 10370,
                "card_type": "Spell",
                "card_name": "忍痛奋战",
                "card_text": "在本回合使一名<span style='font-weight:bold;color:#c2352d;'>红色英雄</span>+2护甲。<br><br><span style='font-weight:bold;color:#ffffff;'>获得先手。</span>",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10370.a9b5d8f57e407984b88a870def881cd69d2f3538.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10370_large_schinese.0b5c08b61b0853c107f829b217b21adef81ab6c0.png",
                "ingame_image": {},
                "illustrator": "Forrest Imel",
                "rarity": "Common",
                "is_red": true,
                "mana_cost": 1,
                "item_def": 110370,
                "is_quick": true,
                "references": []
            },
            {
                "card_id": 10373,
                "base_card_id": 10373,
                "card_type": "Spell",
                "card_name": "回春之魂",
                "card_text": "修改一名英雄，使其获得“打出一张<span style='font-weight:bold;color:#479036;'>绿色卡牌</span>后，在本回合此英雄及其友方近邻+4恢复”。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10373.f6bc4347b641383661aff4635d1142ff14801f0e.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10373_large_schinese.1e2c43210fd14a36911c34c466205f3579d58909.png",
                "ingame_image": {},
                "illustrator": "Jana Schirmer",
                "rarity": "Rare",
                "is_green": true,
                "mana_cost": 4,
                "item_def": 110373,
                "references": []
            },
            {
                "card_id": 10374,
                "base_card_id": 10374,
                "card_type": "Spell",
                "card_name": "奥术突袭",
                "card_text": "对敌方塔造成2伤害。抽一张牌。<br><br><span style='font-weight:bold;color:#ffffff;'>获得先手。</span>",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10374.f129956892b1e01960fec7307094250f4744aaeb.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10374_large_schinese.e45895b9602e8d15752c26f3a69b377ae3354454.png",
                "ingame_image": {},
                "illustrator": "Alix Branwyn",
                "rarity": "Common",
                "is_blue": true,
                "mana_cost": 4,
                "item_def": 110374,
                "is_quick": true,
                "references": []
            },
            {
                "card_id": 10376,
                "base_card_id": 10376,
                "card_type": "Spell",
                "card_name": "遥控引爆",
                "card_text": "对每个面对空白战斗位置的敌人造成5伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10376.a1b3a436b85ab6ae46481d43441fa5ad39de0344.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10376_large_schinese.c6efb35b73866381d300310e32d732e120ed4c6b.png",
                "ingame_image": {},
                "illustrator": "Jason Kang",
                "rarity": "Rare",
                "is_blue": true,
                "mana_cost": 6,
                "item_def": 110376,
                "references": []
            },
            {
                "card_id": 10377,
                "base_card_id": 10377,
                "card_type": "Spell",
                "card_name": "战场迷雾",
                "card_text": "在本回合，所有敌人有50%几率被缴械。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10377.e4c3b7cd06e340fbd35ab9a5bab1522f7434c188.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10377_large_schinese.69ed61d005e37d9f8a0c4e79da44703026e51a2f.png",
                "ingame_image": {},
                "illustrator": "Magali Villeneuve",
                "rarity": "Rare",
                "is_blue": true,
                "mana_cost": 4,
                "item_def": 110377,
                "references": []
            },
            {
                "card_id": 10378,
                "base_card_id": 10378,
                "card_type": "Spell",
                "card_name": "神圣旨意",
                "card_text": "修改一个单位，使其获得伤害免疫。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10378.8880062f7c7eaf135cc7dee606352181e205f7d6.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10378_large_schinese.9d574a052b373fd7f49a8a87ca2929d1db56a80e.png",
                "ingame_image": {},
                "illustrator": "Kieran Yanner",
                "rarity": "Rare",
                "is_green": true,
                "mana_cost": 7,
                "item_def": 110378,
                "references": []
            },
            {
                "card_id": 10379,
                "base_card_id": 10379,
                "card_type": "Spell",
                "card_name": "恫吓",
                "card_text": "将一个单位移至另一条随机兵线。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10379.ae6d727768728614ced8761010e8eda568a19545.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10379_large_schinese.cf17bcfad63c98851e5421e1b4acf4db55a61995.png",
                "ingame_image": {},
                "illustrator": "Bayard Wu",
                "rarity": "Common",
                "is_green": true,
                "mana_cost": 5,
                "item_def": 110379,
                "references": []
            },
            {
                "card_id": 10382,
                "base_card_id": 10382,
                "card_type": "Spell",
                "card_name": "净化仪式",
                "card_text": "净化一名英雄上的所有对手效果。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10382.5b6404391d4356514dcd8e4f9556a7356021a7b3.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10382_large_schinese.a9e3ca5075acaeeef6d1d79c48e2ed732375719b.png",
                "ingame_image": {},
                "illustrator": "John Stanko",
                "rarity": "Uncommon",
                "is_green": true,
                "mana_cost": 4,
                "item_def": 110382,
                "references": []
            },
            {
                "card_id": 10385,
                "base_card_id": 10385,
                "card_type": "Spell",
                "card_name": "特蕾丝汀的战旗",
                "card_text": "修改一名<span style='font-weight:bold;color:#c2352d;'>红色英雄</span>，使其获得“打出一张<span style='font-weight:bold;color:#c2352d;'>红色卡牌</span>后，在本回合此英雄及其友方近邻+1攻击和+1护甲”。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10385.2299e7fa03a59a1d9def5c4b6906e44b115d79c0.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10385_large_schinese.6475a6b484e7020b9dfb53b70050c03c4b3f4d56.png",
                "ingame_image": {},
                "illustrator": "James Paick",
                "rarity": "Rare",
                "is_red": true,
                "mana_cost": 4,
                "item_def": 110385,
                "references": []
            },
            {
                "card_id": 10391,
                "base_card_id": 10391,
                "card_type": "Spell",
                "card_name": "勒令",
                "card_text": "选择一个单位，为其选择一个战斗目标。抽一张牌。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10391.f840d1c14095da76ca4cbedf2e54289052862bf8.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10391_large_schinese.8834b7119fbb47f7e5139dc201aa8c48b85cfe2d.png",
                "ingame_image": {},
                "illustrator": "Lake Hurwitz",
                "rarity": "Uncommon",
                "is_blue": true,
                "mana_cost": 3,
                "item_def": 110391,
                "references": []
            },
            {
                "card_id": 10396,
                "base_card_id": 10396,
                "card_type": "Spell",
                "card_name": "攻其不备",
                "card_text": "晕眩一名英雄，直至其装备一件物品为止。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10396.b91d37f5c3d3f4d6a15fb69e30407f4338ebb2a0.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10396_large_schinese.970ce42eeaf4fbab604474e20ca8b34400da3ef4.png",
                "ingame_image": {},
                "illustrator": "Forrest Imel",
                "rarity": "Rare",
                "is_green": true,
                "mana_cost": 4,
                "item_def": 110396,
                "references": []
            },
            {
                "card_id": 10399,
                "base_card_id": 10399,
                "card_type": "Spell",
                "card_name": "穷追不舍",
                "card_text": "选择另一条兵线上的一个单位，将一名随机<span style='font-weight:bold;color:#736e80;'>友方黑色英雄</span>从此兵线移至该兵线，并对选定单位造成2伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10399.e961f9fbc345c39e0e7775f73a98295794a0ffab.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10399_large_schinese.5a564fb1264672fa105e4dc205cbd5a7254a5c17.png",
                "ingame_image": {},
                "illustrator": "Stepan Alekseev",
                "rarity": "Uncommon",
                "is_black": true,
                "mana_cost": 1,
                "item_def": 110399,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10402,
                "base_card_id": 10402,
                "card_type": "Spell",
                "card_name": "塔防炮火",
                "card_text": "对每个敌人造成2伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10402.f3892dece66264241cf9e3f7f79cf074a5e8b507.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10402_large_schinese.a4e48ac9878e62d82e8107610ef553eeb8ba9bc7.png",
                "ingame_image": {},
                "illustrator": "JiHun Lee",
                "rarity": "Common",
                "is_blue": true,
                "mana_cost": 3,
                "item_def": 110402,
                "references": []
            },
            {
                "card_id": 10403,
                "base_card_id": 10403,
                "card_type": "Spell",
                "card_name": "窃取力量",
                "card_text": "在本回合使一个单位-4攻击，另一个单位+4攻击。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10403.fe81c6a86cb1d4169ae6ff88a93a2e2a25d81639.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10403_large_schinese.8e7249a3ed017628d004828b5507e428cb91c502.png",
                "ingame_image": {},
                "illustrator": "Darek Zabrocki",
                "rarity": "Uncommon",
                "is_green": true,
                "mana_cost": 4,
                "item_def": 110403,
                "references": []
            },
            {
                "card_id": 10404,
                "base_card_id": 10404,
                "card_type": "Spell",
                "card_name": "夜色掩护",
                "card_text": "将一名<span style='font-weight:bold;color:#736e80;'>友方黑色英雄</span>移至另一条兵线。使该英雄+4攻击和+7攻城，直至其下个战斗阶段结束为止。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10404.917a223c290db560b84fd6dc9cb0ef81c8f923de.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10404_large_schinese.6f97ad4a0101295c3fc849d9475238d4d2d41939.png",
                "ingame_image": {},
                "illustrator": "Michael Kommark",
                "rarity": "Rare",
                "is_black": true,
                "mana_cost": 7,
                "item_def": 110404,
                "is_crosslane": true,
                "references": []
            },
            {
                "card_id": 10410,
                "base_card_id": 10410,
                "card_type": "Spell",
                "card_name": "杀戮",
                "card_text": "惩处一名小兵。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10410.46b3dbd57f450f80339cb519a4ead130fa1b9f15.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10410_large_schinese.d5f49eb2fd00ad5ee59b9075b36684faccbefa47.png",
                "ingame_image": {},
                "illustrator": "Jana Schirmer",
                "rarity": "Common",
                "is_black": true,
                "mana_cost": 3,
                "item_def": 110410,
                "references": []
            },
            {
                "card_id": 10411,
                "base_card_id": 10411,
                "card_type": "Spell",
                "card_name": "狡诈计谋",
                "card_text": "将一个单位与其一个友方近邻互换位置。抽一张牌。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10411.b368e1c356b807b14e8f9b5caa0520952665a1ba.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10411_large_schinese.2ee353d9a255206dbb27b38fe9a98d175df68b7f.png",
                "ingame_image": {},
                "illustrator": "Bayard Wu",
                "rarity": "Common",
                "is_blue": true,
                "mana_cost": 2,
                "item_def": 110411,
                "references": []
            },
            {
                "card_id": 10412,
                "base_card_id": 10412,
                "card_type": "Spell",
                "card_name": "雷霆风暴",
                "card_text": "对每个敌人造成4伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10412.f5c858ae960e7673a205aad44234446302aff52b.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10412_large_schinese.1f5b1cd271c66da347fbd36a8f28d65d3c41a4ab.png",
                "ingame_image": {},
                "illustrator": "James Paick",
                "rarity": "Uncommon",
                "is_blue": true,
                "mana_cost": 6,
                "item_def": 110412,
                "references": []
            },
            {
                "card_id": 10413,
                "base_card_id": 10413,
                "card_type": "Spell",
                "card_name": "冲锋陷阵",
                "card_text": "在本回合使友方单位+2攻城。将所有友方单位的战斗目标改为其面对的单位或塔。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10413.c46d017872b543a8efdad0216390aa5c042bea76.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10413_large_schinese.4970eafda852a989afd21a1d3911e7a4a629b5da.png",
                "ingame_image": {},
                "illustrator": "Darek Zabrocki",
                "rarity": "Uncommon",
                "is_black": true,
                "mana_cost": 3,
                "item_def": 110413,
                "references": []
            },
            {
                "card_id": 10415,
                "base_card_id": 10415,
                "card_type": "Spell",
                "card_name": "连带伤害",
                "card_text": "修改一名<span style='font-weight:bold;color:#736e80;'>黑色英雄</span>，使其+3攻城。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10415.a6305f5512db64444a0c194ba0ccdc2344db5982.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10415_large_schinese.667891d54d07c4db7e77ab28604aa193ccb6af63.png",
                "ingame_image": {},
                "illustrator": "JiHun Lee",
                "rarity": "Common",
                "is_black": true,
                "mana_cost": 4,
                "item_def": 110415,
                "references": []
            },
            {
                "card_id": 10416,
                "base_card_id": 10416,
                "card_type": "Spell",
                "card_name": "追踪术",
                "card_text": "使一名英雄+10赏金，直至其死亡为止。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10416.8f88364e5965d259e430f6fb7ad5dbf2b94f4897.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10416_large_schinese.b0fe7f42c805d2368080aae305007a3c9882bd03.png",
                "ingame_image": {},
                "illustrator": "E.M. Gist",
                "is_black": true,
                "mana_cost": 3,
                "references": []
            },
            {
                "card_id": 10417,
                "base_card_id": 10417,
                "card_type": "Spell",
                "card_name": "触发陷阱",
                "card_text": "召唤两名<span style='font-weight:bold;color:#ffffff;'>半人马猎手</span>至任意兵线。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10417.3bb06854667838b027dad31132cbad624db632aa.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10417_large_schinese.958b30ced2a56c5425b48f492b1323e0e988dbf2.png",
                "ingame_image": {},
                "illustrator": "James Paick",
                "rarity": "Rare",
                "is_red": true,
                "mana_cost": 7,
                "item_def": 110417,
                "is_crosslane": true,
                "references": [
                    {
                        "card_id": 10082,
                        "ref_type": "references"
                    }
                ]
            },
            {
                "card_id": 10418,
                "base_card_id": 10418,
                "card_type": "Spell",
                "card_name": "腹语术",
                "card_text": "选择一个单位，使其嘲讽。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10418.49e5b7a64bab65e273790967eefbe6519834b1be.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10418_large_schinese.3969823867cf5a1a0c982d115485617977a64a54.png",
                "ingame_image": {},
                "illustrator": "Daarken",
                "rarity": "Common",
                "is_blue": true,
                "mana_cost": 1,
                "item_def": 110418,
                "references": []
            },
            {
                "card_id": 10419,
                "base_card_id": 10419,
                "card_type": "Spell",
                "card_name": "粘稠鼻液",
                "card_text": "修改一个单位，使其-2护甲。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10419.a0f45edfd1ce9f4c5a4b76aabef2cd1547c97b3c.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10419_large_schinese.f92e37e658058c6014573bbb32335886abaf2268.png",
                "ingame_image": {},
                "illustrator": "JiHun Lee",
                "is_red": true,
                "mana_cost": 4,
                "references": []
            },
            {
                "card_id": 10420,
                "base_card_id": 10420,
                "card_type": "Spell",
                "card_name": "藐视权威",
                "card_text": "在本回合沉默一个单位。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10420.db2bf2627a080daf9e0450d6a31c900b399c691f.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10420_large_schinese.1305ece72043f8d98d6644ae29d71b40ebcaccbd.png",
                "ingame_image": {},
                "illustrator": "Chris Rahn",
                "is_green": true,
                "mana_cost": 5,
                "references": []
            },
            {
                "card_id": 10421,
                "base_card_id": 10421,
                "card_type": "Spell",
                "card_name": "致残重击",
                "card_text": "修改一名英雄，使其-2攻击。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10421.e6a42fc87173f4164243d57a45cf89d8a358d5b7.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10421_large_schinese.3c00bef194386caee07369ad956e9fd574f66057.png",
                "ingame_image": {},
                "illustrator": "Daarken",
                "rarity": "Common",
                "is_red": true,
                "mana_cost": 4,
                "item_def": 110421,
                "references": []
            },
            {
                "card_id": 10422,
                "base_card_id": 10422,
                "card_type": "Spell",
                "card_name": "疯狂低语",
                "card_text": "在本回合晕眩一个敌人并晕眩所有兵线上的友方英雄。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10422.9018863f6be78374fece2b22128e8852758f403b.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10422_large_schinese.fa0ad8c644655f5a598b5d62c7e494c4f1f4561a.png",
                "ingame_image": {},
                "illustrator": "Daarken",
                "rarity": "Rare",
                "is_blue": true,
                "mana_cost": 2,
                "item_def": 110422,
                "references": []
            },
            {
                "card_id": 10424,
                "base_card_id": 10424,
                "card_type": "Spell",
                "card_name": "不惜代价",
                "card_text": "对每个单位造成6伤害。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10424.7244d7e2675379a410e7345ccdc2f7a5a3f3e1f1.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10424_large_schinese.50447aaeffc66dc00cc949028880a070dafe347f.png",
                "ingame_image": {},
                "illustrator": "Livia Prima",
                "rarity": "Rare",
                "is_blue": true,
                "mana_cost": 3,
                "item_def": 110424,
                "references": []
            },
            {
                "card_id": 10425,
                "base_card_id": 10425,
                "card_type": "Spell",
                "card_name": "胜利时刻",
                "card_text": "修改友方英雄，使其+4攻击、+4护甲、+4生命、+4顺势、+4反伤和+4攻城。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10425.29bba0f40f9f65b3e7dc0233da209bdbc4a8742a.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10425_large_schinese.38b5be8acffd65ec68a25fa2daf05f5463d30a6c.png",
                "ingame_image": {},
                "illustrator": "Darek Zabrocki",
                "rarity": "Rare",
                "is_red": true,
                "mana_cost": 8,
                "item_def": 110425,
                "references": []
            },
            {
                "card_id": 10536,
                "base_card_id": 10536,
                "card_type": "Hero",
                "card_name": "风暴之灵",
                "card_text": "<span style='font-weight:bold;color:#ffffff;'>超负荷</span><br/>在任意兵线上打出一张<span style='font-weight:bold;color:#736e80;'>黑色卡牌</span>后，使风暴之灵+2攻击，直至其下个战斗阶段结束为止。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10536.f29d6a820bf65991ea122a1efdb61088651d2706.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10536_large_schinese.cddf8cdb9cd1e68a5670491f9fef93cf395f659a.png",
                "ingame_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10536_ingame.0c88cb2ca6dcdab778a528e716d39210ed46c618.png"
                },
                "illustrator": "JiHun Lee",
                "rarity": "Rare",
                "is_black": true,
                "item_def": 110536,
                "attack": 4,
                "hit_points": 6,
                "references": [
                    {
                        "card_id": 10538,
                        "ref_type": "includes",
                        "count": 3
                    },
                    {
                        "card_id": 10537,
                        "ref_type": "passive_ability"
                    }
                ]
            },
            {
                "card_id": 10537,
                "base_card_id": 10537,
                "card_type": "Passive Ability",
                "card_name": "超负荷",
                "card_text": "在任意兵线上打出一张<span style='font-weight:bold;color:#736e80;'>黑色卡牌</span>后，使风暴之灵+2攻击，直至其下个战斗阶段结束为止。",
                "mini_image": {},
                "ingame_image": {},
                "references": []
            },
            {
                "card_id": 10538,
                "base_card_id": 10538,
                "card_type": "Spell",
                "card_name": "球状闪电",
                "card_text": "将一名<span style='font-weight:bold;color:#736e80;'>友方黑色英雄</span>移至任意兵线上的一个空白战斗位置。",
                "mini_image": {
                    "default": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10538.aeb7a6a47e1d8b1a26307ae25e329df3e3bb0843.png"
                },
                "large_image": "https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10538_large_schinese.ded6844ded64bf9fe4e824ca0dd5f031d68dc938.png",
                "ingame_image": {},
                "illustrator": "JiHun Lee",
                "is_black": true,
                "mana_cost": 3,
                "is_crosslane": true,
                "references": []
            }
        ]
    }
}