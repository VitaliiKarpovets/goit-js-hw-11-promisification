// Перепиши функцию toggleUserState() так, чтобы она не использовала callback - функцию callback,
// а принимала всего два параметра allUsers и userName и возвращала промис.

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const logger = updatedUsers => console.table(updatedUsers);

const toggleUserState = (allUsers, userName) => {
    
        const updatedUsers = allUsers.map(user =>
            user.name === userName ? { ...user, active: !user.active } : user,
        );
    
    return new Promise((resolve) => {
        resolve(updatedUsers)
    })
};

// toggleUserState(users, 'Lux')

toggleUserState(users, 'Poly').then(logger);
toggleUserState(users, 'Lux').then(logger);
    toggleUserState(users, 'Ajax').then(logger);