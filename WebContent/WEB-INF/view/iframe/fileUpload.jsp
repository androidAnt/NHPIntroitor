<%@ page contentType="text/html;charset=UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="description" content="File Upload widget with multiple file selection, drag&amp;drop support, progress bar, validation and preview images, audio and video for jQuery. Supports cross-domain, chunked and resumable file uploads. Works with any server-side platform (Google App Engine, PHP, Python, Ruby on Rails, Java, etc.) that supports standard HTML form file uploads.">
<meta name="viewport" content="width=device-width, initial-scale=1.0">    <style>
      @media (max-width: 767px) {
        .description {
          display: none;
        }    
      }
     .fileupload-buttonbar{
        	margin-left:-35px;
        }
      
    </style>
	<link rel="stylesheet" href="${root}/fileUpload/css/jquery.fileupload.css" />
 	<link rel="stylesheet" href="${root}/fileUpload/css/jquery.fileupload-ui.css" />
    <noscript><link rel="stylesheet" href="${root}/fileUpload/css/jquery.fileupload-noscript.css"/></noscript>
    <noscript><link rel="stylesheet" href="${root}/fileUpload/css/jquery.fileupload-ui-noscript.css"/></noscript>
	<link rel="stylesheet" href="${root}/fileUpload/css/blueimp-gallery.min.css"/>
</head>
<body>
    <div class="container kv-main">
        <form id="fileupload" action="#" method="POST" enctype="multipart/form-data">
<!--             <noscript><input type="hidden" name="redirect" value="#"> -->
            </noscript>
              <div class="fileupload-buttonbar">
              <span class="btn btn-success fileinput-button">
              <i class="glyphicon glyphicon-plus"></i>
              <span>添加</span>
              <input type="file" name="file" multiple />
            </span>
            
            <button type="submit" class="btn btn-primary start">
              <i class="glyphicon glyphicon-upload"></i>
              <span>上传</span>
            </button>

            </div>
             <table role="presentation"  class="table table-striped fileupload-buttonbar" id="files" >
                <tbody class="files"></tbody>
            </table> 
        </form>
    </div>
</div>

    <!-- The template to display files available for upload -->
    <script id="template-upload" type="text/x-tmpl">
      {% for (var i=0, file; file=o.files[i]; i++) { %}
          <tr class="template-upload fade">
              <td>
                  <span class="preview"></span>
              </td>
              <td>
                  {% if (window.innerWidth > 480 || !o.options.loadImageFileTypes.test(file.type)) { %}
                      <p class="name">{%=file.name%}</p>
                  {% } %}
                  <strong class="error text-danger"></strong>
              </td>
              <td>
                  <p class="size">Processing...</p>
                  <div class="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><div class="progress-bar progress-bar-success" style="width:0%;"></div></div>
              </td>
              <td>
                  {% if (!o.options.autoUpload && o.options.edit && o.options.loadImageFileTypes.test(file.type)) { %}
                    <button class="btn btn-success edit" data-index="{%=i%}" disabled>
                        <i class="glyphicon glyphicon-edit"></i>
                        <span>Edit</span>
                    </button>
                  {% } %}
                  {% if (!i && !o.options.autoUpload) { %}
                      <button class="btn btn-primary start" disabled>
                          <i class="glyphicon glyphicon-upload"></i>
                          <span>上传</span>
                      </button>
                  {% } %}
                  {% if (!i) { %}
                      <button class="btn btn-warning cancel">
                          <i class="glyphicon glyphicon-ban-circle"></i>
                          <span>取消</span>
                      </button>
                  {% } %}
              </td>
          </tr>
      {% } %}
    </script>
    <!-- The template to display files available for download -->
    <script id="template-download" type="text/x-tmpl">
      {% for (var i=0, file; file=o.files[i]; i++) { %}
          <tr class="template-download fade">
              <td>
                  <span class="preview">
                      {% if (file.thumbnailUrl) { %}
                          <a href="{%=file.url%}" title="{%=file.name%}" download="{%=file.name%}" data-gallery><img src="{%=file.thumbnailUrl%}"></a>
                      {% } %}
                  </span>
              </td>
              <td>
                  {% if (window.innerWidth > 480 || !file.thumbnailUrl) { %}
                      <p class="name">
                          {% if (file.url) { %}
                              <a onclick="xz('{%=file.url%}','{%=file.name%}')"   value="{%=file.fileId%}"   title="{%=file.name%}" download="{%=file.name%}" {%=file.thumbnailUrl?'data-gallery':''%}>{%=file.name%}</a>
                          {% } else { %}
                              <span>{%=file.name%}</span>
                          {% } %}
                      </p>
                  {% } %}
                  {% if (file.error) { %}
                      <div><span class="label label-danger">Error</span> {%=file.error%}</div>
                  {% } %}
              </td>
              <td>
                  <span class="size">{%=o.formatFileSize(file.size)%}</span>
              </td>
              <td>
                  {% if (file.deleteUrl) { %}
                      <button class="btn btn-danger delete" data-type="{%=file.deleteType%}" data-url="{%=file.deleteUrl%}"{% if (file.deleteWithCredentials) { %} data-xhr-fields='{"withCredentials":true}'{% } %}>
                          <i class="glyphicon glyphicon-trash"></i>
                          <span>Delete</span>
                      </button>
                      <input type="checkbox" name="delete" value="1" class="toggle">
                  {% } else { %}
                      <button class="btn btn-warning cancel">
                          <i class="glyphicon glyphicon-ban-circle"></i>
                          <span>删除</span>
                      </button>
                  {% } %}
              </td>
      {% } %}
    </script>


