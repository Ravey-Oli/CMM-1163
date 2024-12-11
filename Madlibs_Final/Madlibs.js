function generateStory() {
    const connectiondescription = document.getElementById('ConnectionDescriptionFormControlSelect').value;
    const exploredescription = document.getElementById('ExploreDescriptionFormControlSelect').value;
    const pressuredescription = document.getElementById('PressureDescriptionFormControlSelect').value;
    const messagesdescription = document.getElementById('MessagesDescriptionFormControlSelect').value;
    const escapedescription = document.getElementById('EscapeDescriptionFormControlSelect').value;
    const tacticsdescription = document.getElementById('TacticsDescriptionFormControlSelect').value;
    const sensedescription = document.getElementById('SenseDescriptionFormControlSelect').value;
    const addescription2 = document.getElementById('AdDescriptionFormControlSelect2').value;
    const spacedescription = document.getElementById('SpaceDescriptionFormControlSelect').value;
    const resolvedescription = document.getElementById('ResolveDescriptionFormControlSelect').value;
    const scentdescription = document.getElementById('ScentDescriptionFormControlSelect').value;
    const emotiondescription = document.getElementById('EmotionDescriptionFormControlSelect2').value;
    const baristadescription = document.getElementById('BaristaDescriptionFormControlSelect').value;
    const interiordescription = document.getElementById('InteriorDescriptionFormControlSelect').value;
    const cafedescription = document.getElementById('CafeDescriptionFormControlSelect').value;
    const streetdescription = document.getElementById('StreetDescriptionFormControlSelect').value;
    const controllingdescription = document.getElementById('ControllingDescriptionFormControlSelect1').value;
    const addescription = document.getElementById('AdDescriptionFormControlSelect1').value;
    const worlddescription = document.getElementById('WorldDescriptionFormControlSelect1').value;
    const messagedescription = document.getElementById('MessageDescriptionFormControlSelect1').value;
    const feelingstate = document.getElementById('FeelingStateFormControlSelect').value;
    const approachabilitystate = document.getElementById('ApproachabilitySateFormControlSelect').value;
    const sensesstate = document.getElementById('SenseStateFormControlSelect').value;
    const intrusionstate = document.getElementById('IntrusionStateFormControlSelect').value;
    const conversationstate = document.getElementById('ConversationStateFormControlSelect').value;
    const suspicionstate = document.getElementById('SuspicionStateFormControlSelect').value;
    const streetstate = document.getElementById('StreetStateFormControlSelect').value;
    const walkingstate = document.getElementById('WalkingStateFormControlSelect').value;
    const morningstate = document.getElementById('MorningStateFormControlSelect').value;
    const emotionalstate1 = document.getElementById('emotionalstateFormControlSelect1').value;
    const city = document.getElementById('city').value;
    const name = document.getElementById('name').value;
    const name2 = document.getElementById('name2').value;

    // Check if all inputs are filled
    if (connectiondescription && exploredescription && pressuredescription && messagesdescription && escapedescription && tacticsdescription && sensedescription && addescription2 && spacedescription && resolvedescription && scentdescription && emotiondescription && baristadescription && interiordescription && cafedescription && streetdescription && controllingdescription && addescription && worlddescription && messagedescription && feelingstate && approachabilitystate && sensesstate && intrusionstate && conversationstate && suspicionstate && streetstate && walkingstate && morningstate && emotionalstate1 && city && name && name2) {
        // Generate the Mad Libs story
        const story = `Once upon a time in a bustling ${city}, there lived a person named ${name}. In this hectic world, advertising was everywhere, and it filled everyone with constant ${emotionalstate1}.
        One ${morningstate} morning, ${name} decided to take a leisurely ${walkingstate}, hoping to escape the pervasive influence of ads. However, as they walked down the ${streetstate} street, they noticed something ${suspicionstate} about the people around them. Instead of engaging in  ${conversationstate} conversations, everyone seemed hypnotized by the ${intrusionstate} billboards, commercials, and digital screens showing advertisements.

        ${name} couldn't believe their ${sensesstate}. It was as if the entire city had become a canvas for relentless advertising, making everyone feel ${approachabilitystate} and ${feelingstate}. No one appeared to be able to disconnect from the ${messagedescription} messages that surrounded them, and no one appreciated the ${worlddescription} around them beyond the ${addescription}.
        Disturbed by this ${controllingdescription} reality, ${name} continued their ${walkingstate} walk. They eventually turned a ${streetdescription} and stumbled upon a ${cafedescription} café that had managed to maintain a ${interiordescription} charm, free from overt advertising. Inside, they found a barista who was ${baristadescription} coffee, and the aroma was a ${emotiondescription} change from the ${scentdescription} scents of advertisements.
        The barista named ${name2} struck up a ${resolvedescription} conversation with ${name} about the overwhelming influence of advertising on society. They talked about the importance of ${spacedescription} personal space and the need for authentic, ad-free ${addescription2}.
        As ${name} left the café, they couldn't help but feel a sense of ${sensedescription}. In a world dominated by advertising, they had discovered a haven of genuine human interaction, untainted by ${tacticsdescription} tactics. From that day forward, ${name} made it their mission to escape the ${escapedescription} of advertising and to promote spaces that were free from the ${messagesdescription} messages that had taken over the city.
        They realized that amid the onslaught of advertising, there was a desperate need to preserve moments of genuine connection, free from the ${pressuredescription} pressure to consume. So, they continued to explore the ${exploredescription}, advocating for a return to ${connectiondescription} experiences and relationships, and a break from the influence of advertising.
`;

        // Display the generated story
        document.getElementById('madLibStory').innerHTML = story;
        document.getElementById('story').style.display = 'block';
        document.getElementById('inputs').style.display = 'none';
        document.getElementById('reset').style.display = 'block'; // Show reset button
    } else {
        alert("Please fill out all fields.");
    }
}

