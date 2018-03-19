var uniform = {
  "01":["Bobby Doerr","1938-51"],
  "02":["Xander Bogaerts","2014-17"],
  "03":["Jimmie Foxx","1936-42"],
  "04":["Joe Cronin","1935"],
  "05":["Nomar Garciaparra","1996-2004"],
  "06":["Johnny Pesky","1942"],
  "07":["Trot Nixon","1996, 1998-2006"],
  "08":["Carl Yastrzemski","1961-83"],
  "09":["Ted Williams","1939-60"],
  "10":["Coco Crisp","2006-08"],
  "11":["Bill Mueller","2003-05"],
  "12":["Mark Bellhorn","2004-05"],
  "13":["John Valentin","1992-2001"],
  "14":["Jim Rice","1974-89"],
  "15":["Dustin Pedroia","2007-17"],
  "16":["Bill Buckner","1984"],
  "17":["Bret Saberhagen","1997-99, 2001"],
  "18":["Johnny Damon","2002-05"],
  "19":["Koji Uehara","2013-16"],
  "20":["Kevin Youkilis","2004-12"],
  "21":["Roger Clemens","1984-96"],
  "22":["Rick Porcello","2015-17"],
  "23":["Julio Lugo","2007-09"],
  "24":["Manny Ramirez","2001-08"],
  "25":["Mike Lowell","2006-10"],
  "26":["Wade Boggs","1982-92"],
  "27":["Carlton Fisk","1971-80"],
  "28":["Adrian Gonzalez","2011-12"],
  "29":["Keith Foulke","2004-06"],
  "30":["Jose Offerman","1999-2002"],
  "31":["Jon Lester","2007-14"],
  "32":["Derek Lowe","1998-2004"],
  "33":["Jason Varitek","1999-2011"],
  "34":["David Ortiz","2003-16"],
  "35":["Steven Wright","2013-17"],
  "36":["Tom Gordon","1996-99"],
  "37":["Hideki Okajima","2007-11"],
  "38":["Curt Schilling","2004-07"],
  "39":["Jarrod Saltalamacchia","2010-13"],
  "40":["John Lackey","2010"],
  "41":["Chris Sale","2017"],
  "42":["Mo Vaughn","1991-98"],
  "43":["Alan Embree","2002-05"],
  "44":["Orlando Cabrera","2004"],
  "45":["Pedro Martinez","1998-2004"],
  "46":["Craig Kimbrel","2016-17"],
  "47":["Terry Francona","2004-11"],
  "48":["Ramon Martinez","1999-2000"],
  "49":["Tim Wakefield","1995-2011"],
  "50":["Mookie Betts","2014-17"],
  "51":["Byung-Hyun Kim","2003-04"],
  "52":["Eduardo Rodriguez","2015-17"],
  "53":["John Farrell","2013-17 (MGR)"],
  "54":["Edward Mujica","2014-15"],
  "55":["Lenny DiNardo","2004-06"],
  "56":["Joe Kelly","2014-17"],
  "57":["Manny Delcarmen","2005-06"],
  "58":["Jonathan Papelbon","2005-11"],
  "59":["Sam Travis","2017"],
  "60":["Daniel Nava","2010"],
  "61":["Bronson Arroyo","2003-05"],
  "62":["Rich Hill","2015"],
  "63":["Justin Masterson","2015"],
  "64":["Austin Maddox","2017"],
  "65":["Yoan Moncada","2016"],
  "66":["Noe Ramirez","2015-17"],
  "67":["Brandon Workman","2013-14, 2017"],
  "68":["Matt Barnes","2014-17"],
  "69":["Nobody has worn 69!",""]
};

$(document).ready(function(){
    $(document).foundation();

    if(!location.search) {
      location.search = '?draw=0';
    }

    var draw = location.search.replace('?draw=','');

    function powerball(data, draw) {
      var winningNums = data[draw].winning_numbers;

      var nums = winningNums.split(" ");

      var items = [];

      $.each( nums, function( key, val ) {

        items.push( "<li id='num" + key + "'><span class='num'>"+val+"</span> <span class='name'>"+ uniform[val][0] + "</span> <span class='years'>"+ uniform[val][1] +"</li>" );
      });

      $('#numbers').empty().append(items);
      $('.draw-date').empty().append(data[draw].draw_date.replace('T00:00:00',''))

    }

    $.getJSON( "https://data.ny.gov/resource/d6yy-54nr.json", function( data ) {

      powerball(data, draw);

      $('#older').click(function(ev){
        ev.preventDefault();
        draw++;
        powerball(data, draw);

        //location.search = '?draw=' + draw;
        if (window.history.replaceState) {
           //prevents browser from storing history with each change:
           window.history.replaceState(null, null, '?draw=' + draw);
        }
      })

  });

});
