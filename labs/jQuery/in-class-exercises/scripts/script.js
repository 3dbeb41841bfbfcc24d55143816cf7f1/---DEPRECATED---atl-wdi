console.log('hey')
$(function() {
var counterFromJQuery = $('#counter');
// var data = $('#counter').data().counterIndex;
// console.log(data);

var CounterCollection = {
    counters: [
        {
            currentValue: 0,
            counterName: 'Errors'
        },
        {
            currentValue: 0,
            counterName: 'Warnings'
        }
    ],
    addOneToCounterValue: function(counterIndex) {
        this.counters[counterIndex].currentValue +=1;
        // $('#current-count').html(currentValue);
        $(`[data-counter-index=" $(counterIndex}"]' > #current-count'`).append(this.counters[counterIndex]);
        
    }
};

var $counterContainer = $('#counter-container');

for(var i = 0; i < CounterCollection.counters.length; i++) {
    var counter = CounterCollection.counters[i];
    var $counterContainer = $( "#counter-container" );

    var $newCounterDiv = $('<div/>').addClass('counter');
    // var myDataIndex = $newCounterDiv.data( 'counterIndex' , i);
    var myDataIndex = $newCounterDiv.attr('data-counter-index', i);
    var $H1Section = $('<h1>');
        $H1Section.append(counter.counterName);
        $H1Section.attr('id', 'counter-name');
    $newCounterDiv.append($H1Section);
    var $SpanSection = $('<span>');
        $SpanSection.append(counter.currentValue);
        $SpanSection.attr('id', 'current-count');
    $newCounterDiv.append($SpanSection);
    var $plusOneButton  = $('<button>');
        $plusOneButton.html('+1');
        $plusOneButton.attr('id', 'add-one');
    $newCounterDiv.append($plusOneButton);
    var $deleteButton = $('<button>');
        $deleteButton.html('Delete');
        $deleteButton.attr('id', 'remove-counter');
    $newCounterDiv.append($deleteButton);
    $newCounterDiv.on('click', function(event) {
        // event.stopPropogation();
        if(event.target.id === 'remove-counter'){
            $(event.currentTarget).remove();
        } else if(event.target.id === 'add-one') {
            var counterIndex = $(event.target).data('counterIndex');
            CounterCollection.addOneToCounterValue(counterIndex);

        }
    })
    
    $counterContainer.append( $( $newCounterDiv ) );

};
// {<div id="counter" data-counter-index="0">
//   <span id="current-count">1</span>
//   <button id="add-one">+1 </button>
// </div>}


var button = $('#add-one');
button.on('click', function() {
    var currentValue = $('#current-count').text();
    var currentValueAsInt = parseInt(currentValue);
    console.log(currentValueAsInt);
    currentValueAsInt += 1;
    $('#current-count').html(currentValueAsInt);

});
var $newCounterButton = $('#add-new-counter');
$newCounterButton.on('click', function(event) {
    event.preventDefault();
    var nameValue = $('#new-counter-name').val();
    var numberValue = $('#new-counter-start-value').val();
    $('#current-count').html(numberValue);
    alert(`New Counter: ${nameValue}. New Number: ${numberValue}`);
    // return false;
})

})