import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getDepartmentById } from '../data/departments';
import { useAuth } from '../context/AuthContext';
import { saveToken } from '../utils/storage';
import Modal from '../components/Modal';
import Button from '../components/Button';
import Ticket from '../components/Ticket';

export default function DepartmentDetail() {
  const { id } = useParams();
  const department = getDepartmentById(id);
  const { user } = useAuth();
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
  const [newToken, setNewToken] = useState(null);

  if (!department) {
    return (
      <div className="max-w-3xl mx-auto px-5 py-24 text-center">
        <p className="text-ink/60">No such department.</p>
        <Link to="/departments" className="text-teal-900 font-medium hover:underline">← Departments</Link>
      </div>
    );
  }

  const handleBook = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    setShowConfirm(true);
  };

  const confirmBooking = () => {
    const token = saveToken({
      id: `tok_${Date.now()}`,
      tokenNumber: department.activeToken + department.queueLength + 1,
      departmentId: department.id,
      departmentName: department.name,
      userEmail: user.email,
      patientName: user.name,
      status: 'waiting',
      createdAt: new Date().toISOString(),
    });
    setNewToken(token);
    setShowConfirm(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-5 py-16">
      <Link to="/departments" className="text-sm text-teal-900 hover:underline">← Back</Link>

      <div className="mt-6 grid md:grid-cols-[1fr_320px] gap-10">
        <div>
          <span className="text-5xl">{department.icon}</span>
          <h1 className="font-display text-4xl font-bold text-teal-900 mt-4">{department.name}</h1>
          <p className="text-ink/60 mt-3 max-w-lg">{department.description}</p>

          <div className="grid grid-cols-3 gap-4 mt-8 max-w-md">
            <div className="bg-white rounded-xl border border-teal-900/10 p-4 text-center">
              <p className="font-mono text-2xl font-bold text-teal-900">#{department.activeToken}</p>
              <p className="text-xs text-ink/50 mt-1">Serving Now</p>
            </div>
            <div className="bg-white rounded-xl border border-teal-900/10 p-4 text-center">
              <p className="font-mono text-2xl font-bold text-teal-900">{department.queueLength}</p>
              <p className="text-xs text-ink/50 mt-1">Waiting</p>
            </div>
            <div className="bg-white rounded-xl border border-teal-900/10 p-4 text-center">
              <p className="font-mono text-2xl font-bold text-teal-900">{department.avgWaitMin}m</p>
              <p className="text-xs text-ink/50 mt-1">Wait Time</p>
            </div>
          </div>

          {!newToken ? (
            <Button onClick={handleBook} className="mt-8">
              Book Token
            </Button>
          ) : (
            <div className="mt-8">
              <p className="text-sm text-teal-900 font-medium mb-3">Token Booked!</p>
              <Ticket
                tokenNumber={newToken.tokenNumber}
                department={department.name}
                patientName={newToken.patientName}
                status="waiting"
                peopleAhead={department.queueLength}
              />
              <Link to="/dashboard" className="inline-block mt-4 text-sm text-teal-900 font-medium hover:underline">
                Go to Dashboard →
              </Link>
            </div>
          )}
        </div>
      </div>

      <Modal open={showConfirm} onClose={() => setShowConfirm(false)} title="Book Token?">
        <p className="text-sm text-ink/70 mb-6">
          Do you want to book a token for <strong>{department.name}</strong>? Your token number will be <strong>#{department.activeToken + department.queueLength + 1}</strong>.
        </p>
        <div className="flex gap-3">
          <Button onClick={confirmBooking} className="flex-1">Confirm</Button>
          <Button variant="secondary" onClick={() => setShowConfirm(false)} className="flex-1">Cancel</Button>
        </div>
      </Modal>
    </div>
  );
}
