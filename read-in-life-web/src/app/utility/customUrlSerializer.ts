/**
 * Created by glrh11 on 17-7-12.
 * https://stackoverflow.com/questions/41476193/angular-2-disable-url-encoding
 */

import {UrlSerializer, UrlTree, DefaultUrlSerializer} from '@angular/router';

export class CustomUrlSerializer implements UrlSerializer {
  parse(url: any): UrlTree {
    let dus = new DefaultUrlSerializer();
    return dus.parse(url);
  }

  serialize(tree: UrlTree): any {
    let dus = new DefaultUrlSerializer(),
      path = dus.serialize(tree);
    // use your regex to replace as per your requirement.
    return path.replace(/%23/g,'#');
  }
}
