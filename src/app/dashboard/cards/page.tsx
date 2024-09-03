"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Edit, Eye, Filter } from 'lucide-react';

const Page = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const cards = [
    { id: '1', number: '1234 5678 9012 3456', exp: '12/24', status: 'Active' },
    { id: '2', number: '2345 6789 0123 4567', exp: '11/23', status: 'Inactive' },
    { id: '3', number: '3456 7890 1234 5678', exp: '01/25', status: 'Active' },
    { id: '4', number: '4567 8901 2345 6789', exp: '05/23', status: 'Active' },
    { id: '5', number: '5678 9012 3456 7890', exp: '07/24', status: 'Inactive' },
    { id: '6', number: '6789 0123 4567 8901', exp: '09/23', status: 'Active' },
    { id: '7', number: '7890 1234 5678 9012', exp: '03/24', status: 'Inactive' },
    { id: '8', number: '8901 2345 6789 0123', exp: '06/25', status: 'Active' },
    { id: '9', number: '9012 3456 7890 1234', exp: '08/23', status: 'Inactive' },
    { id: '10', number: '0123 4567 8901 2345', exp: '10/24', status: 'Active' },
    { id: '11', number: '2345 6789 0123 4567', exp: '12/24', status: 'Active' },
    { id: '12', number: '3456 7890 1234 5678', exp: '02/25', status: 'Inactive' },
    { id: '13', number: '4567 8901 2345 6789', exp: '04/23', status: 'Active' },
    { id: '14', number: '5678 9012 3456 7890', exp: '07/23', status: 'Inactive' },
    { id: '15', number: '6789 0123 4567 8901', exp: '11/23', status: 'Active' },
    { id: '16', number: '7890 1234 5678 9012', exp: '09/24', status: 'Inactive' },
    { id: '17', number: '8901 2345 6789 0123', exp: '01/25', status: 'Active' },
    { id: '18', number: '9012 3456 7890 1234', exp: '03/23', status: 'Inactive' },
    { id: '19', number: '0123 4567 8901 2345', exp: '06/24', status: 'Active' },
    { id: '20', number: '1234 5678 9012 3456', exp: '08/23', status: 'Inactive' },
  ];

  const filteredCards = cards
    .filter(card =>
      card.number.includes(searchQuery) &&
      (statusFilter === 'all' ? true : card.status === statusFilter)
    )
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const totalPages = Math.ceil(cards.length / itemsPerPage);

  return (
    <div className="p-6">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Cards</h1>
        <div className="flex space-x-4">
          <Input
            placeholder="Search by card number"
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
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Inactive">Inactive</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button variant="default" className='bg-blue-500 text-white'>
            <Filter className="w-4 h-4 mr-2" /> Filter
          </Button>
        </div>
      </header>

      <Card className="">
        <CardHeader>
          <CardTitle>Card List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Card Number</TableHead>
                <TableHead>Expiration Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCards.map(card => (
                <TableRow key={card.id}>
                  <TableCell>{card.id}</TableCell>
                  <TableCell>{card.number}</TableCell>
                  <TableCell>{card.exp}</TableCell>
                  <TableCell>{card.status}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" className="flex items-center">
                        <Eye className="w-4 h-4 mr-2" /> View
                      </Button>
                      <Button variant="outline" className="flex items-center">
                        <Edit className="w-4 h-4 mr-2" /> Edit
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
