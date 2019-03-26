function find_by_file_id(image_data, img_id){
    for(var i=0;i<image_data.images.length;i++){
        if(image_data.images[i].id == img_id){
            return image_data.images[i];
        }
    }
    return -1;
  }

var img_file = find_by_file_id(image_data, img_id);

var title = img_file.title;

var artist = img_file.artist;

var year = img_file.year;

var medium = img_file.medium;

var dimensions = img_file.dimensions;

var loc = img_file.location;

var desc = img_file.description;

var language = "Korean Female";


window.onload = function() {
    document.getElementById('metadata').innerHTML =
                        "<div class=\"metadata\"  onclick=\"read_metadata()\">"
                        +"<h2>"+title+"</h2>"
                        +"<p>"+artist+", "+year+"</p>"
                        +"</div>"
                        /*
                        +"<h4>"+medium+", "+dimensions+", "+year+"</br>"
                        +artist+"</h4>"
                        +loc+"</br>"+"</br>"
                        +desc
                        */
                        ;
}


//var full_desc = title +"\n"+ artist +"\n"+ year +"\n"+ medium +"\n"+ dimensions +"\n"+ loc +"\n"+ desc;

function read_full_desc(img_id){
    var language = "Korean Female";

    var img_file = find_by_file_id(image_data, img_id);

    var desc = img_file.description;

    responsiveVoice.cancel();
    responsiveVoice.speak(desc, language);

}

function voice(){
	responsiveVoice.speak("voice enabled", language);
	//responsiveVoice.speak("음성 활성화", "Korean Male");
}

function voice_cancel(){
    responsiveVoice.cancel();
}

function read_metadata(){
    var meta_text = title+",  "+artist+",  "+year;
    responsiveVoice.speak(meta_text, language);
}

/*
function read_title_eng(){
    responsiveVoice.speak("Please select artwork below.", "US English Male");
}

function read_title_kor(){
    responsiveVoice.speak("  아래의 그림을 선택하세요.", "Korean Male");
}
*/
responsiveVoice.cancel();