function resetForm() {
    // Reset all input fields
    document.getElementById('ConnectionDescriptionFormControlSelect').value = '';
    document.getElementById('ExploreDescriptionFormControlSelect').value = '';
    document.getElementById('PressureDescriptionFormControlSelect').value = '';
    document.getElementById('MessagesDescriptionFormControlSelect').value = '';
    document.getElementById('EscapeDescriptionFormControlSelect').value = '';
    document.getElementById('TacticsDescriptionFormControlSelect').value = '';
    document.getElementById('SenseDescriptionFormControlSelect').value = '';
    document.getElementById('AdDescriptionFormControlSelect2').value = '';
    document.getElementById('SpaceDescriptionFormControlSelect').value = '';
    document.getElementById('ResolveDescriptionFormControlSelect').value = '';
    document.getElementById('SenseDescriptionFormControlSelect').value = '';
    document.getElementById('AdDescriptionFormControlSelect1').value = '';
    document.getElementById('WorldDescriptionFormControlSelect1').value = '';
    document.getElementById('MessageDescriptionFormControlSelect1').value = '';
    document.getElementById('FeelingStateFormControlSelect').value = '';
    document.getElementById('ApproachabilitySateFormControlSelect').value = '';
    document.getElementById('SenseStateFormControlSelect').value = '';
    document.getElementById('IntrusionStateFormControlSelect').value = '';
    document.getElementById('ConversationStateFormControlSelect').value = '';
    document.getElementById('SuspicionStateFormControlSelect').value = '';
    document.getElementById('StreetStateFormControlSelect').value = '';
    document.getElementById('WalkingStateFormControlSelect').value = '';
    document.getElementById('MorningStateFormControlSelect').value = '';
    document.getElementById('emotionalstateFormControlSelect1').value = '';
    document.getElementById('city').value = '';
    document.getElementById('name').value = '';
    document.getElementById('name2').value = '';

    // Hide the story and show the input form again
    document.getElementById('story').style.display = 'none';
    document.getElementById('inputs').style.display = 'block';
    document.getElementById('reset').style.display = 'none'; // Hide reset button
} 