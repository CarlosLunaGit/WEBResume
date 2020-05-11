function inserthtml (html_name, _where){
  var dictionary = zip([html_name, _where])
  var templates_dict = { 'timeline.js': timeline_template, 'aboutme.js': aboutme_template, 'employerslogo.js': emplologo_template, 'skillbar.js': skills_template};

  for (const [key, value] of Object.entries(dictionary)) {
    var parent_element = document.getElementById(value)
    parent_element.innerHTML = ""
    parent_element.innerHTML= templates_dict[key]

  }



}


function show_evidence(hovered_element){

  console.log(hovered_element.id);
  var hovered_element_index = hovered_element.id.substring(10, 11);
  var logos_array = document.getElementsByClassName('item-c')[0].getElementsByTagName('a')
  var cter = 1
  for (item of logos_array){
    if (hovered_element_index == cter) {
      item.getElementsByTagName('img')[0].style.maxWidth = "200px";
    }
    cter++;
  }

}

function notshow_evidence(hovered_element){

  console.log(hovered_element.id);
  var hovered_element_index = hovered_element.id.substring(10, 11);
  var logos_array = document.getElementsByClassName('item-c')[0].getElementsByTagName('a')
  var cter = 1
  for (item of logos_array){
    if (hovered_element_index == cter) {
      item.getElementsByTagName('img')[0].style.maxWidth = "100px";
    }
    cter++;
  }

}

function zip(arrays) {
  var newarray = {};

  for (var i = 0; i < arrays[0].length; i++) {
    newarray[arrays[0][i]] = arrays[1][i];
    // newarray.push({arrays[0][i]:arrays[1][i]});
  }
  return newarray;
}
