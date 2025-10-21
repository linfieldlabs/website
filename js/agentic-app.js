// Agentic App Carousel Features
let currentAgentIndex = 0;
const agentTypes = ['customer-support', 'sales-agent', 'data-agent'];

const agentActivities = {
  'customer-support': [
    'Resolved ticket #1247',
    'Analyzing customer query',
    'Escalated complex issue',
    'Updated knowledge base',
    'Processed refund request',
    'Scheduled callback'
  ],
  'sales-agent': [
    'Qualified lead: Acme Corp',
    'Scheduled follow-up call',
    'Sent proposal to client',
    'Updated CRM records',
    'Analyzed competitor pricing',
    'Prepared demo presentation'
  ],
  'data-agent': [
    'Updated analytics dashboard',
    'Processing user behavior data',
    'Generated monthly report',
    'Cleaned dataset anomalies',
    'Optimized query performance',
    'Backed up critical data'
  ]
};

const agentMetrics = {
  'customer-support': {
    tickets: [47, 52, 38, 61, 44],
    satisfaction: [94, 96, 92, 95, 97]
  },
  'sales-agent': {
    leads: [12, 15, 8, 18, 14],
    pipeline: ['$24K', '$28K', '$19K', '$31K', '$26K']
  },
  'data-agent': {
    records: ['1.2M', '1.4M', '1.1M', '1.6M', '1.3M'],
    accuracy: [99.9, 99.8, 99.9, 99.7, 99.9]
  }
};

function showAgent(index) {
  // Remove active classes
  document.querySelectorAll('.agent-card').forEach(card => {
    card.classList.remove('active', 'prev');
  });
  document.querySelectorAll('.indicator-dot').forEach(dot => {
    dot.classList.remove('active');
  });
  
  // Add active class to current agent
  const currentCard = document.querySelectorAll('.agent-card')[index];
  const currentDot = document.querySelectorAll('.indicator-dot')[index];
  
  currentCard.classList.add('active');
  currentDot.classList.add('active');
  
  // Add prev class to previous agent
  const prevIndex = index === 0 ? agentTypes.length - 1 : index - 1;
  const prevCard = document.querySelectorAll('.agent-card')[prevIndex];
  prevCard.classList.add('prev');
  
  currentAgentIndex = index;
}

function nextAgent() {
  const nextIndex = (currentAgentIndex + 1) % agentTypes.length;
  showAgent(nextIndex);
}

function updateCurrentAgentActivity() {
  const currentAgentType = agentTypes[currentAgentIndex];
  const card = document.querySelector(`[data-agent="${currentAgentType}"]`);
  const activityContainer = card.querySelector('.agent-activity');
  const activities = agentActivities[currentAgentType];
  
  // Add new activity
  const newActivity = activities[Math.floor(Math.random() * activities.length)];
  const activityItem = document.createElement('div');
  activityItem.className = 'activity-item';
  activityItem.innerHTML = `
    <span class="activity-time">now</span>
    <span class="activity-text">${newActivity}</span>
  `;
  
  activityContainer.insertBefore(activityItem, activityContainer.firstChild);
  
  // Keep only 2 most recent activities
  const items = activityContainer.querySelectorAll('.activity-item');
  if (items.length > 2) {
    activityContainer.removeChild(items[items.length - 1]);
  }
  
  // Update timestamps
  setTimeout(() => {
    activityItem.querySelector('.activity-time').textContent = '1m ago';
  }, 60000);
}

function updateCurrentAgentMetrics() {
  const currentAgentType = agentTypes[currentAgentIndex];
  const card = document.querySelector(`[data-agent="${currentAgentType}"]`);
  const metrics = agentMetrics[currentAgentType];
  
  if (currentAgentType === 'customer-support') {
    const ticketValue = card.querySelector('.metric-value');
    const satisfactionValue = card.querySelectorAll('.metric-value')[1];
    
    ticketValue.textContent = metrics.tickets[Math.floor(Math.random() * metrics.tickets.length)];
    satisfactionValue.textContent = metrics.satisfaction[Math.floor(Math.random() * metrics.satisfaction.length)] + '%';
  } else if (currentAgentType === 'sales-agent') {
    const leadValue = card.querySelector('.metric-value');
    const pipelineValue = card.querySelectorAll('.metric-value')[1];
    
    leadValue.textContent = metrics.leads[Math.floor(Math.random() * metrics.leads.length)];
    pipelineValue.textContent = metrics.pipeline[Math.floor(Math.random() * metrics.pipeline.length)];
  } else if (currentAgentType === 'data-agent') {
    const recordValue = card.querySelector('.metric-value');
    const accuracyValue = card.querySelectorAll('.metric-value')[1];
    
    recordValue.textContent = metrics.records[Math.floor(Math.random() * metrics.records.length)];
    accuracyValue.textContent = metrics.accuracy[Math.floor(Math.random() * metrics.accuracy.length)] + '%';
  }
}

function updateSystemStats() {
  const stats = document.querySelectorAll('.stat');
  const cpu = Math.floor(Math.random() * 30) + 15;
  const memory = (Math.random() * 0.5 + 1.0).toFixed(1);
  const uptime = (99.5 + Math.random() * 0.4).toFixed(1);
  
  stats[0].textContent = `CPU: ${cpu}%`;
  stats[1].textContent = `Memory: ${memory}GB`;
  stats[2].textContent = `Uptime: ${uptime}%`;
}

// Auto-rotate agents every 4 seconds
setInterval(nextAgent, 4000);

// Update current agent activity every 3-6 seconds
setInterval(updateCurrentAgentActivity, Math.random() * 3000 + 3000);

// Update current agent metrics every 8-12 seconds
setInterval(updateCurrentAgentMetrics, Math.random() * 4000 + 8000);

// Update system stats every 5 seconds
setInterval(updateSystemStats, 5000);

// Add click interactions to indicator dots
document.querySelectorAll('.indicator-dot').forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showAgent(index);
  });
});
