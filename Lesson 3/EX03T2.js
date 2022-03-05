const musician = {
    name: 'Sting',
    realName: 'Gordon Matthew Thomas Sumner',
    instrument: {
      type: 'bass'
    }
  };
  let { name, instrument } = musician;
  let { name: nameOfArtist, instrument: instrumentOfArtist} = musician;
  let {instrument: { type: instrumentTypeOfArtist}}=musician;
  let {instrument: { make: instrumentMakeOfArtist ="unknown" }} = musician;