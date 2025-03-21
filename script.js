// Frontend database simulator for Campus Connect
const db = {
    users: [
        {
            id: 1,
            name: "Ropafadzo Mandimika",
            email: "h230048n@hit.ac.zw",
            passwordHash: "$2a$10$NRYkV7W.IjnJEeuIh5bDsO3YNAB6MwpzwhGIQUkpQmR0YR9pQGMHO", // "password123"
            userType: "student",
            profilePic: null,
            bio: "ISA student at HIT",
            mfaEnabled: false,
            mfaSecret: null,
            isAdmin: false,
            isActive: true,
            createdAt: "2025-03-19T10:30:00Z"
        },
        {
            id: 2,
            name: "Tanaka Nhekairo",
            email: "h230261h@hit.ac.zw",
            passwordHash: "$2a$10$NRYkV7W.IjnJEeuIh5bDsO3YNAB6MwpzwhGIQUkpQmR0YR9pQGMHO", // "password123"
            userType: "student",
            profilePic: null,
            bio: "ISA student at HIT",
            mfaEnabled: false,
            mfaSecret: null,
            isAdmin: false,
            isActive: true,
            createdAt: "2023-06-16T09:15:00Z"
        },
        {
            id: 3,
            name: "Prof. Mututsva",
            email: "tmututsva@hit.ac.zw",
            passwordHash: "$2a$10$NRYkV7W.IjnJEeuIh5bDsO3YNAB6MwpzwhGIQUkpQmR0YR9pQGMHO", // "password123"
            userType: "lecturer",
            profilePic: null,
            bio: "Professor of Mathematics",
            mfaEnabled: true,
            mfaSecret: "JBSWY3DPEHPK3PXP",
            isAdmin: true,
            isActive: true,
            createdAt: "2023-06-10T14:20:00Z"
        }
    ],
    listings: [
        {
            id: 1,
            title: "Network Security Textbook",
            category: "Textbooks",
            price: 25,
            description: "Introduction to Network Security textbook, used for ISS2201. Good condition with minimal highlighting.",
            sellerId: 1,
            sellerName: "Ropafadzo Mandimika",
            sellerEmail: "h230048n@hit.ac.zw",
            sellerProfilePic: null,
            contact: "h230261h@hit.ac.zw",
            images: [],
            status: "approved",
            createdAt: "2023-06-20T09:30:00Z"
        },
        {
            id: 2,
            title: "Programming Tutor",
            category: "Services",
            price: 15,
            description: "Offering private tutoring for Javascript, Python, and REACT js programming. I'm a final year Computer Science student with 3.8 GPA.",
            sellerId: 2,
            sellerName: "Tanaka Nhekairo",
            sellerEmail: "h230261h@hit.ac.zw",
            sellerProfilePic: null,
            contact: "+263 71 413 4479",
            images: [],
            status: "approved",
            createdAt: "2025-02-21T11:45:00Z"
        },
        {
            id: 3,
            title: "TI-84 Calculator",
            category: "Electronics",
            price: 40,
            description: "Texas Instruments TI-84 Plus graphing calculator. Perfect working condition, only used for one semester.",
            sellerId: 3,
            sellerName: "Prof. Mututsva",
            sellerEmail: "tmututsva@hit.ac.zw",
            sellerProfilePic: null,
            contact: "tmututsva@hit.ac.zw",
            images: [],
            status: "approved",
            createdAt: "2025-02-18T14:20:00Z"
        },
        {
            id: 4,
            title: "Data Communication and Network Textbook",
            category: "Textbooks",
            price: 30,
            description: "Data Communication and Network: Statics & Dynamics (14th Edition). Like new condition.",
            sellerId: 2,
            sellerName: "Hamzah Dawood",
            sellerEmail: "h230354t@hit.ac.zw",
            sellerProfilePic: null,
            contact: "sdube@hit.ac.zw",
            images: [],
            status: "approved",
            createdAt: "2023-06-22T10:15:00Z"
        },
        {
            id: 5,
            title: "HP Laptop - i5, 8GB RAM, 512GB SSD",
            category: "Electronics",
            price: 280,
            description: "HP Pavilion laptop in great condition. Intel Core i5 processor, 8GB RAM, 512GB SSD. Includes charger and laptop bag.",
            sellerId: 1,
            sellerName: "Ben Mapepeta",
            sellerEmail: "h230000j@hit.ac.zw",
            sellerProfilePic: null,
            contact: "h230000j@hit.ac.zw",
            images: [],
            status: "pending",
            createdAt: "2025-01-23T09:10:00Z"
        },
        {
            id: 6,
            title: "Room for Rent - Near Campus",
            category: "Accommodation",
            price: 120,
            description: "Single room available in shared house, just 10 minute walk from HIT campus. Utilities included, shared kitchen and bathroom. Available from next month.",
            sellerId: 2,
            sellerName: "Washydence Mavunduke",
            sellerEmail: "h230240k@hit.ac.zw",
            sellerProfilePic: null,
            contact: "+263 77 987 6543",
            images: [],
            status: "pending",
            createdAt: "2023-06-24T15:30:00Z"
        }
    ],
    messages: [
        {
            id: 1,
            senderId: 2,
            receiverId: 1,
            content: "Hi, is the Computer Science textbook still available?",
            timestamp: "2023-06-25T10:30:00Z",
            read: true
        },
        {
            id: 2,
            senderId: 1,
            receiverId: 2,
            content: "Yes, it is! Are you interested?",
            timestamp: "2023-06-25T10:35:00Z",
            read: true
        },
        {
            id: 3,
            senderId: 2,
            receiverId: 1,
            content: "Great! Can we meet tomorrow at the campus library?",
            timestamp: "2023-06-25T10:40:00Z",
            read: false
        },
        {
            id: 4,
            senderId: 3,
            receiverId: 1,
            content: "Hello John, do you still have the HP laptop for sale?",
            timestamp: "2023-06-26T09:15:00Z",
            read: false
        }
    ],
    chats: [
        {
            id: 1,
            user1Id: 1,
            user2Id: 2,
            lastMessageId: 3,
            created_at: "2023-06-25T10:30:00Z"
        },
        {
            id: 2,
            user1Id: 1,
            user2Id: 3,
            lastMessageId: 4,
            created_at: "2023-06-26T09:15:00Z"
        }
    ],
    adminSettings: {
        requireListingApproval: true,
        requireMfa: false,
        categories: ["Textbooks", "Electronics", "Services", "Accommodation", "Other"]
    },
    nextId: {
        users: 4,
        listings: 7,
        messages: 5,
        chats: 3
    }
};

