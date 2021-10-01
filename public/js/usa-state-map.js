var usaStateImgPath = "/next/map-css/map-img/light/";
var usaStateFlagImgPath = "/next/map-css/map-img/flags/";
var imgNoStateFlag = usaStateFlagImgPath + "Flag_of_none.svg";

var objLocation = {
  states: {},
  stateIndex: 0,
  autoRotateFlag: 1,
  loadStateInterval: {},
  loadStateTimeout: {},
};
var objStates = {};

var objStatesMap = {
  container: jQuery("#boost-map"),
  map: jQuery("#graphic-us-map"),
  info: jQuery("#boost-info"),
  // previousBoost: jQuery("#previous-boosts"),
  infoBanner: jQuery("#boost-info").find("[data-banner]"),
  infoCity: jQuery("#boost-info").find("[data-city]"),
  infoState: jQuery("#boost-info").find("[data-state]"),
  infoPoints: jQuery("#boost-info").find("[data-points]"),
  infoTelecom: jQuery("#boost-info").find("[data-telecom]"),
  infoUtility: jQuery("#boost-info").find("[data-utility]"),
  infoStateBg: jQuery("#boost-info").find("[data-statebg]"),
  infoStateMapBg: jQuery("#boost-info").find("[data-stateMapBg]"),
  infoInitialScore: jQuery("#boost-info").find("[data-initial]"),
  infoUpgradedScore: jQuery("#boost-info").find("[data-upgraded]"),
};

function getLocationInfo() {
  jQuery
    .ajax({
      url: "https://www.ovlg.com/get-attorneys/state-list",
      dataType: "json",
      type: "get",
    })
    .done(function (data) {
      objLocation.states = data;
      clearTimeout(objLocation.loadStateInterval);
      fnMapStateSelect();
    })
    .fail(function (e) {
      console.log(e);
    });
}

jQuery(document).ready(function () {
  if (window.location.href.indexOf("?zip=") > -1) {
    // nothing
  } else {
    getLocationInfo();
    jQuery("path, polygon").on("click", function () {
      console.log("stoped auto-scroll state functionality");
      clearTimeout(objLocation.loadStateInterval);
      clearTimeout(objLocation.loadStateTimeout);
      var idOfState = jQuery(this).prop("id");
      var objStates = _.where(objLocation.states.data, {
        stateAbbr: idOfState,
      });

      // console.log(idOfState, objStates[0]);
      var ths = this;
      if (objStates[0] !== undefined) {
        jQuery("select[name='user_state']")
          .val(idOfState)
          .removeClass("input-error");
        jQuery("#city, #zip, #previous_zip").val("");

        var objState = objStates[0];
        showStateInMap(objState, ths);
      } else {
        console.log("no state data " + idOfState);
      }

      objLocation.loadStateTimeout = setTimeout(function () {
        fnMapStateSelect();
      }, 6000);
    });

    jQuery("path, polygon").on("mouseover", function () {
      //console.log( 'id:'+ this.id);
      var title = "";
      var idOfState = jQuery(this).prop("id");
      var objStates = _.where(objLocation.states.data, {
        stateAbbr: idOfState,
      });
      //console.log(objStates);

      if (objStates[0] !== undefined) {
        var banner = objStates[0].count == 1 ? "" : "s";
        jQuery("#map title").html(
          objStates[0].state +
            " (" +
            "Attorney" +
            banner +
            " " +
            objStates[0].count +
            ")"
        );
      } else {
        jQuery("#map title").html("");
      }
    });

    jQuery("select[name='user_state']").on("change", function () {
      var idOfState = this.value;
      setStateInMap(idOfState);
    });
  }
});

function fnMapStateSelect() {
  objStates = objLocation.states.data.filter(function (val) {
    return val.stateAbbr !== null;
  });
  console.log(objLocation.states, objStates.length);
  loadStateInMap();
  objLocation.loadStateInterval = setInterval(function () {
    loadStateInMap();
  }, 2000);
}

function loadStateInMap() {
  var objState = objStates[objLocation.stateIndex];
  //console.log(objState);
  var stateId = "#" + objState.stateAbbr;
  showStateInMap(objState, stateId);
  if (objLocation.stateIndex < objStates.length - 1) {
    objLocation.stateIndex++;
  } else {
    objLocation.stateIndex = 0;
  }
}

