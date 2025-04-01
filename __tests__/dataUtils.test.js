const { filterData, countData } = require('../utils/dataUtils');
const { data } = require('../data');

describe('filterData', () => {
    it('should filter animals by pattern', () => {
        const result = filterData(data, 'ry');
        expect(result).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    people: expect.arrayContaining([
                        expect.objectContaining({
                            animals: expect.arrayContaining([
                                expect.objectContaining({
                                    name: expect.stringMatching(/ry/i)
                                })
                            ])
                        })
                    ])
                })
            ])
        );
    });

    it('should return empty array if no match', () => {
        const result = filterData(data, 'xyz');
        expect(result).toEqual([]);
    });
});

describe('countData', () => {
    it('should append counts to names', () => {
        const result = countData(data);
        expect(result[0].name).toMatch(/\[\d+\]$/);
        expect(result[0].people[0].name).toMatch(/\[\d+\]$/);
    });
});
