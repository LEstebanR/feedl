'use client';

import { Bug, Minus, ThumbsDown, ThumbsUp } from 'lucide-react';

import { useFeedback } from '@/components/feedback-context';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const feedbackTypeConfig = {
  positive: {
    icon: ThumbsUp,
    color: 'text-green-600',
    bgColor: 'bg-green-500/15',
    borderColor: 'border-green-500',
  },
  negative: {
    icon: ThumbsDown,
    color: 'text-red-600',
    bgColor: 'bg-red-500/15',
    borderColor: 'border-red-500',
  },
  neutral: {
    icon: Minus,
    color: 'text-blue-600',
    bgColor: 'bg-blue-500/15',
    borderColor: 'border-blue-500',
  },
  bug: {
    icon: Bug,
    color: 'text-orange-600',
    bgColor: 'bg-orange-500/15',
    borderColor: 'border-orange-500',
  },
};

export default function Demo() {
  const { feedbacks } = useFeedback();

  return (
    <section
      id="demo"
      className="container md:w-8/12 mx-auto mt-12 scroll-mt-14"
    >
      <h2 className="text-xl md:text-2xl text-secondary tracking-tight text-center">
        The solution
      </h2>{' '}
      <div className="max-w-6xl mx-auto  w-full px-2 mt-4">
        <div className="text-center mb-12 flex flex-col gap-4 items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See it in action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Try the widget yourself. Submit feedback and see how it appears in
            your dashboard.
          </p>
          <div className="border-2 border-black w-full py-8 rounded-xl border-dotted  flex flex-col gap-4 bg-muted/80 mt-12">
            <p className="text-3xl mb-4">Interactive Demo Area</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              This simulates your website. Notice the feedback button on the
              right edge? Click it to leave feedback and see how it appears in
              your dashboard below.
            </p>
            <div className="flex items-center gap-2 mx-auto">
              <div className="w-2 h-2 rounded-full bg-green-600 animate-ping"></div>
              <span className="text-md text-muted-foreground">
                Widget is active
              </span>
            </div>
          </div>

          {/* Feedback Dashboard */}
          <div className="w-full mt-12">
            <Card className="w-full overflow-hidden ">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold">
                  Feedback Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                {feedbacks.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    <p className="text-lg">No feedback yet</p>
                    <p className="text-sm mt-2">
                      Submit feedback using the button on the right to see it
                      appear here
                    </p>
                  </div>
                ) : (
                  <div className="-mx-6">
                    <div className="overflow-x-auto px-6">
                      <Table className="min-w-[600px]">
                        <TableCaption>
                          <p className="text-xs text-muted-foreground text-center pt-2">
                            Showing latest 5 feedbacks
                          </p>
                        </TableCaption>

                        <TableHeader>
                          <TableRow>
                            <TableHead className="text-sm font-semibold whitespace-nowrap">
                              Type
                            </TableHead>
                            <TableHead className="text-sm font-semibold">
                              Message
                            </TableHead>
                            <TableHead className="text-sm font-semibold hidden md:table-cell whitespace-nowrap">
                              Page
                            </TableHead>
                            <TableHead className="text-sm font-semibold hidden md:table-cell whitespace-nowrap">
                              User
                            </TableHead>
                            <TableHead className="text-sm font-semibold whitespace-nowrap">
                              Time
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {feedbacks.map(feedback => {
                            const config = feedbackTypeConfig[feedback.type];
                            const Icon = config.icon;
                            return (
                              <TableRow key={feedback.id}>
                                <TableCell className="text-left">
                                  <Badge
                                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border-2 w-28 ${config.borderColor} ${config.bgColor}`}
                                  >
                                    <Icon
                                      className={`h-4 w-4 ${config.color}`}
                                    />
                                    <span
                                      className={`text-xs font-semibold capitalize ${config.color}`}
                                    >
                                      {feedback.type}
                                    </span>
                                  </Badge>
                                </TableCell>
                                <TableCell>
                                  <p className="text-sm text-left">
                                    {feedback.message}
                                  </p>
                                </TableCell>
                                <TableCell className="md:table-cell whitespace-nowrap text-left">
                                  <p className="text-xs text-muted-foreground truncate max-w-xs">
                                    {feedback.page}
                                  </p>
                                </TableCell>
                                <TableCell className="md:table-cell whitespace-nowrap text-left">
                                  <p className="text-xs text-muted-foreground">
                                    {feedback.user}
                                  </p>
                                </TableCell>
                                <TableCell className="whitespace-nowrap text-left">
                                  <p className="text-xs text-muted-foreground">
                                    {feedback.time}
                                  </p>
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