function showStateInMap(objState, ths) {
  clearTimeout(objLocation.loadStateTimeout);

  // remove map and unset data
  var imgStateFlag = usaStateFlagImgPath + "Flag_of_" + objState.state + ".svg";
  objStatesMap.info.addClass("out").removeClass("in");
  objStatesMap.map.find(".map-fill").addClass("out").removeClass("in");
  //objStatesMap.infoStateBg.css("background", 'url("")center / contain no-repeat').fadeOut(600);
  //objStatesMap.infoStateMapBg.css("background", 'url("")center / contain no-repeat').fadeOut(600);
  objStatesMap.infoStateMapBg.prop("src", "" + imgNoStateFlag + "").fadeIn();

  objLocation.loadStateTimeout = setTimeout(function () {
    // fill data in map panel and set map active
    jQuery(ths).addClass("map-fill in").removeClass("out");
    objStatesMap.info.addClass("in").removeClass("out");

    //.infoStateMapBg.css("background", 'url("' + imgStateFlag + '")center / contain no-repeat').fadeIn(600);
    objStatesMap.infoStateMapBg.prop("src", "" + imgStateFlag + "").fadeIn();
    objStatesMap.infoPoints.html(objState.count);
    objStatesMap.infoState.html(objState.state);
    var banner = objState.count == 1 ? "" : "s";
    objStatesMap.infoBanner.html("Attorney" + banner);
    /*
        //objStatesMap.infoStateBg.css("background", 'url("' + imgStateMap + '")center / contain no-repeat').fadeIn(600);
        //objStatesMap.infoCity.html(objState.city);
        //objStatesMap.infoTelecom.html(objState.telcom);
        //objStatesMap.infoUtility.html(objState.utility);
        //objStatesMap.infoInitialScore.html(objState.scoreInitial);
        //objStatesMap.infoUpgradedScore.html(objState.scoreUpgraded);
        //objStatesMap.container.addClass("score-upgrade").addClass("good-upgrade");
        */
  }, 500);
}

function setStateInMap(idOfState) {
  clearTimeout(objLocation.loadStateInterval);
  clearTimeout(objLocation.loadStateTimeout);
  //var idOfState = jQuery(this).prop('id');
  var objStates = _.where(objLocation.states.data, { stateAbbr: idOfState });

  if (idOfState == undefined) {
    console.log("idOfState " + idOfState);
    jQuery("#multi-form-msg").css("visibility", "visible");
    jQuery("#boost-info").css("visibility", "hidden");
    jQuery("#step1-next").addClass("disabled");

    clearTimeout(objLocation.loadStateInterval);
    clearTimeout(objLocation.loadStateTimeout);

    objLocation.loadStateTimeout = setTimeout(function () {
      //showStateInMap(objState, stateId);
      setMapEmpty();
    }, 2000);
  } else if (objStates[0] == undefined) {
    console.log("no state data " + idOfState);
    jQuery("#multi-form-msg").css("visibility", "hidden");
    jQuery("#boost-info").css("visibility", "block");
    jQuery("#step1-next").removeClass("disabled");

    clearTimeout(objLocation.loadStateInterval);
    clearTimeout(objLocation.loadStateTimeout);

    var stateId = "#" + idOfState;
    var objNullState = { count: "", state: "", stateAbbr: idOfState };
    objLocation.loadStateTimeout = setTimeout(function () {
      showStateInMap(objNullState, stateId);
      //setMapEmpty();
    }, 2000);
  } else {
    var objState = objStates[0];
    console.log(idOfState, objState);
    var stateId = "#" + idOfState;
    jQuery("#multi-form-msg").css("visibility", "hidden");
    jQuery("#boost-info").css("visibility", "visible");
    jQuery("#step1-next").removeClass("disabled");

    objLocation.loadStateTimeout = setTimeout(function () {
      showStateInMap(objState, stateId);
    }, 2000);
  }
}

function setMapEmpty() {
  objStatesMap.info.addClass("out").removeClass("in");
  objStatesMap.map.find(".map-fill").addClass("out").removeClass("in");

  objStatesMap.infoStateMapBg.prop("src", "" + imgNoStateFlag + "").fadeIn();
  objStatesMap.infoPoints.html("");
  objStatesMap.infoState.html("");
  objStatesMap.infoBanner.html("");
}

function setStateInMapRedirectFromHomePage(
  idOfState,
  StateName,
  AttorneyCount
) {
  jQuery("#boost-info").css("visibility", "block");

  var stateId = "#" + idOfState;
  var objState = {
    count: AttorneyCount,
    state: StateName,
    stateAbbr: idOfState,
  };
  objLocation.loadStateTimeout = setTimeout(function () {
    showStateInMap(objState, stateId);
  }, 1);
}
