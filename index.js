
 $('#articles-content').removeClass().addClass('hide')
 $('#notes-content').removeClass().addClass('hide')
 $('#myEnglish-name').removeClass().addClass('project-name-opacity')

 $('#articles').click(function(){
     $('#articles-content').removeClass().addClass('project-content-articles')
     $('#myEnglish-content').removeClass().addClass('hide')
     $('#notes-content').removeClass().addClass('hide')
     $('#articles-name').removeClass().addClass('project-name-opacity')
     $('#myEnglish-name').removeClass().addClass('project-name')
     $('#notes-name').removeClass().addClass('project-name')

 })
 
 $('#myEnglish').click(function(){
     $('#articles-content').removeClass().addClass('hide')
     $('#myEnglish-content').removeClass().addClass('project-content-myEnglish')
     $('#notes-content').removeClass().addClass('hide')
     $('#articles-name').removeClass().addClass('project-name')
     $('#myEnglish-name').removeClass().addClass('project-name-opacity')
     $('#notes-name').removeClass().addClass('project-name')


 })

 $('#notes').click(function(){
     $('#articles-content').removeClass().addClass('hide')
     $('#myEnglish-content').removeClass().addClass('hide')
     $('#notes-content').removeClass().addClass('project-content-notes')
     $('#articles-name').removeClass().addClass('project-name')
     $('#myEnglish-name').removeClass().addClass('project-name')
     $('#notes-name').removeClass().addClass('project-name-opacity')

 })


