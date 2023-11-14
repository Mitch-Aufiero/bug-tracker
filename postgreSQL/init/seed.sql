-- Insert data into Users table
INSERT INTO Users (username, password, email, first_name, last_name, role) VALUES
('admin', 'hashed_password_1', 'admin@example.com', 'John', 'Doe', 'Admin'),
('Murky', 'hashed_password_2', 'mrglwglwlg@example.com', 'Murky', 'Murkerson', 'Developer'),
('VanCleef', 'hashed_password_3', 'vc@example.com', 'Van', 'Cleef', 'Quality Assurance'),
('Hogger', 'hashed_password_4', 'hugger@example.com', 'Hogger', 'Gnoll', 'Developer'),
('IllidanStorm', 'hashed_password_5', 'thebetrayer@example.com', 'Illidan', 'Stormrage', 'Project Manager'),
('ThrallWarchief', 'hashed_password_6', 'earthwarder@example.com', 'Thrall', 'Doomhammer', 'Lead Developer'),
('JainaProud', 'hashed_password_7', 'jpride@example.com', 'Jaina', 'Proudmoore', 'Quality Assurance'),
('SylvanasWind', 'hashed_password_8', 'darklady@example.com', 'Sylvanas', 'Windrunner', 'Inforomation Security'),
('ArthasMenethil', 'hashed_password_9', 'frostmourne@example.com', 'Arthas', 'Menethil', 'System Administrator'),
('ChenStormstout', 'hashed_password_10', 'brewmaster@example.com', 'Chen', 'Stormstout', 'DevOps Engineer');


-- Insert data into Projects table
INSERT INTO Projects (name, description, created_by) VALUES
('Azeroth Revamp', 'Reworking the world of Warcraft', 4),
('Raids & Dungeons', 'Creating raid instances and dungeons.', 4),
('Class Rebalance', 'Balancing player classes so Warriors arent OP', 4);

-- Insert data into Bugs table
INSERT INTO Bugs (title, description, status, severity, type, project_id, reported_by, assigned_to) VALUES
('Broken Bridge in Elwynn', 'Bridge model missing textures.', 'New', 'Medium', 'Graphics Bug', 1, 2, 3),
('Stormwind Gate Glitch', 'Players can walk through Stormwind gates.', 'Confirmed', 'High', 'Functional Bug', 1, 3, 4),
('Floating Trees in Duskwood', 'Several trees are floating above ground.', 'In Progress', 'Low', 'Graphics Bug', 1, 4, 2),
('Underwater Lighting Issue', 'Lighting under water in Vashjir not rendering correctly.', 'New', 'Medium', 'Graphics Bug', 1, 5, 3),
('NPCs Walking Through Objects', 'NPCs in Orgrimmar walking through walls.', 'Confirmed', 'High', 'AI Bug', 1, 1, 4),
('Missing Textures in Icecrown', 'Various textures in Icecrown Citadel are missing.', 'In Progress', 'Critical', 'Graphics Bug', 1, 2, 3),
('Invisible Walls in Silithus', 'Invisible collision present in certain areas of Silithus.', 'New', 'Medium', 'Functional Bug', 1, 3, 4),
('Thunder Bluff Elevator Bug', 'Elevator in Thunder Bluff occasionally non-functional.', 'Confirmed', 'High', 'Functional Bug', 1, 4, 2),
('Zoning Issue in Tirisfal', 'Players get stuck when zoning into Tirisfal Glades.', 'In Progress', 'Critical', 'Functional Bug', 1, 5, 3),
('Quest Marker Misplacement', 'Quest markers showing incorrect locations in Westfall.', 'New', 'Low', 'UI Bug', 1, 1, 4),
('Molten Core Loot Error', 'Incorrect loot dropping from bosses in Molten Core.', 'New', 'Critical', 'Functional Bug', 2, 2, 3),
('Karazhan Door Bug', 'Door to Karazhan not opening after completing the event.', 'Confirmed', 'High', 'Functional Bug', 2, 3, 4),
('Naxxramas Glitching Boss', 'Boss in Naxxramas glitching through floor.', 'In Progress', 'Critical', 'AI Bug', 2, 4, 2),
('Blackrock Spire Pathing Issue', 'Mobs have pathing issues in Upper Blackrock Spire.', 'New', 'Medium', 'AI Bug', 2, 5, 3),
('AhnQiraj Gate Bug', 'Gates of AhnQiraj not opening on event trigger.', 'Confirmed', 'High', 'Functional Bug', 2, 1, 4),
('Dire Maul Instance Crash', 'Instance crashes when entering Dire Maul.', 'In Progress', 'Critical', 'Performance Bug', 2, 2, 3),
('Sunwell Plateau Lighting', 'Lighting issues in Sunwell Plateau affecting visibility.', 'New', 'Low', 'Graphics Bug', 2, 3, 4),
('Ulduar Missing Textures', 'Some textures in Ulduar are not loading.', 'Confirmed', 'Medium', 'Graphics Bug', 2, 4, 2),
('Black Temple Map Issue', 'Map not displaying correctly in Black Temple.', 'In Progress', 'Low', 'UI Bug', 2, 5, 3),
('ZulGurub NPC Bug', 'NPCs in ZulGurub not interacting properly.', 'New', 'High', 'AI Bug', 2, 1, 4),
('Rogue Energy Bug', 'Rogue energy not regenerating correctly.', 'New', 'High', 'Functional Bug', 3, 2, 3),
('Mage Spell Failure', 'Mage spells occasionally not casting.', 'Confirmed', 'Medium', 'Functional Bug', 3, 3, 4),
('Warrior Rage Issues', 'Warrior rage generation inconsistent.', 'In Progress', 'High', 'Functional Bug', 3, 4, 2),
('Priest Healing Bug', 'Priest healing spells not scaling correctly.', 'New', 'Critical', 'Functional Bug', 3, 5, 3),
('Hunter Pet Pathing', 'Hunter pets experiencing pathing issues.', 'Confirmed', 'Medium', 'AI Bug', 3, 1, 4),
('Warlock Spell Animation', 'Warlock spell animations not displaying.', 'In Progress', 'Low', 'Graphics Bug', 3, 2, 3),
('Paladin Ability Delay', 'Paladin abilities experiencing delays.', 'New', 'Medium', 'Functional Bug', 3, 3, 4),
('Shaman Totem Bug', 'Shaman totems not activating effects properly.', 'Confirmed', 'High', 'Functional Bug', 3, 4, 2),
('Druid Form Transition Issue', 'Issues with druid transitioning between forms.', 'In Progress', 'Critical', 'Functional Bug', 3, 5, 3),
('Death Knight Rune Glitch', 'Death Knight runes not recharging as intended.', 'New', 'High', 'Functional Bug', 3, 1, 4);
