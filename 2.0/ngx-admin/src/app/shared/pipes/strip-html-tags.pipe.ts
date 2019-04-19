import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripHtmlTags',
})
export class StripHtmlTagsPipe implements PipeTransform {
  tagBody = '(?:[^"\'>]|"[^"]*"|\'[^\']*\')*';

  tagOrComment = new RegExp(
    '<(?:'
    // Comment body.
    + '!--(?:(?:-*[^->])*--+|-?)'
    // Special "raw text" elements whose content should be elided.
    + '|script\\b' + this.tagBody + '>[\\s\\S]*?</script\\s*'
    + '|style\\b' + this.tagBody + '>[\\s\\S]*?</style\\s*'
    // Regular name
    + '|/?[a-z]'
    + this.tagBody
    + ')>',
    'gi');

  transform(html: any): any {
    let oldHtml;
    do {
      oldHtml = html;
      html = html.replace(this.tagOrComment, '');
    } while (html !== oldHtml);
    return html.replace(/</g, '&lt;');
  }

}
