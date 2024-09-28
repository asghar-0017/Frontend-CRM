import{R as S,r as o,p as xt,f as yt,j as K}from"./index-C05QhGEP.js";import{G as Oa}from"./iconBase-DrVbEGxc.js";import{g as wt}from"./apiServices-BLiMT9Yd.js";import{S as Na}from"./sweetalert2.all-I3mqL4O0.js";import{i as Et,e as kt}from"./Socket-BAmX9CkN.js";import{B as Ft,T as Pa}from"./List-Tf7OrP3l.js";import{c as zt,d as Ct}from"./TextField-CqwtIWC_.js";import{B as St}from"./Button-D9YPwSqa.js";import{D as Nt}from"./Drawer-B1GF-AHl.js";function A(e){if(!e||typeof window>"u")return;const n=document.createElement("style");return n.setAttribute("type","text/css"),n.innerHTML=e,document.head.appendChild(n),e}var h=function(){return h=Object.assign||function(n){for(var a,t=1,i=arguments.length;t<i;t++){a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r])}return n},h.apply(this,arguments)};function Kn(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,t=Object.getOwnPropertySymbols(e);i<t.length;i++)n.indexOf(t[i])<0&&Object.prototype.propertyIsEnumerable.call(e,t[i])&&(a[t[i]]=e[t[i]]);return a}function Re(e,n,a,t){function i(r){return r instanceof a?r:new a(function(l){l(r)})}return new(a||(a=Promise))(function(r,l){function s(d){try{u(t.next(d))}catch(f){l(f)}}function c(d){try{u(t.throw(d))}catch(f){l(f)}}function u(d){d.done?r(d.value):i(d.value).then(s,c)}u((t=t.apply(e,[])).next())})}function Be(e,n){var a={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},t,i,r,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(u){return function(d){return c([u,d])}}function c(u){if(t)throw new TypeError("Generator is already executing.");for(;l&&(l=0,u[0]&&(a=0)),a;)try{if(t=1,i&&(r=u[0]&2?i.return:u[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,u[1])).done)return r;switch(i=0,r&&(u=[u[0]&2,r.value]),u[0]){case 0:case 1:r=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,i=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(r=a.trys,!(r=r.length>0&&r[r.length-1])&&(u[0]===6||u[0]===2)){a=0;continue}if(u[0]===3&&(!r||u[1]>r[0]&&u[1]<r[3])){a.label=u[1];break}if(u[0]===6&&a.label<r[1]){a.label=r[1],r=u;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(u);break}r[2]&&a.ops.pop(),a.trys.pop();continue}u=n.call(e,a)}catch(d){u=[6,d],i=0}finally{t=r=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function xe(e,n,a){if(a||arguments.length===2)for(var t=0,i=n.length,r;t<i;t++)(r||!(t in n))&&(r||(r=Array.prototype.slice.call(n,0,t)),r[t]=n[t]);return e.concat(r||Array.prototype.slice.call(n))}var ue=function(e){var n="";if(e)return e<1024?n=e+" Bytes":e<1024*1024?n=(e/1024).toFixed(2)+" KB":e<1024*1024*1024?n=(e/1024/1024).toFixed(2)+" MB":e<1024*1024*1024*1024?n=(e/1024/1024/1024).toFixed(2)+" GB":n=(e/1024/1024/1024/1024).toFixed(2)+" TB",n},Mt={defaultLabel:"Trascina qui i tuoi file",uploadingMessage:function(e){return"Caricamento di ".concat(e," file")},uploadFinished:function(e,n){return"File caricati: ".concat(e,", File rifiutati: ").concat(n)},noFilesMessage:"Nessun file valido in attesa di essere caricato",footer:{acceptAll:"Tutti i tipi di file sono accettati",acceptCustom:function(e){return"Tipi di file consentiti: ".concat(e)}},header:{uploadFilesMessage:"Caricamento",maxSizeMessage:function(e){return"Dimensione massima ".concat(e)},validFilesMessage:function(e,n){return"File  ".concat(e,"/").concat(n)}},fakeuploadsuccess:"Il file è stato caricato con successo ",fakeUploadError:"Errore di caricamento del file"},Dt={fullInfoLayer:{name:"Nome: ",size:"Dimensione: ",type:"Tipo: "},status:{preparing:"preparazione",uploading:"In corso",success:"Successo",valid:"Valido",denied:"Non válido",error:"Errore",aborted:"Interrotto"}},Lt={maxSizeError:function(e){return"Il file è molto grande. Il tam. il massimo è ".concat(ue(e))},acceptError:"Tipo di file illegale",maxFileCount:function(e){return"Numero massimo di file (".concat(e,") raggiunto")}},Rt={defaultLabel:"Déposez vos fichiers ici",uploadingMessage:function(e){return"Envoi de ".concat(e," fichiers")},uploadFinished:function(e,n){return"Fichiers téléchargés : ".concat(e,", Fichiers rejetés: ").concat(n)},noFilesMessage:"Aucun fichier valide ne manque",footer:{acceptAll:"Tous types de fichiers acceptés ",acceptCustom:function(e){return"Types de fichier: ".concat(e)}},header:{uploadFilesMessage:"Envoyer",maxSizeMessage:function(e){return"Taille maximale ".concat(e)},validFilesMessage:function(e,n){return"Fichiers  ".concat(e,"/").concat(n)}},fakeuploadsuccess:"Le fichier a été téléchargé avec succès",fakeUploadError:"Erreur lors du téléchargement "},Bt={fullInfoLayer:{name:"Le nom: ",size:"Le taille: ",type:"Le type: "},status:{preparing:"préparer",uploading:"En cours",success:"Succès",valid:"Valide",denied:"Refusé",error:"Erreur",aborted:"Interrompu"}},At={maxSizeError:function(e){return"Le fichier est très volumineux. Le tam. le maximum est de ".concat(ue(e))},acceptError:"Type de fichier illégal ",maxFileCount:function(e){return"Limite de fichiers atteinte (".concat(e,")")}},Ut={defaultLabel:"Drop your files here",uploadingMessage:function(e){return"Uploading ".concat(e," files")},uploadFinished:function(e,n){return"Uploaded files: ".concat(e,", Rejected files: ").concat(n)},noFilesMessage:"There is no missing valid file to upload",footer:{acceptAll:"All file types accepted",acceptCustom:function(e){return"Allowed types: ".concat(e)}},header:{uploadFilesMessage:"Upload files",maxSizeMessage:function(e){return"Max file size: ".concat(e)},validFilesMessage:function(e,n){return"Files ".concat(e,"/").concat(n)}},fakeuploadsuccess:"File was successfuly uploaded",fakeUploadError:"Error on uploading. Please try again later."},_t={fullInfoLayer:{name:"Name: ",size:"Size: ",type:"Type: "},status:{preparing:"Preparing",uploading:"Uploading",success:"Success",valid:"Valid",denied:"Not valid",error:"Error",aborted:"Aborted"}},It={maxSizeError:function(e){return"File is too big. Max file size allowed is ".concat(ue(e))},acceptError:"File type is not allowed",maxFileCount:function(e){return"Max amount of files (".concat(e,") has been reached")}},Tt={defaultLabel:"Suelta tus archivos aquí",uploadingMessage:function(e){return"Subiendo ".concat(e," archivos")},uploadFinished:function(e,n){return"Archivos subidos: ".concat(e,", Archivos rechazados: ").concat(n)},noFilesMessage:"No hay archivos válidos pendientes por subir",footer:{acceptAll:"Todos los tipos de archivo aceptados",acceptCustom:function(e){return"Tipo(s) de archivo permitidos: ".concat(e)}},header:{uploadFilesMessage:"Subir",maxSizeMessage:function(e){return"Tam. máximo ".concat(e)},validFilesMessage:function(e,n){return"Archivos ".concat(e,"/").concat(n)}},fakeuploadsuccess:"El archivo se subió correctamente",fakeUploadError:"Error al subir el archivo"},jt={fullInfoLayer:{name:"Nombre: ",size:"Tamaño: ",type:"Tipo: "},status:{preparing:"Preparando",uploading:"Subiendo",success:"Éxito",valid:"Válido",denied:"No válido",error:"Error",aborted:"Anulado"}},Ot={maxSizeError:function(e){return"El archivo es muy grande. El tam. máximo es ".concat(ue(e))},acceptError:"Tipo de archivo no permitido",maxFileCount:function(e){return"Cantidad máxima de archivos (".concat(e,") alcanzada")}},Pt={defaultLabel:"Перетащите сюда свои файлы.",uploadingMessage:function(e){return"Выгрузка ".concat(e," файлов")},uploadFinished:function(e,n){return"Загружено файлов: ".concat(e,", отклоненных файлов: ").concat(n)},noFilesMessage:"Действительный файл не отсутствует для загрузки",footer:{acceptAll:"Принимаются все типы файлов ",acceptCustom:function(e){return"Допустимые типы: ".concat(e)}},header:{uploadFilesMessage:"Отправить",maxSizeMessage:function(e){return"макс размер: ".concat(e)},validFilesMessage:function(e,n){return"Файлы ".concat(e,"/").concat(n)}},fakeuploadsuccess:"Файл был успешно загружен",fakeUploadError:"Ошибка при загрузке"},Ht={fullInfoLayer:{name:"Имя: ",size:"Размер: ",type:"Tип: "},status:{preparing:"подготовка",uploading:"Загрузка",success:"успех",valid:"годный",denied:"выкинутый",error:"ошибка",aborted:"прерванный"}},Vt={maxSizeError:function(e){return"Файл слишком большой. Максимально допустимый размер файла - ".concat(ue(e))},acceptError:"Тип файла не разрешен",maxFileCount:function(e){return"Достигнуто максимальное количество файлов (".concat(e,")")}},qt={defaultLabel:"Solte seus arquivos aqui ",uploadingMessage:function(e){return"Enviando ".concat(e," arquivos")},uploadFinished:function(e,n){return"Arquivos enviados: ".concat(e,", Arquivos rejeitados: ").concat(n)},noFilesMessage:"Nenhum arquivo válido está faltando para enviar",footer:{acceptAll:"Todos os tipos de arquivo são aceitos",acceptCustom:function(e){return"Tipos permitidos: ".concat(e)}},header:{uploadFilesMessage:"Enviar",maxSizeMessage:function(e){return"Tamanho máximo: ".concat(e)},validFilesMessage:function(e,n){return"Arquivos ".concat(e,"/").concat(n)}},fakeuploadsuccess:"O arquivo foi enviado com sucesso",fakeUploadError:"Erro ao enviar"},Zt={fullInfoLayer:{name:"Nome: ",size:"Tamanho: ",type:"Tipo: "},status:{preparing:"Preparando",uploading:"Enviando",success:"Êxito",valid:"válido",denied:"Negado",error:"Erro",aborted:"Abortado"}},Wt={maxSizeError:function(e){return"O arquivo é muito grande. O tamanho máximo de arquivo permitido é ".concat(ue(e))},acceptError:"O tipo de arquivo não é permitido ",maxFileCount:function(e){return"Quantidade máxima de arquivos (".concat(e,") alcançada")}},Gt={defaultLabel:"将您的文件放在这里",uploadingMessage:function(e){return"上传 ".concat(e," 个文件")},uploadFinished:function(e,n){return"上传文件：".concat(e,"，拒绝文件：").concat(n)},noFilesMessage:"没有缺少要加载的有效文件",footer:{acceptAll:"接受所有文件类型",acceptCustom:function(e){return"允许的类型: ".concat(e)}},header:{uploadFilesMessage:"上传文件",maxSizeMessage:function(e){return"最大文件大小：".concat(e)},validFilesMessage:function(e,n){return"文档 ".concat(e,"/").concat(n)}},fakeuploadsuccess:"文件已成功上传",fakeUploadError:"上传时出错"},Xt={fullInfoLayer:{name:"文档名称: ",size:"尺寸: ",type:"文件类型: "},status:{preparing:"预加载",uploading:"上传",success:"成功",valid:"接受的文件",denied:"被拒绝的文件",error:"错误",aborted:"中止"}},$t={maxSizeError:function(e){return"文件太大。 允许的最大文件大小为 ".concat(ue(e))},acceptError:"文件类型不允许",maxFileCount:function(e){return"已达到最大文件数 (".concat(e,")")}},Jt={defaultLabel:"把你的文件放在這裡 ",uploadingMessage:function(e){return"上傳".concat(e,"個文件")},uploadFinished:function(e,n){return"上傳文件: ".concat(e,", 拒絕的文件：").concat(n)},noFilesMessage:"沒有缺少要上傳的有效文件",footer:{acceptAll:"接受所有文件類型",acceptCustom:function(e){return"允許的類型：".concat(e)}},header:{uploadFilesMessage:"上傳文件",maxSizeMessage:function(e){return"最大文件大小：".concat(e)},validFilesMessage:function(e,n){return" 文件 ".concat(e,"/").concat(n)}},fakeuploadsuccess:"文件已成功上傳",fakeUploadError:"上傳時出錯"},Kt={fullInfoLayer:{name:"文檔名稱: ",size:"文件大小: ",type:"文件類型: "},status:{preparing:"預加載",uploading:"上傳",success:"成功",valid:"有效文件",denied:"無效文件",error:"錯誤",aborted:"中止"}},Yt={maxSizeError:function(e){return"文件太大。 允許的最大文件大小為 ".concat(ue(e))},acceptError:"文件類型不允許",maxFileCount:function(e){return"已達到最大文件數 (".concat(e,")")}},fe={"ES-es":jt,"EN-en":_t,"FR-fr":Bt,"IT-it":Dt,"PT-pt":Zt,"RU-ru":Ht,"ZH-cn":Xt,"ZH-hk":Kt},Fe=function(e){switch(e){case"ES-es":return fe["ES-es"];case"EN-en":return fe["EN-en"];case"FR-fr":return fe["FR-fr"];case"IT-it":return fe["IT-it"];case"PT-pt":return fe["PT-pt"];case"RU-ru":return fe["RU-ru"];case"ZH-cn":return fe["ZH-cn"];case"ZH-hk":return fe["ZH-hk"];default:return fe["EN-en"]}},me={"ES-es":Tt,"EN-en":Ut,"FR-fr":Rt,"IT-it":Mt,"PT-pt":qt,"RU-ru":Pt,"ZH-cn":Gt,"ZH-hk":Jt},Xe=function(e){switch(e){case"ES-es":return me["ES-es"];case"EN-en":return me["EN-en"];case"FR-fr":return me["FR-fr"];case"IT-it":return me["IT-it"];case"PT-pt":return me["PT-pt"];case"RU-ru":return me["RU-ru"];case"ZH-cn":return me["ZH-cn"];case"ZH-hk":return me["ZH-hk"];default:return me["EN-en"]}},Ma={"ES-es":Ot,"EN-en":It,"FR-fr":At,"IT-it":Lt,"PT-pt":Wt,"RU-ru":Vt,"ZH-cn":$t,"ZH-hk":Yt},Qt=function(e){return!e||!["ES-es","EN-en","FR-fr","IT-it","PT-pt","RU-ru","ZH-cn","ZH-hk"].includes(e)?Ma["EN-en"]:Ma[e]},Ha=function(e,n,a){return new Promise(function(t,i){try{var r=new FileReader;r.onprogress=function(){n==null||n()},r.onerror=function(){a==null||a()},r.onload=function(){t(r.result)},r.readAsDataURL(e)}catch{i(void 0)}})};function er(e){return new Promise(function(n,a){if(!e||e.length===0){a("landscape");return}try{var t=new Image;t.src=e,t.onerror=function(i){a("landscape")},t.onload=function(){var i=t.width,r=t.height;i>r?n("landscape"):n("portrait")}}catch{a("landscape")}})}var nr="https://user-images.githubusercontent.com/43678736/132086517-72a51a12-e403-4675-bfd7-22c23affa730.png",ar="https://user-images.githubusercontent.com/43678736/132086518-7026d4f1-ea16-4ed0-89fd-37c1aa8ac3ed.png",tr="https://user-images.githubusercontent.com/43678736/132086519-863c63b4-917e-4471-94ff-7e15651cc14b.png",rr="https://user-images.githubusercontent.com/43678736/132086520-9bc6aa3b-51c9-4da2-9ef7-349162b86d0b.png",ir="https://user-images.githubusercontent.com/43678736/132086521-dbd6cf0d-d4d7-4b92-bb26-17e8a51a9383.png",or="https://user-images.githubusercontent.com/43678736/132086522-070f48e8-78a8-4294-8dbb-aab81525e164.png",lr="https://user-images.githubusercontent.com/43678736/132086595-90ab7f90-f87e-4900-94d9-d0b26745df48.png",sr="https://user-images.githubusercontent.com/43678736/132086597-e285ad5c-613a-4679-a270-493e5be4ffd9.png",cr="https://user-images.githubusercontent.com/43678736/132086598-623c410a-084a-4395-a448-211b2ff61cfe.png",ur="https://user-images.githubusercontent.com/43678736/132086600-8b70a007-512d-4252-9c66-eabd3ddd6573.png",dr="https://user-images.githubusercontent.com/43678736/132086601-e62e5d1a-d8a2-4475-a14f-85922cec9272.png",fr="https://user-images.githubusercontent.com/43678736/132086602-4c772934-f608-4f01-8459-c4622cee8ad5.png",mr="https://user-images.githubusercontent.com/43678736/132086604-b5b019fe-572e-477e-92c2-3769a48a1304.png",pr="https://user-images.githubusercontent.com/43678736/132086606-715ccb66-4702-4f7d-9b09-ac93ba17b643.png",gr="https://user-images.githubusercontent.com/43678736/132086608-bcae9d57-8e54-488c-90c4-4952ae530b5e.png",vr="https://user-images.githubusercontent.com/43678736/132086618-397d6bd2-9fda-43ed-a135-cb40388c35af.png",br="https://user-images.githubusercontent.com/43678736/132086620-2586ba40-c583-4589-b1a4-8bb5b258b44d.png",hr="https://user-images.githubusercontent.com/43678736/132086621-3b95fb64-2533-4ccc-abcd-bd2beba572e9.png",xr="https://user-images.githubusercontent.com/43678736/132086622-af705a0c-2b25-4ba7-8ab6-bd69ec97f7e2.png",yr="https://user-images.githubusercontent.com/43678736/132086624-89141a46-64e4-4fa0-bf69-54a0eb4d48c9.png",Da="https://user-images.githubusercontent.com/43678736/132086625-1b8f2652-1de0-4475-8c12-7da4a9973ffb.png",wr="https://user-images.githubusercontent.com/43678736/132086626-38699705-1e6f-4bca-984b-03167b236faa.png",Er="https://user-images.githubusercontent.com/43678736/132086650-f1166246-b361-4c30-a04e-9781c555d14a.png",kr="https://user-images.githubusercontent.com/43678736/132086650-f1166246-b361-4c30-a04e-9781c555d14a.png",Fr="https://user-images.githubusercontent.com/43678736/132086652-4562942e-aaea-466c-968f-380fffabf3f9.png",zr="https://user-images.githubusercontent.com/43678736/132086653-0487e7e2-1ee3-49e2-8cfe-3e20f1f7490a.png",Cr="https://user-images.githubusercontent.com/43678736/132086656-6e96c815-e4e2-4ffd-9d71-57e9cc2450bc.png",Sr="https://user-images.githubusercontent.com/43678736/132086658-5d27d3c2-394f-43fb-b512-9b414a257875.png",Nr="https://user-images.githubusercontent.com/43678736/132086659-98f3ef6e-b9f3-4b6d-b18f-469b5334ba27.png",Mr="https://user-images.githubusercontent.com/43678736/132086661-a5484553-06c7-4ffa-a8f9-96b57b1b0344.png",Dr="https://user-images.githubusercontent.com/43678736/132086662-05ad1597-d5e5-4efa-833e-2876e966a745.png",Lr="https://user-images.githubusercontent.com/43678736/132086663-90c58955-f7fb-4bdb-ac53-92667d16d4a3.png",Rr="https://user-images.githubusercontent.com/43678736/132086664-9a7530e7-6d78-4ef3-a176-20cf7f57b555.png",Zn="https://user-images.githubusercontent.com/43678736/132086666-ab3c505d-b2c0-4177-9a06-aed5d9c39ee4.png",Br="https://user-images.githubusercontent.com/43678736/132086667-6c7dcbcc-8d83-41a2-8e0a-85b09e2791ae.png",Ar="https://user-images.githubusercontent.com/43678736/132086668-9f246e91-cf2e-49cf-9617-e1fbb71abbbb.png",Ur="https://user-images.githubusercontent.com/43678736/132086669-46113762-84d1-4b32-9441-b0138ce17a5d.png",_r="https://user-images.githubusercontent.com/43678736/145835364-2054509d-3448-4d34-921f-73dd6e297fc7.png",Ir="https://user-images.githubusercontent.com/43678736/145835367-19172bf8-cd5a-4cbe-b512-d0de1d91f269.png",Tr="https://user-images.githubusercontent.com/43678736/145835373-a57ef0f5-3968-483b-9f55-6d67e7f1dcea.png",jr="https://user-images.githubusercontent.com/43678736/132086670-0f96e770-cedc-4635-a5f9-cf97894c1d7a.png",Or="https://user-images.githubusercontent.com/43678736/132086671-02ad35ef-ec3a-4a65-abd5-5bf794dfcf7b.png",Pr="https://user-images.githubusercontent.com/43678736/132086672-3a856fda-823d-4997-b802-c7c640e6ef44.png",Hr="https://user-images.githubusercontent.com/43678736/132086673-0c4409ab-754e-4619-8cfa-179d0ccf1bd9.png",Vr="https://user-images.githubusercontent.com/43678736/132086674-fdb56d02-5845-49b7-8462-6357bc963464.png",qr="https://user-images.githubusercontent.com/43678736/132086675-c879645d-acb4-41a6-ab3c-4e6c2048badb.png",Zr="https://user-images.githubusercontent.com/43678736/132086685-4e327c4c-a409-4b83-b36a-8d88936b314b.png",Wr="https://user-images.githubusercontent.com/43678736/132086688-8e82fae4-3a9b-49c0-bf99-77189525514c.png",Gr="https://user-images.githubusercontent.com/43678736/132086689-fe1fef9f-d2db-455b-8f4b-09acd095f571.png",Xr="https://user-images.githubusercontent.com/43678736/132086689-fe1fef9f-d2db-455b-8f4b-09acd095f571.png",$r="https://user-images.githubusercontent.com/43678736/132086691-d472576b-ec6a-4332-acd2-dd6a00b72952.png",Jr="https://user-images.githubusercontent.com/43678736/132086693-9d43571e-0c86-438f-b247-e2cb42e19e06.png",Kr="https://user-images.githubusercontent.com/43678736/132086694-4e661d6a-1118-441e-8bc3-c52fcb2133b6.png",Yr="https://user-images.githubusercontent.com/43678736/132086697-1d82d724-35b6-4f06-847a-3c59a5deda6e.png",Qr="https://user-images.githubusercontent.com/43678736/132086698-19384230-dbd7-4e05-bc69-ef4537b6aae3.png",ei="https://user-images.githubusercontent.com/43678736/132086699-5993a482-04f4-4915-b105-9037f527cf61.png",ni="https://user-images.githubusercontent.com/43678736/132086700-c23461c8-6819-46e1-aecd-0a1f8d3507bb.png",ai="https://user-images.githubusercontent.com/43678736/132086701-c8044c09-8d95-4af1-9410-66761001d7da.png",ti="https://user-images.githubusercontent.com/43678736/132086702-59294337-ed99-4302-badd-316b2c1ff62f.png",ri="https://user-images.githubusercontent.com/43678736/132086704-8fd51e7c-afa2-47a3-ab2f-d0bcd0ecae9f.png",ii="https://user-images.githubusercontent.com/43678736/132086705-33294da1-5c0f-49f7-b890-e4857cec0a6d.png",oi="https://user-images.githubusercontent.com/43678736/132086706-22f805d0-39d4-494b-824e-47dc75d05eb7.png",li="https://user-images.githubusercontent.com/43678736/132086707-e61a84de-d396-4dbf-8d1b-1d6ee19e1ac8.png",si="https://user-images.githubusercontent.com/43678736/132086707-e61a84de-d396-4dbf-8d1b-1d6ee19e1ac8.png",ci="https://user-images.githubusercontent.com/43678736/132086708-21d096dd-7148-40aa-97f1-cbb099339740.png",ui="https://user-images.githubusercontent.com/43678736/132086709-811d4e90-3cfa-4044-a956-aeda9c67fc92.png",di="https://user-images.githubusercontent.com/43678736/132086710-c5479c6c-0249-4542-adad-48b0ef40b775.png",fi="https://user-images.githubusercontent.com/43678736/132086711-1524a3e7-3e33-4822-a34f-ff3235404045.png",mi="https://user-images.githubusercontent.com/43678736/132086712-17e2c491-f6e4-4586-aef6-06bcc5f4b0e5.png",pi="https://user-images.githubusercontent.com/43678736/132086715-204b5a8b-9c5a-4bac-8294-9237ebc16089.png",gi="https://user-images.githubusercontent.com/43678736/132086716-64511d20-58cb-45a8-85df-f4d9408b469d.png",vi="https://user-images.githubusercontent.com/43678736/132086718-a8499333-6282-4820-aa1f-4d133eb54648.png",Yn=function(e){var n=/(?:\.([^.]+))?$/,a=n.exec(e);return a?a[1]:""},ne="octet",bi=function(e){switch(e){case"aac":return"aac";case"midi":return"midi";case"x-midi":return"midi";case"mpeg":return"mpeg";case"ogg":return"oga";case"opus":return"opus";case"wav":return"wav";case"webm":return"webm";case"wma":return"wma";default:return ne}},hi=function(e){switch(e){case"css":return"css";case"csv":return"csv";case"html":return"html";case"calendar":return"icalendar";case"javascript":return"javascript";case"x-javascript":return"javascript";case"plain":return"text";case"xml":return"xml";default:return ne}},xi=function(e){switch(e){case"bmp":return"bmp";case"gif":return"gif";case"jpg":return"jpeg";case"jpeg":return"jpeg";case"png":return"png";case"tiff":return"tiff";case"webp":return"webp";default:return ne}},yi=function(e){switch(e){case"otf":return"otf";case"ttf":return"ttf";case"woff":return"woff";case"woff2":return"woff";default:return ne}},wi=function(e){switch(e){case"x-msvideo":return"avi";case"msvideo":return"avi";case"avi":return"avi";case"mp4":return"mp4";case"mpeg":return"mpeg";case"ogg":return"ogv";case"mp2t":return"mp2t";case"wmv":return"wmv";case"webm":return"webm";default:return ne}},Ei=function(e){switch(e){case"x-abiword":return"abw";case"abiword":return"abw";case"x-freearc":return"arc";case"freearc":return"arc";case"vnd.amazon.ebook":return"azw";case"octet-stream":return"octet";case"x-bzip":return"bz";case"x-bzip2":return"bz2";case"bzip":return"bz";case"bzip2":return"bz2";case"x-cdf":return"cda";case"msaccess":return"accdb";case"csh":return"csh";case"x-csh":return"csh";case"vnd.ms-fontobject":return"eot";case"epub+zip":return"epub";case"gzip":return"gzip";case"java-archive":return"jar";case"x-javascript":return"javascript";case"json":return"json";case"ld+json":return"jsonld";case"vnd.apple.installer+xml":return"mpkg";case"ogg":return"ogx";case"vnd.rar":return"rar";case"rtf":return"rtf";case"x-sh":return"sh";case"sh":return"sh";case"x-shockwave-flash":return"swf";case"x-tar":return"tar";case"x-httpd-php":return"php";case"vnd.visio":return"vsd";case"xhtml+xml":return"xhtml";case"xml":return"xml";case"vnd.mozilla.xul+xml":return"xul";case"vnd.openxmlformats-officedocument.wordprocessingml.document":return"docx";case"msword":return"docx";case"vnd.openxmlformats-officedocument.spreadsheetml.sheet":return"xlsx";case"vnd.openxmlformats-officedocument.presentationml.presentation":return"pptx";case"vnd.ms-powerpoint":return"pptx";case"vnd.oasis.opendocument.presentation":return"odp";case"vnd.oasis.opendocument.text":return"odt";case"vnd.oasis.opendocument.spreadsheet":return"ods";case"zip":return"zip";case"x-zip-compressed":return"zip";case"pdf":return"pdf";default:return ne}},Va=function(e){if(!e||!e.includes("/"))return ne;var n=e.split("/")[0],a=e.split("/")[1];switch(n){case"application":return Ei(a);case"audio":return bi(a);case"video":return wi(a);case"text":return hi(a);case"image":return xi(a);case"font":return yi(a);default:return ne}},qa=function(e){var n="octet";return e&&e!==""&&(e.includes("zip")||e.includes("rar")?n="zip":e.includes("doc")?n="docx":e.includes("xls")?n="xlsx":e.includes("drawio")?n="drawio":e.includes("psd")?n="psd":e.includes("csv")?n="csv":e==="jsx"?n="react":e==="py"?n="python":e==="vue"?n="vue":e==="java"?n="java":e==="ts"?n="typescript":(e==="sass"||e==="scss")&&(n="sass")),n},Za=function(e){var n="text";return e&&e!==""&&(e==="jsx"?n="react":e==="py"?n="python":e==="vue"?n="vue":e==="java"?n="java":e==="ts"||e==="tsx"?n="typescript":e==="js"?n="javascript":e==="xml"?n="xml":e==="php"&&(n="php")),n},ki=function(e,n){var a="fallBack";if(e)a=Va(e.type);else return a=ne,n!=null&&n.fallBack?{url:n==null?void 0:n.fallBack,mimeResume:a}:{url:gn[a],mimeResume:a};var t=Yn(e.name);a==="text"&&(a=Za(t)),a===ne&&(a=qa(t));var i=n==null?void 0:n[a];return i!==void 0?{url:i,mimeResume:a}:{url:gn[a],mimeResume:a}},Fi=function(e,n,a){var t="octet";if(e)t=Va(n);else return t=ne,a!=null&&a.fallBack?{url:a==null?void 0:a.fallBack,mimeResume:t}:{url:gn[t],mimeResume:t};var i=Yn(e);t==="text"&&(t=Za(i)),t===ne&&(t=qa(i));var r=a==null?void 0:a[t];return r!==void 0?{url:r,mimeResume:t}:{url:gn[t],mimeResume:t}},gn={aac:ar,accdb:rr,abw:tr,arc:hr,avi:ir,azw:or,octet:Zn,bmp:lr,bz:sr,bz2:cr,cda:ur,csh:dr,css:fr,csv:mr,docx:pr,drawio:gr,eot:vr,epub:br,gzip:yr,gif:xr,html:Da,icalendar:wr,jar:kr,jpeg:zr,javascript:Fr,json:Cr,jsonld:Sr,midi:Nr,mp3:Mr,mp4:Dr,mpeg:Lr,mpkg:Rr,mp2t:Zn,odp:Br,ods:Ar,odt:Ur,oga:_r,ogv:Ir,ogx:Tr,opus:jr,otf:Or,png:Vr,pdf:Pr,php:Hr,pptx:qr,psd:Zr,rar:Xr,rtf:Jr,sass:Kr,sh:Yr,swf:Qr,tar:Gr,tiff:ni,ttf:ai,typescript:ti,text:ei,vsd:ri,wav:oi,weba:si,webm:li,webp:ci,woff:fi,wma:ui,wmv:di,xhtml:Da,xlsx:mi,xml:pi,xul:gi,zip:vi,sevenzip:nr,python:Wr,java:Er,react:$r,vue:ii,fallBack:Zn},vn=function(){function e(n){var a=n.id,t=n.file,i=n.name,r=n.size,l=n.type,s=n.imageUrl,c=n.valid,u=n.errors,d=n.uploadMessage,f=n.uploadStatus,m=n.progress,p=n.xhr,b=n.extraData,g=n.extraUploadData,v=n.serverResponse,x=n.downloadUrl,w=n.videoUrl,N=n.uploadUrl;this.id=a,this.file=t,this.name=i,this.size=r,this.type=l,this.imageUrl=s,this.valid=c,this.errors=u,this.uploadStatus=f,this.uploadMessage=d,this.progress=m,this.xhr=p,this.extraData=b,this.extraUploadData=g,this.serverResponse=v,this.downloadUrl=x,this.videoUrl=w,this.uploadUrl=N}return e.toExtFile=function(n){for(var a={},t=Object.keys(n),i=Object.values(n),r=0;r<i.length;r++){var l=i[r],s=t[r];l!==void 0&&(a[s]=l)}return a},e.prototype.toExtFile=function(){return e.toExtFile(this)},e.hasValidUrl=function(n){return n.uploadUrl&&n.uploadUrl.length>0},e.someValidUrl=function(n){return n.some(e.hasValidUrl)},e}(),C=function(){return C=Object.assign||function(n){for(var a,t=1,i=arguments.length;t<i;t++){a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(n[r]=a[r])}return n},C.apply(this,arguments)};function Ae(e,n,a,t){function i(r){return r instanceof a?r:new a(function(l){l(r)})}return new(a||(a=Promise))(function(r,l){function s(d){try{u(t.next(d))}catch(f){l(f)}}function c(d){try{u(t.throw(d))}catch(f){l(f)}}function u(d){d.done?r(d.value):i(d.value).then(s,c)}u((t=t.apply(e,[])).next())})}function Ue(e,n){var a={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},t,i,r,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(u){return function(d){return c([u,d])}}function c(u){if(t)throw new TypeError("Generator is already executing.");for(;l&&(l=0,u[0]&&(a=0)),a;)try{if(t=1,i&&(r=u[0]&2?i.return:u[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,u[1])).done)return r;switch(i=0,r&&(u=[u[0]&2,r.value]),u[0]){case 0:case 1:r=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,i=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(r=a.trys,!(r=r.length>0&&r[r.length-1])&&(u[0]===6||u[0]===2)){a=0;continue}if(u[0]===3&&(!r||u[1]>r[0]&&u[1]<r[3])){a.label=u[1];break}if(u[0]===6&&a.label<r[1]){a.label=r[1],r=u;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(u);break}r[2]&&a.ops.pop(),a.trys.pop();continue}u=n.call(e,a)}catch(d){u=[6,d],i=0}finally{t=r=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function bn(e,n,a){if(a||arguments.length===2)for(var t=0,i=n.length,r;t<i;t++)(r||!(t in n))&&(r||(r=Array.prototype.slice.call(n,0,t)),r[t]=n[t]);return e.concat(r||Array.prototype.slice.call(n))}var Gn=function(){function e(){}return e.getNextId=function(){return e.nextId++,e.nextId},e.setFileList=function(n,a){return n?(e.fileLists[n]=bn([],a,!0),n):0},e.createFileListMap=function(){var n=e.getNextId();return e.fileLists[n]=[],n},e.removeFileListMap=function(n){if(n)try{return e.fileLists[n]=void 0,n}catch{return 0}else return 0},e.getExtFileInstanceList=function(n){try{return n?e.fileLists[n]:void 0}catch{return}},e.setFileListMapPreparing=function(n,a,t,i){if(typeof n=="number"||typeof n=="string")try{var r=[],l=bn([],a,!0);i&&t&&(l=l.filter(function(c){return c.valid})),t?l=l.map(function(c){return c.uploadStatus!=="success"&&c.valid?C(C({},c),{uploadStatus:"preparing"}):C({},c)}):l=l.map(function(c){return c.uploadStatus!=="success"?C(C({},c),{uploadStatus:"preparing"}):C({},c)}),r=l.map(function(c){return new vn(c)});var s=e.setFileList(n,r);return r}catch{return}},e.setFileListMapPreparing2=function(n,a,t,i){return e.setFileList(n,a.map(function(r){return new vn(C(C({},r),{uploadStatus:"preparing"}))})),e.getExtFileInstanceList(n)},e.nextId=0,e.fileLists={},e}(),Qn=function(){function e(){}return e.getNextId=function(){return e.nextId++,e.nextId},e.nextId=0,e}(),La=function(e){for(var n=[],a=0,t=void 0;t=e[a];a++)n.push({id:Qn.getNextId(),file:t,name:t.name,size:t.size,type:t.type});return n},zi=function(e,n,a,t){return e!=null||n!=null||a!=null||t!=null},Ci=function(e){return e===void 0&&(e=5e3),new Promise(function(n,a){setTimeout(function(){n()},e)})},Si=function(e,n){n===void 0&&(n=Xe("EN-en"));var a=e.toExtFile();return new Promise(function(t,i){setTimeout(function(){var r=Math.floor(Math.random()*10);if(r%2===0){var l=!0,s=n.fakeuploadsuccess,c={url:""};t(C(C({},a),{serverResponse:{success:l,message:s,payload:c},uploadStatus:"success",uploadMessage:s}))}else{var l=!1,s=n.fakeUploadError,c={};t(C(C({},a),{serverResponse:{success:l,message:s,payload:c},uploadStatus:"error",uploadMessage:s}))}},1700)})};function Ni(e,n){return Math.floor(Math.random()*(n-e))+e}var Mi=function(e){e&&(e.value="")},ie=function(e,n){return n?"".concat(e," ").concat(n):e},Di=function(e,n){return(!n||n&&e.valid)&&e.uploadStatus!=="success"},Li=function(e,n,a,t){var i="",r=void 0,l=void 0;return e&&typeof e.name=="string"?(i=e.name,r=e.type,l=e.size):n&&typeof n=="string"&&(i=n,r=a,l=t),[i,r,l]},Ri=function(e){if(!e||e.length===0)return[];var n=e.split(",").map(function(a){return a.trim()});return n},Bi=function(e,n){for(var a=!1,t=n.name,i=n.type,r=0;r<e.length;r++){var l=e[r];if(l.length!==0){if(l.charAt(0)==="."&&l.includes(Yn(t)))return!0;if(i&&i.length>0&&l.includes("/")&&i.includes("/")){var s=l.split("/")[0],c=l.split("/")[1],u=i.split("/")[0],d=i.split("/")[1];if(s===u){if(c==="*")return!0;if(c===d)return!0}}}}return a},Xn=function(e,n,a,t,i,r){var l=[];if(!n)return l;for(var s=n,c=Qt(r),u=c.maxFileCount,d=0;d<e.length;d++){var f=e[d];if(f=Ai(f,t,a,c),f.valid){var m=s>0;f.valid=m,m||(f.errors=f.errors?bn(bn([],f.errors,!0),[u(i||1/0)],!1):[u(i||1/0)]),s--}l.push(f)}return l},Ai=function(e,n,a,t){var i=C({},e),r=[];if(!e.file)return C({},i);if(n){var l=n(i.file),s=l.errors;s&&r.push.apply(r,s)}var c=a.maxFileSize,u=a.accept,d=e.file;if(c&&d.size>c){var f=t.maxSizeError;r.push(f(c))}u&&!Bi(Ri(u),d)&&r.push(t.acceptError);var m=r.length===0;return i=C(C({},i),{valid:m,errors:m?void 0:r}),i};function Ui(e,n){for(var a=Object.keys(n||{}),t=0;t<a.length&&n;t++)e.append(a[t],n[a[t]])}function Wa(e,n){for(var a=Object.keys(n||{}),t=0;t<a.length&&n;t++)e.setRequestHeader(a[t],n[a[t]])}var _i="Unable to upload. A valid url was not provided",Ii="Unable to upload. xhr object was not provided",Ga={success:!1,message:"Timeout error",payload:{}},hn={success:!1,message:"Upload aborted",payload:{}},Ti={success:!1,message:"Error when parsing JSON response",payload:{}},ji={success:!1,message:"Unexpected error",payload:{}},Oi=function(e){return C(C({},e),{uploadMessage:Ii,uploadStatus:"error",serverResponse:{success:!1}})},Pi=function(e){return C(C({},e),{uploadMessage:_i,uploadStatus:"error",serverResponse:{success:!1}})},Xa=function(e){try{var n=JSON.parse(e.response),a=e.status>=200&&e.status<300?!0:typeof n.success=="boolean"?n.success:!1,t=typeof n.message=="string"?n.message:a?"Upload compete!. No message from server found.":"Error on upload. No message from server found.",i=n.payload||n||{},r={success:a,message:t,payload:i};return r}catch{return Ti}},Hi=function(e,n){return C(C({},e),{serverResponse:n,uploadMessage:n.message,uploadStatus:"success"})},Ra=function(e,n){return C(C({},e),{uploadMessage:n.message,uploadStatus:"error",serverResponse:n})},Vi=function(e,n,a,t,i){return n===void 0&&(n="POST"),new Promise(function(r,l){console.log("uploadBlob => BLOB");var s=["POST","PUT","PATCH"].includes(n.toUpperCase())?n:"POST";e.upload.onload=function(){},e.upload.ontimeout=function(){return r(Ga)},e.upload.onabort=function(){r(hn)},e.onloadend=function(c){return Ae(void 0,void 0,void 0,function(){return Ue(this,function(u){return[2]})})},e.onreadystatechange=function(c){return Ae(void 0,void 0,void 0,function(){return Ue(this,function(u){return e.readyState===4&&(e.response!==""?r(Xa(e)):r(hn)),[2]})})},e.open(s,a,!0),Wa(e,i),e.send(t)})},qi=function(e,n,a,t,i){return n===void 0&&(n="POST"),new Promise(function(r,l){var s=["POST","PUT","PATCH"].includes(n.toUpperCase())?n:"POST";e.upload.onload=function(){},e.upload.ontimeout=function(){return r(Ga)},e.upload.onabort=function(){r(hn)},e.onloadend=function(c){return Ae(void 0,void 0,void 0,function(){return Ue(this,function(u){return[2]})})},e.onreadystatechange=function(c){return Ae(void 0,void 0,void 0,function(){return Ue(this,function(u){return e.readyState===4&&(e.response!==""?r(Xa(e)):r(hn)),[2]})})},e.open(s,a,!0),Wa(e,i),e.send(t)})},Zi=function(e,n,a,t,i,r,l){return Ae(void 0,void 0,void 0,function(){return Ue(this,function(s){return[2,new Promise(function(c,u){return Ae(void 0,void 0,void 0,function(){var d,f,m,p,b,g,v;return Ue(this,function(x){switch(x.label){case 0:return x.trys.push([0,5,,6]),d=e.xhr,d?(f=e.uploadUrl||(a==null?void 0:a(e))||n,f==null||f.length==0?(c(Pi(e)),[2]):(m=t||"POST",p=e.file,b=new FormData,b.append(r||"file",p),g=C({},e.extraUploadData),Ui(b,g),v=void 0,l?[4,Vi(d,m,f,p,i||{})]:[3,2])):(c(Oi(e)),[2]);case 1:return v=x.sent(),[3,4];case 2:return[4,qi(d,m,f,b,i||{})];case 3:v=x.sent(),x.label=4;case 4:return v.success?c(Hi(e,v)):c(Ra(e,v)),[3,6];case 5:return x.sent(),c(Ra(e,ji)),[3,6];case 6:return[2]}})})})]})})},Wi=function(e){return C(C({},e),{uploadMessage:"Unexpected error",uploadStatus:"error",serverResponse:{success:!1,message:"Error on upload: unexpected error ",payload:{}}})},Ba=function(e){return e?e.map(function(n){return C(C({},n),{xhr:new XMLHttpRequest})}):[]},Gi=function(e){return e.uploadStatus==="preparing"?(e.uploadStatus="uploading",C(C({},e),{uploadStatus:"uploading"})):e},Wn=function(e){return e===void 0&&(e=1500),new Promise(function(n,a){setTimeout(function(){n(!0)},e)})},he=function(e){return e.filter(function(n){var a;return!(!((a=n.extraData)===null||a===void 0)&&a.deleted)}).map(function(n){return n.uploadStatus==="aborted"&&!n.uploadMessage&&(n.uploadMessage="Upload aborted by user"),vn.toExtFile(n)})},Xi=function(e,n){var a=e.uploadStatus,t=n.uploadStatus;a==="preparing"&&["aborted",void 0].includes(t)?(e.uploadStatus=void 0,e.uploadMessage=n.uploadMessage):a==="uploading"&&["aborted",void 0].includes(t)&&(e.uploadStatus="aborted",e.uploadMessage=n.uploadMessage)},Aa={indianred:"#CD5C5C",lightcoral:"#F08080",salmon:"#FA8072",darksalmon:"#E9967A",lightsalmon:"#FFA07A",crimson:"#DC143C",red:"#FF0000",firebrick:"#B22222",darkred:"#8B0000",pink:"#FFC0CB",lightpink:"#FFB6C1",hotpink:"#FF69B4",deeppink:"#FF1493",mediumvioletred:"#C71585",palevioletred:"#DB7093",coral:"#FF7F50",tomato:"#FF6347",orangered:"#FF4500",darkorange:"#FF8C00",orange:"#FFA500",gold:"#FFD700",yellow:"#FFFF00",lightyellow:"#FFFFE0",lemonchiffon:"#FFFACD",lightgoldenrodyellow:"#FAFAD2",papayawhip:"#FFEFD5",moccasin:"#FFE4B5",peachpuff:"#FFDAB9",palegoldenrod:"#EEE8AA",khaki:"#F0E68C",darkkhaki:"#BDB76B",lavender:"#E6E6FA",thistle:"#D8BFD8",plum:"#DDA0DD",violet:"#EE82EE",orchid:"#DA70D6",fuchsia:"#FF00FF",magenta:"#FF00FF",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",rebeccapurple:"#663399",blueviolet:"#8A2BE2",darkviolet:"#9400D3",darkorchid:"#9932CC",darkmagenta:"#8B008B",purple:"#800080",indigo:"#4B0082",slateblue:"#6A5ACD",darkslateblue:"#483D8B",mediumslateblue:"#7B68EE",greenyellow:"#ADFF2F",chartreuse:"#7FFF00",lawngreen:"#7CFC00",lime:"#00FF00",limegreen:"#32CD32",palegreen:"#98FB98",lightgreen:"#90EE90",mediumspringgreen:"#00FA9A",springgreen:"#00FF7F",mediumseagreen:"#3CB371",seagreen:"#2E8B57",forestgreen:"#228B22",green:"#008000",darkgreen:"#006400",yellowgreen:"#9ACD32",olivedrab:"#6B8E23",olive:"#808000",darkolivegreen:"#556B2F",mediumaquamarine:"#66CDAA",darkseagreen:"#8FBC8B",lightseagreen:"#20B2AA",darkcyan:"#008B8B",teal:"#008080",aqua:"#00FFFF",cyan:"#00FFFF",lightcyan:"#E0FFFF",paleturquoise:"#AFEEEE",aquamarine:"#7FFFD4",turquoise:"#40E0D0",mediumturquoise:"#48D1CC",darkturquoise:"#00CED1",cadetblue:"#5F9EA0",steelblue:"#4682B4",lightsteelblue:"#B0C4DE",powderblue:"#B0E0E6",lightblue:"#ADD8E6",skyblue:"#87CEEB",lightskyblue:"#87CEFA",deepskyblue:"#00BFFF",dodgerblue:"#1E90FF",cornflowerblue:"#6495ED",royalblue:"#4169E1",blue:"#0000FF",mediumblue:"#0000CD",darkblue:"#00008B",navy:"#000080",midnightblue:"#191970",cornsilk:"#FFF8DC",blanchedalmond:"#FFEBCD",bisque:"#FFE4C4",navajowhite:"#FFDEAD",wheat:"#F5DEB3",burlywood:"#DEB887",tan:"#D2B48C",rosybrown:"#BC8F8F",sandybrown:"#F4A460",goldenrod:"#DAA520",darkgoldenrod:"#B8860B",peru:"#CD853F",chocolate:"#D2691E",saddlebrown:"#8B4513",sienna:"#A0522D",brown:"#A52A2A",maroon:"#800000",white:"#FFFFFF",snow:"#FFFAFA",honeydew:"#F0FFF0",mintcream:"#F5FFFA",azure:"#F0FFFF",aliceblue:"#F0F8FF",ghostwhite:"#F8F8FF",whitesmoke:"#F5F5F5",seashell:"#FFF5EE",beige:"#F5F5DC",oldlace:"#FDF5E6",floralwhite:"#FFFAF0",ivory:"#FFFFF0",antiquewhite:"#FAEBD7",linen:"#FAF0E6",lavenderblush:"#FFF0F5",mistyrose:"#FFE4E1",gainsboro:"#DCDCDC",lightgray:"#D3D3D3",silver:"#C0C0C0",darkgray:"#A9A9A9",gray:"#808080",dimgray:"#696969",lightslategray:"#778899",slategray:"#708090",darkslategray:"#2F4F4F",black:"#000000"},$i=function(e,n){n===void 0&&(n=25);var a="",t=(100-n)/100,i=0,r=0,l=0;if(Ja(xn(e)))i=ee(e.charAt(1))*16+ee(e.charAt(2)),r=ee(e.charAt(3))*16+ee(e.charAt(4)),l=ee(e.charAt(5))*16+ee(e.charAt(6)),a="rgb(".concat(i*t,", ").concat(r*t,",").concat(l*t,")");else if(e.includes("rgba")){var s=e.replace("rgba(",""),c=s.split(",");a="rgb(".concat(parseInt(c[0],10)*t,", ").concat(parseInt(c[1],10)*t,",").concat(parseInt(c[2],10)*t,")")}else if(e.includes("rgb")){var s=e.replace("rgb(",""),c=s.split(",");a="rgb(".concat(parseInt(c[0],10)*t,", ").concat(parseInt(c[1],10)*t,",").concat(parseInt(c[2],10)*t,")")}return a},$a=function(e,n,a){n===void 0&&(n=0);var t=a||"rgba(255, 255, 255, 0.6)";if(!e)return t;var i=e.toUpperCase();if(i.includes("RGBA"))return i;if(i.includes("RGB"))return i.replace("RGB","rgba").replace(")",", ".concat(n,")"));if(!Ja(xn(i)))return t;var r="",l=0,s=0,c=0;return l=ee(i.charAt(1))*16+ee(i.charAt(2)),s=ee(i.charAt(3))*16+ee(i.charAt(4)),c=ee(i.charAt(5))*16+ee(i.charAt(6)),r="rgba(".concat(l,", ").concat(s,",").concat(c," , ").concat(n,")"),r},Ja=function(e){if(e.charAt(0)!=="#"||e.length!==7)return!1;for(var n=1;n<e.length;n++)if(!$n.includes(e.charAt(n)))return!1;return!0};function xn(e){return e?Aa[e.toLocaleLowerCase()]!==void 0?Aa[e.toLocaleLowerCase()]:e:""}var $n=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"],Ji=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],ee=function(e){return $n.includes(e)?Ji[$n.indexOf(e)]:0},Ka=function(e){return e!==void 0&&e!==""?e:Ki},T=function(e,n){return n===void 0&&(n=1),$a(Ka(xn(e)),n)},Ki="#646c7f";function Ya(e,n){return e?h(h({},n),e):n}var Yi=function(e){var n=e.onChange,a=e.inputRef,t=e.accept,i=e.multiple;return o.createElement(o.Fragment,null,o.createElement("input",{"aria-label":"fui-hidden-input",style:{display:"none"},ref:a,onChange:n,type:"file",accept:t,multiple:i}))},Qi={clickable:!0,behaviour:"add",disabled:!1,dropOnLayer:!0,uploadConfig:{},actionButtons:{},header:!0,footer:!0,value:[]},ke="8px";A(`.files-ui-dropzone-children-container {
  width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  padding: 5px 0;
}`);var eo=function(e){var n=e.children,a=e.label,t=e.localization,i=Array.isArray(n)&&n.length===0,r=Xe(t);return n&&!i?o.createElement("div",{className:"files-ui-dropzone-children-container"},n):o.createElement("div",{className:"files-ui-dropzone-children-container"},o.createElement("label",null," ",a||r.defaultLabel))},ea=function(e){e.stopPropagation(),e.preventDefault()},Jn=function(e){e.dataTransfer.dropEffect="link",ea(e)};function oe(e){e.preventDefault(),e.stopPropagation()}var no=function(e){e&&e.click()},Qa=function(e){return T(e,.4)};function ao(e,n,a){if(!(!n||!e)){e.style.display="block";var t=document.createElement("span");t.id="filesui-ripple",t.className="ripple";var i=Math.max(n.clientWidth,n.clientHeight);t.style.width=t.style.height="".concat(i,"px"),t.style.backgroundColor=Qa(a),n.appendChild(t),setTimeout(function(){e.style.display="none",t==null||t.remove()},501)}}function to(e,n,a){var t=e.currentTarget,i=document.createElement("span"),r=Math.max(t.clientWidth,t.clientHeight);i.style.width=i.style.height="".concat(r,"px"),i.classList.add("ripple"),n!=="contained"?i.style.backgroundColor=Qa(a):i.style.backgroundColor=$a("#ffffff",.4),t.appendChild(i),setTimeout(function(){i==null||i.remove()},501)}A(`.filesui-disabled-root {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.38);
}`);var ro=function(e){var n=e.open,a=e.className,t=e.style;function i(c){oe(c)}var r=function(c){Jn(c)},l=function(c){return Re(void 0,void 0,void 0,function(){return Be(this,function(u){return ea(c),[2]})})},s=ie("filesui-disabled-root",a);return n?o.createElement("div",{style:t,className:s,onDrop:l,onDragOver:r,onClick:i}):o.createElement(o.Fragment,null)};A(`@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);
.fui-dropzone-root {
  width: 100%;
  min-width: 150px;
  min-height: 180px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0 8px;
  text-rendering: optimizeLegibility;
  font-size: 1.5em;
  font-family: "Poppins", sans-serif;
  text-align: center;
  font-weight: 400;
  letter-spacing: 0.02857em;
  box-sizing: border-box;
  word-break: normal;
  /*  &.fui-dropzone-border {
    box-sizing: border-box;

    border: 1px dashed #0c2358;
    border-radius: 10px;
    &.fui-hide-border {
      border: none;
    }
  } */
}
@media (max-width: 600px) {
  .fui-dropzone-root {
    font-size: 1.3em;
  }
}
.fui-dropzone-root.clickable {
  cursor: pointer;
}

.files-ui-header {
  min-height: 23px;
  /*  height: 22px;
  position: absolute; 
  top: 0;
  */
  cursor: text;
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  font-family: inherit;
  font-size: 1rem;
}
@media (max-width: 960px) {
  .files-ui-header {
    font-size: 0.8rem;
  }
}

.files-ui-footer {
  /*   border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px; */
  box-sizing: border-box;
  cursor: text;
  /* height: 23px;
  position: absolute;
  bottom: 0;
  left: 0; */
  width: 100%;
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center; */
  font-family: inherit;
  padding-left: 10px;
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
  text-align: left;
}
@media (max-width: 960px) {
  .files-ui-footer {
    padding-left: 1px;
    font-size: 0.9rem;
  }
}`);A(`.filesui-base-ripple-absolute {
  position: absolute;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;
  border-radius: 8px;
  overflow: hidden;
}
.filesui-base-ripple-absolute .filesui-base-ripple-relative {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.filesui-base-ripple-absolute .filesui-base-ripple-relative span.ripple {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 500ms linear;
  background-color: rgba(255, 255, 255, 0.7);
}
@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}`);var V=function(e){if(typeof e=="number")return e;switch(e){case"micro":return 8;case"small":return 15;case"semi-medium":return 18;case"medium":return 25;case"large":return 28;case"extra-large":return 32;default:return 24}},et=function(e){var n=e.size,a=e.color,t=e.colorFill,i=e.onClick,r=e.style,l=e.className,s=V(n),c=r||{};return o.createElement("svg",{style:i?h({},h({cursor:"pointer"},c)):c,onClick:function(u){oe(u),i==null||i(u)},xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000",className:l||""},o.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none",opacity:".87"}),o.createElement("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm5 11.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",fill:t||"none",opacity:".5"}),o.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"}))},nt=function(e){var n=e.size,a=e.color,t=e.colorFill,i=e.onClick,r=e.style,l=e.className,s=V(n),c=r||{};return S.createElement("svg",{className:l||"",style:i?h({},h({cursor:"pointer"},c)):c,onClick:function(){return i==null?void 0:i()},xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000"},S.createElement("path",{d:"M0 0h24v24H0z",fill:t||"none"}),S.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}))},io=function(e){var n=e.size,a=e.color,t=e.onClick,i=e.style,r=e.className,l=V(n),s=i||{};return S.createElement("svg",{className:r||"",style:t?h({},h({cursor:"pointer"},s)):s,onClick:function(){return t==null?void 0:t()},xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:l?"".concat(l,"px"):"24px",viewBox:"0 0 24 24",width:l?"".concat(l,"px"):"24px",fill:a||"#000000"},S.createElement("g",null,S.createElement("rect",{fill:"none",height:l||"24",width:l||"24"})),S.createElement("g",null,S.createElement("g",null,S.createElement("path",{d:"M16,11h-1V3c0-1.1-0.9-2-2-2h-2C9.9,1,9,1.9,9,3v8H8c-2.76,0-5,2.24-5,5v7h18v-7C21,13.24,18.76,11,16,11z M11,3h2v8h-2V3 z M19,21h-2v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v3h-2v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v3H9v-3c0-0.55-0.45-1-1-1s-1,0.45-1,1v3H5 v-5c0-1.65,1.35-3,3-3h8c1.65,0,3,1.35,3,3V21z"}))))},yn=function(e){var n=e.size,a=e.color,t=e.colorFill,i=e.onClick,r=e.style,l=e.className,s=V(n),c=r||{};return o.createElement("svg",{className:l||"",style:i?h({cursor:"pointer"},c):c,xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000",onClick:function(u){oe(u),i==null||i(u)}},o.createElement("path",{d:"M0 0h24v24H0V0z",fill:t||"none"}),o.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}))},oo=function(e){var n=e.size,a=e.color,t=e.colorFill,i=e.onClick,r=e.style,l=e.className,s=V(n),c=r||{};return o.createElement("svg",{className:l||"",style:i?h({cursor:"pointer"},c):c,enableBackground:"new 0 0 24 24",xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000",onClick:function(u){oe(u),i==null||i(u)}},o.createElement("path",{d:"M0 0h24v24H0V0z",fill:t||"none"}),o.createElement("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zm-9-3.82l-2.09-2.09L6.5 13.5 10 17l6.01-6.01-1.41-1.41z"}))},at=function(e){var n=e.size,a=e.color,t=e.onClick,i=e.style,r=e.className,l=V(n),s=i||{};return S.createElement("svg",{className:r||"",style:t?h({},h({cursor:"pointer"},s)):s,onClick:function(){return t==null?void 0:t()},xmlns:"http://www.w3.org/2000/svg",height:l?"".concat(l,"px"):"24px",viewBox:"0 0 24 24",width:l?"".concat(l,"px"):"24px",fill:a||"#000000"},S.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),S.createElement("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z",opacity:".4"}),S.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z"}))},lo=function(e){var n=e.size,a=e.color,t=e.colorFill,i=e.onClick,r=e.style,l=e.className,s=V(n),c=r||{};return o.createElement("svg",{className:l||"",style:i?h({cursor:"pointer"},c):c,enableBackground:"new 0 0 24 24",xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000",onClick:function(u){oe(u),i==null||i(u)}},o.createElement("g",null,o.createElement("rect",{fill:t||"none",height:s,width:s})),o.createElement("g",null,o.createElement("path",{d:"M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z"})))},so=function(e){var n=e.size,a=e.color,t=e.onClick,i=e.style,r=e.className,l=V(n)-2,s=i||{};return o.createElement("svg",{className:r||"",style:t?h({cursor:"pointer"},s):s,"aria-hidden":"true","aria-label":"info",fill:a||"#000000",role:"img",transform:"",version:"1.1",viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg",height:"".concat(l,"px"),width:"".concat(l,"px"),onClick:function(c){oe(c),t==null||t(c)}},o.createElement("path",{d:"M22.378 0c2.412 0 3.618 1.642 3.618 3.523 0 2.349-2.095 4.522-4.822 4.522-2.284 0-3.616-1.35-3.553-3.582 0-1.877 1.586-4.462 4.757-4.462zM14.956 36c-1.904 0-3.299-1.174-1.967-6.343l2.185-9.166c0.38-1.465 0.443-2.054 0-2.054-0.571 0-3.040 1.012-4.504 2.011l-0.95-1.584c4.63-3.935 9.956-6.241 12.242-6.241 1.903 0 2.219 2.291 1.269 5.814l-2.504 9.634c-0.443 1.701-0.254 2.288 0.191 2.288 0.571 0 2.443-0.706 4.282-2.173l1.080 1.465c-4.504 4.585-9.423 6.349-11.324 6.349z"}))},co=function(e){var n=e.size,a=e.color,t=e.colorFill,i=e.onClick,r=e.style,l=e.className,s=V(n),c=r||{};return S.createElement("svg",{className:l||"",style:i?h({cursor:"pointer"},c):c,xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000",onClick:function(u){oe(u),i==null||i(u)}},S.createElement("path",{d:"M0 0h24v24H0V0z",opacity:".9",fill:t||"none"}),S.createElement("path",{d:"M8 5v14l11-7L8 5z"}))},uo=function(e){var n=e.size,a=e.color,t=e.colorFill,i=e.onClick,r=e.style,l=e.className,s=V(n),c=r||{};return S.createElement("svg",{style:i?h({},h({cursor:"pointer"},c)):c,onClick:function(){return i==null?void 0:i()},xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000",className:l||""},S.createElement("g",null,S.createElement("rect",{fill:t||"none",height:n||"24",width:n||"24"})),S.createElement("g",null,S.createElement("path",{d:"M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z"})))},fo=function(e){var n=e.size,a=e.color,t=e.colorFill,i=e.onClick,r=e.style,l=e.className,s=V(n),c=r||{};return S.createElement("svg",{className:l||"",style:i?h({},h({cursor:"pointer"},c)):c,onClick:function(){return i==null?void 0:i()},xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000"},S.createElement("rect",{fill:t||"none",height:s,width:s}),S.createElement("path",{d:"M18,15.17V15h2v2.17L18,15.17z M15.41,12.59L17,11l-1.41-1.41L14,11.17L15.41,12.59z M13,10.17V4h-2v4.17L13,10.17z M21.19,21.19l-1.78-1.78L2.81,2.81L1.39,4.22l6.19,6.19L7,11l5,5l0.59-0.59L15.17,18H6v-3H4v3c0,1.1,0.9,2,2,2h11.17l2.61,2.61 L21.19,21.19z"}))};A(`@keyframes filesui-rotate-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.filesui-rotate {
  cursor: default;
}

@media (prefers-reduced-motion: no-preference) {
  .filesui-rotate {
    animation: filesui-rotate-spin infinite 2s linear;
  }
}`);var mo=function(e){var n=e.size,a=e.color,t=e.onClick,i=e.style,r=e.className,l=e.spin,s=V(n),c=i||{},u=r||"";return u+=l?"filesui-rotate":"",S.createElement("svg",{className:u,style:t?h({},h({cursor:"pointer"},c)):c,onClick:function(){return t==null?void 0:t()},xmlns:"http://www.w3.org/2000/svg",height:s?"".concat(s,"px"):"24px",viewBox:"0 0 24 24",width:s?"".concat(s,"px"):"24px",fill:a||"#000000"},S.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),S.createElement("path",{d:"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"}))},po=function(e){var n=e.size,a=e.color,t=e.colorFill,i=e.onClick,r=e.style,l=e.className,s=V(n),c=r||{};return S.createElement("svg",{className:l||"",style:i?h({cursor:"pointer"},c):c,xmlns:"http://www.w3.org/2000/svg",height:"".concat(s,"px"),viewBox:"0 0 24 24",width:"".concat(s,"px"),fill:a||"#000000",onClick:function(u){oe(u),i==null||i(u)}},S.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),S.createElement("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z",fill:t||"none"}),S.createElement("path",{d:"M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}))},go=function(e){var n=e.maxFileSize,a=e.numberOfValidFiles,t=e.onReset,i=e.onClean,r=e.maxFiles,l=e.onUploadStart,s=e.isUploading,c=e.urlPresent,u=e.localization,d=e.borderRadius,f=e.style,m=e.className,p=m===void 0?"":m,b=e.resetStyles,g=e.color,v=e.firstClassName,x=v===void 0?"":v,w=Xe(u).header,N=function(){i==null||i()},E=function(){l==null||l()},k=function(){var z=[];l&&c&&a&&(s?z.push(o.createElement(mo,{spin:!0,color:g})):z.push(o.createElement(o.Fragment,null,o.createElement(o.Fragment,null,w.uploadFilesMessage),o.createElement(uo,{color:g,onClick:E}))),z.push(o.createElement(o.Fragment,null,","," ")));var B=w.maxSizeMessage,j=ue(n);j&&(z.push(B(j)),z.push(o.createElement(o.Fragment,null,","," ")));var U=w.validFilesMessage;return r&&(z.push(U(a,r)),z.push(o.createElement(o.Fragment,null,","," "))),i&&z.push(o.createElement(io,{color:g,onClick:N,size:"semi-medium"})),t&&z.push(o.createElement(et,{color:g,onClick:function(){return t==null?void 0:t()}})),z};function M(z){z.stopPropagation()}var F=b?p:ie("files-ui-header "+x,p),L=b?f:h(h({},f),{borderTopLeftRadius:d,borderTopRightRadius:d});return o.createElement("div",{className:F,onClick:M,style:L},k().map(function(z,B){return o.createElement("span",{key:B,style:{display:"flex"}},z)}))},vo=function(e){var n=e.accept,a=e.message,t=e.localization,i=e.borderRadius,r=e.style,l=e.className,s=l===void 0?"":l,c=e.resetStyles,u=c===void 0?!1:c,d=e.allowedTypesLabel,f=d===void 0?!0:d,m=e.customMessage,p=m===void 0?void 0:m,b=e.firstClassName,g=b===void 0?"":b,v=Xe(t).footer,x=v.acceptCustom;function w(k){oe(k)}var N=u?s:ie("files-ui-footer ".concat(g),s),E=u?r:h(h({},r),{borderBotomLeftRadius:i,borderBotomRightRadius:i});return o.createElement("div",{className:N,onClick:w,style:E},p?o.createElement(o.Fragment,null,p):o.createElement(o.Fragment,null,a||(n?x(n):f?v.acceptAll:void 0)))},re;(function(e){function n(l){var s="";if(typeof window>"u"||typeof l>"u"||l===null)return"";if(document.getElementById(l.id))return l.id;s=l.id;var c=document.createElement("style");c.id=s,c.setAttribute("type","text/css");var u=_a(l.sheetRules||[])+l.raw||"";c.textContent=u;var d=document.head.appendChild(c);return d?s:""}e.insertStyleSheet=n;function a(l,s){var c="";if(typeof window>"u"||typeof l>"u"||l===null||s===null)return"";var u=document.getElementById(l);return u?(u.textContent=_a(s),c):""}e.editStyleSheet=a;function t(l){var s="";if(!l)return"";var c=document.getElementById(l);return c&&(document.head.removeChild(c),s=l),s}e.removeStyleSheet=t;function i(l){if(typeof l>"u"||l===null)return!1;var s=document.getElementById(l);return!!s}e.existStyleSheet=i;function r(l){return typeof l>"u"||l===null?null:l}e.makeStyleSheet=r})(re||(re={}));function bo(e){return e?!/[a-z]/.test(e)&&/[A-Z]/.test(e):!1}function Ua(e){for(var n="",a=" ",t=!1,i=0;i<e.length;i++){var r=e[i];if(bo(r)){a=r,t=!0;break}}if(t){var l=e.split(a);n="".concat(l[0],"-").concat(a.toLowerCase()).concat(l[1])}else n=e;return n}function ho(e){return e?e.includes(":"):!1}function xo(e){var n="",a=e.trim().split(" ");if(a.length>1){for(var t=0;t<a.length;t++)n+=".".concat(a[t]);n+=`{
`}else n+=".".concat(e,`{
`);return n}function _a(e){if(typeof e>"u"||e===null)return"";for(var n="",a=[],t=0;t<e.length;t++){var i=e[t],r="";r+=xo(i.className);for(var l=Object.keys(i.rules),s=0;s<l.length;s++){var c=l[s],u=Ua(c);if(ho(u)){var d=i.className+u;a.push({className:d,rules:i.rules[u]})}else{var f=i.rules[c];r+="	".concat(u," : ").concat(f,`;
`)}}r+=`}
`,n+=r}for(var m=0;m<a.length;m++){var r="",i=a[m],l=Object.keys(i.rules);r+=".".concat(i.className,`{
`);for(var s=0;s<l.length;s++){var c=l[s],u=Ua(c),f=i.rules[c];r+="	".concat(u," : ").concat(f,`;
`)}r+=`}
`,n+=r}return n}var yo=function(){function e(){}return e.getNextId=function(){return e.nextButtonClassNameNumber++,e.nextButtonClassNameNumber},e.nextButtonClassNameNumber=0,e.makeDynamicStyle=function(n,a,t,i,r,l){var s={id:"material-button-styles-".concat(n),sheetRules:[{className:"material-button.".concat(a,"-").concat(n),rules:{}},{className:"material-button-root.".concat(a,"-").concat(n),rules:{}}]},c=s.sheetRules;if(!t)switch(a){case"contained":c[0].rules={color:Ka(xn(r)),backgroundColor:T(i),textDecoration:l},c[1].rules={":hover":{backgroundColor:$i(T(i))}};break;case"outlined":c[0].rules={border:"1px solid ".concat(T(i,.5)),color:T(i),backgroundColor:"transparent",textDecoration:l},c[1].rules={":hover":{border:"1px solid ".concat(T(i,1)),backgroundColor:T(i,.085)}};break;case"text":c[0].rules={color:T(i),backgroundColor:"transparent",textDecoration:l},c[1].rules={":hover":{backgroundColor:T(i,.085)}};break}return s.sheetRules=c,s},e}(),wo=function(e,n,a,t,i,r,l,s){var c="material-button-root material-button",u=o.useState(""),d=u[0],f=u[1],m=o.useState(!1),p=m[0],b=m[1],g=o.useState(void 0),v=g[0],x=g[1],w=function(E,k,M,F,L,z){var B=c,j=yo.makeDynamicStyle(E,k,M,F,z,L),U="";if(p?re.editStyleSheet(d,j.sheetRules||[]):(U=re.insertStyleSheet(j),f(U),U!==""&&b(!0)),M?B+=" disabled":B+=" ".concat(k," ").concat(k,"-").concat(E),r&&r.length>0&&(B+=" ".concat(r)),L){var G=L&&["uppercase","capitalize","lowercase","none"].includes(L==null?void 0:L.toLowerCase())?L.toLowerCase():"uppercase";B+=" ".concat(G)}x(B)};o.useEffect(function(){s||w(l,e,n,a,i,t)},[e,n,a,i,t,r,l,s]);var N=function(E,k){E&&(re.removeStyleSheet(k),b(!1),f(""))};return o.useEffect(function(){return function(){return N(p,d)}},[p,d]),v};A(`@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);
.material-button-root {
  border: 0;
  cursor: pointer;
  display: inline-flex;
  outline: 0;
  position: relative;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  text-transform: none;
  color: white;
}

.material-button {
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  overflow: hidden;
  min-width: 64px;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: "Poppins", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.75;
  letter-spacing: 0.02857em;
}

.material-button.uppercase {
  text-transform: uppercase;
}

.material-button.lowercase {
  text-transform: lowercase;
}

.material-button.capitalize {
  text-transform: capitalize;
}

.material-button.contained {
  padding: 6px 16px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}

.material-button.outlined {
  padding: 5px 15px;
}

.material-button.text {
  padding: 5px 15px;
}

.material-button-root.contained:hover {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}

.material-button span.material-button-label {
  width: 100%;
  display: inherit;
  align-items: inherit;
  justify-content: inherit;
}

span.ripple {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 500ms linear;
  background-color: rgba(255, 255, 255, 0.7);
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
.material-button-root.disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.12);
  color: rgba(0, 0, 0, 0.26);
  padding: 6px 16px;
}
.material-button-root.disabled.darkmode {
  background-color: rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.3);
}

/* @media screen and (max-width: 600px) {
  .material-button {
    min-width: 30px;
    font-size: 0.78rem;
    line-height: 1.5;
    letter-spacing: 0.025em;
  }
  .material-button.contained {
    padding: 4px 13px;
  }
  .material-button.outlined {
    padding: 4px 12px;
  }
}
 */`);var na=S.createContext({}),Eo=function(e){var n=e.disabled,a=e.href,t=e.textTransform,i=e.variant,r=i===void 0?"contained":i,l=e.color,s=l===void 0?"#1976d2":l,c=e.textColor,u=c===void 0?"white":c,d=e.children,f=e.className,m=e.style,p=e.onClick,b=e.resetStyles,g=e.disableRipple,v=e.darkMode,x=e.id,w=Kn(e,["disabled","href","textTransform","variant","color","textColor","children","className","style","onClick","resetStyles","disableRipple","darkMode","id"]),N=o.useContext(na).darkMode,E=v!==void 0?v:N,k=o.useMemo(function(){return x||Qn.getNextId()+""},[x]),M=wo(r,n,s,u,t,f,k.replace(":","").replace(":",""),b),F=M&&E?ie(M,"darkmode"):M;function L(z){z.preventDefault(),g||to(z,r,s),p==null||p(z)}return F!==void 0||b?o.createElement(a?"a":"button",h({className:b&&f?f:F,"data-testid":a?"dui-anchor":"dui-button",onClick:L,href:a,style:m,children:o.createElement("span",{className:"material-button-label"},d),disabled:n},w)):o.createElement(o.Fragment,null,"loading styes")};A(`.files-ui-buttons-container {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  gap: 10px;
}
.files-ui-buttons-container.top {
  padding-bottom: 10px;
}
.files-ui-buttons-container.bottom {
  padding-top: 10px;
}`);var Ia=function(e){var n=e.cleanButton,a=e.abortButton,t=e.className,i=e.style,r=e.deleteButton,l=e.uploadButton,s=e.onAbort,c=e.onClean,u=e.onDelete,d=e.onUpload,f=e.top;e.disabled;var m=[n?h(h({},n),{label:n.label||"Clean",onClick:n.onClick||c}):void 0,r?h(h({},r),{label:r.label||"Delete",onClick:r.onClick||u}):void 0,l?h(h({},l),{label:l.label||"Upload",onClick:l.onClick||d}):void 0,a?h(h({},a),{label:a.label||"Abort",onClick:a.onClick||s}):void 0].filter(function(g){return g!==void 0}),p="".concat(f?" top":" bottom"),b=ie("files-ui-buttons-container"+p,t);return o.createElement("div",{className:b,style:i},m.map(function(g,v){var x=g.disabled,w=g.children,N=g.label,E=g.resetStyles,k=g.className,M=g.style,F=g.onClick;return o.createElement(Eo,{key:v,className:k,style:M,resetStyles:E,onClick:function(L){return F==null?void 0:F(L)},disabled:x},w||N)}))},ko=function(e){var n=e.onDrop,a=e.onDragLeave,t=e.className,i=e.open,r=e.style;return o.createElement("div",{className:t,onDragLeave:a,onDrop:n,style:r||{display:i?void 0:"none"}})};function Fo(e,n,a,t,i){var r=a===void 0&&t===void 0&&i===void 0?"default":e.replace(":","_").replace(":","_"),l="fui-dropzone-root fui-dropzone-border",s=o.useState(""),c=s[0],u=s[1],d=o.useState(!1),f=d[0],m=d[1],p=o.useState(void 0),b=p[0],g=p[1],v=o.useState(void 0),x=v[0],w=v[1],N=o.useState(void 0),E=N[0],k=N[1],M=o.useState(void 0),F=M[0],L=M[1],z=function(B,j,U,G){var O=l,Z=zo(r,j,U,G),_="";f?re.editStyleSheet(c,Z.sheetRules||[]):(_=re.insertStyleSheet(Z),u(_),_!==""&&m(!0)),O+=" files-ui-dropzone-extra-".concat(r),B&&(O="".concat(O," ").concat(B)),g(O),w("files-ui-header-border-rd-".concat(r)),k("files-ui-footer-border-rd-top-bg-color-".concat(r)),L("files-ui-disabled-layer-color-".concat(r))};return o.useEffect(function(){z(n,a,t,i)},[n,a,t,i]),[b,x,E,F]}var zo=function(e,n,a,t){var i={className:"files-ui-dropzone-extra-".concat(e),rules:{color:T(n),border:"1px dashed ".concat(T(n)),borderRadius:ke,background:a,minHeight:typeof t=="number"?"".concat(t,"px"):t}},r={className:"files-ui-root-border-hide",rules:{borderColor:"transparent"}},l={className:"files-ui-header-border-rd-".concat(e),rules:{"border-top-left-radius":ke,"border-top-right-radius":ke}},s={className:"files-ui-footer-border-rd-top-bg-color-".concat(e),rules:{"border-bottom-left-radius":ke,"border-bottom-right-radius":ke,background:T(n,.129),borderTop:"1px dotted ".concat(T(n))}},c={className:"files-ui-disabled-layer-color-".concat(e),rules:{borderRadius:ke,background:T(n,.38)}},u=[i,r,l,s,c];return{id:"files-dropzone-ui-style-id-"+e,sheetRules:u}},Co=function(e,n,a,t,i,r,l,s,c){var u=o.useState([]),d=u[0],f=u[1],m=o.useState(0),p=m[0],b=m[1];return o.useEffect(function(){var g=Gn.getExtFileInstanceList(e);a?g&&g.forEach(function(v){var x=n.findIndex(function(N){return N.id===v.id});if(x===-1)v.extraData={deleted:!0};else{var w=n[x];Xi(v,w)}}):f(n)},[e,n]),o.useEffect(function(){if(!c){f(d.map(function(x){return h(h({},x),{valid:void 0})}));return}var g={maxFileSize:t,accept:i},v=Xn(d,r?r-p:1/0,g,l,r,s);f(v)},[c,t,i,r,s]),o.useEffect(function(){b(c?d.filter(function(g){return g.valid}).length:d.length)},[d,c]),[d,p,f]},So=function(e,n){return{id:"files-ui-drop-layer-style-id-"+e,sheetRules:[{className:"dropzone-layer-".concat(e),rules:{backgroundColor:T(n,.4),borderRadius:ke,position:"absolute",left:0,top:0,width:"0%",height:"0%",zIndex:20,border:"0px dashed ".concat(T(n))}},{className:"dropzone-layer-drag",rules:{width:"100%",height:"100%",borderWidth:"2px"}}]}},No=function(e,n,a){var t=o.useState(""),i=t[0],r=t[1],l=o.useState(!1),s=l[0],c=l[1],u=o.useState(""),d=u[0],f=u[1],m=n===void 0?"default":e.replace(":","_").replace(":","_");return o.useEffect(function(){var p=function(b){var g="",v=So(m,b),x="";m==="default"&&!s?re.existStyleSheet("files-ui-drop-layer-style-id-"+m)?(c(!0),r("files-ui-drop-layer-style-id-"+m)):(x=re.insertStyleSheet(v),r(x),x!==""&&c(!0)):s?re.editStyleSheet(i,v.sheetRules||[]):(x=re.insertStyleSheet(v),r(x),x!==""&&c(!0)),g+="dropzone-layer-".concat(m),f(g)};a&&p(n)},[n,a]),d},Mo=function(e,n,a,t,i,r,l,s,c){var u=o.useState(!1),d=u[0],f=u[1],m=o.useState(!1),p=m[0],b=m[1],g=o.useState(""),v=g[0],x=g[1],w=o.useState(void 0),N=w[0],E=w[1],k=o.useState(void 0),M=k[0],F=k[1],L=o.useState(!1),z=L[0],B=L[1],j=function(U,G,O,Z,_,ae,q,P,ze,_e){return Re(void 0,void 0,void 0,function(){var pe,de,ge;return Be(this,function(W){switch(W.label){case 0:return!U&&!G&&!O?[2]:(pe=(U?ki(U,P):Fi(G,O,P)).url,x(pe),ae&&q?(b(!0),E(ae),F(q),B(!0),[2]):[3,1]);case 1:return ae?(f(!0),E(ae),B(!0),[2]):[3,2];case 2:return q?(b(!0),F(q),B(!0),[3,5]):[3,3];case 3:return de=Do(U,O),f(de[0]==="image"),["mp4","ogg","webm"].includes(de[1])&&b(de[0]==="video"),_&&(Z||typeof Z>"u"||Z===null)&&de[0]==="image"?(ge=void 0,U?[4,Ha(U)]:[3,5]):[3,5];case 4:ge=W.sent(),ge&&E(ge),W.label=5;case 5:return B(!0),[2]}})})};return o.useEffect(function(){return j(e,n,a,t,i||!1,r,l,s),function(){E(void 0),f(!1),b(!1),B(!1)}},[e,n,a,t,i,r,l,s]),[z,d,p,v,N,M]},Do=function(e,n){if(e)if(e.type){var a=e.type.split("/");return[a[0],a[1]]}else return["octet","octet"];else{var a=n==null?void 0:n.split("/");return a&&a.length>1?[a[0],a[1]]:["octet","octet"]}},Lo=function(e){var n=o.useState(!1),a=n[0],t=n[1],i=o.useState(e),r=i[0],l=i[1];return o.useEffect(function(){if(l(e),["uploading","preparing"].includes(r||"")&&["success","error","aborted"].includes(e||"")){setTimeout(function(){t(!1)},3500);return}else t(e==="preparing"||e==="uploading")},[e]),a},Ro=function(e,n){var a=o.useState(void 0),t=a[0],i=a[1];return e!==void 0?t!==e&&i(e):n!=null&&n.upload.onprogress===null&&(n.upload.onprogress=function(r){i(r.loaded/r.total*100)},i(0)),t},Bo=function(e,n,a){return vn.someValidUrl(a||[])||n!=null||e!=null&&e.length>0},Ao=function(e){var n=Ya(e,Qi),a=n.onChange,t=n.value,i=t===void 0?[]:t,r=n.accept,l=n.maxFileSize,s=n.maxFiles,c=n.validator,u=n.cleanFiles,d=n.onClean,f=n.autoClean,m=n.uploadConfig,p=n.fakeUpload,b=n.groupUpload,g=n.onUploadStart,v=n.onUploadFinish,x=n.background,w=n.color,N=n.minHeight,E=n.style,k=n.className,M=n.label,F=n.localization,L=n.disableRipple,z=n.onDragEnter,B=n.onDragLeave,j=n.actionButtons,U=n.dropOnLayer,G=n.header,O=n.footer,Z=n.headerConfig,_=Z===void 0?{}:Z,ae=n.footerConfig,q=ae===void 0?{}:ae,P=n.disabled,ze=n.clickable,_e=n.behaviour,pe=n.children,de=Kn(n,["onChange","value","accept","maxFileSize","maxFiles","validator","cleanFiles","onClean","autoClean","uploadConfig","fakeUpload","groupUpload","onUploadStart","onUploadFinish","background","color","minHeight","style","className","label","localization","disableRipple","onDragEnter","onDragLeave","actionButtons","dropOnLayer","header","footer","headerConfig","footerConfig","disabled","clickable","behaviour","children"]),ge=o.useContext(na).localization,W=F!==void 0?F:ge,X=m,Ce=X.url,$e=X.method,wn=X.headers,En=X.uploadLabel,Se=X.cleanOnUpload,ye=Se===void 0?!0:Se,Je=X.preparingTime,kn=Je===void 0?1500:Je,Ke=X.autoUpload,$=Ke===void 0?!1:Ke,Ye=X.urlFromExtFile,Qe=X.asBlob,Fn=Qe===void 0?!1:Qe,le=j,Ne=le.position,en=le.abortButton,Ie=le.deleteButton,Me=le.uploadButton,we=le.cleanButton,Te=le.style,je=le.className,nn=E==null?void 0:E.borderRadius,Oe=_.cleanFiles,zn=Oe===void 0?!0:Oe,an=_.deleteFiles,Cn=an===void 0?!0:an,tn=_.maxFileSize,rn=tn===void 0?!0:tn,Ee=_.uploadFiles,Sn=Ee===void 0?!0:Ee,on=_.uploadingIcon,Nn=on===void 0?!0:on,ln=_.validFilesCount,Mn=ln===void 0?!0:ln,sn=_.customHeader,Y=_.className,aa=_.resetStyles,ot=aa===void 0?!1:aa,lt=_.style,ta=q.customFooter,ra=q.noMissingFilesLabel,st=ra===void 0?!0:ra,ia=q.uploadProgressMessage,oa=ia===void 0?!0:ia,la=q.uploadResultMessage,ct=la===void 0?!0:la,Pe=Xe(W),sa=o.useRef(null),ca=o.useRef(null),Dn=o.useRef(null),ua=o.useState(!1),Ln=ua[0],Rn=ua[1],da=o.useState(!1),H=da[0],He=da[1],fa=o.useState(""),ut=fa[0],Ve=fa[1],qe=o.useMemo(function(){return Qn.getNextId()+""},[]),ve=zi(r,l,s,c),Bn=Co(qe,i||[],H,l,r,s,c,W,ve),be=Bn[0],An=Bn[1],Ze=Bn[2],cn=Bo(Ce,Ye,be),un=function(D){return Re(void 0,void 0,void 0,function(){var y,R,ce,De,ya,jn,wa,On,Ea,ka,Pn,fn,te,Le,We,mn,Fa,Hn;return Be(this,function(I){switch(I.label){case 0:return He(!0),H||D.length===0||!cn?(He(!1),[2]):D.length===0?(Ve(Pe.noFilesMessage),setTimeout(function(){He(!1)},1500),[2]):(y=[],R=D.length,ce=D.filter(function(J){return Di(J,ve)}).length,De=0,ya=0,jn=Pe.uploadingMessage,ce>0?(oa&&Ve(jn("".concat(ce,"/").concat(R))),g==null||g(D),y=Gn.setFileListMapPreparing(qe,D,ve,ye)||[],wa=xe([],y,!0).map(function(J){return J.toExtFile()}),se(wa,!0),[4,Ci(kn)]):(setTimeout(function(){st&&Ve(Pe.noFilesMessage),He(!1)},1500),[2]));case 1:if(I.sent(),On=[],!b)return[3,6];Ea=function(J,bt,za){y.forEach(function(qn){return qn.uploadStatus="uploading"}),se(he(y),!0);for(var Ca=new FormData,Vn=0;Vn<za.length;Vn++)Ca.append("files",za[Vn].file);return new Promise(function(qn,Sa){var Q=new XMLHttpRequest;Q.upload.onprogress=function(pn){y.forEach(function(ht){ht.progress=pn.loaded/pn.total*100}),se(he(y),!0)},Q.responseType="json",Q.onload=function(){Q.status>=200&&Q.status<300?(console.log(Q.response),console.log(typeof Q.response),qn(Q.response)):Sa(Q.response)},Q.onerror=function(pn){Sa(pn)},Q.open(J,bt),Q.send(Ca)})},I.label=2;case 2:return I.trys.push([2,4,,5]),[4,Ea("POST",Ce,y)];case 3:return ka=I.sent(),y.forEach(function(J){return J.uploadStatus="success"}),y.forEach(function(J){return J.uploadMessage=ka.message}),[3,5];case 4:return Pn=I.sent(),y.forEach(function(J){return J.uploadStatus="error"}),y.forEach(function(J){return J.uploadMessage=Pn.message}),console.log(Pn),[3,5];case 5:return se(he(y),!0),[3,21];case 6:fn=0,I.label=7;case 7:return fn<y.length?(te=y[fn],te.uploadStatus==="preparing"&&!(!((Hn=te.extraData)===null||Hn===void 0)&&Hn.deleted)?[4,Wn()]:[3,19]):[3,21];case 8:return I.sent(),Gi(te),oa&&Ve(jn("".concat(++ya,"/").concat(ce))),se(he(y),!0),Le=void 0,p?[4,Si(te,Pe)]:[3,13];case 9:Le=I.sent(),We=0,I.label=10;case 10:return We<100?(We+=Ni(21,35),te.progress=We>100?100:We,[4,Wn(1e3)]):[3,12];case 11:return I.sent(),se(he(y),!0),[3,10];case 12:return[3,16];case 13:return I.trys.push([13,15,,16]),[4,Zi(te,Ce,Ye,$e,wn,En,Fn)];case 14:return Le=I.sent(),[3,16];case 15:return I.sent(),Le=Wi(te.toExtFile()),[3,16];case 16:return mn=Le,te.uploadStatus=mn.uploadStatus,te.uploadMessage=mn.uploadMessage,te.uploadStatus==="aborted"?[3,18]:[4,Wn()];case 17:I.sent(),I.label=18;case 18:return se(he(y),!0),mn.uploadStatus==="error"&&De++,On.push(Le),[3,20];case 19:se(he(y),!0),I.label=20;case 20:return fn++,[3,7];case 21:return Ze(he(y)),v==null||v(On),Fa=Pe.uploadFinished,ct&&Ve(Fa(ce-De,De)),setTimeout(function(){He(!1)},2e3),[2]}})})},ma=function(){var D=Gn.getExtFileInstanceList(qe);D&&D.forEach(function(y){(y.uploadStatus==="uploading"||y.uploadStatus==="preparing")&&(y.xhr!==null&&y.xhr!==void 0&&y.xhr.abort(),y.uploadStatus="aborted",y.uploadMessage="Upload was aborted by user")})},dn=Fo(qe,k,w,x,N),Un=dn[0],dt=dn[1],ft=dn[2],mt=dn[3],pa=No(qe,w,!z&&!B);o.useEffect(function(){var D={maxFileSize:l,accept:r},y=Xn(be,s?s-An:1/0,D,c,s,W);Ze(y)},[l,r,s,W]);var se=function(D,y){var R=xe(_e==="add"&&!y?xe([],be,!0):[],D,!0);a?a(R):Ze(R),$&&!y&&un(R)},pt=function(D){var y=D.target.files,R=La(y);ve&&(R=ga(R),f&&(R=R.filter(function(ce){return ce.valid}))),cn&&(R=Ba(R)),Mi(Dn.current),se(R)},ga=function(D){var y={maxFileSize:l,accept:r},R=An;_e==="replace"&&(R=0);var ce=Xn(D,s?s-R:1/0,y,c,s,W);return ce};function gt(){!ze||P||H||(ba(),no(Dn.current))}var vt=function(D){Jn(D),!P&&Rn(!0)},va=function(D){P||(Jn(D),Rn(!1))},ba=function(){ao(sa.current,ca.current,w)},ha=function(D){return Re(void 0,void 0,void 0,function(){var y,R;return Be(this,function(ce){return ea(D),P?[2]:H?[2]:(L||ba(),Rn(!1),y=D.dataTransfer.files,R=La(y),ve&&(R=ga(R),f&&(R=R.filter(function(De){return De.valid}))),cn&&(R=Ba(R)),se(R),[2])})})},_n=function(){a?a([]):Ze([])},In=function(){d?d():a?a(be.filter(function(D){return D.valid})):Ze(be.filter(function(D){return D.valid}))},Tn=Un?Ln&&U||P?ie(Un,"files-ui-root-border-hide"):Un:void 0,xa=Tn?ze&&!P?ie(Tn,"clickable"):Tn:void 0;return xa?o.createElement(o.Fragment,null,Ne==="before"&&o.createElement(Ia,{disabled:P,abortButton:H?en:void 0,onAbort:ma,deleteButton:Ie,onDelete:H?void 0:_n,uploadButton:!H&&!$?Me:void 0,onUpload:$?void 0:function(){return un(be)},cleanButton:ve&&!H&&!f?we:void 0,onClean:In,style:Te,className:je,top:!0}),o.createElement("div",h({style:E,className:xa},de,{onClick:gt,onDragOver:vt,onDragLeave:U?void 0:va,onDrop:U?void 0:ha}),!L&&o.createElement("div",{ref:sa,className:"filesui-base-ripple-absolute",style:{borderRadius:E==null?void 0:E.borderRadius}},o.createElement("div",{ref:ca,className:"filesui-base-ripple-relative"})),o.createElement(o.Fragment,null,G?o.createElement(o.Fragment,null,sn?o.createElement(o.Fragment,null,sn):o.createElement(go,{firstClassName:dt,color:T(w),style:lt,className:Y,resetStyles:ot,borderRadius:nn,isUploading:H&&Nn,onReset:!H&&Cn?_n:void 0,maxFileSize:l&&rn?l:void 0,maxFiles:s&&Mn?s:void 0,localization:W,urlPresent:cn&&Sn,onUploadStart:!$&&!Me?function(){return un(be)}:void 0,numberOfValidFiles:An,onClean:!zn||H||we||f?void 0:(u||d)&&ve?In:void 0})):o.createElement(o.Fragment,null)),o.createElement(eo,{label:M,localization:W},pe),o.createElement(o.Fragment,null,ta?o.createElement(o.Fragment,null,ta):o.createElement(o.Fragment,null,O&&o.createElement(vo,h({firstClassName:ft,borderRadius:nn,accept:r,message:H?ut:void 0,localization:W},q)))),U&&o.createElement(ko,{open:Ln,className:Ln?"".concat(pa," dropzone-layer-drag"):pa,onDragLeave:va,onDrop:ha,style:{borderRadius:E==null?void 0:E.borderRadius}}),o.createElement(Yi,{multiple:s?s>1:!0,accept:r||"",inputRef:Dn,onChange:pt}),o.createElement(ro,{open:P,className:mt})),Ne==="after"&&o.createElement(Ia,{disabled:P,abortButton:H?en:void 0,onAbort:ma,deleteButton:Ie,onDelete:H?void 0:_n,uploadButton:!H&&!$?Me:void 0,onUpload:$?void 0:function(){return un(be)},cleanButton:ve&&!H&&!f?we:void 0,onClean:In,style:Te,className:je,top:!1})):o.createElement(o.Fragment,null)};A(`@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);
.fui-avatar-main-container {
  width: 200px;
  height: 200px;
  position: relative;
  background-color: transparent;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(128, 128, 128, 0.486);
  border-radius: 10px;
  font-family: "Poppins", sans-serif;
}
.fui-avatar-main-container.square {
  border-radius: 0px;
}
.fui-avatar-main-container.circle {
  border-radius: 50%;
}
.fui-avatar-main-container .fui-avatar-image {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.fui-avatar-main-container:hover .fui-avatar-label.hide {
  display: flex;
}
.fui-avatar-main-container .fui-avatar-label {
  margin: 0;
  overflow: hidden;
  background-color: rgba(128, 128, 128, 0.486);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}
.fui-avatar-main-container .fui-avatar-label.hide {
  display: none;
}
.fui-avatar-main-container .fui-avatar-label:hover {
  background-color: rgba(71, 71, 71, 0.74);
  display: flex;
  cursor: pointer;
}`);var Uo=function(e){var n=e.size,a=e.color,t=e.style,i=e.radius,r=e.x,l=e.y,s=e.width,c=i||46,u=r||50,d=l||50,f=V(n),m=t||{};return o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"".concat(f,"px"),height:"".concat(f,"px"),style:m,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},o.createElement("circle",{cx:"".concat(u),cy:"".concat(d),r:"".concat(c),fill:"none",stroke:a||"#14ff00",strokeWidth:"".concat(s||8,"px"),strokeDasharray:"164.93361431346415 100.97787143782138"},o.createElement("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 ".concat(u," ").concat(u,";360 ").concat(u," ").concat(u),keyTimes:"0;1"})))};A(`.files-ui-loader-container {
  background-color: rgba(0, 0, 0, 0.41);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}
.files-ui-loader-container.clickable {
  cursor: pointer;
}
.files-ui-loader-container:hover {
  background-color: rgba(0, 0, 0, 0.61);
}`);var tt=function(e){var n=e.children,a=e.className,t=e.style,i=e.size,r=e.onClick,l=i?V(i):void 0,s=r?"files-ui-loader-container clickable":"files-ui-loader-container",c=function(){r==null||r()};return o.createElement("div",{onClick:c,className:a?"".concat(s," ").concat(a):s,style:h(h({},t),{height:l,width:l})},n)},rt=function(e){var n=e.onClick,a=e.size;return o.createElement(tt,{onClick:n,size:a},o.createElement(o.Fragment,null,o.createElement(Uo,{size:a}),o.createElement("div",{style:{position:"absolute",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},n&&o.createElement(yn,{color:"rgba(255,255,255,0.75)",size:45,onClick:n}))))};A(`.files-ui-layer {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}`);var Ge=function(e){var n=e.style,a=e.className,t=e.children,i=e.visible,r=Kn(e,["style","className","children","visible"]),l=ie(a||"","files-ui-layer");return i?o.createElement("div",h({className:l,style:n},r),t):o.createElement(o.Fragment,null)},_o={alt:"image-preview",smartImgFit:"orientation"};A(`.fui-image-preview {
  position: relative;
  border-radius: 10px;
}`);var Ta=function(e){var n=Ya(e,_o),a=n.src,t=n.alt,i=n.width,r=n.height,l=n.onError,s=n.smartImgFit,c=n.style,u=n.className,d=o.useState([void 0,void 0]),f=d[0],m=f[0],p=f[1],b=d[1],g=o.useState(void 0),v=g[0],x=g[1],w=function(k){return Re(void 0,void 0,void 0,function(){var M;return Be(this,function(F){switch(F.label){case 0:return[4,Ha(k)];case 1:return M=F.sent(),N(M),[2]}})})},N=function(k){return Re(void 0,void 0,void 0,function(){var M,F,L;return Be(this,function(z){switch(z.label){case 0:return k===""||!k?[2]:(M=void 0,F=void 0,s?[3,1]:(F="100%",[3,4]));case 1:return z.trys.push([1,3,,4]),[4,er(k)];case 2:return L=z.sent(),L==="landscape"?s==="orientation"?(M=void 0,F="100%"):(M="100%",F=void 0):s==="center"?(M=void 0,F="100%"):(M="100%",F=void 0),[3,4];case 3:return z.sent(),l==null||l(),[3,4];case 4:return r&&(M=r),i&&(F=i),b([M,F]),x(k),[2]}})})};o.useEffect(function(){if(a)if(typeof a=="string")N(a);else{var k=a.type?a.type.split("/")[0]:"octet";k==="image"?w(a):l==null||l()}},[a]);var E=function(k){l==null||l()};return o.createElement(o.Fragment,null,a&&v&&(m||p)&&o.createElement("img",{style:c||{},onClick:function(k){k.preventDefault()},width:p,height:m,src:v,alt:t,className:u,onError:E}))};A(`@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);
.files-ui-file-card-main-container {
  border-radius: 8px;
  color: rgba(0, 0, 0, 0.858);
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 100px;
  box-sizing: border-box;
  position: relative;
  font-size: 15px;
  font-weight: 400;
  width: 320px;
  font-family: "Poppins", sans-serif;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container {
  border-radius: 8px;
  overflow: hidden;
  width: 320px;
  box-sizing: border-box;
  height: 100px;
  box-sizing: border-box;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer {
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-icon-container {
  width: 100px;
  height: 100px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-icon-container .file-card-icon-layer {
  box-sizing: border-box;
  position: absolute;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-icon-container .file-card-icon-layer img {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-icon-container .file-card-icon-layer.blur img {
  filter: blur(4px);
  width: 200%;
  height: 200%;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-icon-container .file-card-status-layer {
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 5px;
  box-sizing: border-box;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-data {
  padding-right: 10px;
  box-sizing: border-box;
  line-height: 19px;
  font-weight: 500;
  width: calc(100% - 100px);
  word-break: break-all;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-data.dark-mode {
  color: rgba(255, 255, 255, 0.7);
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-data .file-card-size {
  font-weight: 400;
  font-size: 0.9rem;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-data .file-card-name {
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-main-layer .file-card-icon-plus-data .file-card-data .file-card-name.not-allowed {
  background-color: rgba(180, 16, 16, 0.7);
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-upload-layer-container {
  cursor: default;
  display: flex;
  box-sizing: border-box;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.625), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 1em;
  position: relative;
  overflow: hidden;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container {
  cursor: default;
  display: flex;
  box-sizing: border-box;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 1em;
  overflow: hidden;
  align-items: center;
  justify-content: flex-end;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info {
  width: calc(100% - 100px);
  height: 100px;
  text-align: left;
  scrollbar-width: thin;
  overflow: auto;
  scrollbar-color: rgba(100, 108, 127, 0.662745098) transparent;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info::-webkit-scrollbar {
  width: 9px;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info::-webkit-scrollbar-track {
  background: transparent;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info::-webkit-scrollbar-thumb {
  background-color: rgba(100, 108, 127, 0.662745098);
  border-radius: 20px;
  border: transparent;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info .files-ui-file-card-info-layer-header {
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  /*  position: absolute;
  top: 5;
  right: 5; */
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info .heading {
  font-weight: 600;
  padding: 0 5px;
}
.files-ui-file-card-main-container .files-ui-file-card-main-layer-container .file-card-info-layer-container .file-card-file-info .label {
  padding: 0 5px;
  font-weight: 399;
}
.files-ui-file-card-main-container.clickable {
  cursor: pointer;
}

/* .files-ui-file-icon {
  font-size: 0.7rem;
  min-width: 19px;
  min-height: 19px;
  margin: 0;
  padding: 2px 2px;
  border-radius: 50%;
  background-color: rgba(32, 33, 36, 0.65);
  word-break: break-word;
  box-sizing: content-box;
  &:hover {
    background-color: rgba(32, 33, 36, 0.85);
  }
  &.dark-mode {
    background-color: rgba(154, 160, 166, 0.65);
    &:hover {
      background-color: rgba(154, 160, 166, 0.85);
    }
  }
} */`);A(`.files-ui-file-icon {
  font-size: 0.7rem;
  min-width: 19px;
  min-height: 19px;
  margin: 0;
  padding: 2px 2px;
  border-radius: 50%;
  background-color: rgba(32, 33, 36, 0.65);
  word-break: break-word;
  box-sizing: content-box;
}
.files-ui-file-icon:hover {
  background-color: rgba(32, 33, 36, 0.85);
}
.files-ui-file-icon.dark-mode {
  background-color: rgba(154, 160, 166, 0.65);
}
.files-ui-file-icon.dark-mode:hover {
  background-color: rgba(154, 160, 166, 0.85);
}`);A(`.files-ui-file-card-main-container.dark-mode {
  color: rgba(255, 255, 255, 0.7);
  background-color: #121212;
}
.files-ui-file-card-main-container.dark-mode.elevation-0 {
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0));
}
.files-ui-file-card-main-container.dark-mode.elevation-1 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05));
}
.files-ui-file-card-main-container.dark-mode.elevation-2 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.07));
}
.files-ui-file-card-main-container.dark-mode.elevation-3 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08));
}
.files-ui-file-card-main-container.dark-mode.elevation-4 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09));
}
.files-ui-file-card-main-container.dark-mode.elevation-5 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));
}
.files-ui-file-card-main-container.dark-mode.elevation-6 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11));
}
.files-ui-file-card-main-container.dark-mode.elevation-7 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.11));
}
.files-ui-file-card-main-container.dark-mode.elevation-8 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12));
}
.files-ui-file-card-main-container.dark-mode.elevation-9 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12));
}
.files-ui-file-card-main-container.dark-mode.elevation-10 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.13));
}
.files-ui-file-card-main-container.dark-mode.elevation-11 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.13));
}
.files-ui-file-card-main-container.dark-mode.elevation-12 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.14));
}
.files-ui-file-card-main-container.dark-mode.elevation-13 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.14));
}
.files-ui-file-card-main-container.dark-mode.elevation-14 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.14));
}
.files-ui-file-card-main-container.dark-mode.elevation-15 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.14));
}
.files-ui-file-card-main-container.dark-mode.elevation-16 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.15));
}
.files-ui-file-card-main-container.dark-mode.elevation-17 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.15));
}
.files-ui-file-card-main-container.dark-mode.elevation-18 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.15));
}
.files-ui-file-card-main-container.dark-mode.elevation-19 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15));
}
.files-ui-file-card-main-container.dark-mode.elevation-20 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16));
}
.files-ui-file-card-main-container.dark-mode.elevation-21 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16));
}
.files-ui-file-card-main-container.dark-mode.elevation-22 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16));
}
.files-ui-file-card-main-container.dark-mode.elevation-23 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16));
}
.files-ui-file-card-main-container.dark-mode.elevation-24 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16));
}
.files-ui-file-card-main-container.elevation-0 {
  box-shadow: none;
}
.files-ui-file-card-main-container.elevation-1 {
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-2 {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-3 {
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-4 {
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-5 {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-6 {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-7 {
  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-8 {
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-9 {
  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-10 {
  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-11 {
  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-12 {
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-13 {
  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-14 {
  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-15 {
  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-16 {
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-17 {
  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-18 {
  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-19 {
  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-20 {
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-21 {
  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-22 {
  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-23 {
  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12);
}
.files-ui-file-card-main-container.elevation-24 {
  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);
}`);A(`.file-card-right-layer-header {
  margin-top: 3px;
  margin-right: 3px;
  position: absolute;
  top: 0;
  right: 0;
  left: unset;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2px;
}

.file-card-right-layer-footer {
  margin-bottom: 3px;
  margin-right: 3px;
  left: unset;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2px;
  bottom: 0;
  right: 0;
}`);var Io=function(e){var n=e.localization,a=e.size,t=Fe(n).status;return o.createElement(o.Fragment,null,o.createElement(at,{color:"#f44336",size:a||65}),o.createElement("span",null," ",t.aborted))},To=function(e){var n=e.height,a=n?typeof n=="number"?"".concat(n,"px"):n:"132px";return o.createElement(o.Fragment,null,o.createElement("div",{style:{width:"100%",height:a}}))},jo=function(e){var n=e.localization,a=e.size,t=Fe(n).status;return o.createElement(o.Fragment,null,o.createElement(yn,{color:"rgba(255,255,255,0.4)",style:{backgroundColor:"rgba(244, 67, 54, 0.8)",borderRadius:"50%"},size:a||65}),o.createElement("span",null," ",t.error))},Oo=function(e){var n=e.onCancel,a=e.localization,t=e.size,i=Fe(a).status;return o.createElement(o.Fragment,null,o.createElement(rt,{onClick:n,size:t||65}),o.createElement("span",null,i.preparing))},Po=function(e){var n=e.localization,a=e.size,t=Fe(n).status;return o.createElement(o.Fragment,null,o.createElement(nt,{color:"#4caf50",size:a||65}),o.createElement("span",null," ",t.success))};A(`text.files-ui-text-dynamic-loader {
  text-anchor: middle;
  font-size: 1em;
  fill: aliceblue;
}`);var Ho=function(e){var n=e.size,a=e.color,t=e.style,i=e.percentage,r=e.hidePerncentage,l=e.radius,s=e.x,c=e.y,u=e.width,d=e.onClick,f=l||28,m=s||30,p=c||30,b=V(n),g=t||{},v=o.useRef(null);function x(w,N,E){N.style.strokeDashoffset="".concat(E*(1-w/100))}return o.useEffect(function(){var w=v.current;if(w!=null&&i!==void 0){var N=2*Math.PI*w.r.baseVal.value;w.style.strokeDasharray="".concat(N," 1000"),x(i>=100?100:i,w,N)}},[i]),i!==void 0?o.createElement(tt,{size:n},o.createElement(o.Fragment,null,o.createElement("svg",{className:"dui_svg_circle_loader",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"".concat(b,"px"),height:"".concat(b,"px"),style:g},o.createElement("circle",{style:{transform:"rotate(-90deg)",transformOrigin:"center"},stroke:a||"#14ff00",cx:"".concat(m),cy:"".concat(p),r:"".concat(f),strokeWidth:"".concat(u||8,"px"),id:"circle",ref:v,fill:"none"}),!r&&i!==void 0&&o.createElement("text",{className:"files-ui-text-dynamic-loader",x:"".concat(m),y:"".concat(m*7/6)},"".concat(i.toFixed(0)," %"))),d&&o.createElement("div",{style:{position:"absolute",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},o.createElement(yn,{color:"rgba(255,255,255,0.75)",size:45,onClick:d})))):o.createElement(o.Fragment,null)};A(`.lds-colorbar {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
}
.lds-colorbar .files-ui-text-default-loader {
  font-size: 1.5rem;
  font-weight: 400;
  text-anchor: middle;
}`);var Vo=function(e){var n=e.localization,a=e.size,t=e.onAbort,i=e.progress,r=Fe(n).status;return o.createElement(o.Fragment,null,i!==void 0?o.createElement(Ho,{size:70,x:35,y:35,radius:32,percentage:i,width:6,hidePerncentage:i===void 0||t!==void 0,onClick:t}):o.createElement(rt,{onClick:t,size:a||70}),o.createElement("span",null," ",r.uploading))};A(`.files-ui-file-card-upload-layer {
  width: 100px;
  height: 100%;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 1em;
  position: relative;
  overflow: hidden;
}
.files-ui-file-card-upload-layer .elevation-list-card {
  transition: all 1.5s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.files-ui-file-card-upload-layer .elevation-list-card .elevation-item-card {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 10px;
  box-sizing: border-box;
}
.files-ui-file-card-upload-layer .elevation-list-card .elevation-item-card span {
  text-align: center;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}`);A(`.files-ui-tooltip {
  cursor: default;
  position: relative;
}
.files-ui-tooltip:hover {
  z-index: 2;
}
.files-ui-tooltip:hover .files-ui-tooltiptext {
  visibility: visible;
  opacity: 1;
  z-index: 2;
}
.files-ui-tooltip.card:hover {
  z-index: 2;
}
.files-ui-tooltip.card:hover .files-ui-tooltiptext {
  visibility: visible;
  opacity: 1;
  z-index: 2;
}
.files-ui-tooltip.card .files-ui-tooltiptext {
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  visibility: hidden;
  width: 200px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 2px 2px;
  position: absolute;
  z-index: 2;
  left: calc(50% - 100px);
  left: 0;
  margin-top: 5px;
  top: 100%;
  opacity: 0;
  transition: opacity 1s;
}
.files-ui-tooltip.card .files-ui-tooltiptext.not-valid-error {
  background: linear-gradient(to top, #c62828, #d32f2f);
}
.files-ui-tooltip.card .files-ui-tooltiptext.not-valid-error::after {
  border-color: transparent transparent #d32f2f transparent;
}
.files-ui-tooltip.card .files-ui-tooltiptext.success {
  background: linear-gradient(to top, #1b5e20, #2e7d32);
}
.files-ui-tooltip.card .files-ui-tooltiptext.success::after {
  border-color: transparent transparent #2e7d32 transparent;
}
.files-ui-tooltip.card .files-ui-tooltiptext::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
}
.files-ui-tooltip .files-ui-tooltiptext {
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  visibility: hidden;
  width: 132px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 2px 2px;
  position: absolute;
  z-index: 2;
  left: 0;
  opacity: 0;
  transition: opacity 1s;
}
.files-ui-tooltip .files-ui-tooltiptext.not-valid-error {
  background: linear-gradient(to top, #c62828, #d32f2f);
}
.files-ui-tooltip .files-ui-tooltiptext.not-valid-error::after {
  border-color: transparent transparent #d32f2f transparent;
}
.files-ui-tooltip .files-ui-tooltiptext.success {
  background: linear-gradient(to top, #1b5e20, #2e7d32);
}
.files-ui-tooltip .files-ui-tooltiptext.success::after {
  border-color: transparent transparent #2e7d32 transparent;
}
.files-ui-tooltip .files-ui-tooltiptext::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
}`);var qo=function(e){var n=e.uploadStatus,a=e.valid,t=e.errors,i=e.uploadMessage,r=e.open,l=o.useState(void 0),s=l[0],c=l[1],u=o.useState(void 0),d=u[0],f=u[1],m=function(p,b){p!==void 0?(f(i),c(p==="success"?"success":"not-valid-error")):b!==void 0&&(b||(c("not-valid-error"),f(t?t.reduce(function(g,v){return g+="".concat(v,". "),g},""):"")))};return o.useEffect(function(){m(n,a)},[n,a]),o.createElement(o.Fragment,null,r&&d&&s&&o.createElement("span",{className:"files-ui-tooltiptext ".concat(s)},d))},Zo=function(e){var n=e.downloadUrl,a=e.anchorRef,t=e.fileName;function i(r){r.stopPropagation()}return n?o.createElement("a",{ref:a,target:"_blank",href:n,download:t,hidden:!0,rel:"noopener noreferrer",onClick:i},"download_file"):o.createElement(o.Fragment,null)};A(`@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,900);
.files-ui-file-mosaic-main-container {
  width: 132px;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 400;
  word-break: break-word;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container {
  width: 132px;
  height: 132px;
  border-radius: 8px;
  box-sizing: border-box;
  overflow: hidden;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-image-layer {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-image-layer img {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-image-layer.blur img {
  filter: blur(4px);
  width: 200%;
  height: 200%;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-main-layer {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-main-layer .file-mosaic-main-layer-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-main-layer .file-mosaic-main-layer-footer {
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: row;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-main-layer .file-mosaic-main-layer-footer .file-mosaic-footer-right {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-grow: 1;
  align-items: flex-end;
  justify-content: flex-end;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-main-layer .file-mosaic-main-layer-footer .file-mosaic-footer-left {
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-grow: 1;
  align-items: flex-start;
  justify-content: center;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer {
  position: absolute;
  left: 0;
  right: 0;
  text-align: left;
  scrollbar-width: thin;
  line-height: 1.5;
  letter-spacing: 0.02857em;
  font-family: "Poppins", sans-serif;
  width: inherit;
  background-color: rgba(0, 0, 0, 0.85);
  word-break: break-word;
  height: 100%;
  width: 100%;
  font-size: 0.8rem;
  transition: all 0.5s ease 0s;
  overflow: auto;
  color: white;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer::-webkit-scrollbar {
  width: 9px;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer::-webkit-scrollbar-track {
  background: transparent;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer::-webkit-scrollbar-thumb {
  background-color: rgba(100, 108, 127, 0.662745098);
  border-radius: 20px;
  border: transparent;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer .files-ui-file-mosaic-info-layer-header {
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer .heading {
  font-weight: 600;
  padding: 0 5px;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-icon-layer-container .files-ui-file-mosaic-info-layer .label {
  padding: 0 5px;
  font-weight: 399;
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-file-name {
  margin-top: 1px;
  height: 31px;
  text-align: center;
  width: 100%;
  color: black;
  font-size: 0.95em;
  box-sizing: border-box;
  line-height: 15px;
  font-weight: 400;
  letter-spacing: 0.07rem;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
  /*  display: flex;
   align-items: center;
   justify-content: center; */
}
.files-ui-file-mosaic-main-container .files-ui-file-mosaic-file-name.dark-mode {
  color: rgba(255, 255, 255, 0.7);
}
.files-ui-file-mosaic-main-container.clickable {
  cursor: pointer;
}

/* .files-ui-file-icon {
  font-size: 0.7rem;
  min-width: 19px;
  min-height: 19px;
  margin: 0;
  padding: 2px 2px;
  border-radius: 50%;
  background-color: rgba(32, 33, 36, 0.65);
  word-break: break-word;
  box-sizing: content-box;
  &:hover {
    background-color: rgba(32, 33, 36, 0.85);
  }
  &.dark-mode {
    background-color: rgba(154, 160, 166, 0.65);
    &:hover {
      background-color: rgba(154, 160, 166, 0.85);
    }
  }
}
 */`);A(`.files-ui-layer-container {
  position: relative;
}`);var Wo=function(e){var n=e.style,a=e.className,t=e.children,i=ie(a||"","files-ui-layer-container");return o.createElement("div",{className:i,style:n},t)},Go=function(e){var n=e.fileName;return n?o.createElement("span",null,n):o.createElement(o.Fragment,null)};A(`.files-ui-file-mosaic-upload-layer {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.65);
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 1em;
  position: relative;
  overflow: hidden;
}
.files-ui-file-mosaic-upload-layer .elevation-list {
  transition: all 1.5s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.files-ui-file-mosaic-upload-layer .elevation-list .elevation-item {
  width: 100%;
  height: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 10px;
  box-sizing: border-box;
}
.files-ui-file-mosaic-upload-layer .elevation-list .elevation-item span {
  text-align: center;
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
}`);var Xo=function(e){var n=e.uploadStatus,a=e.onCancel,t=e.onAbort,i=e.progress,r=e.localization,l=o.useRef(null),s=o.useRef(null),c=o.useState([void 0]),u=c[0],d=c[1];o.useEffect(function(){d(function(m){if(m[m.length-1]==="preparing"&&n==="uploading"){var p=xe([],m,!0);return p[m.length-1]=n,xe([],p,!0)}return xe(xe([],m,!0),[n],!1)})},[n]);var f=function(){var m=l.current,p=s.current;m===null||p===null||(p.style.top=0-(u.length-1)*132+"px")};return o.useEffect(function(){u.length>1&&f()},[u.length]),o.createElement("div",{className:"elevation-layer-container",ref:l},o.createElement("div",{className:"elevation-list",ref:s},u.map(function(m,p){switch(m){case"preparing":return o.createElement("div",{className:"elevation-item",key:p+1},o.createElement(Oo,{onCancel:a,localization:r}));case"uploading":return o.createElement("div",{className:"elevation-item",key:p+1},o.createElement(Vo,{onAbort:t,progress:i,localization:r}));case"error":return o.createElement("div",{className:"elevation-item",key:p+1},o.createElement(jo,{localization:r}));case"success":return o.createElement("div",{className:"elevation-item",key:p+1},o.createElement(Po,{localization:r}));case"aborted":return o.createElement("div",{className:"elevation-item",key:p+1},o.createElement(Io,{localization:r}));default:return o.createElement("div",{className:"elevation-item",key:p+1},o.createElement(To,null))}})))},ja=function(e){var n=e.imageSource,a=e.url,t=e.fileName,i=e.card,r=e.isBlur,l=e.smartImgFit,s=o.useState(void 0),c=s[0],u=s[1],d=o.useState(!1),f=d[0],m=d[1];o.useEffect(function(){u(n||a)},[n,a]);var p=function(){m(!0),u(a)};return r?o.createElement(o.Fragment,null,!i&&!f&&n&&o.createElement(Ta,{src:c,alt:"blur ".concat(t),smartImgFit:!1})):o.createElement(o.Fragment,null,o.createElement(Ta,{onError:p,src:c,style:{borderRadius:"0px"},alt:"preview ".concat(t),smartImgFit:l}))};A(`.files-ui-file-item-status-container {
  text-align: center;
  font-size: 0.8rem;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  flex-direction: row;
  border-radius: 4px;
  padding: 0.5px;
  font-weight: 400;
}
.files-ui-file-item-status-container.file-status-error {
  color: #f44336;
}
.files-ui-file-item-status-container.file-status-ok {
  color: #5c7a1f;
}
.files-ui-file-item-status-container.file-status-loading {
  position: relative;
  display: flex;
  color: #8b6b10;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.7);
}
.files-ui-file-item-status-container.file-status-loading.percentage {
  padding: 7px 4px 2px 5px;
}
.files-ui-file-item-status-container.file-status-loading .abort-button {
  position: absolute;
  right: -2px;
  top: -2px;
}
.files-ui-file-item-status-container.file-status-loading .uploading-text.up {
  margin-bottom: -22px;
}
.files-ui-file-item-status-container.file-status-loading .uploading-text.down {
  margin-top: -20px;
}
.files-ui-file-item-status-container.file-status-loading .uploading-text p.percentage {
  font-weight: 500;
}`);var it=function(e){var n=e.valid,a=e.uploadStatus,t=e.localization,i=e.style,r=Fe(t).status;return a==="success"?o.createElement("div",{className:"files-ui-file-item-status-container file-status-ok",style:i},o.createElement(oo,{color:"#4caf50",size:"small",className:"status-icon"}),r.success):a==="error"||a==="aborted"?o.createElement("div",{className:"files-ui-file-item-status-container file-status-error",style:i},o.createElement(fo,{color:"#f44336",size:"semi-medium",className:"status-icon"}),r.error):n!=null?n?o.createElement("div",{className:"files-ui-file-item-status-container file-status-ok",style:i},o.createElement(nt,{color:"#4caf50",size:"small",className:"status-icon"}),r.valid):o.createElement("div",{className:"files-ui-file-item-status-container file-status-error",style:i},o.createElement(at,{color:"#f44336",size:"small",className:"status-icon"}),r.denied):o.createElement(o.Fragment,null)},$o=function(e){var n=e.valid,a=e.localization,t=e.onCloseInfo,i=e.uploadStatus,r=e.localName,l=e.sizeFormatted,s=e.localType,c=Fe(a),u=c.fullInfoLayer,d=u.name,f=u.size,m=u.type;return o.createElement(o.Fragment,null,o.createElement("div",{className:"files-ui-file-mosaic-info-layer-header"},o.createElement(et,{color:"rgba(255,255,255,0.8)",onClick:t,colorFill:"black"}),o.createElement(it,{valid:n,uploadStatus:i,localization:a})),o.createElement("div",{className:"heading"},d),o.createElement("div",{className:"label"},r),o.createElement("div",{className:"heading"},f),o.createElement("div",{className:"label"},l),o.createElement("div",{className:"heading"},m),o.createElement("div",{className:"label"},s))};A(`.filesui-file-item-size {
  box-sizing: border-box;
  font-size: 0.7rem;
  border: 0.5px solid wheat;
  text-align: center;
  color: rgba(255, 255, 255, 0.89);
  padding: 2px 1.5px;
  border-radius: 7px;
  background-color: rgba(32, 33, 36, 0.75);
  min-width: 45px;
  word-break: break-word;
  font-family: inherit;
}
.filesui-file-item-size:hover {
  background-color: rgba(32, 33, 36, 0.85);
  color: rgba(255, 255, 255, 0.97);
}`);var Jo=function(e){var n=e.sizeFormatted;return o.createElement(o.Fragment,null,n&&o.createElement("div",{className:"filesui-file-item-size"},n))},Ko=function(e){var n=e.darkMode,a=e.deleteIcon,t=e.downloadIcon,i=e.imageIcon,r=e.infoIcon,l=e.onDelete,s=e.onDownload,c=e.onOpenInfo,u=e.onSee,d=e.onWatch,f=e.sizeFormatted,m=e.valid,p=e.videoIcon,b=e.localization,g=e.uploadStatus,v=e.isActive;return o.createElement(o.Fragment,null,o.createElement("div",{className:"file-mosaic-main-layer-header"},v&&a&&o.createElement(yn,{className:n?"files-ui-file-icon dark-mode":"files-ui-file-icon",color:n?"#121212":"rgba(255,255,255,0.851)",onClick:l,size:"small",colorFill:"transparent"})),o.createElement("div",{className:"file-mosaic-main-layer-footer"},o.createElement("div",{className:"file-mosaic-footer-left"},o.createElement(it,{valid:m,uploadStatus:g,localization:b}),v&&f&&o.createElement(Jo,{sizeFormatted:f})),o.createElement("div",{className:"file-mosaic-footer-right"},v&&o.createElement(o.Fragment,null,i&&o.createElement(po,{className:n?"files-ui-file-icon dark-mode":"files-ui-file-icon",color:n?"#121212":"rgba(255,255,255,0.851)",onClick:u,size:"small"}),p&&o.createElement(co,{className:n?"files-ui-file-icon dark-mode":"files-ui-file-icon",color:n?"#121212":"rgba(255,255,255,0.851)",onClick:d,size:"small"}),t&&o.createElement(lo,{className:n?"files-ui-file-icon dark-mode":"files-ui-file-icon",color:n?"#121212":"rgba(255,255,255,0.851)",onClick:s,size:"small"}),r&&o.createElement(so,{className:n?"files-ui-file-icon dark-mode":"files-ui-file-icon",onClick:c,color:n?"#121212":"rgba(255,255,255,0.851)",size:"micro"})))))},Yo=function(e){var n=e.style,a=e.className,t=e.file,i=e.name,r=e.size,l=e.type,s=e.id,c=e.valid,u=e.errors,d=e.uploadStatus,f=e.uploadMessage,m=e.progress,p=e.xhr,b=e.localization,g=e.preview,v=e.imageUrl,x=e.videoUrl,w=e.info,N=e.backgroundBlurImage,E=N===void 0?!0:N,k=e.darkMode,M=e.alwaysActive,F=M===void 0?!0:M,L=e.resultOnTooltip,z=L===void 0?!0:L,B=e.downloadUrl,j=e.onDelete,U=e.onCancel,G=e.onAbort,O=e.onDownload,Z=e.onSee,_=e.onWatch,ae=e.onDoubleClick,q=e.onClick,P=e.onRightClick,ze=e.smartImgFit,_e=ze===void 0?"orientation":ze,pe=o.useContext(na),de=pe.darkMode,ge=pe.icons,W=pe.localization,X=b!==void 0?b:W,Ce=k!==void 0?k:de,$e=o.useRef(null),wn=ie(ie("files-ui-file-mosaic-main-container files-ui-tooltip",a),q?"clickable":void 0),En=Ce?"files-ui-file-mosaic-file-name dark-mode":"files-ui-file-mosaic-file-name",Se=Li(t,i,l,r),ye=Se[0],Je=Se[1],kn=Se[2],Ke=Ro(m,p),$=Mo(t,i,l,c,g,v,x,ge),Ye=$[0],Qe=$[1],Fn=$[2],le=$[3],Ne=$[4],en=$[5],Ie=ue(kn),Me=o.useState(!1),we=Me[0],Te=Me[1],je=o.useState(!1),nn=je[0],Oe=je[1],zn=function(){F||Oe(!0)},an=function(){F||Oe(!1)},Cn=function(){return j==null?void 0:j(s)},tn=function(){return Te(!0)},rn=function(){return Te(!1)},Ee=Lo(d);o.useEffect(function(){Ee&&we&&rn()},[Ee]);function Sn(Y){Y.stopPropagation(),q==null||q(Y)}var on=function(Y){Y.preventDefault(),ae==null||ae(Y)};function Nn(Y){P==null||P(Y)}var ln=function(){var Y=$e.current;Y&&Y.click()},Mn=function(){O?O==null||O(s,B):typeof B=="string"&&ln()},sn=function(){p==null||p.abort(),G==null||G(s)};return Ye?o.createElement("div",{className:wn,style:n,onClick:Sn,onMouseEnter:zn,onMouseLeave:an,onDoubleClick:on,onContextMenu:Nn},o.createElement(Wo,{className:"files-ui-file-mosaic-icon-layer-container",style:n},o.createElement(Ge,{className:"files-ui-file-mosaic-image-layer blur",visible:E},o.createElement(ja,{imageSource:Ne,url:le,fileName:ye,isBlur:!0,smartImgFit:!1})),o.createElement(Ge,{className:"files-ui-file-mosaic-image-layer",visible:!0},o.createElement(ja,{imageSource:Ne,url:le,fileName:ye,isBlur:!1,smartImgFit:_e})),o.createElement(Ge,{className:"files-ui-file-mosaic-main-layer",visible:!Ee&&!we},o.createElement(Ko,{deleteIcon:j!==void 0,onDelete:Cn,darkMode:Ce,valid:c,uploadStatus:d,localization:X,sizeFormatted:Ie,imageIcon:Qe&&Z!==void 0,onSee:function(){return Z==null?void 0:Z(Ne)},videoIcon:Fn&&_!==void 0,onWatch:function(){return _==null?void 0:_(en)},downloadIcon:O!==void 0||B!==void 0,onDownload:Mn,infoIcon:w!==void 0,onOpenInfo:tn,isActive:F||nn})),o.createElement(Ge,{className:"files-ui-file-mosaic-info-layer",visible:we,onClick:oe},o.createElement($o,{onCloseInfo:rn,valid:c,localization:X,localName:ye,sizeFormatted:Ie,localType:Je})),o.createElement(Ge,{className:"files-ui-file-mosaic-upload-layer",visible:Ee,onClick:oe},o.createElement(Xo,{uploadStatus:d,progress:Ke,onCancel:U?function(){return U==null?void 0:U(s)}:void 0,onAbort:G?sn:void 0,localization:X}))),o.createElement("div",{className:En},o.createElement(Go,{fileName:ye})),o.createElement(qo,{open:z,uploadStatus:d,valid:c,errors:u,uploadMessage:f}),o.createElement(Zo,{fileName:ye,anchorRef:$e,downloadUrl:B})):o.createElement(o.Fragment,null)};A(`.fui-fullscreen-container {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.734);
  transform: translate(100%);
  transition: transform 0.2s ease-in-out;
  margin: 0 !important;
  z-index: 4000;
  box-sizing: border-box;
}
.fui-fullscreen-container.show-fs {
  transform: translate(0);
}

.fui-fullscreen-relative-container {
  position: relative;
  width: 90%;
  height: 90%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  /*   @media (max-width: 600px) {
    width: 80%;
    height: auto;
  }*/
}
.fui-fullscreen-relative-container img {
  height: 100%;
  width: auto;
}
.fui-fullscreen-relative-container video {
  height: 100%;
  width: auto;
}
@media (max-width: 960px) {
  .fui-fullscreen-relative-container {
    height: 90%;
    width: 100%;
  }
  .fui-fullscreen-relative-container video {
    height: auto;
    width: 100%;
  }
  .fui-fullscreen-relative-container img {
    height: auto;
    width: 100%;
  }
}

.button-full-screen {
  position: absolute;
  top: 0;
  right: 0;
}`);const Qo=({endpointCSV:e,close:n})=>{Et();const[a,t]=o.useState([]),[i,r]=o.useState(""),l=localStorage.getItem("token"),{setTaskEndPoint:s}=xt(),{id:c}=yt(),u=f=>{const m=[".csv",".xls",".xlsx",".exe"],p=f.filter(b=>{const g=b.name.split(".").pop();return m.includes(`.${g}`)});t(p),f.length!==p.length?r("Some files are invalid. Only CSV, Excel, and EXE files are allowed."):r("")},d=async()=>{if(a.length===0){Na.fire({icon:"warning",title:"No file selected",text:"Please select a file to upload."});return}try{const f=await wt(e,a[0].file,l,c);kt("send_message",f.data),Na.fire({icon:"success",title:"Uploaded",text:"Files uploaded successfully."}),t([])}catch(f){console.error("Error uploading file:",f)}finally{s(!1),n()}};return K.jsxs(Ft,{sx:{padding:"20px",width:"100%",maxWidth:"600px",mx:"auto"},children:[K.jsx(Pa,{variant:"h6",gutterBottom:!0,children:"Upload File"}),K.jsxs(zt,{fullWidth:!0,error:!!i,sx:{mb:2},children:[K.jsx(Ao,{onChange:u,value:a,accept:".csv, .xls, .xlsx, .exe",children:a.map((f,m)=>K.jsx(Yo,{...f},m))}),i&&K.jsx(Ct,{children:i})]}),K.jsx(St,{variant:"contained",color:"primary",onClick:d,disabled:a.length===0,fullWidth:!0,children:"Upload File"})]})};function el(e){return Oa({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"},child:[]}]})(e)}function ul(e){return Oa({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M387.581 139.712L356.755 109 216.913 248.319l30.831 30.719 139.837-139.326zM481.172 109L247.744 340.469l-91.39-91.051-30.827 30.715L247.744 403 512 139.712 481.172 109zM0 280.133L123.321 403l30.829-30.713L31.934 249.418 0 280.133z"},child:[]}]})(e)}const dl=({open:e,onClose:n,endpointCSV:a})=>K.jsx(Nt,{anchor:"right",open:e,onClose:n,PaperProps:{sx:{width:{xs:"100%",sm:400,md:450,lg:500}}},children:K.jsxs("div",{style:{padding:"20px",width:"100%"},children:[K.jsx("div",{style:{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",width:"100%",paddingBottom:"20px",cursor:"pointer"},children:K.jsx(el,{size:30,color:"#1640D6",onClick:n})}),K.jsx(Pa,{variant:"h5",gutterBottom:!0,fontWeight:"bold",style:{marginBottom:"40px"},children:"Upload Tasks"}),K.jsx(Qo,{endpointCSV:a,close:n})]})});export{dl as A,ul as I,Qo as U,el as a};