<!--[if (gte IE 8)&(lt IE 10)]>
<script src="${root}/fileUpload/js/bootsrap/js/jquery-1.9.1.min.js"></script>
<![endif]-->

<script src="${root}/fileUpload/js/bootsrap/js/jquery.min.js"></script> 
<script src="${root}/fileUpload/js/bootsrap/js/bootstrap.min.js"></script>

<script src="${root}/fileUpload/js/bootsrap/js/tmpl.min.js"></script>
<script src="${root}/fileUpload/js/bootsrap/js/load-image.all.min.js"></script> 
<script src="${root}/fileUpload/js/bootsrap/js/canvas-to-blob.min.js"></script> 
<script src="${root}/fileUpload/js/bootsrap/js/jquery.blueimp-gallery.min.js"></script>

<script src="${root}/fileUpload/js/vendor/jquery.ui.widget.js"></script>  
<script src="${root}/fileUpload/js/jquery.iframe-transport.js"></script> 
<script src="${root}/fileUpload/js/jquery.fileupload.js"></script> 
<script src="${root}/fileUpload/js/jquery.fileupload-process.js"></script> 
<script src="${root}/fileUpload/js/jquery.fileupload-image.js"></script>
<script src="${root}/fileUpload/js/jquery.fileupload-validate.js"></script>
<script src="${root}/fileUpload/js/jquery.fileupload-ui.js"></script>
<!--[if (gte IE 8)&(lt IE 10)]>
<script src="${root}/fileUpload/js/cors/jquery.xdr-transport.js"></script>
<![endif]-->
<script>
    $('#fileupload').fileupload({
        dataType: 'json',
        url: 'doUploadFile',
        minFileSize: 1,
        maxFileSize: 1000000,//文件不超过1M
        maxNumberOfFiles:${maxNum},
        /* acceptFileTypes:/\.(png|jpeg|jpg|gif)$/i,  */
        acceptFileTypes:${type},
        messages: {
       	acceptFileTypes: '类型不匹配!',
       	minFileSize:'文件为空!',
       	maxFileSize:'文件不能大于1M！',
       	maxNumberOfFiles:'仅支持单文件上传！'
       	}
    });

  	function xz(url,name){
		var fileUrl = "${root}/admin/fileupload/downloadTem?filePath="+url;
		var form = $('<form></form>');
		form.attr('action',fileUrl);
	    form.attr('method', 'post');
	    var my_input = $('<input  name="fileName" type="hidden" />');
	    my_input.attr('value', name);
	    form.append(my_input);
	    $(document.body).append(form);
	    form.submit();
	}
  
</script>
  </body>
</html>
