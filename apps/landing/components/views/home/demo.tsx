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
      className="w-full md:w-8/12 mx-auto mt-12 scroll-mt-14 px-6 md:px-0"
    >
      <h2 className="text-xl md:text-2xl text-secondary tracking-tight text-center">
        The solution
      </h2>

      <div className="w-full mt-4">
        <div className="text-center flex flex-col gap-4 items-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See it in action
          </h2>
          <p className="text-lg text-muted-foreground w-full">
            Try the widget yourself. Submit feedback and see how it appears in
            your dashboard.
          </p>
          <div className="border-2 border-black w-full py-8 px-4 rounded-xl border-dotted flex flex-col gap-4 bg-muted/80 mt-12">
            <p className="text-2xl md:text-3xl mb-4">Interactive Demo Area</p>
            <p className="text-base md:text-lg text-muted-foreground w-full">
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
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold">
                  Feedback Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 md:p-6">
                {feedbacks.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground px-6">
                    <p className="text-lg">No feedback yet</p>
                    <p className="text-sm mt-2">
                      Submit feedback using the button on the right to see it
                      appear here
                    </p>
                  </div>
                ) : (
                  <div className="overflow-x-auto w-full">
                    <Table>
                      <TableCaption>
                        <p className="text-xs text-muted-foreground text-center pt-2 pb-4">
                          Showing latest 5 feedbacks
                        </p>
                      </TableCaption>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="text-sm font-semibold whitespace-nowrap pl-4 md:pl-6">
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
                          <TableHead className="text-sm font-semibold hidden sm:table-cell whitespace-nowrap pr-4 md:pr-6">
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
                              <TableCell className="text-left pl-4 md:pl-6">
                                <Badge
                                  className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-lg border-2 ${config.borderColor} ${config.bgColor}`}
                                >
                                  <Icon
                                    className={`h-3.5 w-3.5 ${config.color}`}
                                  />
                                  <span
                                    className={`text-xs font-semibold capitalize ${config.color}`}
                                  >
                                    {feedback.type}
                                  </span>
                                </Badge>
                              </TableCell>
                              <TableCell className="max-w-[160px] md:max-w-xs">
                                <p className="text-sm text-left break-words line-clamp-2">
                                  {feedback.message}
                                </p>
                              </TableCell>
                              <TableCell className="hidden md:table-cell whitespace-nowrap text-left">
                                <p className="text-xs text-muted-foreground truncate max-w-xs">
                                  {feedback.page}
                                </p>
                              </TableCell>
                              <TableCell className="hidden md:table-cell whitespace-nowrap text-left">
                                <p className="text-xs text-muted-foreground">
                                  {feedback.user}
                                </p>
                              </TableCell>
                              <TableCell className="hidden sm:table-cell whitespace-nowrap text-left pr-4 md:pr-6">
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
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
