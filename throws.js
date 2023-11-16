// Here the logic to throwing the dice. Then export

// Initiate throws of the dice
const numberOfSets = Math.ceil(Math.random() * 6)
const repsInSet = Math.ceil(Math.random() * 6)
const throwSwingsHandedness = Math.ceil(Math.random() * 6)
const throwFistPushups = Math.ceil(Math.random() * 6)
const variation = Math.ceil(Math.random() * 6)

//The logic here. Or there?!
export function swings(fists=false) {
    let trainingText = ''
    
    if (numberOfSets == 1) {
        trainingText += '2 sets. '
    } else if (numberOfSets == 2 || numberOfSets == 3) {
        trainingText += '3 sets. '
    } else if (numberOfSets == 4 || numberOfSets == 5) {
        trainingText += '4 sets. '
    } else if (numberOfSets == 6) {
        trainingText += '5 sets. '
    } else {
        console.log('Something fishy w. numberOfSets')
    }

    if (repsInSet == 1 || repsInSet == 2) {
        trainingText += '5/4 reps/sets.<br>'
    } else if (repsInSet == 3 || repsInSet == 4) {
        trainingText += '5/4 and 10/2 reps/sets.<br>'
    } else if (repsInSet == 5 || repsInSet == 6) {
        trainingText += '10/2 reps/sets.<br>'
    } else {
        console.log('Something fishy w. repsInSet')
    }

    if (throwSwingsHandedness <= 3) {
        trainingText += 'Two-handed Swings. '
    } else {
        trainingText += 'One-handed Swings. '
    } 

    if (fists) {
        if (throwFistPushups <= 3) {
            trainingText += 'Palm Push-ups.<br>'
        } else {
            trainingText += 'Fist Push-ups.<br>'
        } 
    }
    
    return trainingText

};

export function snatches() {
    let trainingText = ''
    
    if (numberOfSets == 1) {
        trainingText += '2 sets. '
    } else if (numberOfSets == 2 || numberOfSets == 3) {
        trainingText += '3 sets. '
    } else if (numberOfSets == 4 || numberOfSets == 5) {
        trainingText += '4 sets. '
    } else if (numberOfSets == 6) {
        trainingText += '5 sets. '
    } else {
        console.log('Something fishy w. numberOfSets')
    }

    if (repsInSet == 1 || repsInSet == 2) {
        trainingText += '5/4 reps/sets.<br>'
    } else if (repsInSet == 3 || repsInSet == 4) {
        trainingText += '5/4 and 10/2 reps/sets.<br>'
    } else if (repsInSet == 5 || repsInSet == 6) {
        trainingText += '10/2 reps/sets.<br>'
    } else {
        console.log('Something fishy w. repsInSet')
    }
    
    return trainingText
};

export function VaryResistance() {
    let textVariation = ''
    if (variation == 1) {
        textVariation += 'Resistance of X-. Down one bell size.'
    } else if (variation == 2 || variation == 3) {
        textVariation += 'X+ resistance. Up one bell size.'
    } else {
        textVariation += 'Normal resistance.'
    } 

    return textVariation;
};
