"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Eye, Filter, RefreshCw } from 'lucide-react';

const Page = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const transactions = [
    { id: '1', type: 'Deposit', amount: '$1500.00', date: '09/01/2024', status: 'Completed' },
    { id: '2', type: 'Withdrawal', amount: '$500.00', date: '08/25/2024', status: 'Pending' },
    { id: '3', type: 'Transfer', amount: '$800.00', date: '08/20/2024', status: 'Failed' },
    { id: '4', type: 'Deposit', amount: '$1200.00', date: '08/15/2024', status: 'Completed' },
    { id: '5', type: 'Withdrawal', amount: '$300.00', date: '08/10/2024', status: 'Pending' },
    { id: '6', type: 'Transfer', amount: '$950.00', date: '08/05/2024', status: 'Completed' },
    { id: '7', type: 'Deposit', amount: '$2000.00', date: '08/01/2024', status: 'Failed' },
    { id: '8', type: 'Withdrawal', amount: '$700.00', date: '07/28/2024', status: 'Pending' },
    { id: '9', type: 'Transfer', amount: '$400.00', date: '07/20/2024', status: 'Completed' },
    { id: '10', type: 'Deposit', amount: '$2500.00', date: '07/15/2024', status: 'Pending' },
  ];

  const filteredTransactions = transactions
    .filter(transaction =>
      transaction.amount.includes(searchQuery) &&
      (statusFilter === 'all' ? true : transaction.status === statusFilter)
    )
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  return (
    <div className="p-6">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Transactions</h1>
        <div className="flex space-x-4">
          <Input
            placeholder="Search by amount"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64"
          />
          <Select onValueChange={(value) => setStatusFilter(value)}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="All Statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Failed">Failed</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button variant="default" className="bg-orange-500 text-white">
            <Filter className="w-4 h-4 mr-2" /> Filter
          </Button>
        </div>
      </header>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTransactions.map(transaction => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.id}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>{transaction.amount}</TableCell>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.status}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" className="flex items-center">
                        <Eye className="w-4 h-4 mr-2" /> View
                      </Button>
                      <Button variant="outline" className="flex items-center">
                        <RefreshCw className="w-4 h-4 mr-2" /> Retry
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex justify-between mt-4">
            <Button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
              Previous
            </Button>
            <div>
              Page {currentPage} of {totalPages}
            </div>
            <Button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