// Simulated database functions
const dbFunctions = {
    findUserByEmail: (email) => {
        return db.users.find(user => user.email.toLowerCase() === email.toLowerCase());
    },
    
    createUser: (userData) => {
        const newUser = {
            id: db.nextId.users++,
            name: userData.name,
            email: userData.email,
            passwordHash: userData.passwordHash,
            userType: userData.userType || 'student',
            profilePic: null,
            bio: '',
            mfaEnabled: false,
            mfaSecret: null,
            isAdmin: false,
            isActive: true,
            createdAt: new Date().toISOString()
        };
        
        db.users.push(newUser);
        return newUser;
    },
    
    updateUser: (userId, userData) => {
        const userIndex = db.users.findIndex(u => u.id === userId);
        if (userIndex === -1) return null;
        
        const updatedUser = { ...db.users[userIndex], ...userData };
        db.users[userIndex] = updatedUser;
        return updatedUser;
    },
    
    getListingsByUser: (userId) => {
        return db.listings.filter(listing => listing.sellerId === userId);
    },
    
    getApprovedListings: () => {
        return db.listings.filter(listing => listing.status === 'approved');
    },
    
    getPendingListings: () => {
        return db.listings.filter(listing => listing.status === 'pending');
    },
    
    createListing: (listingData) => {
        const user = db.users.find(u => u.id === listingData.sellerId);
        if (!user) return null;
        
        const newListing = {
            id: db.nextId.listings++,
            title: listingData.title,
            category: listingData.category,
            price: listingData.price,
            description: listingData.description,
            sellerId: listingData.sellerId,
            sellerName: user.name,
            sellerEmail: user.email,
            sellerProfilePic: user.profilePic,
            contact: listingData.contact || user.email,
            images: listingData.images || [],
            status: db.adminSettings.requireListingApproval ? 'pending' : 'approved',
            createdAt: new Date().toISOString()
        };
        
        db.listings.push(newListing);
        return newListing;
    },
    
    updateListing: (listingId, listingData) => {
        const listingIndex = db.listings.findIndex(l => l.id === listingId);
        if (listingIndex === -1) return null;
        
        const updatedListing = { ...db.listings[listingIndex], ...listingData };
        db.listings[listingIndex] = updatedListing;
        return updatedListing;
    },
    
    deleteListing: (listingId) => {
        const listingIndex = db.listings.findIndex(l => l.id === listingId);
        if (listingIndex === -1) return false;
        
        db.listings.splice(listingIndex, 1);
        return true;
    },
    
    getUserChats: (userId) => {
        return db.chats.filter(chat => 
            chat.user1Id === userId || chat.user2Id === userId
        );
    },
    
    getChatMessages: (chatId) => {
        const chat = db.chats.find(c => c.id === chatId);
        if (!chat) return [];
        
        return db.messages.filter(msg => 
            (msg.senderId === chat.user1Id && msg.receiverId === chat.user2Id) ||
            (msg.senderId === chat.user2Id && msg.receiverId === chat.user1Id)
        ).sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    },
    
    findOrCreateChat: (user1Id, user2Id) => {
        let chat = db.chats.find(c => 
            (c.user1Id === user1Id && c.user2Id === user2Id) ||
            (c.user1Id === user2Id && c.user2Id === user1Id)
        );
        
        if (!chat) {
            chat = {
                id: db.nextId.chats++,
                user1Id: user1Id,
                user2Id: user2Id,
                lastMessageId: null,
                created_at: new Date().toISOString()
            };
            db.chats.push(chat);
        }
        
        return chat;
    },
    
    sendMessage: (senderId, receiverId, content) => {
        const newMessage = {
            id: db.nextId.messages++,
            senderId,
            receiverId,
            content,
            timestamp: new Date().toISOString(),
            read: false
        };
        
        db.messages.push(newMessage);
        
        // Update or create chat
        const chat = dbFunctions.findOrCreateChat(senderId, receiverId);
        chat.lastMessageId = newMessage.id;
        
        return newMessage;
    },
    
    markMessagesAsRead: (chatId, userId) => {
        const chat = db.chats.find(c => c.id === chatId);
        if (!chat) return 0;
        
        let count = 0;
        db.messages.forEach(msg => {
            if (msg.receiverId === userId && !msg.read && 
                ((msg.senderId === chat.user1Id && msg.receiverId === chat.user2Id) ||
                 (msg.senderId === chat.user2Id && msg.receiverId === chat.user1Id))) {
                msg.read = true;
                count++;
            }
        });
        
        return count;
    },
    
    getUnreadMessageCount: (userId) => {
        return db.messages.filter(msg => msg.receiverId === userId && !msg.read).length;
    },
    
    updateAdminSettings: (settings) => {
        db.adminSettings = { ...db.adminSettings, ...settings };
        return db.adminSettings;
    },
    
    getAllUsers: () => {
        return db.users;
    }
};

