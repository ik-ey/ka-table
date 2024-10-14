import { PagingOptions } from '../models';
import { getPageData, getPagesArrayBySize, getPagesCount, getPagesForCenter } from './PagingUtils';

describe('PagingUtils', () => {
    it('getPagesCount', () => {
        const paging: PagingOptions = {
            enabled: true,
            pageSize: 2,
        };
        const data = [1, 2, 3, 4, 5, 6];

        const result = getPagesCount(data, paging);
        expect(result).toEqual(3);
    });

    it('getPagesCount - math ceil should be used', () => {
        const paging: PagingOptions = {
            enabled: true,
            pageSize: 2,
        };
        const data = [1, 2, 3, 4, 5, 6, 7];

        const result = getPagesCount(data, paging);
        expect(result).toEqual(4);
    });

    it('getPagesCount if enabled = false', () => {
        const paging: PagingOptions = {
            enabled: false,
            pageSize: 2,
        };
        const data = [1, 2, 3, 4, 5, 6];

        const result = getPagesCount(data, paging);
        expect(result).toEqual(1);
    });

    it('getPagesCount should use pagesCount if it is set', () => {
        const paging: PagingOptions = {
            enabled: true,
            pageSize: 2,
            pagesCount: 6
        };

        const result = getPagesCount([], paging);
        expect(result).toEqual(6);
    });

    it('getPagesCount default pageSize is 10', () => {
        const paging: PagingOptions = {
            enabled: true,
        };
        const data = new Array(20);

        const result = getPagesCount(data, paging);
        expect(result).toEqual(2);
    });

    it('getPageData when paging is undefined return data', () => {
        const data = new Array(20);

        const result = getPageData(data);
        expect(result.length).toEqual(20);
    });

    it('getPageData should skip pagination if pagesCount is set', () => {
        const paging: PagingOptions = {
            enabled: true,
            pagesCount: 2,
            pageSize: 10
        };
        const data = new Array(20);

        const result = getPageData(data, paging);
        expect(result.length).toEqual(20);
    });

    it('getPageData returns first page with 10 elements when pageIndex is undefined and pageSize is undefined', () => {
        const paging: PagingOptions = {
            enabled: true,
        };
        const data = new Array(20).fill(undefined).map((_, i) => i);

        const result = getPageData(data, paging);
        expect(result.length).toEqual(10);
        expect(result[0]).toEqual(0);
        expect(result[9]).toEqual(9);
    });

    it('getPageData returns last with 10 elements when pageIndex is undefined and pageSize is undefined', () => {
        const paging: PagingOptions = {
            enabled: true,
            pageSize: 5,
            pageIndex: 2
        };
        const data = new Array(20).fill(undefined).map((_, i) => i);

        const result = getPageData(data, paging);
        expect(result.length).toEqual(5);
        expect(result[0]).toEqual(10);
        expect(result[4]).toEqual(14);
    });

    it('getPageData returns last with 10 elements when pageIndex is undefined and pageSize is undefined', () => {
        const paging: PagingOptions = {
            enabled: true,
            pageSize: 5,
            pageIndex: 4
        };
        const data = new Array(22).fill(undefined).map((_, i) => i);

        const result = getPageData(data, paging);
        expect(result.length).toEqual(2);
        expect(result[0]).toEqual(20);
        expect(result[1]).toEqual(21);
    });
    it('getPagesForCenter isStartShown= false isEndShown= false ', () => {
        const pages = new Array(6).fill(undefined).map((_, i) => i);
        const isStartShown = false;
        const isEndShown = false;
        const pageIndex = 4;
        const result = getPagesForCenter(pages, isStartShown, isEndShown, pageIndex);
        expect(result.length).toEqual(6);
        expect(result[0]).toEqual(0);
        expect(result[5]).toEqual(5);
    });
    it('getPagesForCenter isStartShown= true isEndShown= false ', () => {
        const pages = new Array(20).fill(undefined).map((_, i) => i);
        const isStartShown = true;
        const isEndShown = false;
        const pageIndex = 17;
        const result = getPagesForCenter(pages, isStartShown, isEndShown, pageIndex);
        expect(result.length).toEqual(6);
        expect(result[0]).toEqual(14);
        expect(result[5]).toEqual(19);
    });
    it('getPagesForCenter isStartShown= false isEndShown= true ', () => {
        const pages = new Array(20).fill(undefined).map((_, i) => i);
        const isStartShown = false;
        const isEndShown = true;
        const pageIndex = 4;
        const result = getPagesForCenter(pages, isStartShown, isEndShown, pageIndex);
        expect(result.length).toEqual(6);
        expect(result[0]).toEqual(0);
        expect(result[5]).toEqual(5);
    });
    it('getPagesForCenter isStartShown= true isEndShown= true ', () => {
        const pages = new Array(20).fill(undefined).map((_, i) => i);
        const isStartShown = true;
        const isEndShown = true;
        const pageIndex = 9;
        const result = getPagesForCenter(pages, isStartShown, isEndShown, pageIndex);
        expect(result.length).toEqual(5);
        expect(result[0]).toEqual(7);
        expect(result[4]).toEqual(11);
    });
    it('getPagesArrayBySize', () => {
        const result = getPagesArrayBySize(3);
        expect(result).toEqual([0, 1, 2]);
    });
});
