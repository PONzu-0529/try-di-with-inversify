import 'tslib';
import { injectable } from 'inversify';
import { IKiiteCafeSupport } from "./IKiiteCafeSupport";

@injectable()
export class KiiteCafeSupportMock implements IKiiteCafeSupport {
    public async getNowPlaying(): Promise<string> {
        return '{id: mock, video_id: \'sm_mock\', title: \'Mock Title\'}';
    }
}