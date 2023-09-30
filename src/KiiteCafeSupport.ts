import 'tslib';
import _ from 'lodash';
import axios from 'axios';
import { injectable } from 'inversify';
import { IKiiteCafeSupport } from "./IKiiteCafeSupport";

@injectable()
export class KiiteCafeSupport implements IKiiteCafeSupport {
    public async getNowPlaying(): Promise<string> {
        const result = await axios({
            url: 'https://cafe.kiite.jp/api/cafe/now_playing',
            method: 'GET'
        });

        return _.get(result, 'data', null);
    }
}