import SearchView from './SearchView';

export default Backbone.View.extend({


    el: $("#main"),

    initialize: function(){
        console.log("Main view init");
        //this.render();
    },

    search: function(e){
        e.preventDefault();
        console.log("search gogo");
    },

    render:function () {
        console.log("render gogo");
        return this;
    }
});