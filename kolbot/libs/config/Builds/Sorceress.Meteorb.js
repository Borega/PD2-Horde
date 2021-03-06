//	/d2bs/kolbot/libs/config/Builds/Class.Build.js

/**
*
* Instructions:	See /d2bs/kolbot/libs/config/Builds/README.txt
*
* Skill IDs:	See /d2bs/kolbot/sdk/skills.txt for a list of skill IDs.
*
* Stat IDs:
*
* 	Strength	= 0
* 	Energy		= 1
* 	Dexterity	= 2
* 	Vitality	= 3
*
*/
js_strict(true);

if (!isIncluded("common/Cubing.js")) { include("common/Cubing.js"); };
if (!isIncluded("common/Prototypes.js")) { include("common/Prototypes.js"); };
if (!isIncluded("common/Runewords.js")) { include("common/Runewords.js"); };
if (!isIncluded("common/Town.js")) { include("common/Town.js"); };

var AutoBuildTemplate = {

	1:	{
			//SkillPoints: [-1],								// This doesn't matter. We don't have skill points to spend at lvl 1
			//StatPoints: [-1,-1,-1,-1,-1],						// This doesn't matter. We don't have stat points to spend at lvl 1
			Update: function () {
				Config.StashGold 		= 200;							// Minimum amount of gold to stash.
				Config.TownCheck		= false;						// Don't go to town for more potions
				Config.AttackSkill		= [-1, 36, -1, 36, -1, 0, 0];	// At level 1 we start with a +1 Fire Bolt staff
				Config.LowManaSkill		= [0, 0];						// Hit stuff when out of Mana.
				Config.BeltColumn		= ["hp", "hp", "hp", "hp"];		// Keep tons of health potions!
				Config.MinColumn 		= [0, 0, 0, 0];
				Config.ScanShrines = [15, 13, 12, 14, 7, 6, 3, 2, 1];
				Config.OpenChests = false; // Might as well open em.
				Config.HPBuffer = 2; // Number of healing potions to keep in inventory.
				Config.MPBuffer = 4; // Number of healing potions to keep in inventory.
				Config.RejuvBuffer = 2; // Number of rejuvenation potions to keep in inventory.
				Config.UseMerc = true; // Use merc. This is ignored and always false in d2classic.
				Config.MercWatch = false; // Instant merc revive during battle.
				Config.HealHP = 95; // Go to a healer if under designated percent of life.
				Config.HealMP = 90; // Go to a healer if under designated percent of mana.
				Config.LowGold = 1000;
				Config.UseHP = 75; // Drink a healing potion if life is under designated percent.
				Config.UseRejuvHP = 50; // Drink a rejuvenation potion if life is under designated percent.
				Config.UseMP = 35; // Drink a mana potion if mana is under designated percent.
				Config.UseRejuvMP = 0; // Drink a rejuvenation potion if mana is under designated percent.
				Config.UseMercHP = 40; // Give a healing potion to your merc if his/her life is under designated percent.
				Config.UseMercRejuv = 0; // Give a rejuvenation potion to your merc if his/her life is under designated percent.
				Config.LifeChicken = 10; // Exit game if life is less or equal to designated percent.
				Config.ManaChicken = 0; // Exit game if mana is less or equal to designated percent.
				Config.MercChicken = 0; // Exit game if merc's life is less or equal to designated percent.
				Config.TownHP = 35; // Go to town if life is under designated percent.
				Config.TownMP = 0; // Go to town if mana is under designated percent.
				Config.PickRange = 30; // Pick radius
				Config.FastPick = false; // Check and pick items between attacks
				Config.Dodge = true; // Move away from monsters that get too close. Don't use with short-ranged attacks like Poison Dagger.
				Config.DodgeRange = 10; // Distance to keep from monsters.
				Config.DodgeHP = 50; // Dodge only if HP percent is less than or equal to Config.DodgeHP. 100 = always dodge.
				Config.BossPriority = false; // Set to true to attack Unique/SuperUnique monsters first when clearing
				Config.ClearType = 0; // Monster spectype to kill in level clear scripts (ie. Mausoleum). 0xF = skip normal, 0x7 = champions/bosses, 0 = all
				Config.FCR = 0; // 0 - disable, 1 to 255 - set value of faster cast rate
				Config.FHR = 0; // 0 - disable, 1 to 255 - set value of faster hit recovery
				Config.FBR = 0; // 0 - disable, 1 to 255 - set value of faster block recovery
				Config.IAS = 0; // 0 - disable, 1 to 255 - set value of increased attack speed
				Config.PacketCasting = 0; // 0 = disable, 1 = packet teleport, 2 = full packet casting.
				Config.PacketShopping = false; // Use packets to shop. Improves shopping speed.
				Config.WaypointMenu = true;
				Config.PrimarySlot = -1; // Set to use specific weapon slot as primary weapon slot: -1 = disabled, 0 = slot I, 1 = slot II
				Config.MFSwitchPercent = 0; // Boss life % to switch to non-primary weapon slot. Set to 0 to disable.
				Config.LogExperience = true; // Print experience statistics in the manager.
				Config.AutoMap = true; // Set to true to open automap at the beginning of the game.
			}
		},

	2:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
				Config.BeltColumn = ["hp", "hp", "hp", "mp"];
				Config.MPBuffer = 4;									// Need lots of mana for Teleport!
			}
		},

	3:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	4:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	5:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
				Config.LowGold			= 2000;
			}
		},

	6:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
				Config.MinColumn = [1, 1, 1, 1];						// Should have a belt by now
			}
		},

	7:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	8:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	9:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	10:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
				Config.LowGold = 10000;
				Config.StashGold = 1000;							// Minimum amount of gold to stash.
			}
		},

	11:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	12:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
				Config.AttackSkill = [-1, 47, -1, 47, -1, 0, 0];		// FireBall
				Config.LowManaSkill = [36, -1];							// Fire bolt when OoM
				Config.BeltColumn = ["hp", "hp", "mp", "mp"];
				Config.TownHP = 30;
			}
		},

	13:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	14:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	15:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	16:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
				Config.TownCheck		= true;						//go to town for more potions
			}
		},

	17:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	18:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
				
				Config.MPBuffer = 8;									// Need lots of mana for Teleport!
			}
		},

	19:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	20:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
				Config.LowGold = 20000;
				Config.StashGold = 2500;							// Minimum amount of gold to stash.
			}
		},

	21:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	22:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	23:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	24:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
				Config.BeltColumn = ["hp", "mp", "mp", "rv"];
				Config.AttackSkill = [56, 47, -1, 47, -1, 0, 0];		// Meteor + fireball
				Config.MinColumn = [2, 2, 2, 0];						// Should have a decent belt by now
			}
		},

	25:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	26:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	27:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	28:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	29:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	30:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
				Config.AttackSkill = [56, 64, 47, 64, 47, 56, 47];		// Final setup
				Config.MPBuffer = 4;									// Need lots of mana for Teleport!
				Config.LowGold = 40000;
				Config.StashGold = 5000;							// Minimum amount of gold to stash.
			}
		},

	31:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	32:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	33:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	34:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	35:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	36:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	37:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	38:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	39:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	40:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
				Config.LowGold = 70000;
				Config.StashGold = 7500;							// Minimum amount of gold to stash.
				Config.DodgeHP = 80;
			}
		},

	41:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	42:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	43:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	44:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	45:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
				Config.LowGold = 80000;
			}
		},

	46:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	47:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	48:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	49:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	50:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
				Config.LowGold = 100000;
				Config.StashGold = 10000;							// Minimum amount of gold to stash.
				Config.MinColumn = [3, 3, 3, 0];						// Should have a decent belt by now
				Config.BeltColumn = ["hp", "hp", "mp", "rv"]; 			// Start keeping rejuvs
			}
		},

	51:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	52:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	53:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	54:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	55:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
				Config.LowGold = 100000;
			}
		},

	56:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	57:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	58:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	59:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	60:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
				Config.LowGold = 150000;
				Config.StashGold = 15000;							// Minimum amount of gold to stash.
			}
		},

	61:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	62:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	63:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	64:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	65:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	66:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	67:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	68:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	69:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	70:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
				Config.MPBuffer = 2;									// Need lots of mana for Teleport!
				Config.LowGold = 200000;
				Config.StashGold = 20000;							// Minimum amount of gold to stash.
			}
		},

	71:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	72:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	73:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	74:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	75:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
				Config.LowGold = 250000;
				Config.StashGold = 25000;							// Minimum amount of gold to stash.
			}
		},

	76:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	77:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	78:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	79:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	80:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
				Config.LowGold = 300000;
				Config.StashGold = 30000;							// Minimum amount of gold to stash.
			}
		},

	81:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	82:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	83:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	84:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	85:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	86:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	87:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	88:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	89:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	90:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
				Config.HPBuffer = 0;									// Need lots of mana for Teleport!
				Config.MPBuffer = 0;									// Need lots of mana for Teleport!
			}
		},

	91:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	92:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	93:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	94:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	95:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	96:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	97:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	98:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		},

	99:	{
			SkillPoints: [-1],
			StatPoints: [-1,-1,-1,-1,-1],
			Update: function () {
			}
		}
};