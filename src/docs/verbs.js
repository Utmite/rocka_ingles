const obj = {
  verbs: [
    [
      'Verb', 'Arise', 'Awake', 'Be, am, are, is', 'Bear', 'Beat',
      'Become', 'Begin', 'Bend', 'Bet', 'Bind', 'Bid', 'Bite', 'Bleed',
      'Blow', 'Break', 'Breed', 'Bring', 'Broadcast', 'Build', 'Burn',
      'Burst', 'Buy', 'Cast', 'Catch', 'Come', 'Cost', 'Cut', 'Choose',
      'Cling', 'Creep', 'Deal', 'Dig', 'Do', 'Draw', 'Dream', 'Drink',
      'Drive', 'Eat', 'Fall', 'Feed', 'Feel', 'Fight', 'Find', 'Flee',
      'Fly', 'Forbid', 'Forget', 'Forgive', 'Freeze', 'Get', 'Give',
      'Go', 'Grow', 'Grind', 'Hang', 'Have', 'Hear', 'Hide', 'Hit', 'Hold',
      'Hurt', 'Keep', 'Know', 'Kneel', 'Knit', 'Lay', 'Lead', 'Lean', 'Leap',
      'Learn', 'Leave', 'Lend', 'Let', 'Lie', 'Light', 'Lose', 'Make', 'Mean',
      'Meet', 'Mistake', 'Overcome', 'Pay', 'Put', 'Read', 'Ride', 'Ring',
      'Rise', 'Run', 'Say', 'See', 'Seek', 'Sell', 'Send', 'Set', 'Sew',
      'Shake', 'Shear', 'Shine', 'Shoot', 'Show', 'Shrink', 'Shut', 'Sing',
      'Sink', 'Sit', 'Sleep', 'Slide', 'Smell', 'Sow', 'Speak', 'Speed',
      'Spell', 'Spend', 'Spill', 'Spin', 'Spit', 'Split', 'Spoil',
      'Spread', 'Spring', 'Stand', 'Steal', 'Stick', 'Sting', 'Stink',
      'Stride', 'Strike', 'Swear', 'Sweat', 'Sweep', 'Swell',
      'Swim', 'Swing', 'Take', 'Teach', 'Tear', 'Tell', 'Think', 'Throw',
      'Thrust', 'Tread', 'Understand', 'Undergo', 'Undertake', 'Wake', 'Wear', 'Weave',
      'Weep', 'Wet', 'Win', 'Wind', 'Withdraw', 'Wring', 'Write',
    ],
    [
      'Simple past', 'Arose', 'Awoke', 'Was / Were', 'Bore', 'Beat',
      'Became', 'Began', 'Bent', 'Bet', 'Bound', 'Bid', 'Bit', 'Bled',
      'Blew', 'Broke', 'Bred', 'Brought', 'Broadcast', 'Built', 'Burnt / Burned',
      'Burst', 'Bought', 'Cast', 'Caught', 'Came', 'Cost', 'Cut', 'Chose',
      'Clung', 'Crept', 'Dealt', 'Dug', 'Did', 'Drew', 'Dreamt / Dreamed',
      'Drank', 'Drove', 'Ate', 'Fell', 'Fed', 'Felt', 'Fought', 'Found',
      'Fled', 'Flew', 'Forbade', 'Forgot', 'Forgave', 'Froze', 'Got',
      'Gave', 'Went', 'Grew', 'Ground', 'Hung', 'Had', 'Heard', 'Hid', 'Hit',
      'Held', 'Hurt', 'Kept', 'Knew', 'Knelt', 'Knit', 'Laid', 'Led', 'Leant',
      'Leapt', 'Learnt / Learned', 'Left', 'Lent', 'Let', 'Lay', 'Lit', 'Lost',
      'Made', 'Meant', 'Met', 'Mistook', 'Overcame', 'Paid', 'Put', 'Read',
      'Rode', 'Rang', 'Rose', 'Ran', 'Said', 'Saw', 'Sought', 'Sold', 'Sent',
      'Set', 'Sewed', 'Shook', 'Shore', 'Shone', 'Shot', 'Showed', 'Shrank',
      'Shut', 'Sang', 'Sank', 'Sat', 'Slept', 'Slid', 'Smelt', 'Sowed', 'Spoke',
      'Sped', 'Spelt', 'Spent', 'Split / Spilled', 'Spun', 'Spat', 'Split',
      'Spoilt', 'Spread', 'Sprang', 'Stood', 'Stole', 'Stuck', 'Stung',
      'Stank / Stunk', 'Strode', 'Struck', 'Swore', 'Sweat', 'Swept',
      'Swelled', 'Swam', 'Swung', 'Took', 'Taught', 'Tore', 'Told',
      'Thought', 'Threw', 'Thrust', 'Trod', 'Understood', 'Underwent', 'Undertook',
      'Woke', 'Wore', 'Wove', 'Wept', 'Wet', 'Won', 'Wound', 'Withdrew',
      'Wrung', 'Wrote',
    ],
    [
      'Past participle', 'Arise', 'Awoke', 'Been', 'Borne / Born', 'Beaten', 'Become', 'Begun', 'Bent',
      'Bet', 'Bound', 'Bid', 'Bitten', 'Bled', 'Blown', 'Broken', 'Bred',
      'Brought', 'Broadcast', 'Built', 'Burnt / Burned', 'Burst', 'Bought', 'Cast', 'Caught',
      'Come', 'Cost', 'Cut', 'Chosen', 'Clung', 'Crept', 'Dealt', 'Dug', 'Done',
      'Drawn', 'Dreamt / Dreamed', 'Drunk', 'Driven', 'Eaten', 'Fallen', 'Fed',
      'Felt', 'Fought', 'Found', 'Fled', 'Flown', 'Forbidden', 'Forgotten',
      'Forgiven', 'Frozen', 'Got', 'Given', 'Gone', 'Grown', 'Ground', 'Hung',
      'Had', 'Heard', 'Hidden', 'Hit', 'Held', 'Hurt', 'Kept', 'Known', 'Knelt',
      'Knit', 'Laid', 'Led', 'Leant', 'Leapt', 'Learnt / Learned', 'Left', 'Lent',
      'Let', 'Lain', 'Lit', 'Lost', 'Made', 'Meant', 'Met', 'Mistaken', 'Overcome',
      'Paid', 'Put', 'Read', 'Ridden', 'Rung', 'Risen', 'Run', 'Said', 'Seen',
      'Sought', 'Sold', 'Sent', 'Set', 'Sewed / Sewn', 'Shaken', 'Shorn', 'Shone',
      'Shot', 'Shown', 'Shrunk', 'Shut', 'Sung', 'Sunk', 'Sat', 'Slept', 'Slid', 'Smelt',
      'Sowed / Sown', 'Spoken', 'Sped', 'Spelt', 'Spent', 'Split', 'Spun',
      'Spat', 'Split', 'Spoilt / Spoiled', 'Spread', 'Sprung', 'Stood', 'Stolen',
      'Stuck', 'Stung', 'Stunk', 'Stridden', 'Struck', 'Swoen', 'Sweat', 'Swept',
      'Swollen', 'Swum', 'Swung', 'Taken', 'Taught', 'Torn', 'Told', 'Thought', 'Thrown',
      'Thrust', 'Trodden', 'Understood', 'Undergone', 'Undertaken', 'Woke', 'Worn',
      'Woven', 'Wept', 'Wet', 'Won', 'Wound', 'Withdrawn', 'Wrung', 'Written',
    ],
    [
      'Spanish', 'Surgir / Levantarse', 'Despertar', 'Ser / Estar', 'Soportar, Dar a luz', 'Golpear', 'LLegar a ser', 'Empezar', 'Doblar', 'Apostar', 'Atar', 'Pujar', 'Morder', 'Sangrar', 'Soplar',
      'Romper', 'Criar', 'Traer / Llevar', 'Radiar', 'Edificar', 'Quemar', 'Reventar', 'Comprar', 'Arrojar', 'Coger', 'Venir', 'Costar', 'Cortar', 'Elegir', 'Agarrarse', 'Arrastrarse', 'Tratar', 'Cavar',
      'Hacer', 'Dibujar', 'So??ar', 'Beber', 'Conducir', 'Comer', 'Caer', 'Alimentar', 'Sentir', 'Luchar', 'Encontrar', 'Huir', 'Volar', 'Prohibir', 'Olvidar', 'Perdonar', 'Helar', 'Obtener', 'dar', 'ir', 'Crecer',
      'Moler', 'Colgar', 'Haber / Tener', 'Oir', 'Ocultar', 'Golpear', 'Agarrar', 'Herir', 'Conservar', 'Saber', 'Arrodillarse', 'Hacer punto', 'Poner', 'Conducir', 'Apoyarse', 'Brincar', 'Aprender',
      'Dejar', 'Prestar', 'Permitir', 'Echarse', 'Encender', 'Perder', 'Hacer', 'Significar', 'Encontrar', 'Equivocar', 'Vencer', 'Pagar', 'Poner', 'Leer', 'Montar', 'Llamar', 'Leventarse', 'Correr',
      'Decir', 'Ver', 'Buscar', 'Vender', 'Enviar', 'Poner', 'Coser', 'Sacudir', 'Esquilar', 'Brillar', 'Disparar', 'Mostrar', 'Encogerse', 'Cerrar', 'Cantar', 'Hundir', 'Sentarse', 'Dormir',
      'Resbalar', 'Oler', 'Sembrar', 'Hablar', 'Acelerar', 'Deletrear', 'Gastar', 'Derramar', 'Hilar', 'Escupir', 'Rajar / partir', 'Estropear', 'Extender', 'Saltar', 'Estar en pie', 'Robar', 'Pegar',
      'Picar', 'Apestar', 'Dar zancadas', 'Golpear', 'Jurar', 'Sudar', 'Barrer', 'Hinchar', 'Nadar', 'Columpiarse', 'Coger', 'Ense??ar', 'Rasgar', 'Decir', 'Pensar', 'Arrojar', 'Introducir',
      'Pisar', 'Entender', 'Sufrir', 'Emprender', 'llevar puesto', 'Despertarse', 'Tejer', 'Llorar', 'Mojar', 'Ganar', 'Enrollar', 'Retirarse', 'Torcer', 'Escribir',
    ],
  ],
  words: {
    the_clothing: [
      [
        'Word', 'Suit', 'Blouse', 'Jacket', 'Jeans', 'Pullover', 'Shirt', 'Skirt', 'Sweater', 'Trousers', 'T-shirt', 'Coat', 'Gabardine', 'Raincoat', 'Vest',
        'Scarf', 'Gloves', 'Earmuffs', 'Sock', 'Tie', 'Cap', 'Hat', 'Belt', 'Shoes', 'Slippers', 'Boots', 'Sandals', 'Heels', 'Trainers', 'Sneakers',
      ],
      [
        'Spanish', 'Traje', 'Blusa', 'Chaqueta', 'Pantalones vaqueros', 'Su??ter', 'Camisa', 'Falda', 'Su??ter', 'Pantalones', 'Camiseta', 'Abrigo', 'Gabarnina',
        'Chubasquero', 'Chaleco', 'Bufanda', 'Guantes', 'Orejeras', 'Calcetines', 'Corbata', 'Gorra', 'Sombrero', 'Cinturon', 'Zapatos', 'Zapatilla de casa', 'Botas',
        'Sandalias', 'Tacones', 'Zapatillas', 'Zapatillas',
      ],
    ],
    the_parts_of_body: [
      [
        'Word', 'Eyes', 'Nose', 'Mouth', 'Teeth', 'Forehead', 'Neck', 'Face',
        'Hand', 'Fingers', 'Arm', 'Elbow', 'Back', 'Hip', 'Waist', 'Leg', 'Feets', 'Ankle',
        'Heart', 'Brain', 'Lungs', 'Stomach', 'Intestine', 'Appendix', 'Kidneys', 'Liver', 'Bones',
        'Muscles', 'Skin', 'Heel', 'Ear', 'Tongue', 'Chin', 'throat',
      ],
      [
        'Spanish', 'Ojos', 'Nariz', 'Boca', 'Dientes', 'Frente', 'Cuello', 'Rostro', 'Mano', 'Dedos',
        'Brazo', 'Codo', 'Espalda', 'Cadera', 'Cintura', 'Pierna', 'Pies', 'Tobillo', 'Corazon', 'Cerebro', 'Pulmones',
        'Intestino', 'Apendice', 'Ri??ones', 'Higado', 'Huesos', 'Musculos', 'Piel', 'Talon', 'Areja', 'Lengua',
        'Menton', 'Garganta',

      ],
    ],
    the_senses: [
      ['Word', 'Hear', 'See', 'Smell', 'Taste', 'Touch', 'Think', 'Sight',

      ],
      ['Spanish', 'Oir', 'Ver', 'Oler', 'Sabor', 'Tacto', 'Pensar', 'Vision'],
    ],
    the_weather: [
      ['Word',
        'Hailstone',
        'Snow',
        'North',
        'South',
        'East',
        'West',
        'Foggy',
        'Fog',
        'Wind',
        'Windy',
        'Sunny',
        'Sun',
        'Cloudy',
        'Cloud',
        'Hot',
        'Cold',
        'Warm',
        'Cool',
        'Freezing',
        'Boiling',
        'Summer',
        'Winter',
        'Wet',
        'Autumn',
        'Spring',
      ],
      [
        'Spanish',
        'Granizo',
        'Nieve',
        'Norte',
        'Sur',
        'Este',
        'Oeste',
        'Nublado',
        'Niebla',
        'Viento',
        'Ventoso',
        'Soleado',
        'Sol',
        'Nublado',
        'Nube',
        'Caluroso',
        'Frio',
        'Calido',
        'Fresco',
        'Congelado',
        'Hirviendo',
        'Verano',
        'Invierno',
        'Humedo',
        'Oto??o',
        'Primavera',
      ],
    ],
    the_adjectives: [
      [
        'Word',

      ],
      [
        'Spanish',
      ],
    ],
  },

};

export default obj;
