<?php
// Database configuration
// IMPORTANT: Update these with your Hostinger MySQL credentials
define('DB_HOST', 'localhost');
define('DB_NAME', 'your_database_name');
define('DB_USER', 'your_database_user');
define('DB_PASS', 'your_database_password');

// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Connect to database
try {
    $pdo = new PDO(
        "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
        DB_USER,
        DB_PASS,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]
    );
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed']);
    exit();
}

// Create table if it doesn't exist
$createTable = "CREATE TABLE IF NOT EXISTS cms_content (
    id INT PRIMARY KEY AUTO_INCREMENT,
    content_key VARCHAR(50) UNIQUE NOT NULL,
    content_data LONGTEXT NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)";

try {
    $pdo->exec($createTable);
} catch (PDOException $e) {
    // Table might already exist, continue
}

// Handle GET request - Load content
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    try {
        $stmt = $pdo->prepare("SELECT content_data FROM cms_content WHERE content_key = 'site_content' LIMIT 1");
        $stmt->execute();
        $result = $stmt->fetch();
        
        if ($result) {
            echo $result['content_data'];
        } else {
            // Return default content if none exists
            echo json_encode(getDefaultContent());
        }
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to load content']);
    }
    exit();
}

// Handle POST request - Save content
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    
    if (empty($input)) {
        http_response_code(400);
        echo json_encode(['error' => 'No data provided']);
        exit();
    }
    
    // Validate JSON
    $data = json_decode($input);
    if (json_last_error() !== JSON_ERROR_NONE) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid JSON']);
        exit();
    }
    
    try {
        $stmt = $pdo->prepare("
            INSERT INTO cms_content (content_key, content_data) 
            VALUES ('site_content', :content)
            ON DUPLICATE KEY UPDATE content_data = :content
        ");
        
        $stmt->execute(['content' => $input]);
        
        echo json_encode([
            'success' => true,
            'message' => 'Content saved successfully'
        ]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to save content']);
    }
    exit();
}

// Default content function
function getDefaultContent() {
    return [
        'journey' => [
            ['id' => 1, 'year' => '2010', 'title' => 'Inception', 'description' => 'Started our journey with a vision.', 'image' => 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop'],
            ['id' => 2, 'year' => '2015', 'title' => 'Expansion', 'description' => 'Expanded to 5 cities.', 'image' => 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop']
        ],
        'brochures' => [
            ['id' => 1, 'title' => 'Corporate Brochure', 'pdfUrl' => '', 'thumbnail' => 'https://images.unsplash.com/photo-1586769852044-699d6d193ae3?w=400&h=300&fit=crop'],
            ['id' => 2, 'title' => 'Project Catalogue', 'pdfUrl' => '', 'thumbnail' => 'https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=400&h=300&fit=crop']
        ],
        'leadership' => [
            'name' => 'John Doe',
            'role' => 'Chairman & Managing Director',
            'message' => 'We believe in building not just homes, but legacies. Our commitment to quality and integrity is unwavering.',
            'image' => 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
            'signature' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png'
        ],
        'news' => [
            ['id' => 1, 'title' => 'Award for Excellence', 'date' => 'Dec 15, 2024', 'excerpt' => 'Future Group wins best developer award.', 'image' => 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=600&h=400&fit=crop'],
            ['id' => 2, 'title' => 'New Project Launch', 'date' => 'Nov 20, 2024', 'excerpt' => 'Launching Green Valley in Navi Mumbai.', 'image' => 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop']
        ],
        'connect' => [
            'backgroundImage' => 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
            'title' => "Let's Build Your Dream",
            'subtitle' => 'Get in touch with us for exclusive offers.'
        ],
        'aboutUs' => [
            'heroTitle' => "Building Legacies,\nFulfilling Dreams",
            'heroSubtitle' => "We are India's most trusted real estate partner, dedicated to delivering premium living spaces and high-value land investments.",
            'heroImage' => 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
            'storyTitle' => "Pioneering the Future of\nReal Estate Development",
            'storyDescription' => "Established with a vision to redefine the real estate landscape, Future Group has grown to become a symbol of trust and transparency. We specialize in identifying high-growth land corridors and creating villa communities that offer both lifestyle upgrades and exceptional appreciation.\n\nOur journey is defined by a relentless pursuit of quality, adherence to strict legal standards, and a customer-centric approach that puts your peace of mind first.",
            'storyImage' => 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
            'yearsOfExperience' => '10+',
            'stats' => [
                'projects' => '50+',
                'sqft' => '20M',
                'families' => '5K+',
                'clarity' => '100%'
            ],
            'values' => [
                ['title' => 'Integrity & Transparency', 'desc' => 'We believe in complete transparency. Every document, every title, every promise is verified and clear. No hidden clauses, just trust.'],
                ['title' => 'Strategic Locations', 'desc' => "We don't just pick land; we pick potential. Our projects are located in high-growth corridors ensuring maximum appreciation for your investment."],
                ['title' => 'Customer Centricity', 'desc' => 'You are at the heart of everything we do. From post-sale support to community management, we walk the extra mile for you.']
            ],
            'founderMessage' => "Our mission is simple: to make land investment accessible, secure, and profitable for every Indian. We are building not just communities, but the foundation for your future wealth.",
            'founderName' => 'Chairman, Future Group'
        ]
    ];
}

http_response_code(405);
echo json_encode(['error' => 'Method not allowed']);
