/**
*	@filename	duriel.js
*	@author		Adpist
*	@desc		Either complete duriel or mf run her
*	@credits	Adpist, JeanMax / SiC-666 / Dark-f, Alogwe, Imba, Kolton, Larryw, Noah, QQValpen, Sam, YGM
*/

function duriel_requirements(mfRun) {
	/***** REQUIREMENTS ******/
	if (!me.getQuest(7, 0)) {
		if (!mfRun) {
			HordeDebug.logUserError("duriel", "andy isn't dead");
		}
		// Stop if still in Act 1
		return mfRun ? Sequencer.skip : Sequencer.stop;
	}

	if (!me.getQuest(13,0)) {
		if (!mfRun) {
			HordeDebug.logUserError("duriel", "summoner isn't dead");
		}
		// Stop if Summoner isn't done
		return mfRun ? Sequencer.skip : Sequencer.stop;
	}

	if (!mfRun && me.getQuest(14, 0)) {
		return Sequencer.skip;
	}
	if (mfRun &&!me.getQuest(15, 0)) {
			// Need Duriel Quest before MF
			return Sequencer.skip;
	}
	/***** END OF REQUIREMENTS ******/

	// We can process this sequence
	return Sequencer.ok;
}

function duriel(mfRun) {
	var i, cain, orifice, hole, npc, unit;

	if (!mfRun && Role.teleportingChar) {
		Quest.cubeStaff();
	}
	Town.repair();
	Party.wholeTeamInGame();

	Pather.teleport = true;

	if (mfRun || (!me.getQuest(14, 1) && !me.getQuest(14, 3) && !me.getQuest(14, 4))) {
		if (!me.inTown) {
			Town.goToTown();
		}

		if (Role.teleportingChar) {
			if (!mfRun) {
				// Travel to all WPs up to and including
				// Canyon of the Magi if I don't have them
				Travel.travel(5);
			}

			Pather.useWaypoint(46, true);
			Precast.doPrecast(true);

			//MF Travelling
			if (mfRun) {
				Travel.moveToExit(46, getRoom().correcttomb, false);

				if (!Pather.moveToPreset(me.area, 2, 152, -11, 3)) {
					return Sequencer.fail;
				}
				try {
					delay(250);
					unit = getUnit(2, 100);
				} catch (e) {
					 // Hole didn't appear, lets try again
					delay(1000);

					try {
						unit = getUnit(2, 100);
					} catch (e) {
						HordeDebug.logUserError("duriel", "hole not found");
						quit();
					}
				}

				if (unit) {
					for (i = 0; i < 3; i += 1) {
						if (me.area === unit.area) {
							Skill.cast(43, 0, unit);
						}

						if (me.area === 73) {
							break;
						}
					}
				}

				if (me.area !== 73 && !Pather.useUnit(2, 100, 73)) {
					Attack.clear(10);
					Pather.useUnit(2, 100, 73);
				}

				if (me.area !== 73)
					return Sequencer.fail;
			}
			// Quest Travelling
			else {
				Travel.clearToExit(46, getRoom().correcttomb, false);

				for (i = 0 ; i < 5 ; i += 1) {
					orifice = getPresetUnit(getRoom().correcttomb, 2, 152);

					if (orifice) {
						break;
					}

					delay(me.ping * 2 + 250);
				}

				while (getDistance(me.x, me.y, orifice.roomx * 5 + orifice.x, orifice.roomy * 5 + orifice.y) > 10) {
					try {
						Pather.moveToPreset(getRoom().correcttomb, 2, 152, 0, 0, false, false);
					} catch (e) {
						print(e);
					}
				}

				if (me.diff === 0) {
					Pather.teleport = false;
				}

				Role.makeTeamJoinPortal();
				delay(me.ping * 2 + 250);
				Communication.sendToList(HordeSystem.allTeamProfiles, "clear orifice");

				for (i = 0 ; i < 3 ; i += 1) {
					Attack.clear(25);
					Pather.moveToPreset(me.area, 2, 152, 0, 0, false, true);
				}
				// Horadric Staff
				if (!me.getQuest(10, 0)) {
					Quest.placeStaff();
				}

				for (i = 0 ; i < 30 ; i += 1) {
					delay(1000);
					hole =  getUnit(2, 100);
					delay(1000);
					Attack.clear(20);

					if (hole) {
						break;
					}
				}

				Party.secureWaitSynchro("orifice_clear");

				if (hole) {
					// Wait for BO
					delay(me.ping*2 + 1000);
					Precast.doPrecast(true);
					delay(me.ping*2 + 1000);
					Pather.useUnit(2, 100, 73);
				}
			}

			Pather.makePortal();
			delay(1500); // save the sorc!
		} else {
			Town.goToTown(2);

			// Talk to Cain when doing the quest
			if (!mfRun) {
				// Try more than once to interact with Cain
				while (!cain || !cain.openMenu()) { 
					Packet.flash(me.gid);
					Town.move(NPC.Cain);
					cain = getUnit(1, "deckard cain");
					delay(1000);
				}

				me.cancel();
			}

			Town.move("portalspot");

			if (!mfRun) {
				print("Waiting for Orifice TP.");

				var j = 0;

				while (me.area === 40) {
					delay(250);
					// Check for Team Members every 5 seconds
					if (j % 20 == 0) {
						Party.wholeTeamInGame();
					}

					j += 1;

					if (Communication.Questing.clearOrifice) {
						Pather.usePortal(getRoom().correcttomb, null)
					}
				}

				for (i = 0 ; i < 2 ; i += 1) {
					Attack.clear(25);
					Pather.moveToPreset(me.area, 2, 152, 0, 0, false, true);
				}

				Party.secureWaitSynchro("orifice_clear");
				Precast.doPrecast(true);
				Role.backToTown();
				print("Waiting for Duriel TP.");
			}

			while (!Pather.usePortal(73, null)) {
				delay(250);
				// Check for Team Members every 5 seconds
				if (j % 20 == 0) {
					Party.wholeTeamInGame();
				}

				j += 1;
			}
		}

		Party.wholeTeamInGame();
		Pather.teleport = true;
		Attack.clear(35);

		try {
			Attack.kill(211);
		} catch(e) {
			print(e);

			if (mfRun) {
				Attack.clear(35);
			}
			else {
				Attack.clearLevel();
			}
		}

		Pickit.pickItems();

		if (mfRun) {
			Role.backToTown();
			Town.move("waypoint");
			// Move off of waypoint so others can reach it
			Pather.moveTo(me.x + rand(-5, 5), me.y + rand(-5, 5));
		}
		else {
			Pather.teleport = false;

			Pather.moveTo(22579, 15706);
			Pather.moveTo(22577, 15649, 10);
			Pather.moveTo(22577, 15609, 10);

			npc = getUnit(1, "tyrael");

			if (!npc) {
				return Sequencer.fail;
			}

			for (i = 0; i < 3; i += 1) {
				if (getDistance(me, npc) > 3) {
					Pather.moveToUnit(npc);
				}

				npc.interact();
				delay(1000 + me.ping);
				me.cancel();

				if (Pather.getPortal(null)) {
					me.cancel();

					break;
				}
			}

			Role.backToTown();
		}
	}

	if (!mfRun) {
		Travel.changeAct(3);
	}

	return Sequencer.done;
}
