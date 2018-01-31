import Realm from 'realm';
export const REMINDER_SCHEMA = "reminders";
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

const databaseOptions = {
    path: 'movieBoxApp.realm',
    schema: [ReminderSchema],
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

export const deleteReminder = reminderId => new Promise((resolve, reject) => {    
    Realm.open(databaseOptions).then(realm => {        
        realm.write(() => {
            let deletingReminder = realm.objectForPrimaryKey(REMINDER_SCHEMA, reminderId);
            realm.delete(deletingReminder);
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
export default new Realm(databaseOptions);