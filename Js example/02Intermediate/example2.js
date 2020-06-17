let mytodo = {
    days : 'Monday',
    meetings : 0,
    meetdone : 0,

    addmeetings: function(num){
        this.meetings=this.meetings+num
    },

    addmeetdone: function(num){
        this.meetdone=this.meetdone - num
    },

    resetDay: function(){
        this.meetings=0
        this.meetdone=0
    },

    summaryDay: function(){
        this.meetlet = this.meetings - this.meetdone
        return `you have ${this.meetlet} meetings today`
    },
}

mytodo.addmeetings(5)

mytodo.addmeetdone(4)

console.log(mytodo.summaryDay());

//console.log(mytodo.resetDay())


console.log(mytodo);

