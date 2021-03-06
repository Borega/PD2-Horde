
js_strict(true);

if (!isIncluded("common/Cubing.js")) { include("common/Cubing.js"); };
if (!isIncluded("common/Prototypes.js")) { include("common/Prototypes.js"); };
if (!isIncluded("common/Runewords.js")) { include("common/Runewords.js"); };

var AutoBuildTemplate = {

	1:	{
			//SkillPoints: [-1],										// This doesn't matter. We don't have skill points to spend at lvl 1
			//StatPoints: [-1,-1,-1,-1,-1],								// This doesn't matter. We don't have stat points to spend at lvl 1
			Update: function () {
				Config.TownCheck		= false;						// Don't go to town for more potions
				Config.StashGold 		= 200;							// Minimum amount of gold to stash.
				Config.AttackSkill		= [-1, 0, 0, 0, 0, -1, -1];
				Config.LowManaSkill		= [0, 0];						// Hit stuff when out of Mana.
				Config.ScanShrines		= [15, 13, 12, 14, 7, 6, 3, 2, 1];
				Config.BeltColumn		= ["hp", "hp", "hp", "hp"];		// Keep tons of health potions!
				Config.MinColumn 		= [0, 0, 0, 0];
				Config.OpenChests = false;								// Might as well open em.
				Config.Skeletons = "max"; // Number of skeletons to raise. Set to "max" to auto detect, set to 0 to disable.
				Config.SkeletonMages = "max"; // Number of skeleton mages to raise. Set to "max" to auto detect, set to 0 to disable.
				Config.Revives = "max"; // Number of revives to raise. Set to "max" to auto detect, set to 0 to disable.
				Config.ActiveSummon = true; // Raise dead between each attack. If false, it will raise after clearing a spot.
				Config.ReviveUnstackable = true; // Revive monsters that can move freely after you teleport.
			}
		},

	2:	{
						SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

				Config.BeltColumn = ["hp", "hp", "mp", "mp"];
			}
		},

	3:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {
			Config.Dodge = true;
			Config.Curse[0] = 66; // Boss curse.

			}
		},

	4:	{
				SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	5:	{
						SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {
				Config.ScanShrines = [15, 13, 12];
				Config.MinColumn = [1, 1, 1, 0];
			}
		},

	6:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {
			Config.Golem = "Clay";
			}
		},

	7:	{
						SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {
				//Config.PickitFiles.splice(Config.PickitFiles.indexOf("belowlevelseven.nip"), 1);	// Will remove index "belowlevel7.nip" from Config.PickitFiles
			}
		},

	8:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	9:	{
						SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	10:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {
				Config.LowGold = 5000;
			}
		},

	11:	{
			SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	12:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {
			Config.StashGold 		= 1000;
			Config.BeltColumn		= ["hp", "hp", "mp", "mp"];
			Config.ExplodeCorpses = 74; // Explode corpses. Use skill number or 0 to disable. 74 = Corpse Explosion, 83 = Poison Explosion
			Config.HPBuffer = 4; // Number of healing potions to keep in inventory.
			Config.Curse[1] = 66; // Other monsters curse. Use skill number or set to 0 to disable.
			}
		},

	13:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	14:	{
				SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	15:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {
			Config.HPBuffer = 2; // Number of healing potions to keep in inventory.
			Config.MPBuffer = 8; // Number of mana potions to keep in inventory.
			Config.Dodge = true;
			Config.AttackSkill = [-1, 74, -1, 74, -1, -1, -1];						// Eyes on the prize!
			}
		},

	16:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {
			Config.MinColumn[0] = 1;
			Config.MinColumn[1] = 1;
			Config.MinColumn[2] = 1;
			Config.MinColumn[3] = 1;
			}
		},

	17:	{
						SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	18:	{
						SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {
			Config.TownCheck = true; // Go to town if out of potions
			Config.Cubing = true;
			}
		},

	19:	{
				SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	20:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {
				Config.LowGold = 10000;
			}
		},

	21:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	22:	{
						SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	23:	{
				SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	24:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {
				Config.Curse[0] = 87; // Boss curse. Use skill number or set to 0 to disable.
				Config.Curse[1] = 87; // Other monsters curse. Use skill number or set to 0 to disable.
			}
		},

	25:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {
				Config.LowGold = 15000;
			}
		},

	26:	{
						SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	27:	{
				SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	28:	{
				SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {
				Config.BeltColumn = ["hp", "mp", "mp", "rv"]; 			// Start keeping rejuvs
			}
		},

	29:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	30:	{
						SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {
				Config.LowGold = 20000;
			Config.Curse[0] = 91; // Boss curse. Use skill number or set to 0 to disable.
			Config.Curse[1] = 91; // Other monsters curse. Use skill number or set to 0 to disable.
			}
		},

	31:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	32:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	33:	{
						SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	34:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	35:	{
						SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {
				Config.LowGold = 30000;
			}
		},

	36:	{
						SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	37:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {
				Config.Dodge = true;
			}
		},

	38:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	39:	{
						SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	40:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {
				Config.LowGold = 35000;
			}
		},

	41:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	42:	{
						SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	43:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	44:	{
						SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	45:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {
				Config.LowGold = 40000;
			}
		},

	46:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	47:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	48:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	49:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	50:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {
				Config.LowGold = 45000;
			}
		},

	51:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	52:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	53:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	54:	{
						SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	55:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {
				Config.LowGold = 50000;
			}
		},

	56:	{
						SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	57:	{
				SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	58:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	59:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	60:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {
				Config.LowGold = 55000;
			}
		},

	61:	{
				SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	62:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	63:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	64:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	65:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {
				Config.LowGold = 60000;
			}
		},

	66:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	67:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	68:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	69:	{
				SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	70:	{
				SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {
				Config.LowGold = 100000;
			}
		},

	71:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	72:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	73:	{
						SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	74:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	75:	{
						SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	76:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	77:	{
						SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	78:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	79:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	80:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {
				//Config.ScanShrines	= [];
			}
		},

	81:	{
						SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	82:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	83:	{
						SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	84:	{
				SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	85:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	86:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	87:	{
				SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	88:	{
				SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	89:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	90:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	91:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	92:	{
				SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	93:	{
					SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	94:	{
			SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		},

	95:	{
			SkillPoints: [-1],											//
			StatPoints: [-1, -1, -1, -1, -1],								// Vitality + 5
			Update: function () {

			}
		},

	96:	{
			SkillPoints: [-1],											//
			StatPoints: [-1, -1, -1, -1, -1],								// Vitality + 5
			Update: function () {

			}
		},

	97:	{
			SkillPoints: [-1],											//
			StatPoints: [-1, -1, -1, -1, -1],								// Vitality + 5
			Update: function () {

			}
		},

	98:	{
			SkillPoints: [-1],											//
			StatPoints: [-1, -1, -1, -1, -1],								// Vitality + 5
			Update: function () {

			}
		},

	99:	{
			SkillPoints: [-1],
			StatPoints: [-1, -1, -1, -1, -1],
			Update: function () {

			}
		}
};