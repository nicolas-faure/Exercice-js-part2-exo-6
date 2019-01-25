function change(object, ev) {
  if(ev == 'over');
  object.src = object.src.replace(/image1(\..+)$/, 'image1_2$1');
  object.src = object.src.replace(/image2(\..+)$/, 'image2_2$1');
  object.src = object.src.replace(/image3(\..+)$/, 'image3_2$1');
  object.src = object.src.replace(/image4(\..+)$/, 'image4_2$1');
  object.src = object.src.replace(/image5(\..+)$/, 'image5_2$1');
}
function change2(object, ev) {
  if(ev == 'over');
  object.src = object.src.replace(/image1_2(\..+)$/, 'image1$1');
  object.src = object.src.replace(/image2_2(\..+)$/, 'image2$1');
  object.src = object.src.replace(/image3_2(\..+)$/, 'image3$1');
  object.src = object.src.replace(/image4_2(\..+)$/, 'image4$1');
  object.src = object.src.replace(/image5_2(\..+)$/, 'image5$1');
}
