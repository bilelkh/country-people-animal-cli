function filterData(data, pattern) {
    const lowerPattern = pattern.toLowerCase();

    return data.reduce((countriesAcc, country) => {
        const people = country.people.reduce((peopleAcc, person) => {
            const animals = person.animals.reduce((animalsAcc, animal) => {
                if (animal.name.toLowerCase().includes(lowerPattern)) {
                    animalsAcc.push(animal);
                }
                return animalsAcc;
            }, []);

            if (animals.length) {
                peopleAcc.push({ ...person, animals });
            }
            return peopleAcc;
        }, []);

        if (people.length) {
            countriesAcc.push({ ...country, people });
        }
        return countriesAcc;
    }, []);
}

function countData(data) {
    return data.reduce((countriesAcc, country) => {
        const people = country.people.reduce((peopleAcc, person) => {
            peopleAcc.push({
                ...person,
                name: `${person.name} [${person.animals.length}]`
            });
            return peopleAcc;
        }, []);

        countriesAcc.push({
            ...country,
            name: `${country.name} [${country.people.length}]`,
            people
        });
        return countriesAcc;
    }, []);
}

module.exports = { filterData, countData };
