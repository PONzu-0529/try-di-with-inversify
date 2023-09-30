import 'reflect-metadata';
import { Container } from "inversify";
import { IKiiteCafeSupport } from "./IKiiteCafeSupport";
import { KiiteCafeSupport } from "./KiiteCafeSupport";
import { KiiteCafeSupportMock } from "./KiiteCafeSupportMock";

(async () => {
    const container = new Container();
    container.bind('IKiiteCafeSupport').to(KiiteCafeSupport);

    var support = container.get<IKiiteCafeSupport>('IKiiteCafeSupport');
    console.log(await support.getNowPlaying());

    container.rebind('IKiiteCafeSupport').to(KiiteCafeSupportMock);

    var support = container.get<IKiiteCafeSupport>('IKiiteCafeSupport');
    console.log(await support.getNowPlaying());
})();
