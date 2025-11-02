<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <title>ERP AI Integration Test</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
        .container { max-width: 800px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; }
        .test-section { margin: 20px 0; padding: 15px; border: 1px solid #ddd; border-radius: 5px; }
        .test-section h3 { margin-top: 0; color: #333; }
        button { padding: 10px 20px; margin: 5px; background: #007cba; color: white; border: none; border-radius: 4px; cursor: pointer; }
        button:hover { background: #005a8b; }
        .response { margin-top: 10px; padding: 10px; background: #f9f9f9; border-left: 4px solid #007cba; }
        .error { background: #ffebee; border-left-color: #f44336; }
        .loading { background: #fff3e0; border-left-color: #ff9800; }
        .success { background: #e8f5e8; border-left-color: #4caf50; }
        pre { white-space: pre-wrap; word-wrap: break-word; }
        .status { font-weight: bold; margin-bottom: 10px; }
        .endpoints { background: #f0f0f0; padding: 10px; border-radius: 4px; margin: 10px 0; }
        .endpoint { font-family: monospace; margin: 2px 0; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🤖 ERP AI Integration Test</h1>
        <p>Test the AI chat endpoints for each ERP module to ensure proper integration with OpenAI API.</p>
        
        <div class="status" id="status">
            ✅ Connected to Laravel application at: <?php echo e(url('/')); ?>

        </div>

        <div class="endpoints">
            <strong>Available API Endpoints:</strong>
            <div class="endpoint">POST <?php echo e(url('/api/ai/chat/finance')); ?></div>
            <div class="endpoint">POST <?php echo e(url('/api/ai/chat/hr')); ?></div>
            <div class="endpoint">POST <?php echo e(url('/api/ai/chat/inventory')); ?></div>
            <div class="endpoint">POST <?php echo e(url('/api/ai/chat/compliance')); ?></div>
            <div class="endpoint">POST <?php echo e(url('/api/ai/chat')); ?> (general)</div>
        </div>

        <div class="test-section">
            <h3>💰 Finance Module Test</h3>
            <button onclick="testModule('finance', 'How do I create a journal entry in the finance module?')">Test Finance AI</button>
            <div id="finance-response" class="response" style="display: none;"></div>
        </div>

        <div class="test-section">
            <h3>👥 HR Module Test</h3>
            <button onclick="testModule('hr', 'How do I onboard a new employee using the HR module?')">Test HR AI</button>
            <div id="hr-response" class="response" style="display: none;"></div>
        </div>

        <div class="test-section">
            <h3>📦 Inventory Module Test</h3>
            <button onclick="testModule('inventory', 'How do I create a purchase order in the inventory system?')">Test Inventory AI</button>
            <div id="inventory-response" class="response" style="display: none;"></div>
        </div>

        <div class="test-section">
            <h3>🛡️ Compliance Module Test</h3>
            <button onclick="testModule('compliance', 'How do I conduct a risk assessment in the compliance module?')">Test Compliance AI</button>
            <div id="compliance-response" class="response" style="display: none;"></div>
        </div>

        <div class="test-section">
            <h3>🔧 General AI Test</h3>
            <button onclick="testGeneralAI('What ERP modules do you offer and what are their main features?')">Test General AI</button>
            <div id="general-response" class="response" style="display: none;"></div>
        </div>

        <div class="test-section">
            <h3>🔄 Test All Modules</h3>
            <button onclick="testAllModules()">Run All Tests</button>
            <div id="all-tests-summary" style="margin-top: 10px;"></div>
        </div>
    </div>

    <script>
        // Get CSRF token from meta tag
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        
        async function testModule(module, testMessage) {
            const responseDiv = document.getElementById(`${module}-response`);
            responseDiv.style.display = 'block';
            responseDiv.className = 'response loading';
            responseDiv.innerHTML = '⏳ Testing API connection...';

            try {
                const response = await fetch(`/api/ai/chat/${module}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': csrfToken,
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        message: testMessage,
                        context: {
                            module: module,
                            test: true,
                            timestamp: new Date().toISOString()
                        }
                    })
                });

                const data = await response.json();
                
                if (response.ok) {
                    responseDiv.className = 'response success';
                    responseDiv.innerHTML = `
                        <strong>✅ ${module.toUpperCase()} API Test Successful!</strong><br>
                        <strong>Question:</strong> ${testMessage}<br><br>
                        <strong>AI Response:</strong><br>
                        <pre>${data.response || data.message || JSON.stringify(data, null, 2)}</pre>
                    `;
                } else {
                    throw new Error(`HTTP ${response.status}: ${data.error || data.message || 'Unknown error'}`);
                }
            } catch (error) {
                responseDiv.className = 'response error';
                responseDiv.innerHTML = `
                    <strong>❌ ${module.toUpperCase()} API Test Failed!</strong><br>
                    <strong>Error:</strong> ${error.message}<br>
                    <strong>Question:</strong> ${testMessage}<br>
                    <small>Check browser console for more details.</small>
                `;
                console.error(`${module.toUpperCase()} API Test Error:`, error);
            }
        }

        async function testGeneralAI(testMessage) {
            const responseDiv = document.getElementById('general-response');
            responseDiv.style.display = 'block';
            responseDiv.className = 'response loading';
            responseDiv.innerHTML = '⏳ Testing general AI API...';

            try {
                const response = await fetch('/api/ai/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': csrfToken,
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        message: testMessage
                    })
                });

                const data = await response.json();
                
                if (response.ok) {
                    responseDiv.className = 'response success';
                    responseDiv.innerHTML = `
                        <strong>✅ GENERAL AI Test Successful!</strong><br>
                        <strong>Question:</strong> ${testMessage}<br><br>
                        <strong>AI Response:</strong><br>
                        <pre>${data.message || JSON.stringify(data, null, 2)}</pre>
                    `;
                } else {
                    throw new Error(`HTTP ${response.status}: ${data.error || data.message || 'Unknown error'}`);
                }
            } catch (error) {
                responseDiv.className = 'response error';
                responseDiv.innerHTML = `
                    <strong>❌ GENERAL AI Test Failed!</strong><br>
                    <strong>Error:</strong> ${error.message}<br>
                    <strong>Question:</strong> ${testMessage}<br>
                    <small>Check browser console for more details.</small>
                `;
                console.error('General AI Test Error:', error);
            }
        }

        async function testAllModules() {
            const summaryDiv = document.getElementById('all-tests-summary');
            summaryDiv.innerHTML = '<strong>🔄 Running all tests...</strong>';
            
            const tests = [
                ['finance', 'How do I create a journal entry?'],
                ['hr', 'How do I onboard a new employee?'],
                ['inventory', 'How do I create a purchase order?'],
                ['compliance', 'How do I conduct a risk assessment?']
            ];
            
            let results = [];
            
            for (const [module, question] of tests) {
                try {
                    await testModule(module, question);
                    results.push(`✅ ${module}`);
                } catch (error) {
                    results.push(`❌ ${module}`);
                }
                // Wait a bit between tests
                await new Promise(resolve => setTimeout(resolve, 500));
            }
            
            summaryDiv.innerHTML = `
                <strong>Test Results Summary:</strong><br>
                ${results.join('<br>')}
            `;
        }

        // Auto-log on page load
        document.addEventListener('DOMContentLoaded', () => {
            console.log('🤖 ERP AI Integration Test Page Loaded');
            console.log('Base URL:', '<?php echo e(url("/")); ?>');
            console.log('CSRF Token:', csrfToken);
            console.log('Available endpoints:');
            console.log('- /api/ai/chat/finance');
            console.log('- /api/ai/chat/hr');
            console.log('- /api/ai/chat/inventory');
            console.log('- /api/ai/chat/compliance');
            console.log('- /api/ai/chat (general)');
        });
    </script>
</body>
</html>

<?php /**PATH /Users/lib/Dropbox/wwwdevelop/sites/i3v1-self-saas/resources/views/ai-test.blade.php ENDPATH**/ ?>