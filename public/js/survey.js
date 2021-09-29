
jQuery(document).ready(function() {
    var VrCurrentTestimonialPage = 0;
    jQuery("div#tab00.Guide").show();
    jQuery("div#tab01.AnswersInclude").hide();
    jQuery("div#tab02.EducateYourself").hide();
    jQuery("div#tab03.Survey").hide();
    jQuery("#tab0").click(function(){
        jQuery("div#tab00.Guide").show();
        jQuery("div#tab01.AnswersInclude").hide();
        jQuery("div#tab02.EducateYourself").hide();
        jQuery("div#tab03.Survey").hide();
        jQuery("#tab0").addClass("selected_tab");
        jQuery("#tab1").removeClass("selected_tab");
        jQuery("#tab2").removeClass("selected_tab");
        jQuery("#tab3").removeClass("selected_tab");
    });
    jQuery("#tab1").click(function(){
    jQuery("div#tab00.Guide").hide();
    jQuery("div#tab02.EducateYourself").hide();
    jQuery("div#tab01.AnswersInclude").show();
    jQuery("div#tab03.Survey").hide();
    jQuery("#tab1").addClass("selected_tab");
    jQuery("#tab0").removeClass("selected_tab");
    jQuery("#tab2").removeClass("selected_tab");
    jQuery("#tab3").removeClass("selected_tab");
    });
    jQuery("#tab2").click(function(){
        jQuery("div#tab00.Guide").hide();
        jQuery("div#tab01.AnswersInclude").hide();
        jQuery("div#tab02.EducateYourself").show();
        jQuery("div#tab03.Survey").hide();
        jQuery("#tab2").addClass("selected_tab");
        jQuery("#tab1").removeClass("selected_tab");
        jQuery("#tab0").removeClass("selected_tab");
        jQuery("#tab3").removeClass("selected_tab");
    });
    jQuery("#tab3").click(function(){
        jQuery("div#tab00.Guide").hide();
        jQuery("div#tab01.AnswersInclude").hide();
        jQuery("div#tab02.EducateYourself").hide();
        jQuery("div#tab03.Survey").show(function(){});
        jQuery("#tab3").addClass("selected_tab");
        jQuery("#tab1").removeClass("selected_tab");
        jQuery("#tab0").removeClass("selected_tab");
        jQuery("#tab2").removeClass("selected_tab");
    });
    if(jQuery("#container").length > 0){
        var id = "#container";
        FnCalculateGraphOptions(id)
    }

    if(jQuery("#graph-container").length > 0){
        var r_flag = true;
        var present_graph_div = "#graph-container";
        var divs = jQuery(present_graph_div).children(), i = 0;
       setInterval(function(){
            i = i+1 <= divs.length-1 ? i+1 : 0;
            var div_to_show = '#'+jQuery(divs[i]).attr('id');
            var id = '#'+jQuery(div_to_show).find('div:first').attr('id');
            jQuery(div_to_show).on({
                mouseover: function() { r_flag = false; },
                mouseleave: function() { r_flag = true; }
            });
            if(r_flag) {
                FnCalculateGraphOptions(id);
                var chart_div_id = jQuery(div_to_show).children("div:first").attr("id");
                var chart = jQuery('#'+chart_div_id).highcharts();
                var el = jQuery(div_to_show);
                el.css('width','98%');
                chart.setSize(
                    //el.width(),el.height(),true
                    el.width()
                );
                jQuery(div_to_show).show();
                jQuery(div_to_show).siblings().hide();
            }
        }, 8000);
    }
    if(jQuery("#success-stories-tabs").length > 0){
            jQuery( "#success-stories-tabs" ).tabs({
                beforeLoad: function( event, ui ) {
                    ui.jqXHR.error(function() {
                        ui.panel.html("Couldn't load this tab. We'll try to fix this as soon as possible.");
                    });
                }
            });
    }
});
function FnCalculateGraphOptions(id) {
        var ar_graph = [];
        var list = jQuery(id).next('div').find('span');
        var title =  jQuery(id).next('div').find('div:first').text();
        for(var i=0; i<list.length; i++) {
            var span_text = jQuery(list[i]).text();
            span_text = span_text.replace('%', "");
            span_text = span_text.split(':');
            ar_graph.push({name:span_text[0],value:parseFloat(span_text[1])});
        }
        ar_graph.push({graph_tile:title});
        var str='';
        var ar_color = ['#229142', '#599122', '#8E9122', '#917222', '#923B22']
        Fnshowhighchart(id , ar_graph , ar_color);
}
function Fnshowhighchart(id , ar_graph , ar_color){
    jQuery(id).highcharts({
    chart: {
        type: 'column',
        height: 400,
    },
    title: {
        text: ar_graph[5]['graph_tile']
    },
    xAxis: {
            type: 'category',
    },
    yAxis: {
         min: 0,
        title: {
            text: 'percentage of clients',
        },
        labels: {
            formatter: function(){
                return this.value + '%';
            }
        }
    },

    tooltip: {
             enabled: false
        },
       plotOptions: {
            series: {
                showInLegend: false,
                dataLabels: {
                    enabled: true,
                    formatter:function() {
                        return this.point.y+ '%';
                    }
                }
            }
        },
    series: [{
            data: [{
                name: ar_graph[0]['name'],
                color: ar_color[0],
                y: ar_graph[0]['value']
            }, {
                name: ar_graph[1]['name'],
                color: ar_color[1],
                y: ar_graph[1]['value']
            }, {
                name: ar_graph[2]['name'],
                color: ar_color[2],
                y: ar_graph[2]['value']
            }, {
                name: ar_graph[3]['name'],
                color: ar_color[3],
                y: ar_graph[3]['value']
            }, {
                name: ar_graph[4]['name'],
                color: ar_color[4],
                y: ar_graph[4]['value']
            }],
        }]
  })
}





