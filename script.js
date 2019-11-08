const callback = function(){

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function roll(dice){
    switch (dice) {
      case 'd2':
        return Math.ceil(Math.random() * 2)
      case 'd3':
        return Math.ceil(Math.random() * 3)
      case 'd4':
        return Math.ceil(Math.random() * 4)
      case 'd6':
        return Math.ceil(Math.random() * 6)
      case 'd8':
        return Math.ceil(Math.random() * 8)
      case 'd10':
        return Math.ceil(Math.random() * 10)
      case 'd12':
        return Math.ceil(Math.random() * 12)
      case 'd20':
        return Math.ceil(Math.random() * 20)
      default:
        console.log('What kind of dice is that?')
    }
  }

  const normal_info = document.getElementById('normal-info')
  const special_info = document.getElementById('special-info')

  const races = ['Dwarven','Elven','Halfling','Human','Dragonborn','Gnomish','Half-Elf','Half-Orc','Tiefling']
  const classes = [
    {name:'Barbarian', ability: "Strength"},
    {name:'Bard', ability: "Charisma"},
    {name:'Cleric', ability: "Wisdom"},
    {name:'Druid', ability: "Wisdom"},
    {name:'Fighter', ability: "Strength"},
    {name:'Fighter', ability: "Dexterity"},
    {name:'Monk', ability: "Dexterity"},
    {name:'Paladin', ability: "Strength"},
    {name:'Ranger', ability: "Dexterity"},
    {name:'Rouge', ability: "Dexterity"},
    {name:'Sorcerer', ability: "Charisma"},
    {name:'Warlock', ability: "Charisma"},
    {name:'Wizard', ability: "Intellegence"}
  ]
  const armor = [
    {name: "Chain Mail", description: "16 AC; 13 Strength required; Stealth disadvantage; 55lbs.", type: "armor", ac: 16, max_dex: 0},
    {name: "Chain Shirt", description: "13 AC + Dexterity ÷ 2 (max 2); 20lbs.", type: "armor", ac: 13, max_dex: 2},
    {name: "Hide Armor", description: "12 AC + Dexterity ÷ 2 (max 2); 12lbs.", type: "armor", ac: 12, max_dex: 2},
    {name: "Leather Armor", description: "11 AC + Dexterity ÷ 2; 10lbs.", type: "armor", ac: 11, max_dex: 2},
    {name: "Shield", description: "+2 AC; 6lbs.", type: "shield", ac: 2}
  ]
  const weapons = [
    {name: "Battleaxe", description: "1d6 piercing; Thrown (range 20/60), versatile (1d8); Martial; 3lbs."},
    {name: "Club", description: "1d4 bludgeoning; Light; Simple; 2lbs."},
    {name: "Dagger", description: "1d4 piercing; Finesse, light, thrown (range 20/60); Simple; 1lb."},
    {name: "Flail", description: "1d8 bludgeoning; Martial; 2lbs."},
    {name: "Glaive", description: "1d10 slashing; Heavy, reach, two-handed; Martial; 6lbs."},
    {name: "Greatclub", description: "1d8 bludgeoning; Two-handed; Simple; 10lbs."},
    {name: "Greataxe", description: "1d12 slashing; Heavy, two-handed; Martial; 7lbs."},
    {name: "Greatsword", description: "2d6 slashing; Heavy, two-handed; Martial; 6lbs."},
    {name: "Handaxe", description: "1d6 slashing; Light, thrown (range 20/60); Simple; 2lbs."},
    {name: "Heavy Crossbow", description: "1d10 piercing; Ammunition (range 100/400), heavy, loading, two-handed; Martial; 18lbs."},
    {name: "Light Crossbow", description: "1d8 piercing; Ammunition (range 50/200), loading, two-handed; Simple; 5lbs."},
    {name: "Light Hammer", description: "1d4 bludgeoning; Light, thrown (range 20/60); Simple; 2lbs."},
    {name: "Longbow", description: "1d8 piercing; Ammunition (range 150/600), heavy, two-handed; Martial; 2lbs."},
    {name: "Longsword", description: "1d8 slashing; Versatile (1d10); Martial; 3lbs."},
    {name: "Mace", description: "1d6 bludgeoning; Simple; 4lbs."},
    {name: "Maul", description: "2d6	bludgeoning; Heavy, two-handed; Martial; 10lbs."},
    {name: "Morningstar", description: "1d8 piercing; Martial; 4lbs."},
    {name: "Quarterstaff", description: "1d6 bludgeoning; Versatile (1d8); Simple; 4lbs."},
    {name: "Scimitar", description: "1d6 slashing; Finesse, light; Martial; 3lbs."},
    {name: "Shortbow", description: "1d6 piercing; Ammunition (range 80/320), two-handed; Simple; 2lbs."},
    {name: "Shortsword", description: "1d6 piercing; Finesse, light; Martial; 2lbs."},
    {name: "Sickle", description: "1d4 slashing; Light; Simple; 2lbs."},
    {name: "Sling", description: "1d4 bludgeoning; Ammunition (range 30/120); Simple; 0lbs."},
    {name: "Spear", description: "1d6 piercing; Thrown (range 20/60), versatile (1d8); Simple; 3lbs."},
    {name: "War Pick", description: "1d8 piercing; Martial; 2lbs."},
    {name: "Warhammer", description: "1d8 bludgeoning; Martial; 2lbs."}
  ]
  const equipment = [
    {name: "Thieves’ Tools", description: "This set of tools includes a small file, a set of lock picks, a small mirror mounted on a metal handle, a set of narrow-bladed scissors, and a pair of pliers. Proficiency with these tools lets you add	your proficiency bonus to any ability checks you make to disarm traps or open locks."}
  ]
  const metamagic = [
    {name: "Metamagic: Careful Spell", description: "When you cast a spell that forces other creatures to make a saving throw, you can protect some of those creatures from the spell’s full force. To do so, choose a number of those creatures up to your Charisma modifier (minimum of one creature). A chosen creature automatically succeeds on its saving throw against the spell."},
    {name: "Metamagic: Distant Spell", description: "When you cast a spell that has a range of 5 feet or greater, you can double the range of the spell. When you cast a spell that has a range of touch, you can cast it with a range of 30 feet."},
    {name: "Metamagic: Empowered Spell", description: "When you roll damage for a spell, you can reroll the damage dice. You must use the new rolls."},
    {name: "Metamagic: Extended Spell", description: "When you cast a spell that has a duration of 1 minute or longer, you can double its duration, to a maximum duration of 24 hours."},
    {name: "Metamagic: Heightened Spell", description: "When you cast a spell that forces a creature to make a saving throw to resist its effects, you can give one target of the spell disadvantage on its first saving throw made against the spell."},
    {name: "Metamagic: Quickened Spell", description: "When you cast a spell that has a casting time of 1 action, you can change the casting time to 1 bonus action for this casting."},
    {name: "Metamagic: Subtle Spell", description: "When you cast a spell, you can cast it without any somatic or verbal components."},
    {name: "Metamagic: Twinned Spell", description: "When you cast a spell that targets only one creature and doesn’t have a range of self, you can target a second creature in range with the same spell. To be eligible, a spell must be incapable of targeting more than one creature at the spell’s current level. For example, magic missile and scorching ray aren’t eligible, but ray of frost is."},
  ]
  const draconic_ancestry = ["Black - acid","Blue - lightning","Brass - fire","Bronze - lighting","Copper - acid","Gold - fire","Green - acid","Red - fire", "Silver - cold","White - cold"]

  let character = {}
  character.str = {name: "Strength", score: Math.ceil(Math.random() * 6)}
  character.dex = {name: "Dexterity", score: Math.ceil(Math.random() * 6)}
  character.con = {name: "Constitution", score: Math.ceil(Math.random() * 6)}
  character.int = {name: "Intellegence", score: Math.ceil(Math.random() * 6)}
  character.wis = {name: "Wisdom", score: Math.ceil(Math.random() * 6)}
  character.cha = {name: "Charisma", score: Math.ceil(Math.random() * 6)}

  character.race = races[Math.floor(Math.random() * races.length)]
  switch (character.race) {
    case "Dwarven":
        character.str.score ++
        character.cha.score --
      break;
    case "Elven":
        character.str.score --
        character.dex.score ++
        character.con.score --
        character.cha.score ++
      break;
    case "Halfling":
        character.str.score --
        character.dex.score ++
      break;
    case "Human":

      break;
    case "Dragonborn":
        character.str.score ++
        character.dex.score --
        character.wis.score --
        character.cha.score ++
      break;
    case "Gnomish":
        character.str.score --
        character.con.score ++
        character.int.score ++
        character.wis.score --
      break;
    case "Half-Elf":
        character.str.score --
        character.cha.score ++
      break;
    case "Half-Orc":
        character.str.score ++
        character.con.score ++
        character.int.score --
        character.cha.score --
      break;
    case "Tiefling":
        character.con.score --
        character.int.score ++
        character.wis.score --
        character.cha.score ++
      break;
    default:

  }

  character.hp = 10
  character.ac = 10 + Math.floor(character.dex.score/2)
  character.prof = ""
  character.features = []
  character.spells = []
  character.armor = []
  character.weapons = []
  character.equipment = []

  const class_abilities = [character.str, character.dex, character.int, character.wis, character.cha]
  let highest_abilities = []
  class_abilities.forEach(function(ability){
    if (highest_abilities.length > 0){
      if (ability.score > highest_abilities[0].score){
        highest_abilities = [ability]
      } else if (ability.score == highest_abilities[0].score){
        highest_abilities.push(ability)
      }
    } else {
      highest_abilities.push(ability)
    }
  })
  let possible_classes = []
  highest_abilities.forEach(function(ability){
    classes.filter(cls => cls.ability == ability.name).map(cls => possible_classes.push(cls))
  })

  character.class = possible_classes[Math.floor(Math.random() * possible_classes.length)].name
  //character.class = "Wizard"
  switch (character.class) {

    case "Barbarian":
      character.hp = (character.con.score * 4) + 10
      character.prof = "Proficient with all weapons, shields, and light and medium armor."
      character.features = [
        {name: "Reckless Attack", description: "You can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn."},
        {name: "Extra Attack", description: "You can attack twice, instead of once, whenever you take the Attack action on your turn."}
      ]
      character.armor.push(armor.find(armor => armor.name == 'Hide Armor'))
      switch (roll('d10')) {
        case 1:
          character.armor.push(armor.find(armor => armor.name == 'Shield'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Spear'))
          break;
        case 2:
          character.armor.push(armor.find(armor => armor.name == 'Shield'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Battleaxe'))
          break;
        case 3:
          character.armor.push(armor.find(armor => armor.name == 'Shield'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Flail'))
          break;
        case 4:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Greataxe'))
          break;
        case 5:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Greatsword'))
          break;
        case 6:
          character.armor.push(armor.find(armor => armor.name == 'Shield'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Longsword'))
          break;
        case 7:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Maul'))
          break;
        case 8:
          character.armor.push(armor.find(armor => armor.name == 'Shield'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Morningstar'))
          break;
        case 9:
          character.armor.push(armor.find(armor => armor.name == 'Shield'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'War Pick'))
          break;
        case 10:
          character.armor.push(armor.find(armor => armor.name == 'Shield'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Warhammer'))
          break;
        default:

      }
      break;

    case "Bard":
      character.hp = (character.con.score * 2) + 10
      character.prof = "Proficient with simple weapons and light armor."
      character.features = [
        {name: "Bardic Inspiration", description: "You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.<br/>Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time."}
      ]
      // 1 random Bard spell from each level 0–4
      for (let i=0; i<=4; i++){
        character.spells.push(shuffle(spells.filter(spell => spell.classes.find(cls => cls.name == character.class) && spell.level == i))[0])
      }
      character.armor.push(armor.find(armor => armor.name == 'Leather Armor'))
      character.weapons.push(weapons.find(weapon => weapon.name == 'Dagger'))
      switch (roll('d6')) {
        case 1:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Club'))
          break;
        case 2:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Dagger'))
          break;
        case 3:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Handaxe'))
          break;
        case 4:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Light Hammer'))
          break;
        case 5:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Quarterstaff'))
          break;
        case 6:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Sickle'))
          break;
        default:

      }
      switch (roll('d3')) {
        case 1:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Light Crossbow'))
          break;
        case 2:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Shortbow'))
          break;
        case 3:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Sling'))
          break;
        default:

      }
      break;

    case "Cleric":
      character.hp = (character.con.score * 2) + 10
      character.prof = "Proficient with simple weapons, shields, and all armor."
      character.features = [
        {name: "Turn Undead", description: "As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.<br/>A turned creature must spend its turns trying to move as far away from you as it can, and it can’t willingly move to a space within 30 feet of you. It also can’t take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there’s nowhere to move, the creature can use the Dodge action."}
      ]
      // 1 random Cleric spell from each level 0–4
      for (let i=0; i<=4; i++){
        character.spells.push(shuffle(spells.filter(spell => spell.classes.find(cls => cls.name == character.class) && spell.level == i))[0])
      }
      character.armor.push(armor.find(armor => armor.name == 'Chain Shirt'))
      switch (roll('d4')) {
        case 1:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Greatclub'))
          break;
        case 2:
          character.armor.push(armor.find(armor => armor.name == 'Shield'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Handaxe'))
          break;
        case 3:
          character.armor.push(armor.find(armor => armor.name == 'Shield'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Mace'))
          break;
        case 4:
          character.armor.push(armor.find(armor => armor.name == 'Shield'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Spear'))
          break;
        default:

      }
      switch (roll('d3')) {
        case 1:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Light Crossbow'))
          break;
        case 2:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Shortbow'))
          break;
        case 3:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Sling'))
          break;
        default:

      }
      break;

    case "Druid":
      character.hp = (character.con.score * 2) + 10
      character.prof = "Proficient with simple weapons, shields, and light and medium armor."
      character.features = [
        {name: "Wild Shape", description: "You can use your action to magically assume the shape of a black bear, owl, or wolf. You can revert to your normal form by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.While you are transformed, the following rules apply:<br/>- Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores.<br/>- When you transform, you assume the beast’s hit points. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn’t reduce your normal form to 0 hit points, you aren’t knocked unconscious.<br/>- You can’t cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn’t break your concentration on a spell you’ve already cast, however, or prevent you from taking actions that are part of a spell, such as call lightning, that you’ve already cast.<br/>- You choose whether your equipment falls to the ground in your space, or merges into your new form. Equipment that merges with the form has no effect until you leave the form."}
      ]
      // 1 random Druid spell from each level 0–4
      for (let i=0; i<=4; i++){
        character.spells.push(shuffle(spells.filter(spell => spell.classes.find(cls => cls.name == character.class) && spell.level == i))[0])
      }
      character.armor.push(armor.find(armor => armor.name == 'Hide Armor'))
      switch (roll('d8')) {
        case 1:
          character.armor.push(armor.find(armor => armor.name == 'Shield'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Club'))
          break;
        case 2:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Handaxe'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Sling'))
          break;
        case 3:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Greatclub'))
          break;
        case 4:
          character.armor.push(armor.find(armor => armor.name == 'Shield'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Light Hammer'))
          break;
        case 5:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Mace'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Sling'))
          break;
        case 6:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Quarterstaff'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Sling'))
          break;
        case 7:
          character.armor.push(armor.find(armor => armor.name == 'Shield'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Sickle'))
          break;
        case 8:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Spear'))
          break;
        default:

      }
      break;

    case "Fighter":
      character.hp = (character.con.score * 3) + 10
      character.prof = "Proficient with all weapons and armor."
      character.features = [
        {name: "Superior Critical", description: "Your weapon attacks score a critical hit on a roll of 18–20."},
        {name: "Extra Attack", description: "You can attack twice, instead of once, whenever you take the Attack action on your turn."}
      ]
      character.armor.push(armor.find(armor => armor.name == 'Chain Mail'))
      character.weapons.push(weapons.find(weapon => weapon.name == 'Dagger'))
      switch (roll('d12')) {
        case 1:
          character.armor.push(armor.find(armor => armor.name == 'Shield'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Spear'))
          break;
        case 2:
          character.armor.push(armor.find(armor => armor.name == 'Shield'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Battleaxe'))
          break;
        case 3:
          character.armor.push(armor.find(armor => armor.name == 'Shield'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Flail'))
          break;
        case 4:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Glaive'))
          break;
        case 5:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Greataxe'))
          break;
        case 6:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Greatsword'))
          break;
        case 7:
          character.armor.push(armor.find(armor => armor.name == 'Shield'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Longsword'))
          break;
        case 8:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Maul'))
          break;
        case 9:
          character.armor.push(armor.find(armor => armor.name == 'Shield'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Morningstar'))
          break;
        case 10:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Shortsword'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Shortsword'))
          break;
        case 11:
          character.armor.push(armor.find(armor => armor.name == 'Shield'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'War Pick'))
          break;
        case 12:
          character.armor.push(armor.find(armor => armor.name == 'Shield'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Warhammer'))
          break;
        default:

      }
      switch (roll('d4')) {
        case 1:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Light Crossbow'))
          break;
        case 2:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Shortbow'))
          break;
        case 3:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Heavy Crossbow'))
          break;
        case 4:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Longbow'))
          break;
        default:

      }
      break;

    case "Monk":
      character.hp = (character.con.score * 2) + 10
      character.prof = "Proficient with simple weapons."
      character.features = [
        {name: "Unarmored Defense", description: "While you are wearing no armor and not wielding a shield, your AC equals 10 + half your Dexterity (round down) + your Wisdom."},
        {name: "Martial Arts", description: "Your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are any simple melee weapons that don’t have the two-handed or heavy property. You gain the following benefits while you are unarmed or wielding only monk weapons and you aren’t wearing armor or wielding a shield:<br/>- You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.<br/>- You can roll a d4 in place of the normal damage of your unarmed strikes.<br/>- When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven’t already taken a bonus action this turn."},
        {name: "Extra Attack", description: "You can attack twice, instead of once, whenever you take the Attack action on your turn."}

      ]
      character.weapons.push(weapons.find(weapon => weapon.name == 'Sling'))
      switch (roll('d4')) {
        case 1:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Club'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Club'))
          break;
        case 2:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Quarterstaff'))
          break;
        case 3:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Sickle'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Sickle'))
          break;
        case 4:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Shortsword'))
          break;
        default:

      }
      break;

    case "Paladin":
      character.hp = (character.con.score * 3) + 10
      character.prof = "Proficient with all weapons and armor."
      character.features = [
        {name: "Divine Smite", description: "When you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon’s damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend.<br/>If you’re using the spellcasting rules suggested in this document, treat Divine Smite as a 1st level spell that can be cast at higher levels."}
      ]
      // 1 random Paladin spell from each level 1–3
      for (let i=1; i<=3; i++){
        character.spells.push(shuffle(spells.filter(spell => spell.classes.find(cls => cls.name == character.class) && spell.level == i))[0])
      }
      character.armor.push(armor.find(armor => armor.name == 'Chain Mail'))
      switch (roll('d8')) {
        case 1:
          character.armor.push(armor.find(armor => armor.name == 'Shield'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Spear'))
          break;
        case 2:
          character.armor.push(armor.find(armor => armor.name == 'Shield'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Flail'))
          break;
        case 3:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Greatsword'))
          break;
        case 4:
          character.armor.push(armor.find(armor => armor.name == 'Shield'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Longsword'))
          break;
        case 5:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Maul'))
          break;
        case 6:
          character.armor.push(armor.find(armor => armor.name == 'Shield'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Morningstar'))
          break;
        case 7:
          character.armor.push(armor.find(armor => armor.name == 'Shield'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Warhammer'))
          break;
        case 8:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Shortsword'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Heavy Crossbow'))
          break;
        default:

      }
      break;

    case "Ranger":
      character.hp = (character.con.score * 3) + 10
      character.prof = "Proficient with all weapons, shields, and light and medium armor."
      character.features = [
        {name: "Extra Attack", description: "You can attack twice, instead of once, whenever you take the Attack action on your turn."}
      ]
      // 1 random Ranger spell from each level 1–3
      for (let i=1; i<=3; i++){
        character.spells.push(shuffle(spells.filter(spell => spell.classes.find(cls => cls.name == character.class) && spell.level == i))[0])
      }
      character.armor.push(armor.find(armor => armor.name == 'Hide Armor'))
      character.weapons.push(weapons.find(weapon => weapon.name == 'Longbow'))
      switch (roll('d6')) {
        case 1:
          character.armor.push(armor.find(armor => armor.name == 'Shield'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Battleaxe'))
          break;
        case 2:
          character.armor.push(armor.find(armor => armor.name == 'Shield'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Longsword'))
          break;
        case 3:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Scimitar'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Scimitar'))
          break;
        case 4:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Shortsword'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Shortsword'))
          break;
        default:

      }
      break;

    case "Rouge":
      character.hp = (character.con.score * 2) + 10
      character.prof = "Proficient with simple weapons, light armor, and thieves’ tools."
      character.features = [
        {name: "Expertise", description: "Double your ability score when using these skills: acrobatics, persuasion, sleight of hand, stealth, and thieves’ tools."},
        {name: "Sneak Attack", description: "You know how to strike subtly and exploit a foe’s distraction. Once per turn, you can deal an extra 2d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.<br/>You don’t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll."}
      ]
      character.armor.push(armor.find(armor => armor.name == 'Leather Armor'))
      character.equipment.push(equipment.find(item => item.name == 'Thieves’ Tools'))
      switch (roll('d3')) {
        case 1:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Light Crossbow'))
          break;
        case 2:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Shortbow'))
          break;
        case 3:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Sling'))
          break;
        default:

      }
      switch (roll('d4')) {
        case 1:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Club'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Dagger'))
          break;
        case 2:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Dagger'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Dagger'))
          break;
        case 3:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Handaxe'))
          break;
        case 4:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Quarterstaff'))
          break;
        default:

      }
      break;

    case "Sorcerer":
      character.hp = (character.con.score * 2) + 10
      character.prof = "Proficient with simple weapons."
      character.features = [
        metamagic[roll('d8')-1],
        {name: "Draconic Ancestry: "+draconic_ancestry[roll('d10')-1], description: "You are resistant to the energy type indicated by your Draconic Ancestry. Any time you cast a spell that deals damage with the energy type indicated by your Draconic Ancestry, you may add your charisma modifier to one of the damage rolls."}
      ]
      // 1 random Sorcerer spell from each level 0–4
      for (let i=0; i<=4; i++){
        character.spells.push(shuffle(spells.filter(spell => spell.classes.find(cls => cls.name == character.class) && spell.level == i))[0])
      }
      switch (roll('d4')) {
        case 1:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Club'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Light Crossbow'))
          break;
        case 2:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Dagger'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Light Crossbow'))
          break;
        case 3:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Handaxe'))
          break;
        case 4:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Quarterstaff'))
          break;
        default:

      }
      break;

    case "Warlock":
      character.hp = (character.con.score * 2) + 10
      character.prof = "Proficient with simple weapons and light armor."
      character.features = [
        {name: "Pact of the Blade", description: "You can use your action to create a pact weapon in your empty hand. You can choose the form that this melee weapon takes each time you create it. You are proficient with it while you wield it. This weapon counts as magical for the purposes of overcoming resistance and immunity to nonmagical attacks and damage.<br/>Your pact weapon disappears if it is more than 5 feet away from you for a minute or more. It also disappears if you use this feature again, if you dismiss the weapon (no action required), or if you die.<br/>You can transform one magic weapon into your pact weapon by performing a special ritual while you hold the weapon. You perform the ritual over the course of one hour. You can then dismiss the weapon, shunting it into an extradimensional space, and it appears whenever you create your pact weapon thereafter. You can't affect an artifact or sentient weapon in this way. The weapon ceases being your pact weapon if you die, if you perform the 1-hour ritual on a different weapon, or if you use a 1-hour ritual to break your bond with it. The weapon appears at your feet if it is in the extradimensional space when the bond breaks."}
      ]
      // 1 random Warlock spell from each level 0–4
      for (let i=0; i<=4; i++){
        character.spells.push(shuffle(spells.filter(spell => spell.classes.find(cls => cls.name == character.class) && spell.level == i))[0])
      }
      character.armor.push(armor.find(armor => armor.name == 'Leather Armor'))
      switch (roll('d4')) {
        case 1:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Sickle'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Light Crossbow'))
          break;
        case 2:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Dagger'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Light Crossbow'))
          break;
        case 3:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Handaxe'))
          break;
        case 4:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Quarterstaff'))
          break;
        default:

      }
      break;

    case "Wizard":
      character.hp = (character.con.score * 1) + 10
      character.prof = "Proficient with simple weapons."
      // 2 random Wizard spells from each level 0–4
      for (let i=0; i<=4; i++){
        character.spells.push(shuffle(spells.filter(spell => spell.classes.find(cls => cls.name == character.class) && spell.level == i))[0])
        character.spells.push(shuffle(spells.filter(spell => spell.classes.find(cls => cls.name == character.class) && spell.level == i))[1])
      }
      switch (roll('d4')) {
        case 1:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Club'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Sling'))
          break;
        case 2:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Dagger'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Dagger'))
          break;
        case 3:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Dagger'))
          character.weapons.push(weapons.find(weapon => weapon.name == 'Sling'))
          break;
        case 4:
          character.weapons.push(weapons.find(weapon => weapon.name == 'Quarterstaff'))
          break;
        default:

      }
      break;

  }
  character.max_hp = character.hp
  character.name = "Character Name"

  // figure out AC
  const shields = character.armor.filter(this_armor => this_armor.type == 'shield')
  const armors = character.armor.filter(this_armor => this_armor.type == 'armor')

  let armors_ac = []
  armors.forEach(function(this_armor){
    if (this_armor.max_dex < Math.floor(character.dex.score/2)){
      armors_ac.push(this_armor.ac + this_armor.max_dex)
    } else {
      armors_ac.push(this_armor.ac + Math.floor(character.dex.score/2))
    }
  })
  if (armors.length > 0){
    character.ac = Math.max(armors_ac)
  }

  let shields_ac = []
  shields.forEach(this_shield => shields_ac.push(this_shield.ac))
  if (shields.length > 0){
    character.ac += Math.max(shields_ac)
  }

  if (shields.length == 0 && armors.length == 0 && character.features.find(feature => feature.name == "Unarmored Defense") != null){
    character.ac = 10 + Math.floor(character.dex.score/2) + character.wis.score
  }

  // place info in DOM
  document.getElementById('character-name').innerHTML = character.name
  document.getElementById('race-and-class').innerHTML = character.race+' '+character.class
  document.getElementById('hp').innerHTML = character.hp
  document.getElementById('max-hp').innerHTML = '/'+character.max_hp
  document.getElementById('ac').innerHTML = character.ac
  // if (shields.length > 0){
  //   document.getElementById('bonus-ac').innerHTML += '('+(character.ac - Math.max(shields_ac))+'+'+Math.max(shields_ac)+')'
  // }

  document.getElementById('str').innerHTML += character.str.score
  document.getElementById('dex').innerHTML += character.dex.score
  document.getElementById('con').innerHTML += character.con.score
  document.getElementById('int').innerHTML += character.int.score
  document.getElementById('wis').innerHTML += character.wis.score
  document.getElementById('cha').innerHTML += character.cha.score

  if (character.prof){
    document.getElementById('proficiencies').innerHTML += character.prof
  }
  if (character.features.length > 0){
    document.getElementById('feature-list').classList.remove("hidden")
    character.features.forEach(feature => document.getElementById('features').innerHTML += '<li><p class="li-title">'+feature.name+'</p>'+feature.description+'</li>')
  }
  if (character.spells.length > 0){
    document.getElementById('spell-list').classList.remove("hidden")
    character.spells.forEach(function(spell){
      let spell_markup = '<li><p class="li-title">'+spell.name+'</p>'
      spell_markup += '<span class="secondary">Level:</span> '+spell.level+' (DC '+Math.max((spell.level * 5),1)+')'
      spell_markup += '<br/><span class="secondary">Casting Time:</span> '+spell.casting_time
      spell_markup += '<br/><span class="secondary">Range:</span> '+spell.range
      spell_markup += '<br/><span class="secondary">Duration:</span> '+spell.duration
      spell_markup += '<br/><span class="secondary">Requirements:</span> '+spell.components
      if (spell.concentration){
        spell_markup += ', Concentration'
      }
      if (spell.material != undefined){
        spell_markup += ', '+spell.material
      }
      spell_markup += '<br/><span class="secondary">Description:</span> '
      spell.desc.forEach(function(desc, i){
        if (i == 0){
          spell_markup += desc
        } else {
          spell_markup += '<br/>'+desc
        }
      })
      if (spell.higher_level){
        spell.higher_level.forEach(hl => spell_markup += '<br/>'+hl)
      }
      spell_markup += '</li>'
      document.getElementById('spells').innerHTML += spell_markup
    })
  }
  if (character.armor.length > 0 || character.weapons.length > 0 || character.equipment.length > 0){
    document.getElementById('equipment-list').classList.remove("hidden")
    if (character.armor.length > 0){
      character.armor.forEach(item => document.getElementById('equipment').innerHTML += '<li><p class="li-title">'+item.name+'</p>'+item.description+'</li>')
    }
    if (character.weapons.length > 0){
      character.weapons.forEach(item => document.getElementById('equipment').innerHTML += '<li><p class="li-title">'+item.name+'</p>'+item.description+'</li>')
    }
    if (character.equipment.length > 0){
      character.equipment.forEach(item => document.getElementById('equipment').innerHTML += '<li><p class="li-title">'+item.name+'</p>'+item.description+'</li>')
    }
  }

  // listen for click events
  document.addEventListener('click', function (event) {

    if (event.target.matches('.hp-button')){
      if (event.target.matches('#hp-down')){
        if (character.hp > 0){
          character.hp--
        }
      }
      if (event.target.matches('#hp-up')){
        if (character.hp < character.max_hp){
          character.hp++
        }
      }
      document.getElementById('hp').innerHTML = character.hp
    }

  })

}

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}
