export abstract class NgxUidService {
  abstract next(): string;
}

export class NgxUidDefaultService implements NgxUidService {
  private static n = 0;

  next() {
    return `__ngx_uid_${++NgxUidDefaultService.n}__`;
  }
}
