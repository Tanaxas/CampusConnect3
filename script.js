const { createApp, ref, reactive, computed, onMounted } = Vue;

        createApp({
            setup() {
                const currentPage = ref('home');
                const isLoggedIn = ref(false);
                const user = ref(null);
                const mobileMenuOpen = ref(false);
                const showContactModal = ref(false);
                const selectedListing = ref({});
                const contactMessage = ref('');
                const currentFilter = ref('');
                const searchQuery = ref('');
                
                // Login form
                const loginForm = reactive({
                    email: '',
                    password: '',
                    remember: false,
                    emailError: '',
                    passwordError: ''
                });

                // Register form
                const registerForm = reactive({
                    name: '',
                    email: '',
                    userType: 'student',
                    password: '',
                    confirmPassword: '',
                    emailError: '',
                    passwordError: ''
                });

                // New listing form
                const newListing = reactive({
                    title: '',
                    category: 'Textbooks',
                    price: '',
                    description: '',
                    contact: ''
                });

                // Sample listings
                const listings = ref([
                    {
                        title: "Computer Science Textbook",
                        category: "Textbooks",
                        price: 25,
                        description: "Introduction to Computer Science textbook, used for CSC101. Good condition with minimal highlighting.",
                        sellerName: "Ropafadzo Mandimika",
                        contact: "h230048N@hit.ac.zw"
                    },
                    {
                        title: "Programming Tutor",
                        category: "Services",
                        price: 15,
                        description: "Offering private tutoring for Java, Python, and C++ programming. I'm a second year ISA student with.",
                        sellerName: "Tanaka Nhekairo",
                        contact: "+263 71 413 4479"
                    },
                    {
                        title: "TI-84 Calculator",
                        category: "Electronics",
                        price: 40,
                        description: "Texas Instruments TI-84 Plus graphing calculator. Perfect working condition, only used for one semester.",
                        sellerName: "Prof. Mututsva",
                        contact: "tmututsva@hit.ac.zw"
                    },
                    {
                        title: "Engineering Mechanics Textbook",
                        category: "Textbooks",
                        price: 30,
                        description: "Engineering Mechanics: Statics & Dynamics (14th Edition). Like new condition.",
                        sellerName: "Hamzah Dawood",
                        contact: "dawood@hit.ac.zw"
                    },
                    {
                        title: "HP Laptop - i5, 8GB RAM, 256GB SSD",
                        category: "Electronics",
                        price: 280,
                        description: "HP Pavilion laptop in great condition. Intel Core i5 processor, 8GB RAM, 256GB SSD. Battery holds charge well. Includes charger and laptop bag.",
                        sellerName: "Washydence",
                        contact: "washydence@hit.ac.zw"
                    },
                    {
                        title: "Room for Rent - Near Campus",
                        category: "Accommodation",
                        price: 120,
                        description: "Single room available in shared house, just 10 minute walk from HIT campus. Utilities included, shared kitchen and bathroom. Available from next month.",
                        sellerName: "Ben Mapepeta",
                        contact: "ben@hit.ac.zw"
                    },
                    {
                        title: "Alora Gazzette",
                        category: "Other",
                        price: 10,
                        description: "your premier magazine dedicated to showcasing the latest in beauty products, services, and models",
                        sellerName: "Makatida Ngwerume",
                        contact: "h230006g@hit.ac.zw"
                    }
                ]);

                // Filtered listings based on search and category filter
                const filteredListings = computed(() => {
                    let result = listings.value;
                    
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

                // Methods
                const showPage = (page) => {
                    currentPage.value = page;
                    mobileMenuOpen.value = false;
                };

                const toggleMobileMenu = () => {
                    mobileMenuOpen.value = !mobileMenuOpen.value;
                };

                const login = () => {
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
                    
                    // Mock successful login
                    isLoggedIn.value = true;
                    user.value = {
                        name: loginForm.email.split('@')[0],
                        email: loginForm.email,
                        type: loginForm.email.includes('prof') ? 'lecturer' : 'student'
                    };
                    
                    // Redirect to home
                    showPage('home');
                };

                const logout = () => {
                    isLoggedIn.value = false;
                    user.value = null;
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
                    
                    // Validate password match
                    if (registerForm.password !== registerForm.confirmPassword) {
                        registerForm.passwordError = 'Passwords do not match';
                        return;
                    }
                    
                    // Mock successful registration and login
                    isLoggedIn.value = true;
                    user.value = {
                        name: registerForm.name,
                        email: registerForm.email,
                        type: registerForm.userType
                    };
                    
                    // Redirect to home
                    showPage('home');
                };

                const createListing = () => {
                    // Validate form
                    if (!newListing.title || !newListing.price || !newListing.description) {
                        return;
                    }
                    
                    // Create new listing object
                    const listing = {
                        title: newListing.title,
                        category: newListing.category,
                        price: parseFloat(newListing.price),
                        description: newListing.description,
                        sellerName: user.value ? user.value.name : 'Anonymous',
                        contact: newListing.contact || user.value.email
                    };
                    
                    // Add to listings
                    listings.value.unshift(listing);
                    
                    // Reset form
                    newListing.title = '';
                    newListing.price = '';
                    newListing.description = '';
                    newListing.contact = '';
                    
                    // Go back to home
                    showPage('home');
                };

                const contactSeller = (listing) => {
                    selectedListing.value = listing;
                    contactMessage.value = '';
                    showContactModal.value = true;
                };

                const sendMessage = () => {
                    // After learning React + Firebase, this would send a message to the seller
                    // For presentation purpose, we'll just close the modal
                    showContactModal.value = false;
                    
                    // Show success message , to be added 
                    toast.success('Message sent successfully!');
                };

                const filterByCategory = (category) => {
                    currentFilter.value = category;
                };

                const searchListings = () => {
                    // Search happens automatically through the computed property
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

                const getInitials = (title) => {
                    return title.split(' ').map(word => word[0]).join('').toUpperCase().substring(0, 2);
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

                const truncateDescription = (text, length = 100) => {
                    if (text.length <= length) return text;
                    return text.substring(0, length) + '...';
                };

                return {
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
                    listings,
                    filteredListings,
                    currentFilter,
                    searchQuery,
                    showPage,
                    toggleMobileMenu,
                    login,
                    logout,
                    register,
                    createListing,
                    contactSeller,
                    sendMessage,
                    filterByCategory,
                    searchListings,
                    getRandomColor,
                    getInitials,
                    getCategoryClass,
                    truncateDescription
                };
            }
        }).mount('#app');