// Simple password hashing simulator
const bcrypt = {
    hash: (password) => {
        // This is just a placeholder - in real app would use proper hashing
        return "$2a$10$NRYkV7W.IjnJEeuIh5bDsO3YNAB6MwpzwhGIQUkpQmR0YR9pQGMHO";
    },
    compare: (password, hash) => {
        // For demo purposes, any password matches
        return true;
    }
};

// TOTP (Time-based One-Time Password) simulator for 2FA
const totp = {
    generateSecret: () => {
        // In real app would generate proper secret
        return "JBSWY3DPEHPK3PXP";
    },
    generateTOTP: (secret) => {
        // In real app would generate proper TOTP
        return "123456";
    },
    verifyTOTP: (token, secret) => {
        // For demo, any 6-digit code works
        return token.length === 6 && /^\d+$/.test(token);
    }
};

const { createApp, ref, reactive, computed, onMounted, nextTick, watch } = Vue;

createApp({
    setup() {
        // Current state
        const currentPage = ref('home');
        const isLoggedIn = ref(false);
        const user = ref(null);
        const mobileMenuOpen = ref(false);
        const showContactModal = ref(false);
        const selectedListing = ref({});
        const contactMessage = ref('');
        const currentFilter = ref('');
        const searchQuery = ref('');
        const profileTab = ref('listings');
        const adminTab = ref('pending');
        const activeChatId = ref(null);
        const activeChat = ref(null);
        const newMessage = ref('');
        const showEditProfileModal = ref(false);
        const unreadMessages = ref(0);
        const showMfaVerification = ref(false);
        
        // MFA setup
        const mfaSecret = ref('');
        const mfaQrCode = ref('');
        const mfaSetupError = ref('');
        const mfaCodeDigits = ref(['', '', '', '', '', '']);
        const mfaVerificationDigits = ref(['', '', '', '', '', '']);
        const mfaVerificationError = ref('');
        
        // Forms
        const loginForm = reactive({
            email: '',
            password: '',
            remember: false,
            emailError: '',
            passwordError: ''
        });

        const registerForm = reactive({
            name: '',
            email: '',
            userType: 'student',
            password: '',
            confirmPassword: '',
            emailError: '',
            passwordError: ''
        });

        const newListing = reactive({
            title: '',
            category: 'Textbooks',
            price: '',
            description: '',
            contact: '',
            images: []
        });
        
        const editProfileForm = reactive({
            name: '',
            bio: '',
            profilePic: null
        });
        
        const adminSettings = reactive({
            requireListingApproval: true,
            requireMfa: false,
            categories: ["Textbooks", "Electronics", "Services", "Accommodation", "Other"]
        });
        
        const newCategory = ref('');
        
        // Computed properties
        const isAdmin = computed(() => {
            return user.value && user.value.isAdmin;
        });
        
        const filteredListings = computed(() => {
            let result = dbFunctions.getApprovedListings();
            
            if (currentFilter.value) {
                result = result.filter(item => item.category === currentFilter.value);
            }
            
            if (searchQuery.value) {
                const query = searchQuery.value.toLowerCase();
                result = result.filter(item => 
                    item.title.toLowerCase().includes(query) || 
                    item.description.toLowerCase().includes(query) ||
                    item.category.toLowerCase().includes(query)
                );
            }
            
            return result;
        });
        
        const userListings = computed(() => {
            if (!user.value) return [];
            return dbFunctions.getListingsByUser(user.value.id);
        });
        
        const savedListings = computed(() => {
            // Would be implemented with real backend
            return [];
        });
        
        const pendingListings = computed(() => {
            return dbFunctions.getPendingListings();
        });
        
        const chatList = computed(() => {
            if (!user.value) return [];
            
            const userChats = dbFunctions.getUserChats(user.value.id);
            return userChats.map(chat => {
                const otherUserId = chat.user1Id === user.value.id ? chat.user2Id : chat.user1Id;
                const otherUser = db.users.find(u => u.id === otherUserId);
                
                const messages = dbFunctions.getChatMessages(chat.id);
                const lastMessage = messages.length > 0 ? messages[messages.length - 1] : null;
                
                const unreadCount = messages.filter(msg => msg.receiverId === user.value.id && !msg.read).length;
                
                return {
                    id: chat.id,
                    userId: otherUserId,
                    name: otherUser ? otherUser.name : 'Unknown User',
                    profilePic: otherUser ? otherUser.profilePic : null,
                    lastMessage: lastMessage ? lastMessage.content : 'No messages yet',
                    lastMessageTime: lastMessage ? lastMessage.timestamp : chat.created_at,
                    unread: unreadCount > 0,
                    isOnline: Math.random() > 0.5, // Random for demo
                    messages
                };
            }).sort((a, b) => new Date(b.lastMessageTime) - new Date(a.lastMessageTime));
        });
        
        const allUsers = computed(() => {
            return dbFunctions.getAllUsers();
        });
        
        // Methods
        const showPage = (page) => {
            currentPage.value = page;
            mobileMenuOpen.value = false;
            
            if (page === 'messages') {
                updateUnreadMessageCount();
            }
        };

        const toggleMobileMenu = () => {
            mobileMenuOpen.value = !mobileMenuOpen.value;
        };

        const login = async () => {
            // Reset previous errors
            loginForm.emailError = '';
            loginForm.passwordError = '';
            
            // Validate email
            if (!loginForm.email) {
                loginForm.emailError = 'Email is required';
                return;
            }
            
            if (!loginForm.email.endsWith('@hit.ac.zw')) {
                loginForm.emailError = 'Must use a valid HIT email address';
                return;
            }
            
            // Validate password
            if (!loginForm.password) {
                loginForm.passwordError = 'Password is required';
                return;
            }
            
            if (loginForm.password.length < 6) {
                loginForm.passwordError = 'Password must be at least 6 characters';
                return;
            }
            
            // Check if user exists
            const foundUser = dbFunctions.findUserByEmail(loginForm.email);
            
            if (!foundUser) {
                loginForm.emailError = 'User not found';
                return;
            }
            
            // Verify password (simulated)
            const passwordValid = bcrypt.compare(loginForm.password, foundUser.passwordHash);
            
            if (!passwordValid) {
                loginForm.passwordError = 'Invalid password';
                return;
            }
            
            // Check if MFA is enabled
            if (foundUser.mfaEnabled) {
                // Show MFA verification modal
                mfaVerificationDigits.value = ['', '', '', '', '', ''];
                mfaVerificationError.value = '';
                showMfaVerification.value = true;
                
                // Store user temporarily
                user.value = foundUser;
                
                // Focus on first input
                await nextTick();
                const inputs = document.querySelectorAll('.verification-code-input input');
                if (inputs.length > 0) {
                    inputs[0].focus();
                }
                
                return;
            }
            
            // Login successful
            completeLogin(foundUser);
        };
        
        const verifyMfaLogin = () => {
            const code = mfaVerificationDigits.value.join('');
            
            if (code.length !== 6) {
                mfaVerificationError.value = 'Please enter all 6 digits';
                return;
            }
            
            // Verify code (simulated)
            const isValid = totp.verifyTOTP(code, user.value.mfaSecret);
            
            if (!isValid) {
                mfaVerificationError.value = 'Invalid verification code';
                return;
            }
            
            // MFA successful
            showMfaVerification.value = false;
            
            // Complete login process
            completeLogin(user.value);
        };
        
        const completeLogin = (userData) => {
            isLoggedIn.value = true;
            user.value = userData;
            
            // Update unread message count
            updateUnreadMessageCount();
            
            // Reset login form
            loginForm.email = '';
            loginForm.password = '';
            
            // Show success notification
            showToast(`Welcome back, ${userData.name}!`, 'success');
            
            // Redirect to home
            showPage('home');
        };

        const logout = () => {
            isLoggedIn.value = false;
            user.value = null;
            showPage('home');
            showToast('You have been logged out', 'info');
        };

        const register = () => {
            // Reset previous errors
            registerForm.emailError = '';
            registerForm.passwordError = '';
            
            // Validate email
            if (!registerForm.email.endsWith('@hit.ac.zw')) {
                registerForm.emailError = 'Must use a valid HIT email address';
                return;
            }
            
            // Check if email already exists
            const existingUser = dbFunctions.findUserByEmail(registerForm.email);
            if (existingUser) {
                registerForm.emailError = 'Email already in use';
                return;
            }
            
            // Validate password match
            if (registerForm.password.length < 6) {
                registerForm.passwordError = 'Password must be at least 6 characters';
                return;
            }
            
            if (registerForm.password !== registerForm.confirmPassword) {
                registerForm.passwordError = 'Passwords do not match';
                return;
            }
            
            // Create user in DB
            const newUser = dbFunctions.createUser({
                name: registerForm.name,
                email: registerForm.email,
                passwordHash: bcrypt.hash(registerForm.password),
                userType: registerForm.userType
            });
            
            // Auto login
            isLoggedIn.value = true;
            user.value = newUser;
            
            // Show success message
            showToast('Account created successfully!', 'success');
            
            // Check if MFA setup is required by admin settings
            if (db.adminSettings.requireMfa) {
                // Setup MFA immediately
                setupMfa();
            } else {
                // Ask if user wants to set up MFA
                setupMfa();
            }
        };
        
        const setupMfa = () => {
            // Generate TOTP secret
            mfaSecret.value = totp.generateSecret();
            
            // Reset digit inputs
            mfaCodeDigits.value = ['', '', '', '', '', ''];
            mfaSetupError.value = '';
            
            // Generate QR code
            const otpAuthUrl = `otpauth://totp/CampusConnect:${user.value.email}?secret=${mfaSecret.value}&issuer=CampusConnect`;
            mfaQrCode.value = otpAuthUrl;
            
            // Show MFA setup page
            showPage('mfa-setup');
            
            // Generate QR code after DOM updates
            nextTick(() => {
                const qrCodeContainer = document.getElementById('qrcode');
                if (qrCodeContainer) {
                    qrCodeContainer.innerHTML = '';
                    QRCode.toCanvas(qrCodeContainer, otpAuthUrl, function (error) {
                        if (error) console.error(error);
                    });
                }
                
                // Focus on first input
                const inputs = document.querySelectorAll('.verification-code-input input');
                if (inputs.length > 0) {
                    inputs[0].focus();
                }
            });
        };
        
        const verifyAndEnableMfa = () => {
            const code = mfaCodeDigits.value.join('');
            
            if (code.length !== 6) {
                mfaSetupError.value = 'Please enter all 6 digits';
                return;
            }
            
            // Verify code (simulated)
            const isValid = totp.verifyTOTP(code, mfaSecret.value);
            
            if (!isValid) {
                mfaSetupError.value = 'Invalid verification code';
                return;
            }
            
            // Enable MFA for user
            const updatedUser = dbFunctions.updateUser(user.value.id, {
                mfaEnabled: true,
                mfaSecret: mfaSecret.value
            });
            
            // Update user state
            user.value = updatedUser;
            
            // Show success message
            showToast('Two-factor authentication enabled successfully!', 'success');
            
            // Go to home page
            showPage('home');
        };
        
        const skipMfaSetup = () => {
            // Show warning if admin requires MFA
            if (db.adminSettings.requireMfa) {
                showToast('MFA is required by the administrator. Please set it up.', 'warning');
                return;
            }
            
            // Skip MFA setup
            showToast('You can enable two-factor authentication later from your profile page', 'info');
            showPage('home');
        };
        
        const handleMfaDigitInput = (event, index) => {
            // Move to next input if value is entered
            if (event.target.value && index < 5) {
                const inputs = document.querySelectorAll('.verification-code-input input');
                inputs[index + 1].focus();
            }
            
            // Handle backspace
            if (event.key === 'Backspace' && !event.target.value && index > 0) {
                const inputs = document.querySelectorAll('.verification-code-input input');
                mfaCodeDigits.value[index - 1] = '';
                inputs[index - 1].focus();
            }
        };
        
        const handleMfaPaste = (event) => {
            event.preventDefault();
            const pasteData = event.clipboardData.getData('text/plain').trim();
            if (/^\d{6}$/.test(pasteData)) {
                for (let i = 0; i < 6; i++) {
                    mfaCodeDigits.value[i] = pasteData[i] || '';
                }
            }
        };
        
        const handleMfaVerificationDigitInput = (event, index) => {
            // Move to next input if value is entered
            if (event.target.value && index < 5) {
                const inputs = document.querySelectorAll('.verification-code-input input');
                inputs[index + 1].focus();
            }
            
            // Handle backspace
            if (event.key === 'Backspace' && !event.target.value && index > 0) {
                const inputs = document.querySelectorAll('.verification-code-input input');
                mfaVerificationDigits.value[index - 1] = '';
                inputs[index - 1].focus();
            }
        };
        
        const handleMfaVerificationPaste = (event) => {
            event.preventDefault();
            const pasteData = event.clipboardData.getData('text/plain').trim();
            if (/^\d{6}$/.test(pasteData)) {
                for (let i = 0; i < 6; i++) {
                    mfaVerificationDigits.value[i] = pasteData[i] || '';
                }
            }
        };

        const createListing = () => {
            // Validate form
            if (!newListing.title || !newListing.price || !newListing.description) {
                showToast('Please fill in all required fields', 'error');
                return;
            }
            
            // Create new listing
            const listing = dbFunctions.createListing({
                title: newListing.title,
                category: newListing.category,
                price: parseFloat(newListing.price),
                description: newListing.description,
                sellerId: user.value.id,
                contact: newListing.contact || user.value.email,
                images: newListing.images || []
            });
            
            // Reset form
            newListing.title = '';
            newListing.price = '';
            newListing.description = '';
            newListing.contact = '';
            newListing.images = [];
            
            // Show success message
            if (listing.status === 'pending') {
                showToast('Listing submitted for approval', 'info');
            } else {
                showToast('Listing created successfully', 'success');
            }
            
            // Go back to home
            showPage('home');
        };

        const contactSeller = (listing) => {
            selectedListing.value = listing;
            contactMessage.value = '';
            showContactModal.value = true;
        };
        
        const startConversation = () => {
            // Find seller user
            const sellerId = selectedListing.value.sellerId;
            
            // Validate message
            if (!contactMessage.value.trim()) {
                showToast('Please enter a message', 'error');
                return;
            }
            
            // Send message
            const message = dbFunctions.sendMessage(
                user.value.id,
                sellerId,
                contactMessage.value
            );
            
            // Find or create chat
            const chat = dbFunctions.findOrCreateChat(user.value.id, sellerId);
            
            // Close modal
            showContactModal.value = false;
            
            // Show success message
            showToast('Message sent successfully!', 'success');
            
            // Open chat page
            showPage('messages');
            openChat(chatList.value.find(c => c.id === chat.id));
        };

        const filterByCategory = (category) => {
            currentFilter.value = category;
        };

        const searchListings = () => {
            // Search happens automatically through computed property
        };
        
        const handleImageUpload = (event) => {
            const files = event.target.files;
            if (!files.length) return;
            
            // Process each file
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                
                // Check file type
                if (!file.type.match('image.*')) {
                    showToast('Please upload only images', 'error');
                    continue;
                }
                
                // Check file size (max 5MB)
                if (file.size > 5 * 1024 * 1024) {
                    showToast('File too large. Max size is 5MB', 'error');
                    continue;
                }
                
                // Create data URL
                const reader = new FileReader();
                reader.onload = (e) => {
                    // Limit to 5 images
                    if (newListing.images.length < 5) {
                        newListing.images.push(e.target.result);
                    } else {
                        showToast('Maximum 5 images allowed', 'warning');
                    }
                };
                reader.readAsDataURL(file);
            }
            
            // Reset file input
            event.target.value = '';
        };
        
        const removeImage = (index) => {
            newListing.images.splice(index, 1);
        };
        
        const handleProfilePicUpload = (event) => {
            const file = event.target.files[0];
            if (!file) return;
            
            // Check file type
            if (!file.type.match('image.*')) {
                showToast('Please upload only images', 'error');
                return;
            }
            
            // Check file size (max 2MB)
            if (file.size > 2 * 1024 * 1024) {
                showToast('File too large. Max size is 2MB', 'error');
                return;
            }
            
            // Create data URL
            const reader = new FileReader();
            reader.onload = (e) => {
                // Update profile pic in edit form if modal is open
                if (showEditProfileModal.value) {
                    editProfileForm.profilePic = e.target.result;
                } else {
                    // Update user directly
                    const updatedUser = dbFunctions.updateUser(user.value.id, {
                        profilePic: e.target.result
                    });
                    
                    // Update local user state
                    user.value = updatedUser;
                    
                    // Show success message
                    showToast('Profile picture updated successfully', 'success');
                }
            };
            reader.readAsDataURL(file);
            
            // Reset file input
            event.target.value = '';
        };
        
        const updateUserProfile = () => {
            // Validate form
            if (!editProfileForm.name.trim()) {
                showToast('Name is required', 'error');
                return;
            }
            
            // Update user
            const updatedUser = dbFunctions.updateUser(user.value.id, {
                name: editProfileForm.name,
                bio: editProfileForm.bio,
                profilePic: editProfileForm.profilePic !== null ? editProfileForm.profilePic : user.value.profilePic
            });
            
            // Update local user state
            user.value = updatedUser;
            
            // Close modal
            showEditProfileModal.value = false;
            
            // Show success message
            showToast('Profile updated successfully', 'success');
        };
        
        const openChat = (chat) => {
            if (!chat) return;
            
            activeChatId.value = chat.id;
            activeChat.value = chat;
            
            // Mark messages as read
            const markedCount = dbFunctions.markMessagesAsRead(chat.id, user.value.id);
            
            // Update unread count
            updateUnreadMessageCount();
            
            // Scroll to bottom of chat
            nextTick(() => {
                const chatContainer = document.querySelector('.chat-container');
                if (chatContainer) {
                    chatContainer.scrollTop = chatContainer.scrollHeight;
                }
            });
        };
        
        const sendMessage = () => {
            if (!activeChat.value || !newMessage.value.trim()) return;
            
            // Get recipient ID
            const recipientId = activeChat.value.userId;
            
            // Send message
            const message = dbFunctions.sendMessage(
                user.value.id,
                recipientId,
                newMessage.value
            );
            
            // Update active chat
            activeChat.value.messages.push({
                id: message.id,
                senderId: message.senderId,
                content: message.content,
                timestamp: message.timestamp,
                read: message.read
            });
            
            // Update last message info
            activeChat.value.lastMessage = message.content;
            activeChat.value.lastMessageTime = message.timestamp;
            
            // Clear input
            newMessage.value = '';
            
            // Scroll to bottom
            nextTick(() => {
                const chatContainer = document.querySelector('.chat-container');
                if (chatContainer) {
                    chatContainer.scrollTop = chatContainer.scrollHeight;
                }
            });
        };
        
        const updateUnreadMessageCount = () => {
            if (!user.value) {
                unreadMessages.value = 0;
                return;
            }
            
            unreadMessages.value = dbFunctions.getUnreadMessageCount(user.value.id);
        };
        
        const editListing = (listing) => {
            // TODO: Implement edit listing functionality
            showToast('Edit functionality not implemented in this demo', 'info');
        };
        
        const deleteListing = (listingId) => {
            // Confirmation dialog would be here in a real app
            
            // Delete listing
            const success = dbFunctions.deleteListing(listingId);
            
            if (success) {
                showToast('Listing deleted successfully', 'success');
            } else {
                showToast('Failed to delete listing', 'error');
            }
        };
        
        const approveListing = (listingId) => {
            const updatedListing = dbFunctions.updateListing(listingId, {
                status: 'approved'
            });
            
            if (updatedListing) {
                showToast('Listing approved successfully', 'success');
            } else {
                showToast('Failed to approve listing', 'error');
            }
        };
        
        const rejectListing = (listingId) => {
            // In a real app, might want to add a reason or notification
            const success = dbFunctions.deleteListing(listingId);
            
            if (success) {
                showToast('Listing rejected and removed', 'success');
            } else {
                showToast('Failed to reject listing', 'error');
            }
        };
        
        const addCategory = () => {
            if (!newCategory.value.trim()) {
                showToast('Please enter a category name', 'error');
                return;
            }
            
            // Check if category already exists
            if (adminSettings.categories.includes(newCategory.value.trim())) {
                showToast('Category already exists', 'error');
                return;
            }
            
            // Add category
            adminSettings.categories.push(newCategory.value.trim());
            newCategory.value = '';
            
            showToast('Category added successfully', 'success');
        };
        
        const removeCategory = (index) => {
            // Check if it's one of the default categories
            if (index < 5) {
                showToast('Cannot remove default categories', 'error');
                return;
            }
            
            adminSettings.categories.splice(index, 1);
            showToast('Category removed successfully', 'success');
        };
        
        const saveAdminSettings = () => {
            dbFunctions.updateAdminSettings({
                requireListingApproval: adminSettings.requireListingApproval,
                requireMfa: adminSettings.requireMfa,
                categories: adminSettings.categories
            });
            
            showToast('Settings saved successfully', 'success');
        };
        
        const toggleUserStatus = (userId) => {
            const userToUpdate = db.users.find(u => u.id === userId);
            if (!userToUpdate) return;
            
            const updatedUser = dbFunctions.updateUser(userId, {
                isActive: !userToUpdate.isActive
            });
            
            if (updatedUser) {
                showToast(`User ${updatedUser.isActive ? 'activated' : 'deactivated'} successfully`, 'success');
            } else {
                showToast('Failed to update user status', 'error');
            }
        };
        
        const makeAdmin = (userId) => {
            const updatedUser = dbFunctions.updateUser(userId, {
                isAdmin: true
            });
            
            if (updatedUser) {
                showToast('User promoted to admin successfully', 'success');
            } else {
                showToast('Failed to promote user', 'error');
            }
        };

        const getRandomColor = (seed) => {
            // Generate a deterministic color based on the string
            let hash = 0;
            for (let i = 0; i < seed.length; i++) {
                hash = seed.charCodeAt(i) + ((hash << 5) - hash);
            }
            
            // Convert to color
            const colors = [
                '#4F46E5', '#7C3AED', '#EC4899', '#EF4444', 
                '#F59E0B', '#10B981', '#3B82F6', '#6366F1'
            ];
            
            return colors[Math.abs(hash) % colors.length];
        };

        const getInitials = (name) => {
            if (!name) return '';
            return name.split(' ').map(word => word[0]).join('').toUpperCase().substring(0, 2);
        };

        const getCategoryClass = (category) => {
            const classes = {
                'Textbooks': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
                'Electronics': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
                'Services': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
                'Accommodation': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
                'Other': 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
            };
            
            return classes[category] || classes['Other'];
        };
        
        const getUserTypeClass = (userType) => {
            const classes = {
                'student': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
                'lecturer': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
                'service_provider': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
                'admin': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
            };
            
            return classes[userType] || classes['student'];
        };
        
        const formatUserType = (userType) => {
            const formats = {
                'student': 'Student',
                'lecturer': 'Lecturer',
                'service_provider': 'Service Provider',
                'admin': 'Administrator'
            };
            
            return formats[userType] || 'User';
        };

        const truncateDescription = (text, length = 100) => {
            if (!text || text.length <= length) return text || '';
            return text.substring(0, length) + '...';
        };
        
        const formatChatTime = (timestamp) => {
            if (!timestamp) return '';
            
            const date = new Date(timestamp);
            const now = new Date();
            const diffMs = now - date;
            const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
            
            if (diffDays === 0) {
                // Today - show time
                return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            } else if (diffDays === 1) {
                // Yesterday
                return 'Yesterday';
            } else if (diffDays < 7) {
                // Show day of week
                return date.toLocaleDateString([], { weekday: 'short' });
            } else {
                // Show date
                return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
            }
        };
        
        const formatMessageTime = (timestamp) => {
            if (!timestamp) return '';
            
            const date = new Date(timestamp);
            return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        };
        
        const formatDate = (timestamp) => {
            if (!timestamp) return '';
            
            const date = new Date(timestamp);
            return date.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' });
        };
        
        const showToast = (message, type = 'info') => {
            // Map type to color
            const bgColors = {
                'success': 'linear-gradient(to right, #00b09b, #96c93d)',
                'error': 'linear-gradient(to right, #ff5f6d, #ffc371)',
                'warning': 'linear-gradient(to right, #f7b733, #fc4a1a)',
                'info': 'linear-gradient(to right, #2193b0, #6dd5ed)'
            };
            
            Toastify({
                text: message,
                duration: 3000,
                gravity: "bottom",
                position: "center",
                backgroundColor: bgColors[type] || bgColors.info,
                stopOnFocus: true
            }).showToast();
        };
        
        // Watch for changes in edit profile modal
        watch(showEditProfileModal, (newVal) => {
            if (newVal && user.value) {
                // Initialize form with user data
                editProfileForm.name = user.value.name;
                editProfileForm.bio = user.value.bio || '';
                editProfileForm.profilePic = null;
            }
        });
        
        // Watch for changes in admin settings
        watch(() => db.adminSettings, (newVal) => {
            // Update local admin settings
            adminSettings.requireListingApproval = newVal.requireListingApproval;
            adminSettings.requireMfa = newVal.requireMfa;
            adminSettings.categories = [...newVal.categories];
        }, { deep: true });
        
        // Initialize
        onMounted(() => {
            // Check if dark mode is preferred
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.classList.add('dark');
            }
            
            // Listen for dark mode changes
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
                if (event.matches) {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
            });
        });

        return {
            // State
            currentPage,
            isLoggedIn,
            user,
            mobileMenuOpen,
            showContactModal,
            selectedListing,
            contactMessage,
            loginForm,
            registerForm,
            newListing,
            listings: db.listings,
            filteredListings,
            currentFilter,
            searchQuery,
            profileTab,
            adminTab,
            activeChatId,
            activeChat,
            newMessage,
            showEditProfileModal,
            editProfileForm,
            adminSettings,
            newCategory,
            unreadMessages,
            showMfaVerification,
            mfaSecret,
            mfaQrCode,
            mfaSetupError,
            mfaCodeDigits,
            mfaVerificationDigits,
            mfaVerificationError,
            
            // Computed
            isAdmin,
            userListings,
            savedListings,
            pendingListings,
            chatList,
            allUsers,
            
            // Methods
            showPage,
            toggleMobileMenu,
            login,
            logout,
            register,
            setupMfa,
            verifyAndEnableMfa,
            skipMfaSetup,
            verifyMfaLogin,
            handleMfaDigitInput,
            handleMfaPaste,
            handleMfaVerificationDigitInput,
            handleMfaVerificationPaste,
            createListing,
            contactSeller,
            startConversation,
            filterByCategory,
            searchListings,
            handleImageUpload,
            removeImage,
            handleProfilePicUpload,
            updateUserProfile,
            openChat,
            sendMessage,
            editListing,
            deleteListing,
            approveListing,
            rejectListing,
            addCategory,
            removeCategory,
            saveAdminSettings,
            toggleUserStatus,
            makeAdmin,
            getRandomColor,
            getInitials,
            getCategoryClass,
            getUserTypeClass,
            formatUserType,
            truncateDescription,
            formatChatTime,
            formatMessageTime,
            formatDate
        };
    }
}).mount('#app');
