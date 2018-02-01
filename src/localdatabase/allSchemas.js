import Realm from 'realm';
export const REMINDER_SCHEMA = "reminders";
export const FAVOR_SCHEMA = "favors";
// Define your models and their properties
export const ReminderSchema = {
    name: REMINDER_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'int',    // primary key
        title: { type: 'string', indexed: true },
        poster_path: { type: 'string', default: '' },
        release_date: { type: 'string', default: '' },
        vote_average: { type: 'string', default: '' },
        dateremind: { type: 'string', default: '' },
    }
};

export const FavorSchema = {
    name: FAVOR_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'int',    // primary key
        title: { type: 'string', indexed: true },
        poster_path: { type: 'string', default: '' },
        release_date: { type: 'string', default: '' },
        vote_average: { type: 'string', default: '' },
    }
};

const databaseOptions = {
    path: 'movieBoxApp.realm',
    schema: [ReminderSchema,FavorSchema],
    schemaVersion: 0, //optional    
};
//functions for TodoLists
export const insertNewReminder = newReminder => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            realm.create(REMINDER_SCHEMA, newReminder);
            resolve(newReminder);
        });
    }).catch((error) => reject(error));
});

export const insertNewFavor = newFavor => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {
        realm.write(() => {
            realm.create(FAVOR_SCHEMA, newFavor);
            resolve(newFavor);
        });
    }).catch((error) => reject(error));
});

export const deleteReminder = reminderId => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        realm.write(() => {
            let deletingReminder = realm.objectForPrimaryKey(REMINDER_SCHEMA, reminderId);
            realm.delete(deletingReminder);
            resolve();   
        });
    }).catch((error) => reject(error));;
});

export const deleteFavor = favorId => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        realm.write(() => {
            let deletingFavor = realm.objectForPrimaryKey(FAVOR_SCHEMA, favorId);
            realm.delete(deletingFavor);
            resolve();   
        });
    }).catch((error) => reject(error));;
});

export const queryAllReminder = () => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        let allReminder = realm.objects(REMINDER_SCHEMA);
        resolve(allReminder);  
    }).catch((error) => {        
        reject(error);  
    });;
});

export const queryAllFavor = () => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        let allFavor = realm.objects(FAVOR_SCHEMA);
        resolve(allFavor);  
    }).catch((error) => {        
        reject(error);  
    });;
});

export const queryAFavor = (favorId) => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        let aFavor = realm.objectForPrimaryKey(FAVOR_SCHEMA,favorId);
        resolve(aFavor);  
    }).catch((error) => {        
        reject(error);  
    });;
});

export default new Realm(databaseOptions);