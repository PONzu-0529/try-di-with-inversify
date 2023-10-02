import 'reflect-metadata';
import { Container } from "inversify";
import { ContainerHelper } from './ContainerHelper';
import { IKiiteCafeSupport } from "./IKiiteCafeSupport";
import { KiiteCafeSupport } from "./KiiteCafeSupport";
import { KiiteCafeSupportMock } from "./KiiteCafeSupportMock";

(async () => {
    const container = new Container();

    ContainerHelper.bind(container, 'KiiteCafeSupport', KiiteCafeSupport);

    var support = ContainerHelper.get<IKiiteCafeSupport>(container, 'KiiteCafeSupport');
    console.log(await support.getNowPlaying());

    ContainerHelper.rebind(container, 'KiiteCafeSupport', KiiteCafeSupportMock);

    var support = ContainerHelper.get<IKiiteCafeSupport>(container, 'KiiteCafeSupport');
    console.log(await support.getNowPlaying());
})();
